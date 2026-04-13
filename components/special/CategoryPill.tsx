import * as React from "react";
import type { LucideIcon as LucideIconType } from "lucide-react";
import { Layout, Palette, Settings, Zap, Users } from "lucide-react";

import { Container } from "@/components/layout/container";
import LucideIcon from "@/components/ui/icon";

type Group = {
    title: string;
    subtitle: string;
    items: string[];
    icon: LucideIconType;
};

const GROUPS: Group[] = [
    {
        title: "Design Système",
        subtitle: "Composants UI prêts à l’emploi et personnalisables",
        items: [
            "Boutons & Inputs",
            "Modales & Dialogues",
            "Cartes interactives",
            "Typographie cohérente",
            "Thème clair/sombre",
        ],
        icon: Layout,
    },
    {
        title: "Configuration",
        subtitle: "Centralisation des paramètres globaux du projet",
        items: [
            "Metadata SEO",
            "Contacts par défaut",
            "Variables d’environnement",
            "Routing intelligent",
            "Génération dynamique",
        ],
        icon: Settings,
    },
    {
        title: "Identité Visuelle",
        subtitle: "Adapter l’esthétique à votre charte graphique",
        items: [
            "Logo dynamique",
            "Couleurs Tailwind",
            "Typographies système",
            "Animations fluides",
            "Backgrounds CSS",
        ],
        icon: Palette,
    },
];

function Chip({ children }: { children: React.ReactNode }) {
    return (
        <span className="border-primary/30 hover:bg-accent text-foreground inline-flex items-center rounded-full border-2 bg-background px-5 py-2 text-sm font-semibold transition-colors">
            {children}
        </span>
    );
}

function GroupBlock({ title, subtitle, items, icon }: Group) {
    return (
        <div className="space-y-5">
            <div className="bg-primary flex items-center gap-4 rounded-2xl px-6 py-5 shadow-sm">
                {/* Icône */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20">
                    <LucideIcon icon={icon} className="h-8 w-8 text-white" />
                </div>

                <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-white md:text-xl">{title}</h3>
                    <p className="text-sm text-white/80 md:text-base">{subtitle}</p>
                </div>
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-4">
                {items.map((it) => (
                    <Chip key={it}>{it}</Chip>
                ))}
            </div>
        </div>
    );
}

export default function CategoryPill() {
    return (
        <section className="py-16 md:py-24">
            <Container>
                <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                    Découvrez nos briques techniques
                </h2>

                <div className="mt-10 space-y-10">
                    {GROUPS.map((g) => (
                        <GroupBlock key={g.title} {...g} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
