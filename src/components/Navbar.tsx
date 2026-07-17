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
                    onClick={() => setIsOpen(true)}
                    aria-label="Abrir menu"
                    aria-expanded={isOpen}
                    className="text-white transition-colors hover:text-sky-400 md:hidden"
                >
                    <Menu className="size-7" />
                </button>
            </nav>

            {/* Fundo escuro por trás do menu */}
            <div
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
                className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden ${
                    isOpen ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
            />

            {/* Menu lateral branco, cobrindo toda a altura da tela */}
            <aside
                className={`fixed inset-y-0 right-0 z-50 flex w-72 max-w-[80%] flex-col bg-white shadow-2xl transition-transform duration-300 md:hidden ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex items-center justify-end px-6 py-6">
                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        aria-label="Fechar menu"
                        className="text-slate-700 transition-colors hover:text-sky-600"
                    >
                        <X className="size-6" />
                    </button>
                </div>

                <ul className="flex flex-col px-4 text-slate-800">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block rounded-xl px-4 py-3 text-lg transition-colors hover:bg-slate-100 hover:text-sky-600"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </aside>
        </header>
    );
}

export default Navbar;
