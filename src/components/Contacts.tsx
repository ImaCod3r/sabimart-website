import type { ReactNode } from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import Reveal from "./Reveal";

// Ícones de marcas (Facebook, Instagram, LinkedIn) foram removidos do
// lucide-react, por isso estão recriados aqui como SVGs no mesmo estilo.
function BrandIcon({ children }: { children: ReactNode }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-5"
            aria-hidden="true"
        >
            {children}
        </svg>
    );
}

function FacebookIcon() {
    return (
        <BrandIcon>
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </BrandIcon>
    );
}

function InstagramIcon() {
    return (
        <BrandIcon>
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </BrandIcon>
    );
}

function LinkedInIcon() {
    return (
        <BrandIcon>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </BrandIcon>
    );
}

interface ContactCardProps {
    icon: ReactNode;
    title: string;
    label: string;
    href: string;
}

function ContactCard({ icon, title, label, href }: ContactCardProps) {
    return (
        <a
            href={href}
            className="flex h-full flex-col items-center rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-lg shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-xl"
        >
            <div className="gel flex size-14 items-center justify-center rounded-full bg-gradient-to-b from-sky-400 to-sky-600 text-white">
                {icon}
            </div>
            <h3 className="mt-6 text-xl font-semibold text-slate-900">{title}</h3>
            <p className="mt-2 text-slate-600">{label}</p>
        </a>
    );
}

const socials = [
    { name: "Facebook", icon: <FacebookIcon />, href: "#" },
    { name: "Instagram", icon: <InstagramIcon />, href: "#" },
    { name: "LinkedIn", icon: <LinkedInIcon />, href: "#" },
];

function Contacts() {
    return (
        <section id="contactos" className="bg-slate-50 py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <Reveal className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                        Contactos
                    </h2>

                    {/* Separador entre o título e o texto */}
                    <div className="mx-auto mt-6 h-px w-full max-w-xs bg-gradient-to-r from-transparent via-sky-500/60 to-transparent" />

                    <p className="mt-8 text-lg leading-relaxed text-slate-600">
                        Fala connosco pelo canal que preferires.
                    </p>
                </Reveal>

                <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-3">
                    <Reveal delay={0}>
                        <ContactCard
                            icon={<Phone className="size-7" />}
                            title="Telefone"
                            label="+244 928 113 549"
                            href="tel:+244928113549"
                        />
                    </Reveal>
                    <Reveal delay={100}>
                        <ContactCard
                            icon={<MessageCircle className="size-7" />}
                            title="WhatsApp"
                            label="+244 928 113 549"
                            href="https://wa.me/244928113549"
                        />
                    </Reveal>
                    <Reveal delay={200}>
                        <ContactCard
                            icon={<Mail className="size-7" />}
                            title="Email"
                            label="geral@sabimart.online"
                            href="mailto:geral@sabimart.online"
                        />
                    </Reveal>
                </div>

                <Reveal className="mt-16 flex items-center justify-center gap-4" delay={200}>
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            aria-label={social.name}
                            className="gel flex size-12 items-center justify-center rounded-full bg-gradient-to-b from-sky-400 to-sky-600 text-white transition hover:brightness-110"
                        >
                            {social.icon}
                        </a>
                    ))}
                </Reveal>
            </div>
        </section>
    );
}

export default Contacts;
