import { Link2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceholderBadge } from "@/components/placeholders/placeholder-badge";
import type { Member } from "@/lib/mock-data";

export function MemberList({ members }: { members: Member[] }) {
    return (
        <div className="space-y-4">
            <div className="rounded-[30px] border border-border/70 bg-card/90 p-5 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                    <div>
                        <h2 className="text-xl font-semibold tracking-tight">Invitations & rôles</h2>
                        <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                            Démonstration visuelle d&rsquo;une gestion d&rsquo;équipe simple à comprendre sur mobile.
                        </p>
                    </div>
                    <Button className="rounded-full px-4">
                        <Link2 className="h-4 w-4" />
                        Générer un lien
                    </Button>
                </div>
            </div>

            {members.map((member) => (
                <div
                    key={member.id}
                    className="rounded-[28px] border border-border/70 bg-card/90 p-5 shadow-sm"
                >
                    <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-semibold">
                            {member.avatar}
                        </div>
                        <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                                <h3 className="text-lg font-semibold tracking-tight">{member.name}</h3>
                                <PlaceholderBadge variant="muted">{member.role}</PlaceholderBadge>
                                <PlaceholderBadge
                                    variant={member.status === "active" ? "default" : "accent"}
                                >
                                    {member.status === "active" ? "Actif" : "Invitation en attente"}
                                </PlaceholderBadge>
                            </div>
                            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                                {member.tagline}
                            </p>
                        </div>
                        <Sparkles className="text-primary mt-1 h-5 w-5" />
                    </div>
                </div>
            ))}
        </div>
    );
}
