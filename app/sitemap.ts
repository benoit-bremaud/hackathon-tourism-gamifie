import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();
    const staticPages = ["", "/contact", "/contact/form"];

    return staticPages.map((route) => ({
        url: `${siteConfig.url}${route}`,
        lastModified,
        changeFrequency: "monthly",
        priority: route === "" ? 1.0 : 0.8,
    }));
}
