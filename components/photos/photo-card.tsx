import Link from "next/link";
import { Heart, MessageCircle } from "lucide-react";
import { GradientPhoto } from "@/components/placeholders/gradient-photo";
import { PlaceholderBadge } from "@/components/placeholders/placeholder-badge";
import type { Photo, Trip } from "@/lib/mock-data";

export function PhotoCard({ trip, photo }: { trip: Trip; photo: Photo }) {
    return (
        <Link href={`/trips/${trip.id}/photos/${photo.id}`} className="block">
            <div className="space-y-3">
                <GradientPhoto
                    tone={photo.tone}
                    imageSrc={photo.imageSrc}
                    imageAlt={photo.title}
                    ratio={photo.ratio}
                    title={photo.title}
                    subtitle={photo.tag}
                />
                <div className="space-y-2 px-1">
                    <div className="flex items-center justify-between gap-3">
                        <PlaceholderBadge>{photo.tag}</PlaceholderBadge>
                        <div className="text-muted-foreground flex items-center gap-3 text-xs">
                            <span className="flex items-center gap-1">
                                <Heart className="h-3.5 w-3.5" />
                                {photo.likes}
                            </span>
                            <span className="flex items-center gap-1">
                                <MessageCircle className="h-3.5 w-3.5" />
                                {photo.comments}
                            </span>
                        </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{photo.caption}</p>
                </div>
            </div>
        </Link>
    );
}
