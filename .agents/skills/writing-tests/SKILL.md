---
name: writing-tests
description: "Conventions for writing or changing tests in this repo: Jest unit tests, Cypress component tests and Cypress E2E specs. Covers choosing the test level, naming tests after behavior, assertion style, selectors and data-test attributes, custom Cypress commands, and the console-error guard. Use when adding, editing or debugging any *.test.ts or *.cy.tsx file."
paths:
    - "cypress/**"
    - "**/*.test.ts"
    - "jest.config.mjs"
---

# Writing Tests

## Testing Philosophy

**Unit tests** (`*.test.ts`, colocated next to the source file) — pure logic with no DOM:

- Functions over the `constants/*` and `utils/*` data (dates, route resolution, `sizes` string builders, metadata builders, skill-usage indexing)
- Build-time helpers (`build/utils/*` rehype plugins)
- Node-only modules that neither Cypress runner can load (`utils/server/*` — `fs`/`glob`)
- A pure helper reached only through an async wrapper may be `export`ed solely for its `*.test.ts` (e.g. `groupArticles` in `utils/server/blog-articles.ts`, whose error paths need hand-built fixtures) — mark such an export with a comment saying so, so it is not mistaken for dead code
- Run with `npm run test:unit` — Jest via `next/jest`, `testEnvironment: "node"`, no server, no browser
- Import test globals explicitly: `import { describe, expect, it } from "@jest/globals";` — the root `tsconfig.json` puts Cypress's Chai `expect` in global scope, so a Jest global `expect` would clash. Assertions are Jest matchers (`toBe`, `toEqual`, `toMatchObject`, `toThrow`), not Chai (`.to.eq`, …).
- `next/jest` reuses the project's SWC transform, tsconfig `paths`, and asset mocks, so these specs import the same `@/constants/*` chain (raw `.png` imports, `export enum`) the app does. ESM-only npm packages must be listed in `next.config.mjs` `transpilePackages` to be loadable (e.g. `hast-util-to-string`).

**Component tests** (`cypress/component/`) — component-specific behaviors in isolation:

- Props variants and render paths
- Accessibility attributes (ARIA roles, labels, `role=list`, `dateTime`, etc.)
- User interactions contained within a single component (open/close, clipboard, scroll state)
- No running server required (`cy.mount()` only)

**E2E tests** (`cypress/e2e/`) — website-level flows:

- Routing and navigation between pages
- Breadcrumb navigation
- SEO metadata, JSON-LD, sitemap, RSS
- Theme persistence across reload
- Server-generated or statically-exported content correctness

**Choose the cheapest level that can verify the behavior — unit > component > E2E.** A behavior moves up a level only when the level below genuinely cannot reach it:

- **Unit** — the default. Use it unless the assertion needs a DOM or rendered output.
- **Component** — only when the behavior needs a mounted component (`cy.mount()`), but not a real URL, page load, or cross-page flow.
- **E2E** — only for routing, cross-page flows, theme persistence across reload, and server-generated / statically-exported output correctness (SEO metadata, JSON-LD, sitemap, RSS).

If a test _can_ be a unit test it _must_ be one — don't mount a component to exercise a pure helper. Likewise don't reach for E2E when `cy.mount()` suffices: `ReadingProgress` scroll math is a component test (`cypress/component/components/blog-articles/ReadingProgress.cy.tsx`), not an E2E step; the `sizes` string builders are unit tests, not component tests over a rendered image.

**Don't test behavior the app doesn't use.** Only cover props/variants/paths actually exercised somewhere in `app/` or `components/`. Before adding a test for a prop or variant, grep for a real caller passing it — if none exists, skip the test rather than adding one "for completeness." This applies especially to shadcn-derived primitives (`components/primitives/`): they ship with a much larger surface (variants, directions, sizes) than this site ever uses, and testing the unused parts just adds maintenance cost for behavior nobody depends on. Example: `Drawer`'s `swipeDirection` prop supports `down | up | left | right`, but `components/layout/Layout.tsx` only ever renders `swipeDirection="up"` — so `down` (the component's own default), `left` and `right` aren't tested.

