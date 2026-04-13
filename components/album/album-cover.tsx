import { BookOpenText, Sparkles } from "lucide-react";
import { GradientPhoto } from "@/components/placeholders/gradient-photo";
import { PlaceholderBadge } from "@/components/placeholders/placeholder-badge";
import type { Trip } from "@/lib/mock-data";

export function AlbumCover({ trip }: { trip: Trip }) {
    return (
        <section className="space-y-5">
            <GradientPhoto
                tone={trip.tone}
                ratio="hero"
                subtitle="Album final"
                title={trip.name}
                overlay={
                    <div className="flex h-full flex-col justify-between p-5">
                        <div className="flex justify-between gap-3">
                            <PlaceholderBadge variant="accent">Premium placeholder</PlaceholderBadge>
                            <div className="rounded-full bg-white/20 p-2 text-white backdrop-blur">
                                <Sparkles className="h-4 w-4" />
                            </div>
                        </div>
                        <div className="max-w-xs rounded-[28px] bg-white/18 p-4 text-white backdrop-blur">
                            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/80">
                                <BookOpenText className="h-4 w-4" />
                                Editorial travel book
                            </div>
                            <p className="mt-3 text-sm leading-relaxed text-white/85">
                                Un rendu conçu pour évoquer un album souvenir déjà presque publiable.
                            </p>
                        </div>
                    </div>
                }
            />

            <div>
                <div className="text-sm uppercase tracking-[0.22em] text-primary/70">{trip.destination}</div>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight">
                    Une narration visuelle simple et chaleureuse
                </h1>
                <p className="text-muted-foreground mt-3 leading-relaxed">{trip.teaser.body}</p>
            </div>
        </section>
    );
}
