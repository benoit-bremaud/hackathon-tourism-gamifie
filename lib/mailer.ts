import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";

let transporter: Transporter | null = null;

export function getTransport() {
    if (transporter) return transporter;

    const host = process.env.SMTP_HOST;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !user || !pass) {
        throw new Error("Variables SMTP_HOST, SMTP_USER et SMTP_PASS requises.");
    }

    const port = Number(process.env.SMTP_PORT || 587);

    transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        pool: true,
        maxConnections: 3,
        auth: { user, pass },
    });

    return transporter;
}