**A component's behavior is asserted in that component's own spec, not a consumer's.** If `ChildComponent` decides how it opens, closes, or renders internally, that mechanism is pinned in `ChildComponent.cy.tsx` — a consumer spec (`ParentComponent.cy.tsx`) only asserts the decisions _it_ makes: which props it passes, how it wires children together, whether real data reaches a threshold the child reacts to. Re-asserting the child's own mechanism from the parent's spec is duplicate maintenance surface with no additional signal. The one exception is when mounting the component directly is not possible — e.g. an async Server Component, which React's client renderer rejects (see `ArticlesGroup.cy.tsx`'s comment) — in which case the nearest mountable sub-component stands in, with a comment recording why.

### Name tests after behavior, not implementation

Every `it()` title must state the **user-observable behavior** being verified — what a user, screen reader, or crawler experiences — never the mechanism the component uses to achieve it.

**The test:** would a refactor that preserves user-observable behavior falsify this name? Swap `<div>` → `<span>`, rename a CSS class, change `ul` → `ol`. If the name becomes wrong but nothing observable changed, the name is implementation-coupled — rewrite it.

Asserting on the mechanism is fine, and is often the only practical way to check a visual behavior. Only the _name_ must rise above it:

```tsx
// WRONG — name is the mechanism
it("sets height to 100vh", …)
it("renders children as a ul with role=list", …)
it("sets the dateTime attribute to ISO format", …)

// RIGHT — name is the behavior, assertion is still the mechanism
it("spans the full height of the viewport", () => {
    cy.get("img").should("have.css", "height", "100vh");
});
it("announces its items as a list to screen readers", …)
it("exposes the date in machine-readable form for crawlers and assistive tech", …)
```

Three corollaries:

- **The name must not claim more than the assertion proves.** `"renders key page content"` is unverifiable — name the specific thing checked.
- **`describe()` names the subject; `it()` names the behavior.** `describe("DateInfo")` and `describe("sitemap")` are correct — do not push behavior up into them.
- **Never name a test after a prop.** `when size='sm'` is the caller's API, not the user's experience; name the visual result instead (`in its compact form`).

- **A prop name is fine as input context, not as a substitute for the effect.** `"applies the compact size when size='sm'"` uses the prop _instead of_ describing the outcome — name the visual result instead (`"uses tighter spacing in its compact form"`). But naming the prop _while also_ stating the effect it causes is fine and often clearer, e.g. `"clamps to the visible range when startIndex is out of bounds"` — the prop tells the reader which input scenario is under test; the behavior clause is still what's being verified.

### Assert computed CSS for visual behavior, not Tailwind class names

For a visual/layout behavior (size, spacing, float, color), prefer `cy.get(...).should("have.css", "<property>", "<value>")` — the computed style — over `should("have.class", "<tailwind-class>")`. A class-name assertion is coupled to the utility class chosen today; if the class is renamed or replaced with an equivalent one during a refactor, the test fails even though the rendered behavior is unchanged. `have.css` checks the actual rendered outcome, matching the "name and assert the behavior, not the mechanism" rule above.

**Exception — color values.** Do not assert literal computed colors (`background-color`, `border-color`, etc.) — the "never hardcode color values" rule (`AGENTS.md`, Color Tokens) applies to test assertions too: the resolved value is theme-dependent and its serialization (oklch vs. rgb) isn't stable. For a color-driven variant, either keep the class assertion (and name the test for the variant's effect, not the class), or assert that the computed color differs between two variants rather than asserting a literal value.

### Assert URL-shaped contracts exactly, not by substring

For `link[rel="canonical"]`, `og:url`, JSON-LD `@id`/`sameAs`, and similar tags whose entire purpose is to identify one exact URL, assert exact equality (`.to.eq(...)`), never `.include(...)` or a loose `.match(/^https?:\/\//)`. A substring or protocol-only match still passes on a wrong host or a corrupted `metadataBase` — precisely the regression these tags exist to catch.

**Exception — component API surface.** A `data-*` attribute or ARIA attribute that is a component's own public contract (e.g. `data-size="sm"`) is not an internal implementation detail to be swapped out under refactor — assert it directly.

### The selector must mirror the element's meaning, not its position

A selector should name _what the element is_, the same thing its accessible role/name conveys to assistive tech — `findByRole` with a `name`, an accessible label, visible text, a contract `data-*`. The selector and the a11y tree should be picking out the element for the same reason. A structural CSS selector (`[aria-hidden='true'] div`, `.some-wrapper > span:nth-child(2)`) instead names a _position in the current markup_: it matches by accident of nesting, silently starts matching a different element after a refactor that leaves behavior unchanged, and tells a reader nothing about what was selected.

