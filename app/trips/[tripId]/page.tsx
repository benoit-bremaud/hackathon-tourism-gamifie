import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, Images, Send } from "lucide-react";
import { BottomNav } from "@/components/app/bottom-nav";
import { Container } from "@/components/layout/container";
import { AlbumGallery } from "@/components/album/album-gallery";
import { MemberList } from "@/components/members/member-list";
import { PhotoGrid } from "@/components/photos/photo-grid";
import { PlaceholderBadge } from "@/components/placeholders/placeholder-badge";
import { SessionCard } from "@/components/sessions/session-card";
import { TripHero } from "@/components/trips/trip-hero";
import { TripSubnav } from "@/components/trips/trip-subnav";
import { TripSummary } from "@/components/trips/trip-summary";
import { Button } from "@/components/ui/button";
import { getTrip, getTripMembers, getTripPhotos, getTripSessions } from "@/lib/mock-data";

type PageProps = {
    params: Promise<{ tripId: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { tripId } = await params;
    const trip = getTrip(tripId);

    return {
        title: trip ? trip.name : "Voyage",
    };
}

export default async function TripDetailPage({ params }: PageProps) {
    const { tripId } = await params;
    const trip = getTrip(tripId);

    if (!trip) notFound();

    const sessions = getTripSessions(tripId);
    const photos = getTripPhotos(tripId);
    const members = getTripMembers(tripId);

    return (
        <>
            <section className="py-6 md:py-10">
                <Container>
                    <div className="space-y-6">
                        <TripSubnav tripId={tripId} />
                        <TripHero trip={trip} />
                        <TripSummary trip={trip} />

                        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between gap-3">
                                    <h2 className="text-2xl font-semibold tracking-tight">Sessions</h2>
                                    <Button asChild variant="outline" className="rounded-full">
                                        <Link href={`/trips/${tripId}/sessions`}>
                                            Voir tout
                                            <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                                {sessions.slice(0, 2).map((session) => (
                                    <SessionCard key={session.id} session={session} />
                                ))}
                            </div>

                            <div className="rounded-[34px] border border-white/60 bg-card/90 p-5 shadow-sm">
                                <div className="flex flex-wrap gap-2">
                                    <PlaceholderBadge variant="muted">Membres</PlaceholderBadge>
                                    <PlaceholderBadge>{members.length} participants</PlaceholderBadge>
                                </div>
                                <div className="mt-5 flex flex-wrap gap-3">
                                    {members.map((member) => (
                                        <div key={member.id} className="flex items-center gap-3 rounded-full bg-secondary/75 px-3 py-2">
                                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-semibold">
                                                {member.avatar}
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium">{member.name}</div>
                                                <div className="text-muted-foreground text-xs">{member.role}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-5 grid grid-cols-2 gap-3">
                                    <Button className="rounded-2xl">
                                        <Send className="h-4 w-4" />
                                        Inviter
                                    </Button>
                                    <Button asChild variant="outline" className="rounded-2xl">
                                        <Link href={`/trips/${tripId}/members`}>Voir les membres</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between gap-3">
                                <h2 className="text-2xl font-semibold tracking-tight">Galerie récente</h2>
                                <Button asChild variant="outline" className="rounded-full">
                                    <Link href={`/trips/${tripId}/photos`}>
                                        <Images className="h-4 w-4" />
                                        Voir les photos
                                    </Link>
                                </Button>
                            </div>
                            <PhotoGrid trip={trip} photos={photos.slice(0, 4)} />
                        </div>

                        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
                            <div>
                                <MemberList members={members.slice(0, 3)} />
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between gap-3">
                                    <h2 className="text-2xl font-semibold tracking-tight">Album final teaser</h2>
                                    <Button asChild variant="outline" className="rounded-full">
                                        <Link href={`/trips/${tripId}/album`}>Voir l&rsquo;album</Link>
                                    </Button>
                                </div>
                                <AlbumGallery photos={photos} />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <BottomNav />
        </>
    );
}
