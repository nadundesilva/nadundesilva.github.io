"use client";

import * as Sentry from "@sentry/nextjs";
import NextError from "next/error";
import { useEffect } from "react";

export default function GlobalError({ error }: { error: Error }) {
    useEffect(() => {
        Sentry.captureException(error);
    }, [error]);

    return (
        <html>
            <body>
                <NextError statusCode={500} />
            </body>
        </html>
    );
}