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

const PATHS = [
    "/",
    "/experience",
    "/achievements",
    "/projects",
    "/projects/personal",
    "/testimonials",
    "/blog-articles",
    "/blog-articles/engineering/becoming-a-better-software-engineering-team-leader", // Sample article
    "/education",
    "/education/certifications",
];

// Rules that should only be enforced against the production server (Cloudflare CDN).
// They are skipped when auditing the local CI dev server (Caddy) because the local
// setup structurally can't satisfy them, or because Cloudflare injects extra items
// that Caddy doesn't (so the live count is higher than the CI count).
const LIVE_SITE_ASSERTIONS = {
    // Sentry + Cloudflare Analytics (reported as "Cloudflare" and "cloudflareinsights.com")
    "third-parties-insight": ["error", { maxLength: 3 }],

    // CI count + Cloudflare's beacon.min.js
    "legacy-javascript-insight": ["error", { maxLength: 2 }],

    // Only Cloudflare's beacon.min.js is flagged on the live site (plain and versioned URL).
    // Locally Caddy sends no Cache-Control on /optimized-images/*, so CI can't pin this
    "cache-insight": ["error", { maxLength: 2 }],

    // Same Cloudflare-only beacon as cache-insight (legacy twin of that audit)
    "uses-long-cache-ttl": ["error", { maxLength: 2 }],

    // Legacy twin of legacy-javascript-insight: lists beacon.min.js twice (plain and
    // versioned URL), where the insight dedupes it, so one more than the insight's 2
    "legacy-javascript": ["error", { maxLength: 3 }],

    // Passes on the live site; only the local CI server reports it as "Not actionable"
    "bf-cache": ["error"],
};

let TARGET_BASE_URL = process.env.TARGET_BASE_URL;
if (TARGET_BASE_URL === undefined) {
    TARGET_BASE_URL = "https://nadundesilva.com";
}

module.exports = {
    ci: {
        collect: {
            url: PATHS.map((path) => TARGET_BASE_URL + path),
            isSinglePageApplication: true,
            numberOfRuns: 5,
            settings: {
                chromeFlags: "--ignore-certificate-errors",
            },
        },
        upload: {
            target: "filesystem",
            outputDir: "./lhci-out",
        },
        assert: {
            preset: "lighthouse:recommended",
            assertions: {
                // Against the local CI server Lighthouse marks BFCache failures on some pages
                // (e.g. /blog-articles) "Not actionable / Internal error"; see LIVE_SITE_ASSERTIONS
                "bf-cache": ["warn"],

                // Pinned to the known third party (Sentry). The audit is informational (always
                // scores 1), so the entity count is the only thing that can catch a new one
                "third-parties-insight": ["error", { maxLength: 1 }],

                // Framework overhead: Next.js, Sentry, base-ui and motion/react chunks. Pinned to
                // the current chunk count so a new bundle fails the audit; raise it deliberately
                "unused-javascript": ["error", { maxLength: 4 }],

                // The flagged images are the 720px srcset candidate shown at ~380 CSS px, which
                // is the right pick at the emulated 1.75 DPR (uses-responsive-images passes);
                // the remainder are small compression hints on already-optimized WebP
                "image-delivery-insight": ["warn"],

                // Next.js's built-in polyfill-module (Array.prototype.at/flat/flatMap,
                // Object.fromEntries/hasOwn, String.prototype.trimStart/trimEnd) ships in the main
                // chunk regardless of browserslist target, with no supported way to drop it.
                // Pinned to that one chunk so new legacy code fails the audit
                "legacy-javascript-insight": ["error", { maxLength: 1 }],

                // Legacy twin of legacy-javascript-insight: same polyfill-module chunk
                "legacy-javascript": ["error", { maxLength: 1 }],

                // Legacy twin of render-blocking-insight: same stylesheet pin
                "render-blocking-resources": ["error", { maxLength: 5 }],

                // Legacy twin of cache-insight: Caddy sends no Cache-Control locally,
                // so only the live site can be held to it (see LIVE_SITE_ASSERTIONS)
                "uses-long-cache-ttl": ["warn"],

                // Next.js serves its CSS and JS as external files, so the HTML -> CSS/JS request
                // chain is inherent to the build output
                "network-dependency-tree-insight": ["warn"],

                // Next.js emits one stylesheet per layout chunk (5 on the home page, 4 elsewhere).
                // Pinned so an additional render-blocking stylesheet fails the audit
                "render-blocking-insight": ["error", { maxLength: 5 }],

                ...(process.env.VALIDATING_LIVE_SITE === "true"
                    ? LIVE_SITE_ASSERTIONS
                    : {}),
            },
        },
    },
};
