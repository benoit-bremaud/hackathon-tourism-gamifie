import "./globals.css";
import { Header } from "@/components/layout/header";
import { Poppins, Quicksand } from "next/font/google";
import type { Metadata } from "next";
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

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    metadataBase: new URL(siteConfig.url),
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
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: siteConfig.logo,
    description: siteConfig.description,
    contactPoint: {
        "@type": "ContactPoint",
        telephone: "+33123456789",
        contactType: "customer service",
        availableLanguage: "French",
        email: siteConfig.contactEmail,
    },
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

                <Header />
                <main id="main" className="flex-1">
                    {children}
                </main>

            </body>
        </html>
    );
}