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
    themeColor: "#ffffff",
    width: "device-width",
    initialScale: 1,
    maximumScale: 1, // Préparation mobile-first / PWA
};

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    metadataBase: new URL(siteConfig.url),
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
                <main id="main" className="flex-1">
                    {children}
                </main>
            </body>
        </html>
    );
}
