import { CalendarFold, Clock3 } from "lucide-react";
import { PlaceholderBadge } from "@/components/placeholders/placeholder-badge";
import type { Session } from "@/lib/mock-data";

export function SessionCard({ session }: { session: Session }) {
    const badgeVariant =
        session.status === "done" ? "muted" : session.status === "upcoming" ? "accent" : "default";

    return (
        <div className="rounded-[28px] border border-border/70 bg-card/90 p-5 shadow-sm">
            <div className="flex items-start justify-between gap-3">
                <div>
                    <h3 className="text-lg font-semibold tracking-tight">{session.title}</h3>
                    <div className="text-muted-foreground mt-2 flex flex-wrap items-center gap-3 text-sm">
                        <span className="flex items-center gap-1.5">
                            <CalendarFold className="h-4 w-4" />
                            {session.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Clock3 className="h-4 w-4" />
                            {session.time}
                        </span>
                    </div>
                </div>
                <PlaceholderBadge variant={badgeVariant}>
                    {session.status === "done"
                        ? "Terminée"
                        : session.status === "upcoming"
                          ? "À venir"
                          : "Brouillon"}
                </PlaceholderBadge>
            </div>

            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">{session.description}</p>
        </div>
    );
}
