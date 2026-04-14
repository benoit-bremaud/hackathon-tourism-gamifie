import Link from "next/link";
import type { Metadata } from "next";
import { LockKeyhole, Mail, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/container";
import { GradientPhoto } from "@/components/placeholders/gradient-photo";
import { PlaceholderBadge } from "@/components/placeholders/placeholder-badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { imageAssets } from "@/lib/mock-data";

export const metadata: Metadata = {
    title: "Connexion",
};

export default function LoginPage() {
    return (
        <section className="py-8 md:py-14">
            <Container>
                <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="space-y-5">
                        <PlaceholderBadge variant="accent">Demo auth screen</PlaceholderBadge>
                        <h1 className="max-w-md text-4xl font-semibold tracking-tight">
                            Connectez-vous pour retrouver vos voyages et vos souvenirs partagés.
                        </h1>
                        <p className="text-muted-foreground max-w-md leading-relaxed">
                            Écran de démonstration non branché. L&rsquo;objectif ici est de montrer
                            une entrée d&rsquo;application premium, simple et crédible sur mobile.
                        </p>
                        <GradientPhoto
                            tone="coast"
                            imageSrc={imageAssets.groupRooftop}
                            imageAlt="Groupe de voyageurs"
                            ratio="hero"
                            subtitle="TravelFlow access"
                            title="Roadbook, galerie et album au même endroit"
                        />
                    </div>

                    <Card className="rounded-[34px] border-white/60 bg-card/95 py-0 shadow-[0_24px_80px_rgba(15,31,22,0.10)]">
                        <CardContent className="space-y-5 p-6 md:p-8">
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                    <Sparkles className="h-5 w-5" />
                                </div>
                                <div>
                                    <div className="text-lg font-semibold">Connexion</div>
                                    <div className="text-muted-foreground text-sm">
                                        Placeholder sans authentification réelle
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium" htmlFor="email">
                                    Email
                                </label>
                                <div className="relative">
                                    <Mail className="text-muted-foreground absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="clara@travelflow.app"
                                        className="h-12 rounded-2xl border-border/70 bg-background pl-11"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium" htmlFor="password">
                                    Mot de passe
                                </label>
                                <div className="relative">
                                    <LockKeyhole className="text-muted-foreground absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2" />
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="••••••••"
                                        className="h-12 rounded-2xl border-border/70 bg-background pl-11"
                                    />
                                </div>
                            </div>

                            <Button asChild className="h-12 w-full rounded-2xl text-base">
                                <Link href="/dashboard">Connexion</Link>
                            </Button>

                            <div className="flex items-center justify-between text-sm">
                                <Link href="/" className="text-muted-foreground hover:text-foreground">
                                    Retour au produit
                                </Link>
                                <Link href="/dashboard" className="text-primary font-medium">
                                    Créer un compte
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </Container>
        </section>
    );
}
