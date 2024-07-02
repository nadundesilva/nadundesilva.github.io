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
 * © 2024 Nadun De Silva. All rights reserved.
 */
import React from "react";

import ArticlesList from "@/components/blog-articles/ArticlesList";

export const metadata = {
    title: "Kubernetes the Right Way",
    description:
        "Kubernetes the Right Way series is about the best practices and techniques for improving your Kubernetes Clusters.",
};

const BlogArticles = async (): Promise<React.ReactElement> => (
    <ArticlesList pathPattern="app/(content)/blog-articles/(articles)/kubernetes-the-right-way/**/page.mdx" />
);

export default BlogArticles;
