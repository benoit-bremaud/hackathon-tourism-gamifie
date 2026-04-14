import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: siteConfig.name,
        short_name: siteConfig.shortName,
        description: siteConfig.description,
        start_url: "/",
        display: "standalone",
        background_color: siteConfig.backgroundColor,
        theme_color: siteConfig.themeColor,
        orientation: "portrait",
        icons: [
            {
                src: "/branding/picrush-icon-192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/branding/picrush-icon-512.png",
                sizes: "512x512",
                type: "image/png",
            },
            {
                src: "/branding/picrush-icon-maskable-512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "maskable",
            },
        ],
    };
}
