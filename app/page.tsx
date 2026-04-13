import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";
import { AnimatedCounter } from "@/components/special/AnimatedCounter";
import { FeatureGrid } from "@/components/special/FeatureGrid";
import { AdvantageCard } from "@/components/special/AdvantageCard";
import { Sparkles, Zap, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: `${siteConfig.name} | Agence Digitale Performance & Design`,
    description: siteConfig.description,
    openGraph: {
        title: `${siteConfig.name} | Solutions Digitales sur-mesure`,
        description: siteConfig.description,
    },
};

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

            {/* Hero Section */}
            <section
                aria-label="Introduction"
                className="relative flex min-h-[80vh] items-center overflow-hidden py-20"
            >
                <Container>
                    <div className="relative z-10 mx-auto max-w-4xl text-center">
                        <div className="bg-primary/10 text-primary mx-auto mb-8 w-fit rounded-full px-4 py-1.5 text-sm font-semibold tracking-wide uppercase">
                            Expertise & Performance
                        </div>

                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
                            Propulsez votre <br />
                            <span className="text-primary">Présence Digitale</span>
                        </h1>

                        <p className="text-muted-foreground mx-auto mt-8 max-w-2xl text-lg leading-relaxed md:text-xl">
                            {siteConfig.description}
                        </p>

                        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Button
                                asChild
                                size="lg"
                                className="h-14 rounded-full px-8 text-base font-semibold uppercase tracking-wider"
                            >
                                <Link href="/contact" className="flex items-center gap-2">
                                    Démarrer un projet <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="h-14 rounded-full px-8 text-base font-semibold uppercase tracking-wider"
                            >
                                <Link href="/contact/form">Nos solutions</Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Stats Section */}
            <section className="bg-primary/5 py-16">
                <Container>
                    <div className="grid gap-10 text-center md:grid-cols-3">
                        <AnimatedCounter value={150} suffix="+" label="Projets livrés" />
                        <AnimatedCounter value={98} suffix="%" label="Satisfaction client" />
                        <AnimatedCounter value={10} label="Ans d'expertise" />
                    </div>
                </Container>
            </section>

            {/* Features Section */}
            <section className="py-20 md:py-32">
                <Container>
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                            Nos Piliers de réussite
                        </h2>
                        <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
                            Nous combinons design, technologie et stratégie pour créer des
                            expériences mémorables.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        <AdvantageCard
                            title="Performance"
                            body="Des architectures web ultra-rapides et optimisées pour un taux de conversion maximal."
                            icon={Zap}
                            headerClassName="bg-sky-600"
                        />
                        <AdvantageCard
                            title="Design"
                            body="Une approche centrée sur l'utilisateur pour une interface intuitive et esthétique."
                            icon={Sparkles}
                            headerClassName="bg-indigo-600"
                        />
                        <AdvantageCard
                            title="Sécurité"
                            body="Protection intégrale de vos données et conformité aux standards de sécurité actuels."
                            icon={ShieldCheck}
                            headerClassName="bg-emerald-600"
                        />
                    </div>
                </Container>
            </section>

            {/* Details Section */}
            <FeatureGrid />

            {/* CTA Section */}
            <section className="py-20">
                <Container>
                    <div className="bg-primary rounded-3xl p-8 text-center text-white md:p-16">
                        <h2 className="text-3xl font-bold md:text-5xl">
                            Prêt à transformer votre vision ?
                        </h2>
                        <p className="mx-auto mt-6 max-w-2xl text-lg opacity-90">
                            Rejoignez les entreprises qui nous font confiance pour leur
                            développement stratégique.
                        </p>
                        <Button
                            asChild
                            size="lg"
                            variant="secondary"
                            className="mt-10 h-14 rounded-full px-10 text-base font-bold uppercase tracking-wider"
                        >
                            <Link href="/contact">Parlons de votre projet</Link>
                        </Button>
                    </div>
                </Container>
            </section>
        </>
    );
}
