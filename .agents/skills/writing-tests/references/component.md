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
pnpm run cypress:component:run   # Headless component test run
pnpm run cypress:open            # Interactive UI (pick Component testing)
```
