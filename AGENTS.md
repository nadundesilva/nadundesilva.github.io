# Agent Knowledge Base

> Read this file in full before starting any task. It is the authoritative reference for all project conventions, patterns, and gotchas. Update it whenever you discover new knowledge during development. **Keep this file in context for the entire duration of every task** — do not let it scroll out of context mid-task. If context pressure forces a choice, preserve this file over other read content.

**Maintenance rules:**

- Reduce duplication: cross-reference sections instead of repeating information.
- Point to actual project files rather than duplicating their content here.
- When updating, consolidate similar information; do not add standalone "new discovery" sections.
- Knowledge that only matters for one kind of task (writing tests, images, blog MDX, etc.) belongs in a project skill at `.agents/skills/<name>/SKILL.md` (`.claude/skills` is a symlink to it, for Claude Code), not here — this file is loaded in every session. When recording a non-obvious learning: update the existing skill covering that task type; if it is specialised and no skill fits, create one (a `description` that states the trigger first, and narrow `paths:` globs only when a tight file set exists); if it applies across the board, add it here. Do not list skills in this file.
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

- Always provide a meaningful `metadata` export (`title`, `description`) on every `page.tsx` and `page.mdx`. See existing pages for the pattern.
- Titles follow the format: `"Page Name | Nadun De Silva"` — check existing pages for the exact separator and structure.
- Use semantic HTML (via the content components in `components/content/`) so crawlers can parse document structure.
- Images must have descriptive `alt` text (except decorative images which use `alt=""`).
- The `sitemap.ts`, `robots.ts`, and RSS `feed.xml` are auto-generated — do not break them by removing route exports or changing URL structures without updating those files.

### Accessibility

Accessibility is a hard requirement, not optional:

- Maintain correct heading hierarchy (`h1` → `h2` → `h3`) using the semantic content components — never skip levels. On the home page the `<h1>` is the person's name inside `WelcomeBanner`; section headings use `Heading` (which renders `<h2>`); experience job titles use `<p>` — they are items in the Experience timeline `<ol>`, not independent navigable sections.
- All interactive elements must be keyboard-reachable and have visible focus indicators.
- Interactive overlays (image cards, hover effects) must use `tabIndex={0}` and `:focus-within` so keyboard users can activate them.
- Color contrast must meet WCAG AA — always use theme color tokens, never hardcode colors.
- Decorative images use `alt=""`. Informational images use a concise, descriptive `alt`.
- Never nest interactive elements (no `<a>` inside `<a>`, no `<button>` inside `<a>`).
- Screen reader text: the custom `Link` component automatically appends "(opens in a new tab)" for `target="_blank"` links — do not duplicate this manually.

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

| Layer                   | Technology                                                                                                                                                                                                                                                                                                  |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework               | Next.js (App Router, `output: "export"`)                                                                                                                                                                                                                                                                    |
| Language                | TypeScript (strict, ES2022)                                                                                                                                                                                                                                                                                 |
| UI                      | Tailwind CSS v4 + shadcn/ui + `@base-ui/react`                                                                                                                                                                                                                                                              |
| Icons                   | lucide-react (general UI icons) + `@icons-pack/react-simple-icons` (brand/social icons)                                                                                                                                                                                                                     |
| Dark Mode               | next-themes (`class` strategy)                                                                                                                                                                                                                                                                              |
| Animation               | motion (v12) + tw-animate-css                                                                                                                                                                                                                                                                               |
| Blog                    | MDX + rehype-pretty-code (Dracula / GitHub Light themes)                                                                                                                                                                                                                                                    |
| Images                  | next-image-export-optimizer (custom loader)                                                                                                                                                                                                                                                                 |
| PWA                     | next-pwa                                                                                                                                                                                                                                                                                                    |
| Error Tracking          | Sentry (`@sentry/nextjs`)                                                                                                                                                                                                                                                                                   |
| E2E / Component Testing | Cypress + @testing-library/cypress                                                                                                                                                                                                                                                                          |
| Unit Testing            | Jest via `next/jest` (`testEnvironment: "node"`) — for pure logic with no DOM                                                                                                                                                                                                                               |
| Code Coverage           | NYC/Istanbul via @cypress/code-coverage (Cypress suites); Jest built-in `--coverage` (unit suite)                                                                                                                                                                                                           |
| Linting                 | ESLint (`next/core-web-vitals` + `next/typescript` + `eslint-config-prettier`) + Stylelint (`stylelint-config-standard` + `stylelint-config-tailwindcss`)                                                                                                                                                   |
| Formatting              | Prettier (`semi`, `trailingComma: all`, `tabWidth: 4`, `printWidth: 80`, `quoteProps: consistent`) + `prettier-plugin-organize-imports` (auto-sorts imports) + `prettier-plugin-tailwindcss` (auto-sorts Tailwind classes in `className`, `cn()`, and `clsx()` calls — `tailwindFunctions: ["cn", "clsx"]`) |
| Git Hooks               | Husky + lint-staged                                                                                                                                                                                                                                                                                         |

