import "./globals.css";
import { Header } from "@/components/layout/header";

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
    themeColor: siteConfig.themeColor,
    width: "device-width",
    initialScale: 1,
    maximumScale: 1, // Préparation mobile-first / PWA
};

export const metadata: Metadata = {
    applicationName: siteConfig.name,
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    metadataBase: new URL(siteConfig.url),
    manifest: "/manifest.webmanifest",
    appleWebApp: {
        capable: true,
        statusBarStyle: "default",
        title: siteConfig.shortName,
    },
    formatDetection: {
        telephone: false,
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="fr"
            className={`${poppins.className} ${quicksand.variable}`}
            suppressHydrationWarning
        >
            <body className="bg-background text-foreground flex min-h-dvh flex-col antialiased">
                <Header />
                <main id="main" className="flex-1 pb-24">
                    {children}
                </main>
            </body>
        </html>
    );
}
