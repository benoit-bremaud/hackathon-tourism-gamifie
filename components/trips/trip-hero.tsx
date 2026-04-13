import { CalendarDays, Camera, Users } from "lucide-react";
import { GradientPhoto } from "@/components/placeholders/gradient-photo";
import { PlaceholderBadge } from "@/components/placeholders/placeholder-badge";
import type { Trip } from "@/lib/mock-data";

export function TripHero({ trip }: { trip: Trip }) {
    return (
        <section className="space-y-5">
            <GradientPhoto
                tone={trip.tone}
                ratio="hero"
                subtitle={trip.coverKicker}
                title={trip.name}
                overlay={
                    <div className="flex h-full flex-col justify-between p-5">
                        <div className="flex items-start justify-between gap-4">
                            <PlaceholderBadge variant="accent">{trip.status}</PlaceholderBadge>
                            <div className="rounded-full bg-black/20 px-3 py-1 text-xs text-white/85 backdrop-blur">
                                Album placeholder
                            </div>
                        </div>
                    </div>
                }
            />

            <div className="space-y-3">
                <div className="text-sm uppercase tracking-[0.22em] text-primary/70">{trip.destination}</div>
                <p className="text-muted-foreground leading-relaxed">{trip.description}</p>
            </div>

            <div className="grid grid-cols-3 gap-3">
                <div className="rounded-3xl border border-border/70 bg-card p-4">
                    <CalendarDays className="text-primary h-4 w-4" />
                    <div className="mt-3 text-sm font-medium">{trip.period}</div>
                    <div className="text-muted-foreground mt-1 text-xs">Fenêtre du voyage</div>
                </div>
                <div className="rounded-3xl border border-border/70 bg-card p-4">
                    <Users className="text-primary h-4 w-4" />
                    <div className="mt-3 text-sm font-medium">{trip.membersCount} membres</div>
                    <div className="text-muted-foreground mt-1 text-xs">Collaborateurs</div>
                </div>
                <div className="rounded-3xl border border-border/70 bg-card p-4">
                    <Camera className="text-primary h-4 w-4" />
                    <div className="mt-3 text-sm font-medium">{trip.stats.photos} photos</div>
                    <div className="text-muted-foreground mt-1 text-xs">Souvenirs capturés</div>
                </div>
            </div>
        </section>
    );
}
