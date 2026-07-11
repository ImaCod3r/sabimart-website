import bg from "../assets/bg.png";

function Hero() {
    return (
        <section
            className="relative flex min-h-screen flex-col bg-slate-900 bg-cover bg-center"
            style={{ backgroundImage: `url(${bg})` }}
        >
            {/* Overlay escuro sobre a imagem de fundo */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

            <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
                <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
                    Soluções tech e capacitação digital em Luanda e Cabinda.
                </h1>
                <p className="mt-4 text-lg text-white/90 md:text-xl">
                    Tecnologia e formação para impulsionar o teu negócio.
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
                    <a
                        href="#contactos"
                        className="rounded-full bg-sky-500 px-8 py-3.5 text-white transition-colors hover:bg-sky-400"
                    >
                        Entre em contacto
                    </a>
                    <a
                        href="#centro-de-formacao"
                        className="rounded-full bg-black px-8 py-3.5 text-white transition-colors hover:bg-neutral-800"
                    >
                        Conheça nossos cursos
                    </a>
                </div>
            </div>

            <div className="relative z-10 bg-white/10 py-10 backdrop-blur-md border-t border-[#9E9E9E]">
                <p className="mx-auto max-w-2xl px-6 text-center leading-relaxed text-white">
                    Somos uma empresa angolana de serviços de tecnologia com centro de formação
                    próprio em Cabinda. Ajudamos empresas e profissionais a crescer através de
                    soluções digitais e capacitação técnica de qualidade.
                </p>
            </div>
        </section>
    );
}

export default Hero;
