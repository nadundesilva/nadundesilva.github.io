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
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
import { glob } from "glob";
import { type Metadata } from "next";
import React from "react";

import { Link } from "@/components/content";
import { FULL_NAME } from "@/constants/metadata";

interface BlogArticle {
    title: string;
    description: string;
    url: string;
    keywords: string[];
    publishedDate: Date;
    image: string;
}

async function getBlogArticles(pathPattern: string): Promise<BlogArticle[]> {
    return Promise.all(
        (await glob(pathPattern)).map(async (filePath) => {
            const relativePath = filePath
                .replace(
                    /^(app\/\(content\)\/blog-articles\/\(articles\)\/)/,
                    "",
                )
                .replace(/\/page\.mdx$/, "");
            const { metadata, blogMetadata } = await import(
                `app/(content)/blog-articles/(articles)/${relativePath}/page.mdx`
            );

            return {
                title: metadata.title as string,
                description: metadata.description as string,
                url: `/blog-articles/${relativePath}` as string,
                keywords: blogMetadata.keywords as string[],
                publishedDate: blogMetadata.publishedDate as Date,
                image: blogMetadata.image as string,
            };
        }),
    ).then((articles) =>
        articles.sort(
            (a, b) => a.publishedDate.getTime() - b.publishedDate.getTime(),
        ),
    );
}

export const metadata: Metadata = {
    title: `${FULL_NAME} | Blog Articles`,
    description: `Various blog articles written by ${FULL_NAME}`,
};

const ArticlesList = async ({
    pathPattern,
}: {
    pathPattern: string;
}): Promise<React.ReactElement> => {
    const blogArticles = await getBlogArticles(pathPattern);

    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="stretch"
            spacing={2}
            sx={{ mt: 2 }}
        >
            {blogArticles.reverse().map((blogArticle) => (
                <Grid
                    key={blogArticle.url}
                    size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                >
                    <Card raised sx={{ height: "100%" }}>
                        <Link href={blogArticle.url} internal>
                            <CardActionArea
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    alt="Article"
                                    height="140"
                                    image={blogArticle.image}
                                />
                                <CardContent sx={{ flex: "auto" }}>
                                    <Typography
                                        gutterBottom
                                        variant="h3"
                                        sx={{ pb: 1 }}
                                    >
                                        {blogArticle.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {blogArticle.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Link>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ArticlesList;