Full dependency list: [`package.json`](./package.json)
Full Next.js config: [`next.config.mjs`](./next.config.mjs)

---

## 4. Repository Structure

```
app/                               # Next.js App Router
  app.css                          # CSS entry point: Tailwind import, design tokens, base styles, custom variants
  themes.css                       # Light/dark theme color variables (imported by app.css)
  layout.tsx                       # Root layout: theme, Sentry, WebVitals, CSP headers, JSON-LD, global context providers
  (home)/
    page.tsx                       # Home page
    page.css                       # Home-page-scoped styles
    _content/                      # Home-page components (sections, common)
  (content)/                       # Content section pages; layout adds shared ContentContainer padding
    layout.tsx
    blog-articles/
      page.tsx                     # Blog index
      layout.tsx                   # Shared SEO metadata for all blog article pages (authors, category, robots, openGraph, twitter, alternates)
      feed.xml/route.ts            # RSS feed (force-static)
      (articles)/
        layout.css                 # Syntax highlight theme overrides (dark/light)
        layout.tsx                 # Renders ReadingProgress and imports layout.css; wraps all article pages
        {category}/page.tsx        # Category listing page (TypeScript, uses ArticlesList)
        {category}/{article}/page.mdx  # Individual blog article (MDX)
    achievements/page.tsx
    education/
      page.tsx
      certifications/page.tsx
    experience/page.tsx
    projects/
      page.tsx
      personal/page.tsx
    testimonials/
      page.tsx
      Testimonial.tsx              # testimonial card component
  404/
    page.tsx
    NotFound.tsx                   # component rendered by page.tsx and not-found.tsx
    NotFound.css                   # styles for the NotFound component
  error.tsx
  global-error.tsx
  loading.tsx
  not-found.tsx                    # renders the NotFound component for unknown routes
  manifest.ts                      # PWA manifest (force-static)
  robots.ts                        # robots.txt (force-static)
  sitemap.ts                       # sitemap.xml (force-static)

assets/                            # Static image files (imported via @/assets/* alias)
build/
  utils/
    rehype-reading-time.mjs        # Rehype plugin: injects data-reading-time-minutes at MDX compile time
components/
  blog-articles/                   # ArticleLayout, ArticlesList, ArticlesListItem, ArticleImage,
                                   # CodeBlock, InlineCodeSegment, ReadingProgress
  content/                         # Semantic structure components (Title, Section, Link, etc.)
  icons/                           # Custom SVG icon components (e.g. LinkedInIcon)
  layout/                          # Navigation, breadcrumbs, scroll handling
  primitives/                      # Hand-written primitives
  theme/                           # fonts.ts, index.tsx (re-exports fonts)
  WebVitals.tsx
shadcn/                            # CLI-managed only — never hand-edit
  ui/                              # Badge, Breadcrumb, Button, Card, Drawer, Popover, Separator,
                                   # Spinner, Tooltip + index.tsx (barrel, hand-written)
  lib/
    cn.ts                          # cn() — clsx + tailwind-merge
    index.ts                       # barrel (hand-written)
  hooks/                           # shadcn-provided hooks land here if/when added (none yet)
constants/
  date.ts                          # FormattableDate domain model (Date, Now, DateRange)
  routes.ts                        # Route definitions (WebsiteHome, Route interface)
  metadata.ts                      # FULL_NAME, MAIN_DESCRIPTION, WEBSITE_PUBLIC_URL, CONTACT_EMAIL, TAGLINE, BLOG_CATEGORY
  # ...plus: achievements, certificates, companies, competitions, education, experience,
  #           institutes, logos, people, profiles, projects, skill-categories, skills, skill-usages, testimonials
cypress/
  e2e/                             # E2E test specs (*.cy.tsx)
  support/commands.ts              # Custom commands
utils/
  common/                          # Client-safe utilities: experience.ts, image-metadata.ts, image-sizes.ts
  server/                          # Server-only utilities: blog-articles.ts (filesystem glob + path resolution)
.github/
  scripts/
    start-server.sh                # MUST be run with `source` (exports env vars)
    stop-server.sh                 # Can be run with `bash`
  workflows/
    deploy-site.yaml               # Main pipeline: lint → E2E → build → links → audit → deploy
    deployment-check.yaml          # Daily checks on live site
instrumentation.ts                 # Sentry server-side instrumentation
instrumentation-client.ts          # Sentry client-side instrumentation
mdx-components.tsx                 # MDX component overrides (links, headings, images)
cypress.config.ts                  # Cypress configuration
next.config.mjs                    # Next.js configuration
tsconfig.json                      # TypeScript configuration
eslint.config.js                   # ESLint flat config
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
# Local development (hot reload, no static export)
npm run dev                  # http://localhost:3000 — NODE_ENV=development

# Production build (static export to out/) + image optimization
npm run build

# Build + serve the static output locally
npm run start

# Linting
npm run lint                 # ESLint + Stylelint
npm run lint:ts              # ESLint only
npm run lint:css             # Stylelint only

# Formatting
npm run format:check         # Dry-run Prettier check
npm run format               # Apply Prettier formatting

# Unit tests (Jest, no server, no DOM — pure logic)
npm run test:unit            # Headless Jest run
npm run test:unit:coverage   # + coverage report

# E2E tests (requires running server)
npm run cypress:open         # Interactive Cypress UI
npm run cypress:e2e:run      # Headless Cypress run

# Bundle analysis
npm run build:analyze        # Sets ANALYZE=true, opens bundle report after build

# Serve the static output on its own (no rebuild) — e.g. for local e2e runs
npm run serve -- -l 3000

# Instrument the codebase for coverage (mirrors the CI coverage job)
npm run instrument
```

