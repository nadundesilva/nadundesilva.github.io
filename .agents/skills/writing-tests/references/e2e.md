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
