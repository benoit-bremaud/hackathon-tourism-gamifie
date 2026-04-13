export const siteName = "Agence Digitale";
export const domain = "agence-digitale.fr";
export const url = process.env.NEXT_PUBLIC_SITE_URL || `https://${domain}`;
export const description =
    "Expertise en développement web, design moderne et stratégie digitale. Nous créons des solutions performantes et sur-mesure pour booster votre présence en ligne.";
export const locale = "fr_FR";
export const logo = `${url}/logo.png`;
export const ogImage = `${url}/images/og-main.png`;

export const siteConfig = {
    name: siteName,
    domain,
    url,
    description,
    locale,
    logo,
    ogImage,
    contactEmail: "hello@agence-digitale.fr",
    contactPhone: "01 02 03 04 05",
    social: {
        twitter: "@agence_digitale",
        linkedin: "https://linkedin.com/company/agence-digitale",
    },
};
