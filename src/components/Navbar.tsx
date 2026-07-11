import logo from "../assets/logo.svg";

function Navbar() {
    return (
        <header className="absolute top-0 left-0 z-20 w-full">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 lg:px-10">
                <a href="#">
                    <img src={logo} alt="Sabimart" className="h-8 w-auto" />
                </a>

                <ul className="flex items-center gap-10 text-white">
                    <li>
                        <a href="#quem-somos" className="transition-colors hover:text-sky-400">
                            Quem somos
                        </a>
                    </li>
                    <li>
                        <a href="#centro-de-formacao" className="transition-colors hover:text-sky-400">
                            Centro de formação
                        </a>
                    </li>
                    <li>
                        <a href="#contactos" className="transition-colors hover:text-sky-400">
                            Contactos
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
