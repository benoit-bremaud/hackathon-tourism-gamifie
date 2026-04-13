import Link from "next/link";
import { Bell, Compass, Plus } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { currentUser } from "@/lib/mock-data";

export function AppHeader() {
    return (
        <header className="sticky top-0 z-40 border-b border-white/50 bg-background/90 backdrop-blur-xl">
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:bg-primary focus:text-primary-foreground focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:px-4 focus:py-2"
            >
                Aller au contenu principal
            </a>
            <Container>
                <div className="flex h-16 items-center justify-between gap-3">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                            <Compass className="h-5 w-5" />
                        </div>
                        <div>
                            <div className="text-sm font-semibold tracking-wide">TravelFlow</div>
                            <div className="text-muted-foreground text-xs">Souvenirs collaboratifs</div>
                        </div>
                    </Link>

                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon-sm" className="rounded-full">
                            <Bell className="h-4 w-4" />
                        </Button>
                        <Button asChild size="sm" className="rounded-full px-4">
                            <Link href="/trips">
                                <Plus className="h-4 w-4" />
                                Nouveau
                            </Link>
                        </Button>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-semibold">
                            {currentUser.avatar}
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
}