**Before committing:** lint-staged runs automatically via Husky on staged files — ESLint fix + Stylelint fix + Prettier write. Do not skip hooks (`--no-verify`).

**Installing dependencies:** Use `npm ci` (not `npm install`) in CI and when reproducing CI behavior locally.

**Never hand-edit `package-lock.json`.** It is only ever regenerated by running npm itself (`npm install`, `npm ci`, `npm update <pkg>`). Editing it directly desyncs its integrity hashes and resolved tree from what npm would actually produce.

**Never run forced/destructive dependency commands** (`npm audit fix --force` and anything else that rewrites the tree past declared ranges) without explicit approval. If one seems warranted, propose it with reasoning and wait for a yes.

**Prefer `npm run <script>` over `npx <tool>` whenever a script already covers it.** Every command above is an npm script — reach for it before typing the underlying `npx`/binary invocation directly, even for one-off local runs (e.g. `npm run cypress:component:run -- --spec <path>` instead of `npx cypress run --component --spec <path>`). This keeps local runs on the same flags/env as CI and gives every command a single source of truth.

If no script covers what's needed, **fall back to `npx`/the raw binary** — that's the default, not a last resort to avoid. Don't add a script to `package.json` just because one run needed it. Only add one once a command has genuinely come up repeatedly (e.g. `npx shadcn add` stays `npx` per-component since each invocation targets a different component — but a fixed, repeatedly-typed invocation like the coverage instrumentation step became `npm run instrument`).

---

## 6. Code Style and Conventions

### File Header

Every source file (`.ts`, `.tsx`, `.css`, `.mdx`) must start with the copyright header. Use the year of original file creation. Do not update the year on edits.

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
- `LazyMotion features={domAnimation} strict` + `MotionConfig reducedMotion="user"` (motion/react) — lazy-loads animation features and opts all motion primitives into `prefers-reduced-motion` automatically; `strict` mode warns in development if full `motion.*` components are used instead of the lazy `m.*` variants
- `TooltipProvider` (@base-ui/react) — shared tooltip context

When adding a new library that requires a root provider, add it to `app/layout.tsx` inside the existing provider tree, at the appropriate nesting level.

