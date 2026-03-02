import type { Metadata } from "next";
import { AppelerAgenceClient } from "./appeler-agence-client";

export const metadata: Metadata = {
    title: "Appeler une agence",
    description:
        "Contactez nos équipes par téléphone du lundi au vendredi de 9h à 18h. Partenaires, futurs partenaires ou particuliers.",
    openGraph: {
        title: "Appeler une agence",
        description: "Contactez nos équipes par téléphone du lundi au vendredi de 9h à 18h.",
    },
};

export default function AppelerAgencePage() {
    return <AppelerAgenceClient />;
}
