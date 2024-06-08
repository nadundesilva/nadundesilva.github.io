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
import type { Viewport, Metadata } from "next";
import Script from "next/script";
import React from "react";

import Layout from "@/components/layout";
import { WebsiteThemeProvider } from "@/components/theme";
import WebVitals from "@/components/WebVitals";
import { FULL_NAME, WEBSITE_PUBLIC_URL } from "@/constants/metadata";
import "@/styles/main.css";
import "@/styles/syntax-highlighting.css";

const GA_TRACKING_ID = "GTM-T9KX7B4";
const GOOGLE_SITE_VERIFICATION = "M8dg6gzVYU0noXFvsPOqknm_WjREFeNE212YeUk0g30";
const YANDEX_VERIFICATION = "acbc45e5d9645cf0";
const FB_APP_ID = "567329184466353";

export const metadata: Metadata = {
    metadataBase: new URL(WEBSITE_PUBLIC_URL),
    applicationName: FULL_NAME,
    authors: { name: FULL_NAME, url: WEBSITE_PUBLIC_URL },
    creator: FULL_NAME,
    publisher: FULL_NAME,
    generator: "Next.js",
    keywords: [
        "Nadun",
        "Rusiru",
        "De Silva",
        "Nadun De Silva",
        "Nadun Rusiru De Silva",
        "Kurukulasuriya Patabandige Nadun Rusiru De Silva",
        "Software Engineer",
    ],
    referrer: "origin",
    robots: `${WEBSITE_PUBLIC_URL}/robots.txt`,
    alternates: {
        canonical: WEBSITE_PUBLIC_URL,
    },
    icons: {
        icon: `${WEBSITE_PUBLIC_URL}/icon-maskable-x512.png`,
        shortcut: `${WEBSITE_PUBLIC_URL}/icon-maskable-x512.png`,
        apple: `${WEBSITE_PUBLIC_URL}/assets/profile-photo.jpg`,
    },
    manifest: `${WEBSITE_PUBLIC_URL}/manifest.webmanifest`,
    verification: {
        google: GOOGLE_SITE_VERIFICATION,
        yandex: YANDEX_VERIFICATION,
    },
    appleWebApp: {
        capable: true,
        startupImage: {
            url: `${WEBSITE_PUBLIC_URL}/assets/profile-photo.jpg`,
            media: "image/jpeg",
        },
        statusBarStyle: "black-translucent",
    },
    formatDetection: {
        telephone: true,
        date: true,
        address: true,
        email: true,
        url: true,
    },
};

export const viewport: Viewport = {
    themeColor: [
        {
            media: "(prefers-color-scheme: light)",
            color: "#3f51b5",
        },
        {
            media: "(prefers-color-scheme: dark)",
            color: "#000000",
        },
    ],
    colorScheme: "light",
    minimumScale: 1,
    initialScale: 1,
    width: "device-width",
    userScalable: true,
    viewportFit: "cover",
    interactiveWidget: "resizes-visual",
};

const createCspValues = (): string[] => {
    const cspValues = {
        "default-src": ["'none'"],
        "manifest-src": ["'self'"],
        "img-src": [
            "'self'",
            "data:",
            "https://nadundesilva.imgix.net",
            "https://www.google.lk",
            "https://www.googletagmanager.com",
        ],
        "style-src": ["'unsafe-inline'"],
        "style-src-elem": ["'self'", "'unsafe-inline'"],
        "font-src": ["'self'"],
        "script-src": [
            "'self'",
            "https://www.googletagmanager.com",
            "http://www.googletagmanager.com",
            "'unsafe-inline'",
        ],
        "worker-src": ["'self'", "blob:"],
        "child-src": ["'self'", "blob:"],
        "connect-src": [
            "'self'",
            "https://www.google-analytics.com",
            "https://o4507214991917056.ingest.us.sentry.io",
        ],
    };
    if (
        process.env.NODE_ENV === "development" ||
        process.env.BUILD_TYPE === "test"
    ) {
        cspValues["script-src"].push("'unsafe-eval'");
    }
    const csps: string[] = [];
    for (const [cspKey, cspValue] of Object.entries(cspValues)) {
        csps.push(`${cspKey} ${cspValue.join(" ")}`);
    }
    return csps;
};

interface RootLayoutProps {
    children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps): React.ReactElement => {
    const csps = createCspValues();
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />

                <meta httpEquiv="X-DNS-Prefetch-Control" content="on" />
                <meta
                    httpEquiv="Strict-Transport-Security"
                    content="max-age=63072000; includeSubDomains; preload"
                />
                <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
                <meta httpEquiv="Permissions-Policy" content="" />
                <meta httpEquiv="X-Content-Type-Options" content="nosniff" />

                <meta
                    httpEquiv="Content-Security-Policy"
                    content={csps.join("; ")}
                />

                <link rel="preconnect" href="https://nadundesilva.imgix.net" />

                <meta property="fb:app_id" content={FB_APP_ID} />
                <meta property="og:fb:profile_id" content="nadunrds" />

                {/* Google Tag Manager */}
                <Script
                    async
                    defer
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                />
                <Script
                    id="google-tag-manager"
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag() {
                                dataLayer.push(arguments);
                            }
                            gtag("js", new Date());
                            gtag("config", "${GA_TRACKING_ID}", {
                                page_path: window.location.pathname,
                            });
                        `,
                    }}
                />
            </head>
            <body>
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src={`https://www.googletagmanager.com/ns.html?id=${GA_TRACKING_ID}`}
                        height="0"
                        width="0"
                        style={{
                            display: "none",
                            visibility: "hidden",
                        }}
                    ></iframe>
                </noscript>
                {/* End Google Tag Manager (noscript) */}
                <main>
                    <React.StrictMode>
                        <WebVitals />
                        <WebsiteThemeProvider>
                            <Layout>{children}</Layout>
                        </WebsiteThemeProvider>
                    </React.StrictMode>
                </main>
            </body>
        </html>
    );
};

export default RootLayout;
