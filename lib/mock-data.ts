export type CoverTone = "coast" | "city" | "mountain" | "desert";

export type User = {
    id: string;
    name: string;
    handle: string;
    avatar: string;
    location: string;
};

export type Member = {
    id: string;
    name: string;
    avatar: string;
    role: "Owner" | "Editor" | "Guest";
    status: "active" | "invited";
    tagline: string;
};

export type Session = {
    id: string;
    title: string;
    date: string;
    time: string;
    status: "done" | "upcoming" | "draft";
    description: string;
};

export type Photo = {
    id: string;
    title: string;
    caption: string;
    authorId: string;
    sessionId: string;
    tone: CoverTone;
    likes: number;
    comments: number;
    ratio: "portrait" | "square" | "landscape";
    tag: string;
};

export type Comment = {
    id: string;
    author: string;
    avatar: string;
    message: string;
    postedAt: string;
};

export type Trip = {
    id: string;
    name: string;
    destination: string;
    period: string;
    datesLabel: string;
    tone: CoverTone;
    status: "Planning" | "Collecte" | "Album";
    membersCount: number;
    coverKicker: string;
    description: string;
    highlights: string[];
    stats: {
        photos: number;
        sessions: number;
        memories: number;
    };
    teaser: {
        title: string;
        body: string;
    };
};

export const currentUser: User = {
    id: "u-clara",
    name: "Clara Morel",
    handle: "@claram",
    avatar: "CM",
    location: "Paris",
};

export const trips: Trip[] = [
    {
        id: "lisbon-sunbook",
        name: "Lisbon Sunbook",
        destination: "Lisbonne, Portugal",
        period: "12-16 mai",
        datesLabel: "12 mai au 16 mai 2026",
        tone: "city",
        status: "Collecte",
        membersCount: 4,
        coverKicker: "City trip collaboratif",
        description:
            "Un carnet partagé pour réunir les sessions, les photos mobiles et l'album final d'un long week-end à Lisbonne.",
        highlights: ["7 sessions", "124 photos", "4 contributeurs"],
        stats: { photos: 124, sessions: 7, memories: 18 },
        teaser: {
            title: "Album éditorial en préparation",
            body: "Les meilleures scènes de tram, rooftops et dîners tardifs sont déjà pré-sélectionnées.",
        },
    },
    {
        id: "alpine-bloom",
        name: "Alpine Bloom",
        destination: "Annecy & Aravis",
        period: "2-5 juin",
        datesLabel: "2 juin au 5 juin 2026",
        tone: "mountain",
        status: "Planning",
        membersCount: 2,
        coverKicker: "Escapade montagne",
        description:
            "Un trip conçu autour des randonnées, du lac et d'un album commun pensé pour rester simple à enrichir sur mobile.",
        highlights: ["3 sessions planifiées", "Moodboard prêt", "2 membres"],
        stats: { photos: 48, sessions: 3, memories: 9 },
        teaser: {
            title: "Couverture prête",
            body: "Palette froide, paysages larges et souvenirs de refuge pour une narration plus contemplative.",
        },
    },
    {
        id: "atlas-drift",
        name: "Atlas Drift",
        destination: "Agafay & Marrakech",
        period: "22-28 septembre",
        datesLabel: "22 septembre au 28 septembre 2026",
        tone: "desert",
        status: "Album",
        membersCount: 2,
        coverKicker: "Road trip souvenirs",
        description:
            "Version premium d'un album final déjà structuré autour des étapes, des portraits et des soirées sous tente.",
        highlights: ["Album en revue", "89 photos", "5 mini stories"],
        stats: { photos: 89, sessions: 5, memories: 14 },
        teaser: {
            title: "Mise en page presque prête",
            body: "Les pleines pages et les citations courtes donnent déjà une vraie sensation de produit fini.",
        },
    },
];

