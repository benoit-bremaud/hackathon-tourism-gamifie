export const siteConfig = {
    name: "PicRush",
    description: "Planifiez, capturez et composez vos voyages collaboratifs en une seule app.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    logo: "/branding/picrush-logo.svg",
    ogImage: "/branding/picrush-logo.svg",
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
        github: "https://github.com/picrush",
    },
};

export type SiteConfig = typeof siteConfig;
