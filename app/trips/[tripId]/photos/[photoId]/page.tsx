import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BottomNav } from "@/components/app/bottom-nav";
import { Container } from "@/components/layout/container";
import { PhotoComments } from "@/components/photos/photo-comments";
import { PhotoDetail } from "@/components/photos/photo-detail";
import { PlaceholderBadge } from "@/components/placeholders/placeholder-badge";
import { TripSubnav } from "@/components/trips/trip-subnav";
import {
    getMember,
    getPhoto,
    getPhotoComments,
    getSession,
    getTrip,
    getTripPhotos,
} from "@/lib/mock-data";

type PageProps = {
    params: Promise<{ tripId: string; photoId: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { tripId, photoId } = await params;
    return { title: getPhoto(tripId, photoId)?.title ?? "Photo" };
}

export default async function PhotoDetailPage({ params }: PageProps) {
    const { tripId, photoId } = await params;
    const trip = getTrip(tripId);
    const photo = getPhoto(tripId, photoId);

    if (!trip || !photo) notFound();

    const author = getMember(tripId, photo.authorId);
    const session = getSession(tripId, photo.sessionId);
    const comments = getPhotoComments(photo.id);
    const related = getTripPhotos(tripId)
        .filter((item) => item.id !== photo.id)
        .slice(0, 2);

    return (
        <>
            <section className="py-6 md:py-10">
                <Container>
                    <div className="space-y-6">
                        <TripSubnav tripId={tripId} />
                        <div className="space-y-3">
                            <PlaceholderBadge variant="accent">Détail photo immersif</PlaceholderBadge>
                            <h1 className="text-3xl font-semibold tracking-tight">{photo.title}</h1>
                        </div>

                        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                            <PhotoDetail photo={photo} author={author} session={session} />

                            <div className="space-y-4">
                                <div className="rounded-[30px] border border-border/70 bg-card/90 p-5 shadow-sm">
                                    <h2 className="text-xl font-semibold tracking-tight">Commentaires</h2>
                                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                                        Contenu totalement mocké pour vendre l&rsquo;interaction produit.
                                    </p>
                                </div>
                                <PhotoComments comments={comments} />
                            </div>
                        </div>

                        {related.length ? (
                            <div className="space-y-4">
                                <h2 className="text-2xl font-semibold tracking-tight">Autres photos du voyage</h2>
                                <div className="grid gap-4 md:grid-cols-2">
                                    {related.map((item) => (
                                        <PhotoDetail
                                            key={item.id}
                                            photo={item}
                                            author={getMember(tripId, item.authorId)}
                                            session={getSession(tripId, item.sessionId)}
                                        />
                                    ))}
                                </div>
                            </div>
                        ) : null}
                    </div>
                </Container>
            </section>
            <BottomNav />
        </>
    );
}
