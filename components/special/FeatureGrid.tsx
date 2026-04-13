import { Sparkles, Zap, ShieldCheck } from "lucide-react";

type Item = {
    title: string;
    description: string;
    Icon: React.ComponentType<{ className?: string }>;
};

const ITEMS: Item[] = [
    {
        title: "Performance",
        description: "Optimisez vos processus avec une base technique moderne et rapide.",
        Icon: Zap,
    },
    {
        title: "Sécurité",
        description:
            "Une architecture robuste pensée pour la protection des données et la fiabilité.",
        Icon: ShieldCheck,
    },
    {
        title: "Innovation",
        description: "Restez à la pointe avec des composants réutilisables et évolutifs.",
        Icon: Sparkles,
    },
];

function IconBadge({ Icon }: { Icon: Item["Icon"] }) {
    return (
        <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/30 bg-background shadow-sm">
            <Icon className="h-7 w-7 text-primary" />
        </div>
    );
}

export function FeatureGrid() {
    return (
        <section className="relative overflow-hidden py-10 md:py-14">
            <div className="mx-auto w-full max-w-6xl px-4">
                {/* Titre */}
                <h2 className="text-center text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
                    Pourquoi choisir notre solution ?
                </h2>

                {/* 3 colonnes */}
                <div className="mt-10 grid gap-8 md:mt-12 md:grid-cols-3">
                    {ITEMS.map((it) => (
                        <div key={it.title} className="flex gap-4">
                            <IconBadge Icon={it.Icon} />
                            <div className="space-y-2">
                                <h3 className="text-lg font-bold text-foreground md:text-xl">
                                    {it.title}
                                </h3>
                                <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
                                    {it.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
