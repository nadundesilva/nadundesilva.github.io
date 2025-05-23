// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
    enabled: process.env.NODE_ENV !== "production",
    dsn: "https://639f507631857dffcfd70a636765a5c0@o4507214991917056.ingest.us.sentry.io/4507287404544000",
    spotlight: process.env.NODE_ENV === "development",
    debug: false,

    integrations: [
        Sentry.replayIntegration({
            maskAllText: true,
            blockAllMedia: true,
        }),
    ],

    tracesSampleRate: 1,
    replaysOnErrorSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
