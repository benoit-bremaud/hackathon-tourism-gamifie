import { GradientPhoto } from "@/components/placeholders/gradient-photo";
import { PlaceholderBadge } from "@/components/placeholders/placeholder-badge";
import type { Photo } from "@/lib/mock-data";

export function AlbumGallery({ photos }: { photos: Photo[] }) {
    const featured = photos.slice(0, 3);

    return (
        <div className="space-y-5">
            <div className="grid gap-4">
                {featured[0] ? (
                    <GradientPhoto
                        tone={featured[0].tone}
                        imageSrc={featured[0].imageSrc}
                        imageAlt={featured[0].title}
                        ratio="hero"
                        title={featured[0].title}
                        subtitle="Couverture de séquence"
                    />
                ) : null}
                <div className="grid grid-cols-2 gap-4">
                    {featured.slice(1).map((photo) => (
                        <GradientPhoto
                            key={photo.id}
                            tone={photo.tone}
                            imageSrc={photo.imageSrc}
                            imageAlt={photo.title}
                            ratio="portrait"
                            title={photo.title}
                            subtitle={photo.tag}
                        />
                    ))}
                </div>
            </div>

            <div className="rounded-[30px] border border-border/70 bg-card/90 p-5 shadow-sm">
                <div className="flex flex-wrap gap-2">
                    <PlaceholderBadge variant="muted">Cover story</PlaceholderBadge>
                    <PlaceholderBadge>Moments de groupe</PlaceholderBadge>
                    <PlaceholderBadge>Textures & détails</PlaceholderBadge>
                </div>
                <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                    La mise en page reste volontairement statique mais donne une direction claire pour
                    un futur éditeur d&rsquo;album.
                </p>
            </div>
        </div>
    );
}
