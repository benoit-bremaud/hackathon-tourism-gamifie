export const siteConfig = {
    name: "TravelFlow",
    description: "Planifiez, capturez et composez vos voyages collaboratifs en une seule app.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    ogImage: "/og-image.png",
    mainNav: [
        {
            title: "Produit",
            href: "/",
        },
        {
            title: "Dashboard",
            href: "/dashboard",
        },
        {
            title: "Voyages",
            href: "/trips",
        },
        {
            title: "Connexion",
            href: "/login",
        },
    ],
    links: {
        github: "https://github.com/travelflow",
    },
};

export type SiteConfig = typeof siteConfig;
