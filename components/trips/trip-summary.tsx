import { BookImage, ImagePlus, Send, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceholderBadge } from "@/components/placeholders/placeholder-badge";
import type { Trip } from "@/lib/mock-data";

export function TripSummary({ trip }: { trip: Trip }) {
    const actions = [
        { label: "Inviter", icon: Send },
        { label: "Voir les photos", icon: BookImage },
        { label: "Voir l’album", icon: Users },
        { label: "Ajouter une photo", icon: ImagePlus },
    ];

    return (
        <div className="space-y-4 rounded-[30px] border border-white/50 bg-card/90 p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h2 className="text-xl font-semibold tracking-tight">{trip.teaser.title}</h2>
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                        {trip.teaser.body}
                    </p>
                </div>
                <PlaceholderBadge variant="muted">POC</PlaceholderBadge>
            </div>

            <div className="grid grid-cols-2 gap-3">
                {actions.map((action) => {
                    const Icon = action.icon;

                    return (
                        <Button
                            key={action.label}
                            variant="outline"
                            className="h-12 justify-start rounded-2xl border-border/80 bg-background/70"
                        >
                            <Icon className="h-4 w-4" />
                            {action.label}
                        </Button>
                    );
                })}
            </div>
        </div>
    );
}