When the element genuinely carries no meaning in the a11y tree — a decorative bar in a chart, an unlabeled visual slot — give it an explicit handle in the component. **Every attribute that exists only for tests lives under the `data-test` namespace:** `data-testid` for identity (this is what `findByTestId` queries — the `@testing-library` default, not reconfigured here), and `data-test-<name>` for any _state_ under test, selected with a plain attribute selector (`.filter('[data-test-filled="true"]')`, `cy.get('[data-test-open]')`). There is no `findBy*` helper for the `data-test-<name>` flags and none is needed — attribute selectors are how variant state is queried. The shared `data-test` prefix keeps test-only hooks greppable and unmistakable for production behavior.

Derive a state flag from the **same expression** that drives the visual state, in one place, so the two cannot diverge (a test that still passes while the visual is wrong is worse than no test):

```tsx
const isFilled = i <= bars;
// …
<div
    data-test-filled={isFilled}
    className={cn(isFilled ? filledClass : emptyClass)}
/>;
```

Such a test-only attribute is part of the component's public test contract (per the "component API surface" exception above), not an implementation leak. Never distinguish element states by Tailwind class presence (`el.className.includes("bg-foreground/15")`) — that is the class-name coupling the section above forbids; expose the state as a `data-test-<name>` attribute instead.

## E2E with Cypress

- Test files: `cypress/e2e` (`.cy.tsx` extension)
- Custom commands: `cypress/support/commands.ts`
- Configuration: `cypress.config.ts`

**Viewport:** `1280x768`. This is above the `lg` Tailwind breakpoint where the desktop nav renders — below it, the mobile drawer appears, breaking navigation tests. The exact breakpoint is in `components/layout/Layout.tsx` (currently `lg:` / 1024 px). Do not change the viewport without understanding this.

**Spec bundler:** `cypress.config.ts`'s `e2e.setupNodeEvents` registers a `file:preprocessor` (see its comments for the mechanics/gotchas). This is what lets e2e specs import anything under the `constants/logos.ts` chain — `pages.cy.tsx`, `home.cy.tsx`, `layout.cy.tsx`, `navigation.cy.tsx` import real `@/constants/*` values instead of duplicating literals. The `package.json` `overrides` pin it relies on works around an upstream bug in newer `@cypress/webpack-preprocessor` releases: [cypress#34025](https://github.com/cypress-io/cypress/issues/34025). That issue was closed as "not planned" without a fix, so keep the pin rather than assuming an upgrade resolves it.

`WEBSITE_PUBLIC_URL` and its derivatives (`SCHEMA_PERSON_ID`, `SCHEMA_WEBSITE_ID`) are a deliberate exception — `seo.cy.tsx` and `blog-articles.cy.tsx` keep those as local literals rather than importing them, because they're the assertion _target_: importing the real value would make the canonical-URL/JSON-LD assertions tautological against whichever shell ran Cypress, rather than against the shell that built the site under test.

**Custom commands:**

| Command                          | Description                                                                                   |
| -------------------------------- | --------------------------------------------------------------------------------------------- |
| `cy.loadPage(url)`               | Visit URL, reset scroll, set light color scheme, and wait for route loading spinners to clear |
| `cy.clickNavLink(name)`          | Click nav link by accessible name                                                             |
| `cy.clickBreadcrumbByName(name)` | Click breadcrumb by text                                                                      |
| `cy.clickBreadcrumbByHref(href)` | Click breadcrumb by href                                                                      |
| `cy.clickLinkByHref(href)`       | Click any link by href                                                                        |
| `cy.assertVisibleImagesLoaded()` | Asserts every visible `<img>` on the current page finished loading                            |

**Custom command vs. plain support function:** any reusable logic that calls a `cy.*` API internally — including a single helper reused across a handful of `it()` blocks in one spec, not just cross-spec utilities — belongs in `commands.ts` as a `Cypress.Commands.add`, with a matching `Chainable` entry in `cypress/index.d.ts`. This applies even when the helper is invoked standalone rather than chained off a previous subject and doesn't return one — `cy.assertVisibleImagesLoaded()` is called as its own statement at every call site and still belongs here.

A plain exported function under `cypress/support/` (e.g. `cypress/support/routes.ts`, `cypress/support/xml.ts`) is reserved for logic with **zero Cypress dependency** — string/DOM parsing, constant derivation, anything that would run identically in a plain Node script outside Cypress. The moment a helper calls `cy.get`/`cy.wrap`/any Cypress API, it is a command, not a utility function, regardless of whether it's chained.

**Query preference:** Use Testing Library queries (`findByRole`, `findByTestId`). Prefer `findByRole` with `name` matchers over `data-testid`.

**Cypress tasks** (registered in `cypress.config.ts`):

- `discoverBlogArticles(subPath)` — returns array of blog article URLs under a sub-path.
- `discoverBlogArticleSubGroups(subPath)` — returns array of article group URLs under a sub-path.

