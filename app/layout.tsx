import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ParallaxBackgroundClient } from "@/components/layout/parallaxBackgroundClient";
import { Poppins, Quicksand } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
});

const quicksand = Quicksand({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
    variable: "--font-quicksand",
});

export const viewport: Viewport = {
    themeColor: "#ffffff",
    width: "device-width",
    initialScale: 1,
};

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: siteConfig.locale,
        siteName: siteConfig.name,
        title: siteConfig.name,
        description: siteConfig.description,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
        creator: siteConfig.social.twitter,
    },
    robots: {
        index: true,
        follow: true,
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: siteConfig.logo,
    image: siteConfig.ogImage,
    description: siteConfig.description,
    contactPoint: {
        "@type": "ContactPoint",
        telephone: siteConfig.contactPhone,
        contactType: "customer service",
        availableLanguage: "French",
        email: siteConfig.contactEmail,
    },
    sameAs: [siteConfig.social.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="fr"
            className={`${poppins.className} ${quicksand.variable}`}
            suppressHydrationWarning
        >
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="bg-background text-foreground flex min-h-dvh flex-col antialiased">
                <ParallaxBackgroundClient />
                <Header />
                <main id="main" className="flex-1 focus:outline-none" tabIndex={-1}>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
