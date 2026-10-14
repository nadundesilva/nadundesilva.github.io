---
name: running-e2e-tests
description: "How to run the Cypress E2E suite against the static export, locally or the same way CI does. Use when running E2E tests, starting or stopping the local test server, or instrumenting for coverage."
paths:
    - "cypress.config.ts"
    - "cypress/**"
    - ".github/scripts/*-server.sh"
---

# Running E2E Tests

## Run against the production static export, never the dev server

Running `npm run cypress:e2e:run` while the Next.js dev server (`npm run dev`) is active produces intermittent and persistent failures. The root cause is HMR: in dev mode, the hot-update mechanism fires immediately after soft-navigation RSC fetches, causing the router to treat its tree as stale and abort `pushState`. The URL never updates, so `cy.location("pathname")` assertions time out. MDX article pages are especially susceptible because they trigger more HMR work (images, nested layouts, more code paths).

**Always stop the dev server before running Cypress.** Quick local flow, no coverage:

```bash
npm run build
npm run serve -- -l 3000 &
npm run cypress:e2e:run      # headless
# npm run cypress:open       # interactive UI (pick E2E testing)
```

## Running E2E like CI

Mirrors the `run-e2e-tests` job in `.github/workflows/deploy-site.yaml`. Use it when a spec depends on the real hostname/TLS/headers (e.g. `security.cy.tsx`) or when reproducing a CI-only failure.

```bash
BUILD_TYPE=test NODE_ENV=development npm run instrument
BUILD_TYPE=test NODE_ENV=development npm run build
WEBSITE_BUILD_DIR=out source .github/scripts/start-server.sh
CYPRESS_BASE_URL=https://nadundesilva.com npm run cypress:e2e:run
bash .github/scripts/stop-server.sh
```

- `.github/scripts/start-server.sh` generates a self-signed root CA and leaf cert, writes a Caddyfile, runs `caddy:alpine` in Docker (`--network=host`, container `caddy-server`, port 443) serving `WEBSITE_BUILD_DIR`, appends `127.0.0.1 nadundesilva.com` to `/etc/hosts`, trusts the root CA system-wide, and exports `NODE_EXTRA_CA_CERTS`. It requires `WEBSITE_BUILD_DIR`, `sudo`, and Docker.
- The Caddyfile includes every header under the `/*` pattern of `${WEBSITE_BUILD_DIR}/_headers`, so security headers match production.
- `.github/scripts/stop-server.sh` runs `docker stop`/`docker rm` on `caddy-server`.
- **`start-server.sh` must be run with `source`, not `bash`** — the exported `NODE_EXTRA_CA_CERTS` must survive into the calling shell. In CI it is also written to `GITHUB_ENV`, since the export dies with the step.
- **`npm run instrument` rewrites source files in place** (`nyc instrument --in-place`) — it mutates `.ts`/`.tsx` files under version control. Only run it when coverage numbers are needed, and revert the instrumented files afterwards (`git checkout -- <files>`); never leave them in the working tree.
- Each run appends another line to `/etc/hosts`; remove stale `nadundesilva.com` entries when done.