### Route Definitions

Defined in [`constants/routes.ts`](./constants/routes.ts). `WebsiteHome.subRoutes` is **always defined** (never `undefined`) — TypeScript infers this from the constant initializer even though `Route.subRoutes` is typed as optional. Do not add optional-chaining guards when accessing `WebsiteHome.subRoutes`.

Current routes: `/experience`, `/achievements`, `/projects`, `/projects/personal`, `/testimonials`, `/blog-articles`, `/education`, `/education/certifications`. The file also exports `CvPdfPath = "/nadundesilva-cv.pdf"` — use this constant instead of hardcoding the CV PDF path.

### Semantic HTML Components

Never use raw HTML elements for document structure. Use from [`components/content/`](./components/content/):

| Component                    | Renders as                            | Use for                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---------------------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Title`                      | `h1`                                  | Page title (one per page)                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `Section` + `SectionHeading` | section + `h2`                        | Major content sections — `Section` automatically wraps children in `ScrollReveal` and appends a `Separator`; do not add these manually. Pass a unique `id` to `SectionHeading` and the same value to `Section`'s `labelledById` prop so `aria-labelledby` links them. `SectionHeading` also accepts optional `date` (renders `DateInfo` below the heading), `logo` (right-aligned logo element), and `actionButton` (`LinkButtonProps` for a CTA button below the heading) props. |
| `SubsectionHeading`          | `h3`                                  | Subsections within a section; accepts an optional `id` prop for anchor linking.                                                                                                                                                                                                                                                                                                                                                                                                   |
| `Paragraph`                  | `p`                                   | Body text                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `List` + `ListItem`          | `ul`/`ol` + `li`                      | Lists                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `AccentedList`               | left-accented list                    | Highlighted/feature lists — requires `heading` and `headingVariant` props (unlike `List` where they are optional)                                                                                                                                                                                                                                                                                                                                                                 |
| `Link`                       | `a` (Next.js)                         | All internal and external links                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `LinkButton`                 | button-styled link                    | CTA links                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `Logo`                       | optimized image (light/dark variants) | Logos                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `Image`                      | optimized image                       | In-page images                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `DateInfo`                   | date/date range display               | Dates and date ranges                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

### Primitive Components

Two separate homes, split by provenance:

- **`shadcn/`** — CLI-managed only. `shadcn/ui/` holds the 9 shadcn primitives, `shadcn/lib/` holds the `cn()` utility, `shadcn/hooks/` is where shadcn-provided hooks would land if any are ever added.
- **`components/primitives/`** — hand-written building blocks that render a specific visual segment (a gradient line, a bordered accent, a divider) but carry no semantic meaning on their own. Think of them like design tokens expressed as components.

**Hand-written primitives** (all exported from [`components/primitives/index.tsx`](./components/primitives/index.tsx)):

| Primitive                | What it renders                                                                             |
| ------------------------ | ------------------------------------------------------------------------------------------- |
| `CopyButton`             | Clipboard copy button (used in code blocks)                                                 |
| `HorizontalGradientLine` | Short left-anchored gradient accent line (color → transparent) used under headings          |
| `LeftAccent`             | Left border accent wrapping a content block                                                 |
| `PrimaryTintedIcon`      | Icon tinted with the primary color                                                          |
| `ProgressFab`            | Circular progress ring FAB — used by `ReadingProgress` to show article reading progress     |
| `ScrollReveal`           | Wraps children in a CSS scroll-triggered scale reveal (`animation-trigger`, fixed duration) |
| `StaggerReveal`          | Wraps a list in staggered scroll-reveal animations                                          |

> **`CardTitle` and HTML heading levels are orthogonal concerns:** `CardTitle` is a UI slot — it marks the title area of a card regardless of what HTML element renders it. Whether that title should also be a document heading (`<h2>`, `<h3>`, etc.) is a separate decision driven by the page's heading hierarchy. In list items (e.g. project cards, certification cards inside `<li>`), the list provides the document structure so `CardTitle` as a `<div>` is correct — no heading element is needed. For standalone named sections that users should be able to navigate to by heading (e.g. an Experience role), place an `<h3>` directly inside `CardContent` instead of using `CardTitle`.

**When to add a new hand-written primitive:**

- A visual pattern (gradient, border accent, decorative line, etc.) is used in more than one place.
- The element has no semantic meaning by itself — it is purely visual.

### Custom Link Component

[`components/content/Link.tsx`](./components/content/Link.tsx) is a `forwardRef` wrapper around `next/link` with Tailwind classes applied via `cn()`. It automatically:

- Adds `rel="noopener noreferrer"` for `target="_blank"` links.
- Appends an `aria-label` suffix `" (opens in a new tab)"` when `aria-label` is set and `target="_blank"`.
- Renders an `sr-only` "(opens in a new tab)" span when no `aria-label` is set.

For button-styled links, use [`LinkButton`](./components/content/LinkButton.tsx). Never nest `<Link>` inside another `<Link>` or inside a `<button>` — this produces invalid HTML.

**Always use the custom `Link` (or `LinkButton`) instead of importing `next/link` directly.** Even when passing a link as a `render` prop to a base-ui component (e.g. `BreadcrumbLink`), pass `<Link href={...} />` — not `<NextLink href={...} />`. The custom component adds the accessibility and rel-attribute behaviour described above.

## 8. Theme and Styling

### Core Approach

Styling uses **Tailwind CSS v4** (CSS-first config) with **shadcn/ui** design tokens. No CSS-in-JS.

- Design tokens (fonts, colors, radii, easings, animations) are defined in the `@theme inline` block in [`app/app.css`](./app/app.css) using CSS variable references (e.g. `var(--background)`). The underlying color values use oklch and live in [`app/themes.css`](./app/themes.css), imported by `app.css`.
- Dark mode is provided by `next-themes` using the `class` strategy — the `dark` class on `<html>` activates a `@custom-variant dark` defined in [`app/app.css`](./app/app.css). A second custom variant `short-h` (`@media (max-height: 500px)`) is also defined there for hero collapse on short viewports.
- Compose class strings with `cn()` from [`shadcn/lib/cn.ts`](./shadcn/lib/cn.ts) (clsx + tailwind-merge).
- Use `class-variance-authority` (`cva` + `VariantProps`) whenever a component accepts props that map to different class sets (e.g. `size`, `variant`, `intent`). This is the shadcn pattern — see `shadcn/ui/button.tsx` and `shadcn/ui/badge.tsx` for examples. Expose the resolved variant type via `VariantProps<typeof myVariants>` in the props interface so callers get autocomplete and type safety. For a single varying dimension (e.g. only `size`), a single `cva` call is sufficient — no need for a separate helper function.

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

The site is a static export, and the host serves the same prebuilt `out/404.html` for
every unmatched URL. `usePathname()` returns the **live browser URL**, so on a nested
unknown route (`/experience/does-not-exist`) it reports `/experience/...` on the client
while the static 404 shell was built for a different path — a hydration mismatch (React
error #418) for any component in the root layout that renders based on the path
(`Layout.tsx`'s nav highlighting, `RouterBreadcrumbs.tsx`'s breadcrumb trail + JSON-LD).

[`hooks/useRoutePathname.ts`](./hooks/useRoutePathname.ts) is the fix: it derives the
path from `useSelectedLayoutSegments()` (Next's matched route tree, baked identically
into the flight payload on server and client), filtering out route-group segments
(`(content)` etc.). `Layout.tsx` and `RouterBreadcrumbs.tsx` use it instead of
`usePathname()`. It falls back to `usePathname()` when there is no `LayoutRouterContext`
(isolated Cypress component mounts, which wrap in `PathnameContext.Provider`), so those
specs are unaffected. Covered by `cypress/e2e/not-found.cy.tsx`.

### The mobile drawer restores focus manually on Escape (`Layout.tsx`)

The drawer is `modal={false}`, which opts out of Base UI's focus restoration. `finalFocus`
and `modal="trap-focus"` do **not** fix this: Base UI only runs its restoration after the
exit animation unmounts the popup, and its hardcoded `restoreFocus: "popup"` then
re-focuses the detached popup node a frame later, knocking focus back to `<body>`. The
`onOpenChange` handler restores focus to the toggle synchronously (keyed on
`eventDetails.reason`), before unmount — nothing is left to clobber it. Covered by
`cypress/e2e/navigation.cy.tsx` ("closes the drawer with Escape and returns focus…").

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
