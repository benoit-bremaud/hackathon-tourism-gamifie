import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = siteConfig.url;
    const lastModified = new Date();

    return [
        {
            url: `${base}/`,
            lastModified,
            changeFrequency: "monthly",
            priority: 1.0,
        },
        {
            url: `${base}/test`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${base}/contact`,
            lastModified,
            changeFrequency: "yearly",
            priority: 0.7,
        },
        {
            url: `${base}/contact/form`,
            lastModified,
            changeFrequency: "yearly",
            priority: 0.6,
        },
    ];
}