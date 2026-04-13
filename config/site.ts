export const siteConfig = {
    name: "TravelFlow",
    description: "Planifiez vos voyages collaboratifs en temps réel.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    ogImage: "/og-image.png",
    mainNav: [
        {
            title: "Accueil",
            href: "/",
        },
        {
            title: "Dashboard",
            href: "/dashboard",
        },
    ],
    links: {
        github: "https://github.com/travelflow",
    },
};

export type SiteConfig = typeof siteConfig;