export const membersByTrip: Record<string, Member[]> = {
    "lisbon-sunbook": [
        {
            id: "m-clara",
            name: "Clara Morel",
            avatar: "CM",
            role: "Owner",
            status: "active",
            tagline: "Coordonne les sessions et garde le fil du voyage.",
        },
        {
            id: "m-noah",
            name: "Noah Pereira",
            avatar: "NP",
            role: "Editor",
            status: "active",
            tagline: "Toujours prêt pour capter l'ambiance golden hour.",
        },
        {
            id: "m-lea",
            name: "Lea Simon",
            avatar: "LS",
            role: "Editor",
            status: "active",
            tagline: "Monte déjà l'album final pendant le city trip.",
        },
        {
            id: "m-jules",
            name: "Jules Caron",
            avatar: "JC",
            role: "Guest",
            status: "invited",
            tagline: "Invitation envoyée, en attente de confirmation.",
        },
    ],
    "alpine-bloom": [
        {
            id: "m-anais",
            name: "Anais Robert",
            avatar: "AR",
            role: "Owner",
            status: "active",
            tagline: "Roadbook et spots rando validés.",
        },
        {
            id: "m-lucas",
            name: "Lucas Marin",
            avatar: "LM",
            role: "Editor",
            status: "active",
            tagline: "Capte toutes les vues au drone, version placeholder.",
        },
    ],
    "atlas-drift": [
        {
            id: "m-mila",
            name: "Mila Costa",
            avatar: "MC",
            role: "Owner",
            status: "active",
            tagline: "Consolide les souvenirs du road trip.",
        },
        {
            id: "m-enzo",
            name: "Enzo Vidal",
            avatar: "EV",
            role: "Guest",
            status: "invited",
            tagline: "Lien d'invitation généré, pas encore accepté.",
        },
    ],
};

export const sessionsByTrip: Record<string, Session[]> = {
    "lisbon-sunbook": [
        {
            id: "s1",
            title: "Sunrise miradouro",
            date: "Mardi 12 mai",
            time: "07:30",
            status: "done",
            description: "Repérage tôt le matin, vues hautes sur la ville et premières photos verticales.",
        },
        {
            id: "s2",
            title: "Tram 28 stories",
            date: "Mardi 12 mai",
            time: "10:00",
            status: "done",
            description: "Série mobile dans le tram et captures spontanées dans l'Alfama.",
        },
        {
            id: "s3",
            title: "Lunch rooftop",
            date: "Mercredi 13 mai",
            time: "13:15",
            status: "done",
            description: "Portraits de table, assiettes, lumière chaude et ambiance détente.",
        },
        {
            id: "s4",
            title: "Blue hour bridge",
            date: "Mercredi 13 mai",
            time: "20:10",
            status: "upcoming",
            description: "Session crépuscule pensée pour la couverture de l'album final.",
        },
    ],
    "alpine-bloom": [
        {
            id: "s5",
            title: "Trail au col",
            date: "Mardi 2 juin",
            time: "09:00",
            status: "upcoming",
            description: "Session orientée paysage et silhouettes au premier plan.",
        },
        {
            id: "s6",
            title: "Refuge dinner notes",
            date: "Mercredi 3 juin",
            time: "19:30",
            status: "draft",
            description: "Storyboard placeholder pour anecdotes, plats et ambiance refuge.",
        },
    ],
    "atlas-drift": [
        {
            id: "s7",
            title: "Road stop dunes",
            date: "Jeudi 24 septembre",
            time: "16:00",
            status: "done",
            description: "Capsules photo sur la route et premières images de désert.",
        },
        {
            id: "s8",
            title: "Tent night portraits",
            date: "Vendredi 25 septembre",
            time: "21:15",
            status: "done",
            description: "Portraits serrés, lanternes et séquence pour la story finale.",
        },
    ],
};

