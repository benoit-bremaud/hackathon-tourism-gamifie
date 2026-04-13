import Link from "next/link";
import { ArrowRight, Camera, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GradientPhoto } from "@/components/placeholders/gradient-photo";
import { PlaceholderBadge } from "@/components/placeholders/placeholder-badge";
import type { Trip } from "@/lib/mock-data";

export function TripCard({ trip }: { trip: Trip }) {
    return (
        <Card className="overflow-hidden rounded-[30px] border-white/50 bg-white/80 p-0 shadow-[0_22px_60px_rgba(15,31,22,0.08)] backdrop-blur">
            <div className="p-3">
                <GradientPhoto
                    tone={trip.tone}
                    ratio="landscape"
                    title={trip.destination}
                    subtitle={trip.coverKicker}
                />
            </div>
            <CardContent className="space-y-5 px-5 pb-5">
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <h3 className="text-xl font-semibold tracking-tight">{trip.name}</h3>
                        <p className="text-muted-foreground mt-1 text-sm">{trip.datesLabel}</p>
                    </div>
                    <PlaceholderBadge variant="muted">{trip.status}</PlaceholderBadge>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">{trip.description}</p>

                <div className="flex flex-wrap gap-2">
                    {trip.highlights.map((item) => (
                        <PlaceholderBadge key={item}>{item}</PlaceholderBadge>
                    ))}
                </div>

                <div className="flex items-center justify-between text-sm">
                    <div className="text-muted-foreground flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {trip.membersCount} membres
                    </div>
                    <div className="text-muted-foreground flex items-center gap-2">
                        <Camera className="h-4 w-4" />
                        {trip.stats.photos} photos
                    </div>
                </div>

                <Button asChild className="h-11 w-full rounded-full">
                    <Link href={`/trips/${trip.id}`}>
                        Ouvrir
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </Button>
            </CardContent>
        </Card>
    );
}