Use these tasks in tests that need to enumerate blog articles dynamically.

## Component Tests with Cypress

Component tests mount individual components in isolation using the Cypress webpack devServer. No running server is required.

- Test files: `cypress/component` (`.cy.tsx` extension, mirroring the source structure)
- Spec pattern: `cypress/component/**/*.cy.{ts,tsx}` (set in `cypress.config.ts`)
- Global providers (`ThemeProvider`, `LazyMotion + MotionConfig`, `TooltipProvider`) are set up in `cypress/support/component.ts` and automatically applied to every `cy.mount()` call
- `reducedMotion="always"` is set in tests so animations never run — tests are deterministic

**File naming convention:** `cypress/component/<source path relative to repo root>`, with `.tsx` → `.cy.tsx`. This is a full mirror of the repo root, matching the source filename's casing exactly — the test's path always resolves to a real source file by stripping `cypress/component/` and swapping the extension:

- `components/content/Link.tsx` → `cypress/component/components/content/Link.cy.tsx`
- `app/404/NotFound.tsx` → `cypress/component/app/404/NotFound.cy.tsx`
- `app/(home)/_content/sections/components/Foo.tsx` → `cypress/component/app/(home)/_content/sections/components/Foo.cy.tsx`
- `shadcn/ui/badge.tsx` → `cypress/component/shadcn/ui/badge.cy.tsx` (map to the file that _defines_ the component, not the `@/shadcn/ui` barrel it's imported through)

```bash
npm run cypress:component:run   # Headless component test run
npm run cypress:open            # Interactive UI (pick Component testing)
```

## Unit Tests with Jest

Pure-logic specs run under Jest (`next/jest` preset, `testEnvironment: "node"`) — no
browser, no `cy.mount()`, no running server.

- Test files: colocated as `<source>.test.ts` next to the module they cover (e.g.
  `constants/date.ts` → `constants/date.test.ts`). `nyc.config.mjs`'s include glob
  already excludes `*.test.*`, and the root `tsconfig.json` type-checks them.
- Config: `jest.config.mjs` (`.mjs` because `package.json` is
  `"type": "module"`). `collectCoverageFrom` covers `constants/`, `utils/`, `build/`.
- Import globals explicitly from `@jest/globals` (see Testing Philosophy above for why).
- `cy.clock()` has no place here — freeze time with
  `jest.useFakeTimers()` + `jest.setSystemTime(date)`.
- CI: the `run-unit-tests` job in `.github/workflows/deploy-site.yaml`
  runs `npm run test:unit:coverage` and uploads to the codecov `unit-tests` flag.

```bash
npm run test:unit             # Headless Jest run
npm run test:unit:coverage    # + coverage report
```

## Console errors fail tests (both suites)

`cypress/support/console-guard.ts` makes **any
`console.error` or uncaught exception fail the test** — wired into
`cypress/support/e2e.ts` (via `window:before:load`) and
`cypress/support/component.ts` (via a `beforeEach`
`cy.window()` patch). This is what catches React hydration errors (e.g. #418) that
would otherwise pass silently.

- **Fails fast, at the error.** The wrapped `console.error` re-throws from a
  microtask, so it surfaces as a test failure on the offending test — sibling
  tests in the same spec file still run. (A plain synchronous re-throw doesn't
  work: React's render wraps `console.error` calls in try/catch.) The failure
  lists **every** console error from the incident (a React/browser incident logs
  its calls in one synchronous burst, and Cypress halts the test on the first
  failure).
- **Allowing a known-benign message:** `cy.allowConsoleError(pattern)` (string =
  literal substring, or a regex) whitelists matching messages **for the current
  test only**. Pass the _specific_ expected message, not a catch-all — the
  deliberate throw-in-`ErrorBoundary` tests (`mdx-components.cy.tsx`,
  `ProgressFab.cy.tsx`, `Heading.cy.tsx`) each allow the exact error string they
  assert on, and `global-error.cy.tsx` allows the two exact React-internal
  messages that a full `<html><body>` triggers under isolated mounting. It is
  only legitimate for (a) framework/runner noise or (b) a deliberately-triggered,
  asserted error path — never to quiet an error the app or a test should handle.
- `GLOBAL_ALLOWLIST` in `console-guard.ts` holds the one unavoidable piece of
  tooling noise (`[webpack-dev-server] Invalid Host/Origin header`). Keep it tiny.
- The e2e `IntersectionObserver` mock lives in the same `window:before:load` hook
  but is unrelated — it forces `whileInView` animations to run headless.
