# Agent Knowledge Base

> Read this file in full before starting any task. It is the authoritative reference for all project conventions, patterns, and gotchas. Update it whenever you discover new knowledge during development. **Keep this file in context for the entire duration of every task** — do not let it scroll out of context mid-task. If context pressure forces a choice, preserve this file over other read content.

**Maintenance rules:**

- Reduce duplication: cross-reference sections instead of repeating information.
- Point to actual project files rather than duplicating their content here.
- When updating, consolidate similar information; do not add standalone "new discovery" sections.
- Knowledge that only matters for one kind of task (writing tests, images, blog MDX, etc.) belongs in a project skill at `.agents/skills/<name>/SKILL.md` (`.claude/skills` is a symlink to it, for Claude Code), not here — this file is loaded in every session. When recording a non-obvious learning: update the existing skill covering that task type; if it is specialised and no skill fits, create one (a `description` that says what the skill covers and when to use it, phrased to trigger even when the request never names the topic; omit `paths:` unless the task cannot start without touching those files, because a `paths`-gated skill is hidden from the skill list until a matching file is touched — e.g. a new image, a test run or a test-level decision happens before any glob matches); if it applies across the board, add it here. Do not list skills in this file.
- The `<!-- BEGIN:nextjs-agent-rules -->` … `<!-- END:nextjs-agent-rules -->` block at the very end of this file is written and re-added by `next dev` and brings its own `#` heading. Always keep it as the last thing in the file: add new content above it, never after it, or it ends up nested under that heading.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Design & Quality Principles](#2-design--quality-principles)
3. [Tech Stack](#3-tech-stack)
4. [Repository Structure](#4-repository-structure)
5. [Development Commands](#5-development-commands)
6. [Code Style and Conventions](#6-code-style-and-conventions)
7. [Architecture and Key Patterns](#7-architecture-and-key-patterns)
8. [Theme and Styling](#8-theme-and-styling)
9. [Known Gotchas](#9-known-gotchas)

---

## 1. Project Overview

Portfolio and blog website for **Nadun De Silva** (`nadundesilva.com`). Deployed as a fully static export to **Cloudflare Pages** via GitHub Actions. There is no server-side rendering at runtime — every page is pre-rendered at build time.

---

## 2. Design & Quality Principles

These principles apply to every change — code, content, and configuration alike. Check against all of them before considering a task done.

### Modern Minimalistic Design

The site follows a **modern minimalistic aesthetic**: generous whitespace, restrained use of color, clean typography, and no decorative clutter. When making visual changes:

- Prefer simplicity — remove rather than add when in doubt.
- Use whitespace deliberately; avoid cramming content.
- Limit accent colors to those already defined as design tokens in [`app/app.css`](./app/app.css).
- Animations and transitions should be subtle and purposeful, never decorative.
- All new UI should feel consistent with the existing pages — inspect adjacent components before designing a new one.

### SEO

Every page must be discoverable and correctly described:

- Always provide a meaningful `metadata` export (`title`, `description`) on every `page.tsx` and `page.mdx`. The root layout appends the site name to titles, so pass only the page name.
- Use semantic HTML (via the content components in `components/content/`) so crawlers can parse document structure.
- Images must have descriptive `alt` text (except decorative images which use `alt=""`).
- The `sitemap.ts`, `robots.ts`, and RSS `feed.xml` are auto-generated — do not break them by removing route exports or changing URL structures without updating those files.

### Accessibility

Accessibility is a hard requirement, not optional:

- Maintain correct heading hierarchy (`h1` → `h2` → `h3`) using the semantic content components — never skip levels. Items in a list or timeline (e.g. experience job titles) use `<p>`, not a heading: the `<ol>` already provides the structure.
- All interactive elements must be keyboard-reachable and have visible focus indicators.
- Interactive overlays (image cards, hover effects) must use `tabIndex={0}` and `:focus-within` so keyboard users can activate them.
- Color contrast must meet WCAG AA — always use theme color tokens, never hardcode colors.
- Decorative images use `alt=""`. Informational images use a concise, descriptive `alt`.
- Never nest interactive elements (no `<a>` inside `<a>`, no `<button>` inside `<a>`).

### Clean Code & Minimal Changes

- **Make only the changes required by the task.** Do not refactor, reformat, or "improve" surrounding code that is not related to the task.
- Do not add comments, docstrings, or type annotations to code you did not write or modify.
- Comments explain why the code is the way it is — the problem it solves, the constraint it works around, the edge case it exists for — not the history of how it got there. "This retries because the API is flaky under load" is fine; "changed to retry because it used to fail" or "X was found to be wrong, now does Y" is not. A future reader sees only the final code, never the prior version or the investigation that led here, so a comment that only makes sense next to a diff is dead weight the moment that context is gone.
- Do not extract constants, helpers, or abstractions unless they are directly needed by the current task.
- If a change causes unrelated lint or type errors, fix only the minimum required to resolve them — do not take the opportunity to clean up the file.
- Prefer editing existing files over creating new ones.
- **After completing any task, always run `npm run lint` and `npm run format` to ensure the code is clean before finishing.** Fix any issues reported before considering the task done.

---

## 3. Tech Stack

| Layer                   | Technology                                                                                              |
| ----------------------- | ------------------------------------------------------------------------------------------------------- |
| Framework               | Next.js (App Router, `output: "export"`)                                                                |
| Language                | TypeScript (strict, ES2022)                                                                             |
| UI                      | Tailwind CSS v4 + shadcn/ui + `@base-ui/react`                                                          |
| Icons                   | lucide-react (general UI icons) + `@icons-pack/react-simple-icons` (brand/social icons)                 |
| Dark Mode               | next-themes (`class` strategy)                                                                          |
| Animation               | motion (v12) + tw-animate-css                                                                           |
| Blog                    | MDX + rehype-pretty-code (Dracula / GitHub Light themes)                                                |
| Images                  | next-image-export-optimizer (custom loader)                                                             |
| PWA                     | next-pwa                                                                                                |
| Error Tracking          | Sentry (`@sentry/nextjs`)                                                                               |
| E2E / Component Testing | Cypress + @testing-library/cypress                                                                      |
| Unit Testing            | Jest via `next/jest` (pure logic, no DOM)                                                               |
| Code Coverage           | NYC/Istanbul (Cypress suites); Jest `--coverage` (unit suite)                                           |
| Linting                 | ESLint + Stylelint                                                                                      |
| Formatting              | Prettier (+ `organize-imports` and `tailwindcss` plugins: imports and Tailwind classes are auto-sorted) |
| Git Hooks               | Husky + lint-staged                                                                                     |

Full dependency list: [`package.json`](./package.json)
Full Next.js config: [`next.config.mjs`](./next.config.mjs)

---

## 4. Repository Structure

```
app/                      # Next.js App Router
  app.css, themes.css     # Global CSS entry point (tokens, variants) and light/dark color variables
  layout.tsx              # Root layout: theme, Sentry, WebVitals, CSP, JSON-LD, global providers
  (home)/                 # Home page; sections live in _content/
  (content)/              # Content pages; layout adds shared ContentContainer padding
    blog-articles/        # Blog index, feed.xml, (articles)/{category}/{article}/page.mdx
    achievements/ education/ experience/ projects/ testimonials/
  404/, not-found.tsx     # NotFound component shared by both
  manifest.ts, robots.ts, sitemap.ts   # force-static metadata routes
assets/                   # Static images (imported via @/assets/*)
build/utils/              # Build-time helpers (e.g. rehype-reading-time.mjs, an MDX rehype plugin)
components/
  blog-articles/ content/ icons/ layout/ seo/ theme/
  primitives/             # Hand-written, purely visual building blocks
constants/                # Typed site data (experience, projects, skills, …) plus routes.ts, metadata.ts, date.ts
cypress/
  component/              # Component specs, mirroring the source tree
  e2e/                    # E2E specs
  support/                # Custom commands, console guard, Cypress-free helpers
hooks/                    # Shared React hooks (e.g. useRoutePathname)
shadcn/                   # CLI-managed only — never hand-edit (ui/, lib/, hooks/)
utils/
  common/                 # Client-safe utilities (also imported by build/test code)
  server/                 # Node-only utilities (filesystem glob, git); never import from client code
.github/
  scripts/
    start-server.sh       # MUST be run with `source` (exports env vars)
    stop-server.sh        # Can be run with `bash`
  workflows/              # deploy-site.yaml (main pipeline), deployment-check.yaml (daily live-site checks)
instrumentation*.ts       # Sentry server / client instrumentation
mdx-components.tsx        # MDX element overrides (links, headings, images)
```

### Path Aliases (tsconfig.json)

| Alias            | Resolves to    |
| ---------------- | -------------- |
| `@/app/*`        | `app/*`        |
| `@/components/*` | `components/*` |
| `@/constants/*`  | `constants/*`  |
| `@/shadcn/*`     | `shadcn/*`     |
| `@/utils/*`      | `utils/*`      |
| `@/assets/*`     | `assets/*`     |

Always use these aliases in imports — never relative `../../` paths.

---

## 5. Development Commands

```bash
npm run dev                  # http://localhost:3000 — NODE_ENV=development
npm run build                # Production build (static export to out/) + image optimization
npm run start                # Build + serve the static output locally
npm run lint                 # ESLint + Stylelint (lint:ts / lint:css for one of them)
npm run format               # Apply Prettier formatting
npm run test:unit            # Jest unit tests (test:unit:coverage adds coverage)
npm run build:analyze        # Bundle analysis report after build
```

E2E and component test commands, the local test server and coverage instrumentation are documented in the project skills for running and writing tests.

**Before committing:** lint-staged runs automatically via Husky on staged files — ESLint fix + Stylelint fix + Prettier write. Do not skip hooks (`--no-verify`).

**Installing dependencies:** Use `npm ci` (not `npm install`) in CI and when reproducing CI behavior locally.

**Never hand-edit `package-lock.json`.** It is only ever regenerated by running npm itself (`npm install`, `npm ci`, `npm update <pkg>`). Editing it directly desyncs its integrity hashes and resolved tree from what npm would actually produce.

**Never run forced/destructive dependency commands** (`npm audit fix --force` and anything else that rewrites the tree past declared ranges) without explicit approval. If one seems warranted, propose it with reasoning and wait for a yes.

**Prefer `npm run <script>` over `npx <tool>` whenever a script covers it**, even for one-off local runs (e.g. `npm run cypress:component:run -- --spec <path>`): this keeps local runs on the same flags/env as CI. If no script covers it, fall back to `npx`/the raw binary and don't add a script for a single run; add one only once a command has genuinely come up repeatedly (`npx shadcn add` stays `npx` since each call targets a different component; the coverage instrumentation became `npm run instrument`).

---

## 6. Code Style and Conventions

### File Header

Every source file (`.ts`, `.tsx`, `.css`, `.mdx`) must start with the copyright header. Use the year of original file creation. Do not update the year on edits.

**`.mdx` files** cannot use the block comment below (Prettier mangles it and the MDX parser rejects HTML comments); they use a JS-export wrapper (`export const _copyright = /* … */ undefined;`) as the very first thing in the file. Copy it from an existing `page.mdx`.

**Exception:** files under `shadcn/ui/` and `shadcn/lib/` (excluding their hand-written `index.tsx`/`index.ts` barrels) are CLI output — do not add the copyright header to them, and do not rename them to PascalCase. Use whatever `npx shadcn add` generates, verbatim.

**`.ts`, `.tsx`, `.css` files** — standard block comment:

```ts
/*
 * Nadun De Silva - All Rights Reserved
 *
 * This source code and its associated files are the
 * confidential and proprietary information of Nadun De Silva.
 * Unauthorized reproduction, distribution, or disclosure
 * in any form, in whole or in part, is strictly prohibited
 * except as explicitly provided under a separate license
 * agreement with Nadun De Silva.
 *
 * Website: https://nadundesilva.com
 *
 * © 2023 Nadun De Silva. All rights reserved.
 */
```

### TypeScript Conventions

- Strict mode is enforced (`strict: true`, `noImplicitAny`, `strictNullChecks`).
- Type-only imports use the `type` keyword: `import type React from "react"`.
- React return types: `React.ReactElement` for single-element returns, `React.ReactNode` for children props.
- Props interfaces use the `Props` suffix, defined directly above the component.
- Default exports for components. Named exports for utilities, hooks, and types.
- PascalCase filenames for components. camelCase for utilities and hooks. Exception: `shadcn/ui/*` and `shadcn/lib/*` keep the CLI's lowercase-kebab filenames (`badge.tsx`, `cn.ts`, etc.).

### Import Ordering

Imports must follow this order with a blank line between each group:

1. External package imports (e.g. `motion/react`, `next`, `react`)
2. `@/` alias imports (e.g. `@/components/...`, `@/constants/...`)
3. Relative imports (e.g. `./Foo`, `../common/Bar`) — **always last**

### Component Structure Template

```tsx
// copyright header
"use client"; // only if needed

import type React from "react";
// external imports first, then @/ aliases, then relative imports

interface Props {
    // ...
}

const MyComponent = ({ ... }: Props): React.ReactElement => {
    return (...);
};

export default MyComponent;
```

---

## 7. Architecture and Key Patterns

### Static Site Generation

- `output: "export"` is set in `next.config.mjs` for all phases except `PHASE_DEVELOPMENT_SERVER`.
- No SSR or ISR at runtime. All data fetching happens at build time.
- Route handlers that generate static files (`sitemap.ts`, `robots.ts`, `manifest.ts`, `feed.xml/route.ts`) must include:
    ```ts
    export const dynamic = "force-static";
    ```
- The `out/` directory contains the fully built static site ready for deployment.

### Global Provider Configuration

All global context providers and wrappers live in [`app/layout.tsx`](./app/layout.tsx). This is the designated place for anything that needs to wrap the entire application — do not add new providers in page layouts, section components, or anywhere else in the tree.

Current global providers (in order of nesting):

- `ThemeProvider` (next-themes) — light/dark class strategy
- `React.StrictMode` — activates extra development-mode checks; no effect in production
- `LazyMotion features={domAnimation} strict` + `MotionConfig reducedMotion="user"` (motion/react) — use the lazy `m.*` components, never `motion.*`
- `TooltipProvider` (@base-ui/react) — shared tooltip context

When adding a new library that requires a root provider, add it to `app/layout.tsx` inside the existing provider tree, at the appropriate nesting level.

### Route Definitions

Defined in [`constants/routes.ts`](./constants/routes.ts). `WebsiteHome.subRoutes` is **always defined** (never `undefined`) — TypeScript infers this from the constant initializer even though `Route.subRoutes` is typed as optional. Do not add optional-chaining guards when accessing `WebsiteHome.subRoutes`.

The file also exports `CvPdfPath = "/nadundesilva-cv.pdf"` — use this constant instead of hardcoding the CV PDF path.

### Semantic HTML Components

Never use raw HTML elements for document structure; use the components in [`components/content/`](./components/content/) (`Title` is the single `h1` per page).

### Primitive Components

Components come from `shadcn/` (CLI-managed — never hand-edit, regenerate with the shadcn CLI) or `components/primitives/` (hand-written, purely visual building blocks).

**Always use the custom `Link` (or `LinkButton`) from `components/content/` instead of importing `next/link` directly**, including when passing a link as a `render` prop to a base-ui component (e.g. `BreadcrumbLink`). It adds the `rel` and screen-reader behaviour for `target="_blank"` links, and nesting a link inside a link or `<button>` is invalid HTML.

## 8. Theme and Styling

### Core Approach

Styling uses **Tailwind CSS v4** (CSS-first config) with **shadcn/ui** design tokens. No CSS-in-JS.

- Design tokens (fonts, colors, radii, easings, animations) are defined in the `@theme inline` block in [`app/app.css`](./app/app.css) using CSS variable references (e.g. `var(--background)`). The underlying color values use oklch and live in [`app/themes.css`](./app/themes.css), imported by `app.css`.
- Dark mode is provided by `next-themes` using the `class` strategy — the `dark` class on `<html>` activates a `@custom-variant dark` defined in [`app/app.css`](./app/app.css). A second custom variant `short-h` (`@media (max-height: 500px)`) is also defined there for hero collapse on short viewports.
- Put every transition and animation utility behind `motion-safe:` (e.g. `motion-safe:transition-colors`) so reduced-motion users never receive it — never add it unconditionally and cancel it with `motion-reduce:`.
- Compose class strings with `cn()` from [`shadcn/lib/cn.ts`](./shadcn/lib/cn.ts) (clsx + tailwind-merge).
- Use `class-variance-authority` (`cva` + `VariantProps`) for components whose props map to different class sets (`size`, `variant`, …).

### Preflight

`@import "tailwindcss"` in `app/app.css` includes Tailwind preflight. Do not add utility classes that duplicate what preflight already applies globally — e.g. `m-0`/`p-0` on any element, `list-none` on `ol`/`ul`, `block`/`max-w-full`/`h-auto` on `img`/`video`, `font-normal` on headings (they inherit weight), or `no-underline` on anchors (they inherit text-decoration). Adding these is harmless but noise — omit them unless you are explicitly overriding a component that re-introduces the property.

One consequence worth knowing: VoiceOver in Safari strips list semantics from any `ol`/`ul` that has `list-style: none` — which is every list, since preflight applies it globally. Always add `role="list"` on `ol`/`ul` elements to restore those semantics.

### Responsive Breakpoints

No custom breakpoints are defined — Tailwind v4 defaults apply: `sm` = 640px, `md` = 768px, `lg` = 1024px, `xl` = 1280px, `2xl` = 1536px.

**Use `lg:` as the threshold for major layout switches** (e.g. `flex-col` → `flex-row`, stacked → side-by-side). `md:` (768px) is standard iPad width — applying a desktop layout there gives tablet users the desktop experience, which is rarely the intent. This convention matches the nav component in [`components/layout/Layout.tsx`](./components/layout/Layout.tsx), which also switches to the desktop nav at `lg:`.

### Color Tokens

Never hardcode color values. Use semantic Tailwind utility classes tied to design tokens:

- `text-foreground`, `text-muted-foreground` — body text
- `bg-background`, `bg-card`, `bg-muted` — backgrounds
- `text-primary`, `bg-primary`, `text-primary-foreground` — primary accent
- `text-link` — link text color (theme-aware; used by the `Link` component)

### Avoid `!important`

Do not use `!important` in Tailwind class strings or `@layer` blocks. Exhaust specificity options first.

### Global CSS

[`app/app.css`](./app/app.css) is the global CSS entry point (imported once from [`app/layout.tsx`](./app/layout.tsx)) — Tailwind import, `tw-animate-css`, `shadcn/tailwind.css` (shadcn base layer), all design tokens, base styles, custom variants, and shared keyframes. It imports [`app/themes.css`](./app/themes.css) for the light/dark color variables. Do not add component styles to either file.

Co-located styles live alongside the file that owns them, named to match the importing file (e.g. `page.css` for `page.tsx`, `NotFound.css` for `NotFound.tsx`, `layout.css` for `layout.tsx`), and are imported via JavaScript (`import "./page.css"`) from the owning component.

---

## 9. Known Gotchas

### CSP `unsafe-eval` is only added in development and test

[`app/layout.tsx`](./app/layout.tsx) adds `'unsafe-eval'` to `script-src` only when `NODE_ENV === "development"` or `BUILD_TYPE === "test"`. Do not rely on `eval` in production code.

### Production HTTP security headers live in `public/_headers`

HTTP security headers (`Strict-Transport-Security`, `X-Content-Type-Options`, `X-Frame-Options`, `Permissions-Policy`) are served via [`public/_headers`](./public/_headers) — Cloudflare Pages reads this file automatically. The CSP is set separately via `<meta httpEquiv="Content-Security-Policy">` in [`app/layout.tsx`](./app/layout.tsx) so it can include the conditional `'unsafe-eval'` for dev/test builds.

### Layout-level components must read the route from `useSelectedLayoutSegments()`, not `usePathname()`

The host serves one prebuilt `out/404.html` for every unmatched URL, so `usePathname()` (the
live browser URL) disagrees with the path that shell was built for — a hydration mismatch
(React error #418) in any root-layout component that renders based on the path.
[`hooks/useRoutePathname.ts`](./hooks/useRoutePathname.ts) derives the path from
`useSelectedLayoutSegments()` instead; `Layout.tsx` and `RouterBreadcrumbs.tsx` use it.
Its JSDoc has the full reasoning; covered by `cypress/e2e/not-found.cy.tsx`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
