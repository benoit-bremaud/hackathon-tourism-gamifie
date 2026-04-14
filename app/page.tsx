import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BookImage, Compass, MapPinned, Users } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { GradientPhoto } from "@/components/placeholders/gradient-photo";
import { MockStat } from "@/components/placeholders/mock-stat";
import { PlaceholderBadge } from "@/components/placeholders/placeholder-badge";
import { siteConfig } from "@/config/site";
import { imageAssets, productHighlights, trips } from "@/lib/mock-data";

export const metadata: Metadata = {
    title: "TravelFlow",
    description: siteConfig.description,
};

const featuredTrip = trips[0];

export default function HomePage() {
    return (
        <>
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "SoftwareApplication",
                    name: siteConfig.name,
                    url: siteConfig.url,
                    description: siteConfig.description,
                    applicationCategory: "TravelApplication",
                    operatingSystem: "Web",
                }}
            />

            <div className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(circle_at_top,rgba(244,181,122,0.28),transparent_55%),radial-gradient(circle_at_70%_30%,rgba(107,143,179,0.22),transparent_40%)]" />

                <section className="py-10 md:py-16">
                    <Container>
                        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                            <div className="space-y-6">
                                <PlaceholderBadge variant="accent">
                                    Product demo · mobile-first
                                </PlaceholderBadge>
                                <div className="space-y-4">
                                    <h1 className="max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                                        Le carnet de voyage collaboratif pensé comme un vrai produit.
                                    </h1>
                                    <p className="text-muted-foreground max-w-xl text-base leading-relaxed md:text-lg">
                                        Organisez vos voyages, capturez vos moments à plusieurs et
                                        composez un album final premium, même dans cette version 100%
                                        placeholder.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-3 sm:flex-row">
                                    <Button asChild size="lg" className="h-12 rounded-full px-6">
                                        <Link href="/dashboard">
                                            Ouvrir le dashboard
                                            <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </Button>
                                    <Button asChild variant="outline" size="lg" className="h-12 rounded-full px-6">
                                        <Link href="/login">Voir la connexion</Link>
                                    </Button>
                                </div>

                                <div className="grid grid-cols-3 gap-3">
                                    <MockStat label="voyages mockés" value="3" />
                                    <MockStat label="photos scénarisées" value="261" />
                                    <MockStat label="membres visibles" value="8" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <GradientPhoto
                                    tone={featuredTrip.tone}
                                    imageSrc={imageAssets.mobileJourney}
                                    imageAlt="Aperçu mobile TravelFlow"
                                    ratio="hero"
                                    subtitle="Trip teaser"
                                    title={featuredTrip.name}
                                    overlay={
                                        <div className="flex h-full flex-col justify-between p-5">
                                            <div className="flex justify-between gap-3">
                                                <div className="rounded-full bg-white/20 px-3 py-1 text-xs text-white backdrop-blur">
                                                    {featuredTrip.destination}
                                                </div>
                                                <div className="rounded-full bg-black/20 px-3 py-1 text-xs text-white backdrop-blur">
                                                    {featuredTrip.status}
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="rounded-[24px] bg-white/16 p-4 text-white backdrop-blur">
                                                    <div className="text-xs uppercase tracking-[0.22em] text-white/75">
                                                        Session active
                                                    </div>
                                                    <div className="mt-2 text-lg font-medium">
                                                        Blue hour bridge
                                                    </div>
                                                </div>
                                                <div className="rounded-[24px] bg-white/16 p-4 text-white backdrop-blur">
                                                    <div className="text-xs uppercase tracking-[0.22em] text-white/75">
                                                        Album draft
                                                    </div>
                                                    <div className="mt-2 text-lg font-medium">
                                                        Cover prête
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                />

                                <div className="grid grid-cols-2 gap-4">
                                    <GradientPhoto
                                        tone="coast"
                                        imageSrc={featuredTrip.galleryPreview[1]}
                                        imageAlt="Aperçu galerie"
                                        ratio="portrait"
                                        subtitle="Galerie"
                                        title="Pastel stop"
                                    />
                                    <GradientPhoto
                                        tone="desert"
                                        imageSrc={imageAssets.albumBoard}
                                        imageAlt="Teaser album"
                                        ratio="portrait"
                                        subtitle="Album"
                                        title="Golden rails"
                                    />
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                <section className="py-8 md:py-12">
                    <Container>
                        <div className="grid gap-4 md:grid-cols-3">
                            {productHighlights.map((item, index) => {
                                const icons = [Compass, Users, BookImage];
                                const Icon = icons[index] ?? Compass;

                                return (
                                    <div
                                        key={item.title}
                                        className="rounded-[30px] border border-white/60 bg-card/90 p-6 shadow-sm"
                                    >
                                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <h2 className="mt-5 text-xl font-semibold tracking-tight">
                                            {item.title}
                                        </h2>
                                        <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                                            {item.body}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </Container>
                </section>

                <section className="py-8 md:py-12">
                    <Container>
                        <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
                            <div className="rounded-[34px] border border-white/60 bg-card/90 p-6 shadow-sm">
                                <PlaceholderBadge variant="muted">Mini aperçu voyage</PlaceholderBadge>
                                <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                                    {featuredTrip.name}
                                </h2>
                                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                                    {featuredTrip.description}
                                </p>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {featuredTrip.highlights.map((highlight) => (
                                        <PlaceholderBadge key={highlight}>{highlight}</PlaceholderBadge>
                                    ))}
                                </div>
                                <div className="mt-6 rounded-[26px] bg-secondary/70 p-4">
                                    <div className="flex items-center gap-2 text-sm font-medium">
                                        <MapPinned className="text-primary h-4 w-4" />
                                        Itinéraire partagé
                                    </div>
                                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                                        Miradouros, tram 28, rooftop lunch, blue hour sur le pont et
                                        une sortie album déjà structurée.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <GradientPhoto
                                    tone="city"
                                    imageSrc={featuredTrip.galleryPreview[0]}
                                    imageAlt="Souvenir mobile"
                                    ratio="square"
                                    subtitle="Souvenir mobile"
                                    title="Street diary"
                                />
                                <GradientPhoto
                                    tone="mountain"
                                    imageSrc={trips[1].coverImage}
                                    imageAlt={trips[1].name}
                                    ratio="portrait"
                                    subtitle="Prochain trip"
                                    title="Lake quiet"
                                />
                                <div className="col-span-2 rounded-[34px] border border-white/60 bg-[#1f3b31] p-6 text-white shadow-sm">
                                    <div className="text-xs uppercase tracking-[0.22em] text-white/65">
                                        Album final teaser
                                    </div>
                                    <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                                        Une maquette éditoriale qui donne envie d&rsquo;aller plus loin.
                                    </h3>
                                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/75">
                                        Double pages, séquences photo, citations courtes et couverture
                                        premium: le front raconte déjà clairement le produit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </div>
        </>
    );
}
