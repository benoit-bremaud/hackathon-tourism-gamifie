"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpenText, Home, Images, LayoutGrid, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { trips } from "@/lib/mock-data";

export function BottomNav() {
    const pathname = usePathname();
    const activeTripId =
        pathname.match(/^\/trips\/([^/]+)/)?.[1] ?? trips[0]?.id ?? "lisbon-sunbook";

    const items = [
        { href: "/dashboard", label: "Accueil", icon: Home },
        { href: "/trips", label: "Voyages", icon: LayoutGrid },
        { href: `/trips/${activeTripId}/photos`, label: "Photos", icon: Images },
        { href: `/trips/${activeTripId}/members`, label: "Membres", icon: Users },
        { href: `/trips/${activeTripId}/album`, label: "Album", icon: BookOpenText },
    ];

    return (
        <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-4">
            <nav className="pointer-events-auto flex w-full max-w-md items-center justify-between rounded-full border border-white/60 bg-background/95 px-3 py-2 shadow-[0_18px_50px_rgba(15,31,22,0.16)] backdrop-blur-xl">
                {items.map((item) => {
                    const isActive =
                        item.href === "/dashboard"
                            ? pathname === "/dashboard"
                            : pathname.startsWith(item.href);
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex min-w-0 flex-1 flex-col items-center gap-1 rounded-full px-1 py-2 text-[11px] font-medium transition-colors",
                                isActive ? "text-primary" : "text-muted-foreground",
                            )}
                        >
                            <div
                                className={cn(
                                    "flex h-8 w-8 items-center justify-center rounded-full",
                                    isActive && "bg-primary/10",
                                )}
                            >
                                <Icon className="h-4 w-4" />
                            </div>
                            <span className="truncate">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
