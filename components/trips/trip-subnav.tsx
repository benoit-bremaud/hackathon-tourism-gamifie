"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const labels = [
    { key: "", label: "Aperçu" },
    { key: "/sessions", label: "Sessions" },
    { key: "/photos", label: "Photos" },
    { key: "/members", label: "Membres" },
    { key: "/album", label: "Album" },
];

export function TripSubnav({ tripId }: { tripId: string }) {
    const pathname = usePathname();
    const base = `/trips/${tripId}`;

    return (
        <div className="no-scrollbar -mx-4 overflow-x-auto px-4">
            <div className="flex w-max gap-2">
                {labels.map((item) => {
                    const href = `${base}${item.key}`;
                    const isActive =
                        item.key === ""
                            ? pathname === base
                            : pathname === href || pathname.startsWith(`${href}/`);

                    return (
                        <Link
                            key={item.label}
                            href={href}
                            className={cn(
                                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                                isActive
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-card text-muted-foreground border border-border/70",
                            )}
                        >
                            {item.label}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
