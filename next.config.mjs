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
 * Website: https://nadundesilva.github.io
 *
 * © 2023 Nadun De Silva. All rights reserved.
 */
import nextPwa from "next-pwa";
import NextBundleAnalyzer from "@next/bundle-analyzer";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";
import { withSentryConfig } from "@sentry/nextjs";

const withBundleAnalyzer = NextBundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
});

const withPWA = nextPwa({
    disable: process.env.NODE_ENV === "development",
    dest: "public",
    register: true,
});

const sentryConfig = {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    org: "nadundesilva",
    project: "nadundesilva-website",
    authToken: process.env.SENTRY_AUTH_TOKEN,

    hideSourceMaps: true,
    widenClientFileUpload: true,
    transpileClientSDK: true,

    silent: !process.env.CI,
    disableLogger: true,

    automaticVercelMonitors: false,
    autoInstrumentServerFunctions: false,
};

export default (phase, { defaultConfig }) => {
    /**
     * @type {import('next').NextConfig}
     **/
    const nextConfig = {
        ...defaultConfig,
        pageExtensions: ["ts", "tsx", "js", "jsx"],
        eslint: {
            ignoreDuringBuilds: process.env.BUILD_TYPE == "test",
        },
        modularizeImports: {
            "@mui/icons-material": {
                transform: "@mui/icons-material/{{member}}",
            },
        },
        images: {
            loader: "custom",
            loaderFile: "./nextImageLoader.js",
        },
        experimental: {
            typedRoutes: true,
            webpackBuildWorker: true,
        },
        productionBrowserSourceMaps: true,
        reactStrictMode: true,
        swcMinify: true,
    };

    if (phase !== PHASE_DEVELOPMENT_SERVER) {
        nextConfig.output = "export";
    }

    return withSentryConfig(
        withBundleAnalyzer(withPWA(nextConfig)),
        sentryConfig,
    );
};
