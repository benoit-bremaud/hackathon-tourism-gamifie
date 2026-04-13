import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CalendarDays, Plus, WandSparkles } from "lucide-react";
import { BottomNav } from "@/components/app/bottom-nav";
import { Container } from "@/components/layout/container";
import { MockStat } from "@/components/placeholders/mock-stat";
import { PlaceholderBadge } from "@/components/placeholders/placeholder-badge";
import { GradientPhoto } from "@/components/placeholders/gradient-photo";
import { SessionCard } from "@/components/sessions/session-card";
import { TripCard } from "@/components/trips/trip-card";
import { Button } from "@/components/ui/button";
import { currentUser, getTripSessions, trips } from "@/lib/mock-data";

export const metadata: Metadata = {
    title: "Dashboard",
};

export default function DashboardPage() {
    const featuredTrip = trips[0];
    const recentSessions = getTripSessions(featuredTrip.id).slice(0, 2);

    return (
        <>
            <section className="py-6 md:py-10">
                <Container>
                    <div className="space-y-6">
                        <div className="flex flex-wrap items-center gap-3">
                            <PlaceholderBadge variant="accent">Dashboard principal</PlaceholderBadge>
                            <PlaceholderBadge>{currentUser.location}</PlaceholderBadge>
                        </div>

                        <div className="space-y-3">
                            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                                Bonjour {currentUser.name.split(" ")[0]}, vos voyages ont déjà une vraie allure de produit.
                            </h1>
                            <p className="text-muted-foreground max-w-2xl leading-relaxed">
                                Tout ici est mocké, mais la hiérarchie, les cartes et les teasers
                                donnent un dashboard démontrable dès maintenant.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                            <MockStat label="voyages actifs" value="3" />
                            <MockStat label="sessions cette semaine" value="4" />
                            <MockStat label="album en revue" value="1" />
                        </div>

                        <div className="rounded-[34px] border border-white/60 bg-card/90 p-4 shadow-sm">
                            <GradientPhoto
                                tone={featuredTrip.tone}
                                ratio="hero"
                                subtitle="Voyage à suivre"
                                title={featuredTrip.name}
                                overlay={
                                    <div className="flex h-full flex-col justify-between p-5">
                                        <div className="flex items-center justify-between gap-3">
                                            <div className="rounded-full bg-white/20 px-3 py-1 text-xs text-white backdrop-blur">
                                                {featuredTrip.destination}
                                            </div>
                                            <Button asChild size="sm" className="rounded-full">
                                                <Link href={`/trips/${featuredTrip.id}`}>
                                                    Ouvrir
                                                    <ArrowRight className="h-4 w-4" />
                                                </Link>
                                            </Button>
                                        </div>
                                        <div className="max-w-xs rounded-[26px] bg-white/16 p-4 text-white backdrop-blur">
                                            <div className="text-xs uppercase tracking-[0.22em] text-white/75">
                                                Prochaine session
                                            </div>
                                            <div className="mt-2 text-lg font-medium">
                                                Blue hour bridge · 20:10
                                            </div>
                                        </div>
                                    </div>
                                }
                            />
                        </div>

                        <div className="flex items-center justify-between gap-3">
                            <h2 className="text-2xl font-semibold tracking-tight">Vos voyages</h2>
                            <Button asChild className="rounded-full px-4">
                                <Link href="/trips">
                                    <Plus className="h-4 w-4" />
                                    Nouveau voyage
                                </Link>
                            </Button>
                        </div>

                        <div className="grid gap-4 lg:grid-cols-3">
                            {trips.map((trip) => (
                                <TripCard key={trip.id} trip={trip} />
                            ))}
                        </div>

                        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <CalendarDays className="text-primary h-5 w-5" />
                                    <h2 className="text-2xl font-semibold tracking-tight">
                                        Activité récente
                                    </h2>
                                </div>
                                {recentSessions.map((session) => (
                                    <SessionCard key={session.id} session={session} />
                                ))}
                            </div>

                            <div className="rounded-[34px] border border-white/60 bg-[#1f3b31] p-6 text-white shadow-sm">
                                <div className="flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-white/70">
                                    <WandSparkles className="h-4 w-4" />
                                    Placeholder insight
                                </div>
                                <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                                    L&rsquo;album final peut déjà être présenté à un jury ou à un client.
                                </h2>
                                <p className="mt-4 text-sm leading-relaxed text-white/75">
                                    Le dashboard relie proprement les voyages, les sessions, la
                                    galerie et l&rsquo;album, sans backend ni logique métier réelle.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <BottomNav />
        </>
    );
}
