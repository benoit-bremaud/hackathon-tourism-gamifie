import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BottomNav } from "@/components/app/bottom-nav";
import { Container } from "@/components/layout/container";
import { PlaceholderBadge } from "@/components/placeholders/placeholder-badge";
import { SessionCard } from "@/components/sessions/session-card";
import { TripSubnav } from "@/components/trips/trip-subnav";
import { Button } from "@/components/ui/button";
import { getTrip, getTripSessions } from "@/lib/mock-data";

type PageProps = {
    params: Promise<{ tripId: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { tripId } = await params;
    return { title: getTrip(tripId)?.name ? `Sessions · ${getTrip(tripId)?.name}` : "Sessions" };
}

export default async function TripSessionsPage({ params }: PageProps) {
    const { tripId } = await params;
    const trip = getTrip(tripId);
    if (!trip) notFound();

    const sessions = getTripSessions(tripId);

    return (
        <>
            <section className="py-6 md:py-10">
                <Container>
                    <div className="space-y-6">
                        <TripSubnav tripId={tripId} />
                        <div className="space-y-3">
                            <PlaceholderBadge variant="accent">Écran sessions</PlaceholderBadge>
                            <h1 className="text-3xl font-semibold tracking-tight">Sessions de {trip.name}</h1>
                            <p className="text-muted-foreground max-w-2xl leading-relaxed">
                                Timeline placeholder de prises de vue et moments clés du voyage.
                            </p>
                        </div>
                        <Button className="rounded-full px-5">Créer une session</Button>
                        <div className="space-y-4">
                            {sessions.map((session) => (
                                <SessionCard key={session.id} session={session} />
                            ))}
                        </div>
                    </div>
                </Container>
            </section>
            <BottomNav />
        </>
    );
}