export const photosByTrip: Record<string, Photo[]> = {
    "lisbon-sunbook": [
        {
            id: "p1",
            title: "Tram glow",
            caption: "Fenêtres ouvertes, lignes jaunes et mouvement de début de journée.",
            authorId: "m-noah",
            sessionId: "s2",
            tone: "city",
            likes: 48,
            comments: 7,
            ratio: "portrait",
            tag: "Street",
        },
        {
            id: "p2",
            title: "Pastel stop",
            caption: "Pause café rapide, textures pastel et lumière diffuse.",
            authorId: "m-clara",
            sessionId: "s3",
            tone: "coast",
            likes: 32,
            comments: 5,
            ratio: "square",
            tag: "Food",
        },
        {
            id: "p3",
            title: "Rooftop hush",
            caption: "Le groupe juste avant le coucher du soleil, très calme, très mobile-first.",
            authorId: "m-lea",
            sessionId: "s3",
            tone: "city",
            likes: 63,
            comments: 11,
            ratio: "landscape",
            tag: "Group",
        },
        {
            id: "p4",
            title: "Ocean tiles",
            caption: "Azulejos, mer au loin et détails de façade qui respirent le voyage.",
            authorId: "m-clara",
            sessionId: "s1",
            tone: "coast",
            likes: 26,
            comments: 4,
            ratio: "portrait",
            tag: "Details",
        },
        {
            id: "p5",
            title: "Golden rails",
            caption: "Le tram au soleil couchant, image parfaite pour teaser l'album.",
            authorId: "m-noah",
            sessionId: "s4",
            tone: "desert",
            likes: 71,
            comments: 13,
            ratio: "landscape",
            tag: "Cover",
        },
        {
            id: "p6",
            title: "Balcony laughs",
            caption: "Moment de groupe pris sur le vif, pensé pour la section souvenirs.",
            authorId: "m-lea",
            sessionId: "s3",
            tone: "city",
            likes: 54,
            comments: 6,
            ratio: "square",
            tag: "People",
        },
    ],
    "alpine-bloom": [
        {
            id: "p7",
            title: "Lake quiet",
            caption: "Une surface froide, des reflets nets et une intro d'album très clean.",
            authorId: "m-anais",
            sessionId: "s5",
            tone: "mountain",
            likes: 22,
            comments: 2,
            ratio: "landscape",
            tag: "Mood",
        },
    ],
    "atlas-drift": [
        {
            id: "p8",
            title: "Campfire amber",
            caption: "Scène chaude de soirée, pensée comme double page finale.",
            authorId: "m-mila",
            sessionId: "s8",
            tone: "desert",
            likes: 57,
            comments: 9,
            ratio: "portrait",
            tag: "Night",
        },
    ],
};

export const commentsByPhoto: Record<string, Comment[]> = {
    p1: [
        {
            id: "c1",
            author: "Clara",
            avatar: "CM",
            message: "Très bonne vibe pour ouvrir la séquence tram.",
            postedAt: "Il y a 12 min",
        },
        {
            id: "c2",
            author: "Lea",
            avatar: "LS",
            message: "On devrait la pousser dans l'album final, colonne de gauche.",
            postedAt: "Il y a 8 min",
        },
    ],
    p5: [
        {
            id: "c3",
            author: "Noah",
            avatar: "NP",
            message: "Clairement la couverture la plus forte du lot.",
            postedAt: "Hier",
        },
    ],
};

export const productHighlights = [
    {
        title: "Planifier ensemble",
        body: "Voyages, sessions et membres regroupés dans une seule interface mobile claire.",
    },
    {
        title: "Capturer sans friction",
        body: "La galerie et les moments clés sont pensés pour du contenu mobile, rapide à partager.",
    },
    {
        title: "Composer un album",
        body: "Le POC montre un rendu éditorial premium qui donne envie d'aller vers un vrai MVP.",
    },
];

export function getTrip(tripId: string) {
    return trips.find((trip) => trip.id === tripId);
}

export function getTripMembers(tripId: string) {
    return membersByTrip[tripId] ?? [];
}

export function getTripSessions(tripId: string) {
    return sessionsByTrip[tripId] ?? [];
}

export function getTripPhotos(tripId: string) {
    return photosByTrip[tripId] ?? [];
}

export function getPhoto(tripId: string, photoId: string) {
    return getTripPhotos(tripId).find((photo) => photo.id === photoId);
}

export function getPhotoComments(photoId: string) {
    return commentsByPhoto[photoId] ?? [];
}

export function getSession(tripId: string, sessionId: string) {
    return getTripSessions(tripId).find((session) => session.id === sessionId);
}

export function getMember(tripId: string, memberId: string) {
    return getTripMembers(tripId).find((member) => member.id === memberId);
}
