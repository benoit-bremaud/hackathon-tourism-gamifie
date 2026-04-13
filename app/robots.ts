import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): Metadata {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/api/", "/_next/", "/static/"],
        },
        sitemap: `${siteConfig.url}/sitemap.xml`,
    };
}
