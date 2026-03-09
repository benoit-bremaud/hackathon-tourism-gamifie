export type ContactKey =
    | "default"
    | "sales"
    | "support"
    | "partnership"
    | "recruitment";

export type ContactInfo = {
    label: string;
    phone: string;
    email: string;
    hours?: string;
};

export const CONTACTS: Record<ContactKey, ContactInfo> = {
    default: {
        label: "Contact",
        phone: "01 23 45 67 89",
        email: "contact@example.com",
        hours: "Du lundi au vendredi de 9h à 18h.",
    },
    sales: {
        label: "Commercial",
        phone: "01 23 45 67 89",
        email: "sales@example.com",
        hours: "Du lundi au vendredi de 9h à 18h.",
    },
    support: {
        label: "Support",
        phone: "01 23 45 67 89",
        email: "support@example.com",
        hours: "Du lundi au vendredi de 9h à 18h.",
    },
    partnership: {
        label: "Partenariats",
        phone: "01 23 45 67 89",
        email: "partnership@example.com",
    },
    recruitment: {
        label: "Recrutement",
        phone: "01 23 45 67 89",
        email: "recruitment@example.com",
    },
};

export function telHref(phone: string) {
    return `tel:${phone.replace(/\s/g, "")}`;
}

export function mailHref(email: string) {
    return `mailto:${email}`;
}