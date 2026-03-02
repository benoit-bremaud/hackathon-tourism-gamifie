// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://protecaudio.fr";
    return [
        { url: `${base}/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
        {
            url: `${base}/garantie`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${base}/protection`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${base}/contact`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.8,
        },
        {
            url: `${base}/contact/form`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.7,
        },
        {
            url: `${base}/appeler-agence`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.6,
        },
        {
            url: `${base}/join`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: `${base}/mentions-legales`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
    ];
}
