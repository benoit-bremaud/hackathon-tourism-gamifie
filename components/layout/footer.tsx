import Link from "next/link";
import { Container } from "@/components/layout/container";

type FooterColumn = {
    title: string;
    body: string;
    phone?: string;
    email?: string;
    address?: string;
};

const COLUMNS: readonly FooterColumn[] = [
    {
        title: "Entreprise",
        body: "Ajoutez ici une courte présentation de l’entreprise, de l’activité ou du positionnement du site.",
        phone: "01 23 45 67 89",
        email: "contact@example.com",
        address: "12 rue de l'exemple, 75000 Paris",
    },
    {
        title: "Contact",
        body: "Utilisez cette colonne pour afficher les informations de contact principales ou des détails utiles.",
        phone: "01 23 45 67 89",
        email: "support@example.com",
    },
    {
        title: "Informations",
        body: "Cette zone peut accueillir des mentions utiles, une description complémentaire ou d’autres liens importants.",
        email: "hello@example.com",
    },
] as const;

function normalizePhone(phone: string) {
    return phone.replace(/[^\d+]/g, "");
}

export function Footer() {
    return (
        <footer className="border-t bg-zinc-900 text-white">
            <Container>
                <div className="grid gap-10 py-12 md:grid-cols-3">
                    {COLUMNS.map((column) => (
                        <div key={column.title} className="space-y-4">
                            <h3 className="text-base font-semibold">{column.title}</h3>

                            <p className="text-sm leading-relaxed text-white/70">{column.body}</p>

                            <div className="space-y-2 text-sm text-white/70">
                                {column.phone ? (
                                    <div>
                                        <span className="text-white/50">Téléphone :</span>{" "}
                                        <a
                                            href={`tel:${normalizePhone(column.phone)}`}
                                            className="underline underline-offset-4 hover:text-white"
                                        >
                                            {column.phone}
                                        </a>
                                    </div>
                                ) : null}

                                {column.email ? (
                                    <div>
                                        <span className="text-white/50">Email :</span>{" "}
                                        <a
                                            href={`mailto:${column.email}`}
                                            className="underline underline-offset-4 hover:text-white"
                                        >
                                            {column.email}
                                        </a>
                                    </div>
                                ) : null}

                                {column.address ? (
                                    <div>
                                        <span className="text-white/50">Adresse :</span>{" "}
                                        <span>{column.address}</span>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="border-t border-white/10 py-6">
                    <div className="flex flex-col gap-3 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
                        <p>© {new Date().getFullYear()} Site Skeleton. Tous droits réservés.</p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/"
                                className="underline underline-offset-4 hover:text-white"
                            >
                                Accueil
                            </Link>
                            <Link
                                href="/test"
                                className="underline underline-offset-4 hover:text-white"
                            >
                                Test
                            </Link>
                            <Link
                                href="/contact"
                                className="underline underline-offset-4 hover:text-white"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}