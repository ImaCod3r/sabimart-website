import logo from "../assets/logo.svg";

const links = [
    { label: "Sobre nós", href: "#quem-somos" },
    { label: "Serviços", href: "#servicos" },
    { label: "Centro de Formação", href: "#centro-de-formacao" },
    { label: "Contactos", href: "#contactos" },
    { label: "Política de Privacidade", href: "#" },
];

function Footer() {
    return (
        <footer className="bg-slate-900 text-white">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
                <div className="flex flex-col items-center gap-8 text-center">
                    <a href="#">
                        <img src={logo} alt="Sabimart" className="h-8 w-auto" />
                    </a>

                    <p className="text-white/80">
                        Sabimart — Serviços de Tecnologia &amp; Centro de Formação
                    </p>

                    <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                        {links.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="text-white/70 transition-colors hover:text-sky-400"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
                    © {new Date().getFullYear()} Sabimart. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
