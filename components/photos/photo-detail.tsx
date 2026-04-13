import { Heart, MessageCircle, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientPhoto } from "@/components/placeholders/gradient-photo";
import { PlaceholderBadge } from "@/components/placeholders/placeholder-badge";
import type { Member, Photo, Session } from "@/lib/mock-data";

export function PhotoDetail({
    photo,
    author,
    session,
}: {
    photo: Photo;
    author?: Member;
    session?: Session;
}) {
    return (
        <div className="space-y-5">
            <GradientPhoto
                tone={photo.tone}
                imageSrc={photo.imageSrc}
                imageAlt={photo.title}
                ratio="hero"
                title={photo.title}
                subtitle={photo.tag}
            />

            <div className="space-y-4 rounded-[30px] border border-white/50 bg-card/90 p-5 shadow-sm">
                <div className="flex flex-wrap items-center gap-2">
                    <PlaceholderBadge variant="muted">
                        {author?.name ?? "Auteur placeholder"}
                    </PlaceholderBadge>
                    {session ? <PlaceholderBadge>{session.title}</PlaceholderBadge> : null}
                </div>

                <p className="text-muted-foreground leading-relaxed">{photo.caption}</p>

                <div className="flex items-center gap-3 text-sm">
                    <span className="flex items-center gap-1.5">
                        <Heart className="text-primary h-4 w-4" />
                        {photo.likes} likes
                    </span>
                    <span className="flex items-center gap-1.5">
                        <MessageCircle className="text-primary h-4 w-4" />
                        {photo.comments} commentaires
                    </span>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <Button variant="outline" className="h-11 rounded-2xl">
                        <Heart className="h-4 w-4" />
                        Liker
                    </Button>
                    <Button variant="outline" className="h-11 rounded-2xl">
                        <MessageCircle className="h-4 w-4" />
                        Commenter
                    </Button>
                    <Button className="h-11 rounded-2xl">
                        <PlusCircle className="h-4 w-4" />
                        Ajouter à l&rsquo;album
                    </Button>
                </div>
            </div>
        </div>
    );
}
