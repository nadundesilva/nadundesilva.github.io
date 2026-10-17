## Unit Tests with Jest

Pure-logic specs run under Jest (`next/jest` preset, `testEnvironment: "node"`) — no
browser, no `cy.mount()`, no running server.

- Test files: colocated as `<source>.test.ts` next to the module they cover (e.g.
  `constants/date.ts` → `constants/date.test.ts`). `nyc.config.mjs`'s include glob
  already excludes `*.test.*`, and the root `tsconfig.json` type-checks them.
- Config: `jest.config.mjs` (`.mjs` because `package.json` is
  `"type": "module"`). `collectCoverageFrom` covers `constants/`, `utils/`, `build/`.
- Import test globals explicitly: `import { describe, expect, it } from "@jest/globals";` — the root `tsconfig.json` puts Cypress's Chai `expect` in global scope, so a Jest global `expect` would clash. Assertions are Jest matchers (`toBe`, `toEqual`, `toMatchObject`, `toThrow`), not Chai (`.to.eq`, …).
- `next/jest` reuses the project's SWC transform, tsconfig `paths`, and asset mocks, so these specs import the same `@/constants/*` chain (raw `.png` imports, `export enum`) the app does.
- ESM-only packages imported by unit-tested code must be listed in `next.config.mjs` `transpilePackages` (e.g. `hast-util-to-string`, used by `build/utils/rehype-reading-time.mjs`). Jest runs CommonJS and skips `node_modules` when transforming; `next/jest` only appends to that ignore pattern and never removes it, so a pure-ESM package otherwise fails to load. `next build` (webpack) handles ESM itself, so the entry is inert for the real build.
- `cy.clock()` has no place here — freeze time with
  `jest.useFakeTimers()` + `jest.setSystemTime(date)`.
- CI: the `run-unit-tests` job in `.github/workflows/deploy-site.yaml`
  runs `pnpm run test:unit:coverage` and uploads to the codecov `unit-tests` flag.

```bash
pnpm run test:unit             # Headless Jest run
pnpm run test:unit:coverage    # + coverage report
```
