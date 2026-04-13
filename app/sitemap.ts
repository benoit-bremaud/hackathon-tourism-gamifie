import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();
    const staticPages = [
        "",
        "/login",
        "/dashboard",
        "/trips",
        "/trips/lisbon-sunbook",
        "/trips/lisbon-sunbook/sessions",
        "/trips/lisbon-sunbook/photos",
        "/trips/lisbon-sunbook/photos/p1",
        "/trips/lisbon-sunbook/members",
        "/trips/lisbon-sunbook/album",
    ];

    return staticPages.map((route) => ({
        url: `${siteConfig.url}${route}`,
        lastModified,
        changeFrequency: "monthly",
        priority: route === "" ? 1.0 : 0.8,
    }));
}
