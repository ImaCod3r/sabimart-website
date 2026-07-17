import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, animateScroll } from "react-scroll";
import logo from "../assets/logo.svg";

const links = [
    { label: "Quem somos", to: "quem-somos" },
    { label: "Serviços", to: "servicos" },
    { label: "Centro de formação", to: "centro-de-formacao" },
    { label: "Contactos", to: "contactos" },
];

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="absolute top-0 left-0 z-20 w-full">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:py-8 lg:px-10">
                <button
                    type="button"
                    onClick={() => animateScroll.scrollToTop({ smooth: true, duration: 500 })}
                    aria-label="Ir para o topo"
                    className="cursor-pointer"
                >
                    <img src={logo} alt="Sabimart" className="h-8 w-auto" />
                </button>

                {/* Links visíveis apenas em ecrãs médios e maiores */}
                <ul className="hidden items-center gap-6 text-white md:flex">
                    {links.map((link) => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                smooth
                                duration={500}
                                offset={-80}
                                className="cursor-pointer transition-colors hover:text-sky-400"
                            >
                                {link.label}
                            </Link>
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
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                smooth
                                duration={500}
                                offset={-80}
                                onClick={() => setIsOpen(false)}
                                className="block cursor-pointer rounded-xl px-4 py-3 text-lg transition-colors hover:bg-slate-100 hover:text-sky-600"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </header>
    );
}

export default Navbar;
