import type { Metadata } from "next";
import { BottomNav } from "@/components/app/bottom-nav";
import { Container } from "@/components/layout/container";
import { PlaceholderBadge } from "@/components/placeholders/placeholder-badge";
import { TripCard } from "@/components/trips/trip-card";
import { trips } from "@/lib/mock-data";

export const metadata: Metadata = {
    title: "Voyages",
};

export default function TripsPage() {
    return (
        <>
            <section className="py-6 md:py-10">
                <Container>
                    <div className="space-y-6">
                        <PlaceholderBadge variant="accent">Liste des voyages</PlaceholderBadge>
                        <div className="space-y-3">
                            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                                Tous les voyages mockés du proof of concept
                            </h1>
                            <p className="text-muted-foreground max-w-2xl leading-relaxed">
                                Destinations, dates, membres, covers et statuts visuels sont
                                cohérents entre les écrans pour donner une impression de produit déjà avancé.
                            </p>
                        </div>

                        <div className="grid gap-4 lg:grid-cols-3">
                            {trips.map((trip) => (
                                <TripCard key={trip.id} trip={trip} />
                            ))}
                        </div>
                    </div>
                </Container>
            </section>
            <BottomNav />
        </>
    );
}
