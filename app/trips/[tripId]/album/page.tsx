import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BottomNav } from "@/components/app/bottom-nav";
import { Container } from "@/components/layout/container";
import { AlbumCover } from "@/components/album/album-cover";
import { AlbumGallery } from "@/components/album/album-gallery";
import { PlaceholderBadge } from "@/components/placeholders/placeholder-badge";
import { TripSubnav } from "@/components/trips/trip-subnav";
import { Button } from "@/components/ui/button";
import { getTrip, getTripPhotos } from "@/lib/mock-data";

type PageProps = {
    params: Promise<{ tripId: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { tripId } = await params;
    return { title: getTrip(tripId)?.name ? `Album · ${getTrip(tripId)?.name}` : "Album" };
}

export default async function TripAlbumPage({ params }: PageProps) {
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
                        <AlbumCover trip={trip} />
                        <div className="space-y-3">
                            <PlaceholderBadge variant="accent">Album final</PlaceholderBadge>
                            <h2 className="text-3xl font-semibold tracking-tight">Sélection éditoriale</h2>
                            <p className="text-muted-foreground max-w-2xl leading-relaxed">
                                Mise en page premium placeholder, pensée pour montrer la destination produit plutôt qu&rsquo;un back-office.
                            </p>
                        </div>
                        <AlbumGallery photos={photos} />
                        <div className="rounded-[32px] border border-white/60 bg-[#1f3b31] p-6 text-white shadow-sm">
                            <div className="text-xs uppercase tracking-[0.22em] text-white/65">
                                Story finale
                            </div>
                            <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                                Couverture, moments de groupe, détails et épilogue du voyage.
                            </h3>
                            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/75">
                                Cette page reste statique, mais elle donne déjà une très bonne base
                                pour un futur album généré ou édité par les utilisateurs.
                            </p>
                            <Button className="mt-6 rounded-full bg-white text-[#1f3b31] hover:bg-white/90">
                                Publier l&rsquo;album
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>
            <BottomNav />
        </>
    );
}
