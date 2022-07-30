/*
 * Copyright (c) 2022, Nadun De Silva. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import fs from "fs";
import path from "path";

import { Masonry } from "@mui/lab";
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Container,
    Typography,
} from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import React from "react";

import Layout, { LayoutContent } from "@/components/layout";
import { BlogPostMetadata } from "@/components/layout/BlogPostLayout";

interface BlogPost {
    file: string;
    metadata: BlogPostMetadata;
}

interface BlogProps {
    posts: BlogPost[];
}

const Blog = ({ posts }: BlogProps): React.ReactElement => {
    const orderedPosts = posts
        .map((post) => ({
            ...post,
            metadata: {
                ...post.metadata,
                publishedDate: new Date(post.metadata.publishedDate),
            },
        }))
        .sort(
            (a, b) =>
                b.metadata.publishedDate.getTime() -
                a.metadata.publishedDate.getTime(),
        );
    return (
        <Container maxWidth={false} disableGutters>
            <Head>
                <title>Blog of Nadun De Silva</title>
            </Head>
            <Layout>
                <LayoutContent>
                    <Masonry columns={4} spacing={2}>
                        {orderedPosts.map(
                            (post): React.ReactElement => (
                                <Card key={post.file} sx={{ maxWidth: 345 }}>
                                    <Link href={`/blog/posts/${post.file}`}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={
                                                    post.metadata.mainImage.src
                                                }
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="h6"
                                                    component="div"
                                                >
                                                    {post.metadata.title}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                >
                                                    {post.metadata.description}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                    sx={{ fontSize: 12, pt: 1 }}
                                                >
                                                    Published on{" "}
                                                    {post.metadata.publishedDate.toDateString()}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Link>
                                </Card>
                            ),
                        )}
                    </Masonry>
                </LayoutContent>
            </Layout>
        </Container>
    );
};

export async function getStaticProps(): Promise<{ props: BlogProps }> {
    const blogFilesDir = path.join(process.cwd(), "pages/blog/posts");
    const blogFiles = fs.readdirSync(blogFilesDir);

    const posts = await Promise.all(
        blogFiles.map(async (blogFile): Promise<BlogPost> => {
            const out = await import(`./posts/${blogFile}`);
            return {
                file: blogFile.substring(0, blogFile.lastIndexOf(".")),
                metadata: out.meta,
            };
        }),
    );

    return {
        props: {
            posts,
        },
    };
}

export default Blog;
