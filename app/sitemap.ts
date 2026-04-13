import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { trips, getTripPhotos } from "@/lib/mock-data";

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();
    const staticPages = ["", "/login", "/dashboard", "/trips"];
    const tripPages = trips.flatMap((trip) => {
        const base = `/trips/${trip.id}`;
        const photoPages = getTripPhotos(trip.id).map((photo) => `${base}/photos/${photo.id}`);

        return [
            base,
            `${base}/sessions`,
            `${base}/photos`,
            `${base}/members`,
            `${base}/album`,
            ...photoPages,
        ];
    });
    const routes = [...staticPages, ...tripPages];

    return routes.map((route) => ({
        url: `${siteConfig.url}${route}`,
        lastModified,
        changeFrequency: "monthly",
        priority: route === "" ? 1.0 : 0.8,
    }));
}
