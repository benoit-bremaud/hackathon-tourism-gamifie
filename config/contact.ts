export type ContactKey =
    | "default"
    | "partner"
    | "becomePartner"
    | "customer"
    | "protecaudio"
    | "rossard"
    | "recrutement";

export type ContactInfo = {
    label: string; // "Contact", "Partenaires", ...
    phone: string; // "02 79 02 77 28"
    email: string; // "contact@markassur.com"
    hours?: string;
};

export const CONTACTS: Record<ContactKey, ContactInfo> = {
    default: {
        label: "Contact",
        phone: "02 79 02 77 28",
        email: "contact@markassur.com",
        hours: "Du lundi au vendredi de 9h à 18h.",
    },
    partner: {
        label: "Partenaires",
        phone: "02 79 02 77 28",
        email: "partenaires@markassur.com",
    },
    becomePartner: {
        label: "Devenir partenaire",
        phone: "02 79 02 77 28",
        email: "devenir@markassur.com",
    },
    customer: {
        label: "Contact",
        phone: "02 79 02 77 28",
        email: "contact@markassur.com",
    },
    protecaudio: {
        label: "ProtecAudio",
        phone: "09 80 08 50 47",
        email: "contact@protecaudio.fr",
    },
    rossard: {
        label: "Rossard Assurances",
        phone: "02 00 00 00 00", // TODO: remplacer par le vrai numéro
        email: "contact@rossard-assurances.fr",
    },
    recrutement: {
        label: "Recrutement",
        email: "recrutement@protec.test", // TODO: remplacer par la vraie adresse
        phone: "—",
    },
};

export function telHref(phone: string) {
    return `tel:${phone.replace(/\s/g, "")}`;
}

export function mailHref(email: string) {
    return `mailto:${email}`;
}
