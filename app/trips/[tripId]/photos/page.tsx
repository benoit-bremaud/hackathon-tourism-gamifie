import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BottomNav } from "@/components/app/bottom-nav";
import { Container } from "@/components/layout/container";
import { PhotoGrid } from "@/components/photos/photo-grid";
import { PlaceholderBadge } from "@/components/placeholders/placeholder-badge";
import { TripSubnav } from "@/components/trips/trip-subnav";
import { Button } from "@/components/ui/button";
import { getTrip, getTripPhotos } from "@/lib/mock-data";

type PageProps = {
    params: Promise<{ tripId: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { tripId } = await params;
    return { title: getTrip(tripId)?.name ? `Photos · ${getTrip(tripId)?.name}` : "Photos" };
}

export default async function TripPhotosPage({ params }: PageProps) {
    const { tripId } = await params;
    const trip = getTrip(tripId);
    if (!trip) notFound();

    const photos = getTripPhotos(tripId);

    return (
        <>
            <section className="py-6 md:py-10">
                <Container>
                    <div className="space-y-6">
                        <TripSubnav tripId={tripId} />
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <div className="space-y-3">
                                <PlaceholderBadge variant="accent">Galerie mobile-first</PlaceholderBadge>
                                <h1 className="text-3xl font-semibold tracking-tight">Photos de {trip.name}</h1>
                                <p className="text-muted-foreground max-w-2xl leading-relaxed">
                                    Mosaïque mockée avec badges, likes et navigation vers le détail photo.
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <Button variant="outline" className="rounded-full">Tous</Button>
                                <Button variant="outline" className="rounded-full">Group</Button>
                                <Button variant="outline" className="rounded-full">Cover</Button>
                            </div>
                        </div>
                        <PhotoGrid trip={trip} photos={photos} />
                    </div>
                </Container>
            </section>
            <BottomNav />
        </>
    );
}
