import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BottomNav } from "@/components/app/bottom-nav";
import { Container } from "@/components/layout/container";
import { MemberList } from "@/components/members/member-list";
import { PlaceholderBadge } from "@/components/placeholders/placeholder-badge";
import { TripSubnav } from "@/components/trips/trip-subnav";
import { getTrip, getTripMembers } from "@/lib/mock-data";

type PageProps = {
    params: Promise<{ tripId: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { tripId } = await params;
    return { title: getTrip(tripId)?.name ? `Membres · ${getTrip(tripId)?.name}` : "Membres" };
}

export default async function TripMembersPage({ params }: PageProps) {
    const { tripId } = await params;
    const trip = getTrip(tripId);
    if (!trip) notFound();

    const members = getTripMembers(tripId);

    return (
        <>
            <section className="py-6 md:py-10">
                <Container>
                    <div className="space-y-6">
                        <TripSubnav tripId={tripId} />
                        <div className="space-y-3">
                            <PlaceholderBadge variant="accent">Membres & invitations</PlaceholderBadge>
                            <h1 className="text-3xl font-semibold tracking-tight">Équipe de {trip.name}</h1>
                            <p className="text-muted-foreground max-w-2xl leading-relaxed">
                                Rôles visuels, invitations en attente et génération de lien non branchée.
                            </p>
                        </div>
                        <MemberList members={members} />
                    </div>
                </Container>
            </section>
            <BottomNav />
        </>
    );
}
