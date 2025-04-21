"use client";
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
import { Link, LinkProps } from "@mui/material";
import NextLink from "next/link";
import React, { forwardRef, Ref } from "react";

type WebsiteRoute = string;

interface InternalLink {
    href: WebsiteRoute;
}

interface ExternalLink {
    href: string;
    baseUrl: string;
}

type CustomLinkProps = (InternalLink | ExternalLink) & {
    children: React.ReactNode;
    target?: string;
    internal?: boolean;
};

const CustomLink = ({
    children,
    target,
    internal,
    ...customLinkProps
}: CustomLinkProps): React.ReactElement => (
    <Link
        target={target}
        component={forwardRef(function CustomLinkComponent(
            {
                children: customLinkCompChildren,
                ...customLinkCompProps
            }: LinkProps,
            ref: Ref<HTMLAnchorElement>,
        ) {
            let href: URL | WebsiteRoute;
            if (internal) {
                const internalLink = customLinkProps as InternalLink;
                href = internalLink.href;
            } else {
                const externalLink = customLinkProps as ExternalLink;
                href = new URL(externalLink.href, externalLink.baseUrl);
            }
            return (
                <NextLink href={href} ref={ref} {...customLinkCompProps}>
                    {customLinkCompChildren}
                </NextLink>
            );
        })}
    >
        {children}
    </Link>
);

export default CustomLink;
