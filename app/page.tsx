import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    title: "Accueil",
    description:
        "Starter Next.js réutilisable pour créer rapidement un site vitrine avec une architecture propre et des composants réutilisables.",
    openGraph: {
        title: `${siteConfig.name} — Starter Next.js réutilisable`,
        description:
            "Base propre pour lancer rapidement un site vitrine avec Next.js, Tailwind CSS, TypeScript et des composants réutilisables.",
    },
};

const features = [
    {
        title: "Base propre",
        text: "Une architecture simple et maintenable pour démarrer rapidement de nouveaux projets.",
    },
    {
        title: "Composants réutilisables",
        text: "Des blocs réutilisables pour construire des pages vitrines rapidement et proprement.",
    },
    {
        title: "Configuration centralisée",
        text: "Les informations globales du site peuvent être regroupées dans une configuration unique.",
    },
] as const;

const steps = [
    {
        title: "Configurer le site",
        text: "Nom du site, domaine, SEO de base, navigation, contacts et branding global.",
    },
    {
        title: "Adapter les pages",
        text: "Créer ou modifier les sections utiles selon le site à reproduire.",
    },
    {
        title: "Remplacer les contenus",
        text: "Changer les textes, images, CTA et formulaires selon les besoins du projet.",
    },
] as const;

export default function HomePage() {
    return (
        <>
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    name: siteConfig.name,
                    url: siteConfig.url,
                    description: siteConfig.description,
                }}
            />

            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    itemListElement: [
                        {
                            "@type": "ListItem",
                            position: 1,
                            name: "Accueil",
                            item: siteConfig.url,
                        },
                    ],
                }}
            />

            <section aria-label="Introduction" className="py-16 md:py-24">
                <Container>
                    <div className="mx-auto max-w-4xl text-center">
                        <Image
                            src="/logo-transparent.png"
                            alt="Logo du site"
                            width={420}
                            height={160}
                            className="mx-auto h-auto w-[220px] md:w-[320px]"
                            priority
                        />

                        <h1 className="mt-8 text-4xl font-semibold tracking-tight md:text-6xl">
                            {siteConfig.name}
                        </h1>

                        <p className="text-muted-foreground mt-6 text-base leading-relaxed md:text-lg">
                            {siteConfig.description}
                        </p>

                        <p className="text-muted-foreground mt-4 text-base leading-relaxed md:text-lg">
                            Utilise cette page comme base de départ pour construire rapidement un
                            nouveau site vitrine à partir d’un squelette propre et réutilisable.
                        </p>

                        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Button
                                asChild
                                size="lg"
                                className="rounded-full rounded-tr-md font-light tracking-wider uppercase"
                            >
                                <Link href="/contact">Nous contacter</Link>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="rounded-full rounded-tr-md font-light tracking-wider uppercase"
                            >
                                <Link href="/contact/form">Voir le formulaire</Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            <section aria-label="Fonctionnalités" className="py-16 md:py-24">
                <Container>
                    <div className="grid gap-6 md:grid-cols-3">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="bg-card border-border rounded-2xl border p-6 shadow-sm"
                            >
                                <h2 className="text-xl font-semibold">{feature.title}</h2>
                                <p className="text-muted-foreground mt-3 leading-relaxed">
                                    {feature.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            <section aria-label="Exemple de section visuelle" className="py-16 md:py-24">
                <Container>
                    <div className="grid items-center gap-10 md:grid-cols-2">
                        <div className="space-y-6">
                            <h2 className="text-primary text-2xl font-bold tracking-tight md:text-3xl">
                                Une base prête à être adaptée
                            </h2>

                            <p className="text-muted-foreground leading-relaxed">
                                Ce squelette a pour but de fournir une fondation stable pour créer
                                rapidement plusieurs sites vitrines en conservant une structure
                                claire, une stack cohérente et des composants faciles à réutiliser.
                            </p>

                            <p className="text-muted-foreground leading-relaxed">
                                Tu peux remplacer cette section par un hero, une section services,
                                une grille de cartes, des témoignages, une FAQ ou tout autre bloc
                                nécessaire selon le site cible.
                            </p>

                            <div className="pt-2">
                                <Button
                                    asChild
                                    className="rounded-full rounded-tr-md font-light tracking-wider uppercase"
                                >
                                    <Link href="/contact">Démarrer un projet</Link>
                                </Button>
                            </div>
                        </div>

                        <div className="bg-muted border-border flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-2xl border">
                            <span className="text-muted-foreground text-sm uppercase tracking-[0.2em]">
                                Placeholder image
                            </span>
                        </div>
                    </div>
                </Container>
            </section>

            <section aria-label="Étapes" className="py-16 md:py-24">
                <Container>
                    <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
                        Workflow conseillé
                    </h2>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {steps.map((step, index) => (
                            <div
                                key={step.title}
                                className="bg-card border-border rounded-2xl border p-6 shadow-sm"
                            >
                                <div className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
                                    Étape {index + 1}
                                </div>
                                <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                                <p className="text-muted-foreground mt-3 leading-relaxed">
                                    {step.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
}