import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "./container";
import { MenuBurger } from "./menuBurger";
import Image from "next/image";

export function Header() {
    return (
        <header className="bg-background/80 sticky top-0 z-50 border-b backdrop-blur">
            <a
                href="#main"
                className="focus:bg-primary focus:text-primary-foreground sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:rounded focus:px-4 focus:py-2"
            >
                Aller au contenu principal
            </a>
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="font-semibold tracking-tight">
                        <Image
                            src="/logo-transparent.png"
                            alt="Protec'audio Logo"
                            width={60}
                            height={30}
                            className="h-auto w-auto max-w-[100px]"
                            priority={false}
                        />
                    </Link>

                    <nav
                        aria-label="Navigation principale"
                        className="hidden items-center gap-6 md:flex"
                    >
                        <Link
                            href="/"
                            className="text-muted-foreground hover:text-foreground text-sm"
                        >
                            Accueil
                        </Link>
                        <Link
                            href="/garantie"
                            className="text-muted-foreground hover:text-foreground text-sm"
                        >
                            Garanties audioprothèses
                        </Link>
                        {/* <Link href="/protection" className="text-sm text-muted-foreground hover:text-foreground">
                            Protection de votre activité
                        </Link> */}
                        <Link
                            href="/protection"
                            className="text-muted-foreground hover:text-foreground text-sm"
                        >
                            Solutions audioprothésistes
                        </Link>
                        {/* <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                            Contact
                        </Link> */}
                        <Link
                            href="/join"
                            className="text-muted-foreground hover:text-foreground text-sm"
                        >
                            Nous rejoindre
                        </Link>
                    </nav>

                    <div className="flex items-center gap-2">
                        {/* Desktop CTA */}
                        <Button asChild className="hidden md:inline-flex">
                            <Link href="/contact">Contact</Link>
                        </Button>

                        {/* Mobile burger */}
                        <MenuBurger />
                    </div>
                </div>
            </Container>
        </header>
    );
}
