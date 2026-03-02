import { Container } from "@/components/layout/container";
import ProtectionPill from "@/components/special/ProtectionPill";
import type { Metadata } from "next";
import { AudioCentersBlock } from "@/components/special/audioCenter";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
    title: "Protection",
    description:
        "Découvrez nos solutions de protection d’activité pour audioprothésistes : Responsabilité Civile Professionnelle, Protection Juridique, Perte d’Exploitation. Protégez votre activité et sécurisez votre avenir avec nos offres adaptées.",
    openGraph: {
        title: "Protection d’activité audioprothésistes",
        description:
            "RC Pro, Multirisque, Protection juridique, Perte d’exploitation. Sécurisez votre activité d’audioprothésiste.",
    },
};

export default function Protection() {
    return (
        <>
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    name: "Protection d'activité audioprothésiste",
                    provider: {
                        "@type": "Organization",
                        name: "ProtecAudio",
                        url: "https://protecaudio.fr",
                    },
                    description:
                        "Solutions de protection globale pour l'activité d'audioprothésiste : RC Pro, Multirisque, Protection juridique, Perte d'exploitation.",
                    serviceType: "Assurance professionnelle audioprothésiste",
                    areaServed: {
                        "@type": "Country",
                        name: "France",
                    },
                    hasOfferCatalog: {
                        "@type": "OfferCatalog",
                        name: "Protection d'activité",
                        itemListElement: [
                            {
                                "@type": "Offer",
                                itemOffered: {
                                    "@type": "Service",
                                    name: "Responsabilité Civile Professionnelle",
                                    description:
                                        "Couverture de la responsabilité professionnelle de l'audioprothésiste.",
                                },
                            },
                            {
                                "@type": "Offer",
                                itemOffered: {
                                    "@type": "Service",
                                    name: "Multirisque professionnelle",
                                    description:
                                        "Protection des locaux, du matériel et de l'activité.",
                                },
                            },
                            {
                                "@type": "Offer",
                                itemOffered: {
                                    "@type": "Service",
                                    name: "Protection juridique",
                                    description:
                                        "Accompagnement juridique pour l'activité d'audioprothésiste.",
                                },
                            },
                            {
                                "@type": "Offer",
                                itemOffered: {
                                    "@type": "Service",
                                    name: "Perte d'exploitation",
                                    description:
                                        "Garantie de continuité de revenus en cas d'interruption d'activité.",
                                },
                            },
                        ],
                    },
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
                            item: "https://protecaudio.fr",
                        },
                        {
                            "@type": "ListItem",
                            position: 2,
                            name: "Protection",
                            item: "https://protecaudio.fr/protection",
                        },
                    ],
                }}
            />
            <section aria-label="Solutions de protection">
                <Container>
                    <ProtectionPill />
                    {/* <Button asChild size="lg">
                        <Link href="/contact">Prendre RDV</Link>
                    </Button> */}
                </Container>
            </section>
            <section aria-label="Centres auditifs partenaires">
                <Container>
                    <AudioCentersBlock />
                </Container>
            </section>
            <section aria-label="Pourquoi nous choisir" className="py-16 md:py-24">
                <Container>
                    <h2 className="text-center text-2xl font-semibold tracking-tight md:text-3xl">
                        POURQUOI NOUS CHOISIR ?
                    </h2>

                    <div className="bg-accent mt-10 rounded-3xl border p-8 md:p-12">
                        <div className="grid gap-10 md:grid-cols-2">
                            {/* Colonne gauche */}
                            <div className="space-y-10">
                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold md:text-xl">
                                        Une équipe d’experts engagés
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Notre équipe est stable, se forme régulièrement et est
                                        surtout fière du taux de satisfaction de nos clients. La
                                        confiance, c’est notre engagement de tous les instants.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold md:text-xl">
                                        Suivi et qualité
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Répondre généralement sous 48H à toutes vos demandes est
                                        notre engagement. En cas de sinistre, notre service dédié
                                        100% en France vous accompagne pas à pas jusqu’à
                                        l’indemnisation.
                                    </p>
                                </div>
                            </div>

                            {/* Colonne droite */}
                            <div className="space-y-10">
                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold md:text-xl">
                                        Une des offres les plus larges du marché
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Nous travaillons avec plus de 20 partenaires assureurs,
                                        garantissant une véritable démarche de conseil,
                                        transparente, à l’écoute et forcément avec une solution.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold md:text-xl">
                                        Un accompagnement sur-mesure
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Parce que chaque situation est spécifique, nos chargés de
                                        clientèle prennent soin de comprendre vos besoins et
                                        préoccupations pour vous proposer les garanties les mieux
                                        adaptées.{" "}
                                        <span className="text-foreground font-semibold">
                                            Nous pouvons faire évoluer votre contrat
                                        </span>{" "}
                                        grâce aux points de situation que nous vous proposerons
                                        régulièrement.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
