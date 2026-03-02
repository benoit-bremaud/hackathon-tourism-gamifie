import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LucideIcon from "@/components/ui/icon";
import type { LucideIcon as LucideIconType } from "lucide-react";

type GarantieCardProps = {
    title: string;
    body: string;
    /** Icône Lucide (ex: MapPin, Shield, etc.) */
    icon?: LucideIconType;
    headerClassName?: string;
};

export function GarantieCard({ title, body, icon, headerClassName }: GarantieCardProps) {
    return (
        <Card className="overflow-hidden rounded-2xl p-0">
            <CardHeader className="p-0">
                <div className={`bg-primary relative h-24 ${headerClassName ?? ""}`}>
                    {/* bandeau plus clair */}
                    <div className="bg-accent absolute bottom-0 left-0 h-2 w-full" />

                    {/* Icône */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white">
                            {icon ? (
                                <LucideIcon icon={icon} className="h-10 w-10 text-white" />
                            ) : (
                                <span className="text-xl font-semibold">◎</span>
                            )}
                        </div>
                    </div>
                </div>

                <div className="px-6 pt-6 pb-2">
                    <CardTitle className="text-lg tracking-tight">{title}</CardTitle>
                </div>
            </CardHeader>

            <CardContent className="text-muted-foreground px-6 pb-6 text-sm leading-relaxed">
                {body}
            </CardContent>
        </Card>
    );
}
