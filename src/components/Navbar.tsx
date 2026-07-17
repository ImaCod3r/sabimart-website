import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.svg";

const links = [
    { label: "Quem somos", href: "#quem-somos" },
    { label: "Serviços", href: "#servicos" },
    { label: "Centro de formação", href: "#centro-de-formacao" },
    { label: "Contactos", href: "#contactos" },
];

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="absolute top-0 left-0 z-20 w-full">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:py-8 lg:px-10">
                <a href="#">
                    <img src={logo} alt="Sabimart" className="h-8 w-auto" />
                </a>

                {/* Links visíveis apenas em ecrãs médios e maiores */}
                <ul className="hidden items-center gap-6 text-white md:flex">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className="transition-colors hover:text-sky-400">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Botão hambúrguer, visível apenas em mobile */}
                <button
                    type="button"
                    onClick={() => setIsOpen((open) => !open)}
                    aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={isOpen}
                    className="liquid-glass flex size-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/20 md:hidden"
                >
                    {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
                </button>
            </nav>

            {/* Menu mobile */}
            {isOpen && (
                <div className="px-6 md:hidden">
                    <ul className="liquid-glass flex flex-col gap-1 rounded-2xl p-3 text-white">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block rounded-xl px-4 py-3 transition-colors hover:bg-white/15 hover:text-sky-400"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Navbar;
