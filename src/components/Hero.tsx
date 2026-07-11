import { ArrowDown, GraduationCap, MessageCircle } from "lucide-react";
import bg from "../assets/bg.png";
import Button from "./Button";
import TypewriterText from "./TypewriterText";

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
                    <TypewriterText text="Tech que resolve. Formação que transforma." />
                </h1>
                <p className="mt-4 text-lg text-white/90 md:text-xl">
                    Tecnologia e formação para impulsionar o teu negócio.
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
                    <Button href="#contactos" icon={<MessageCircle className="size-5" />}>
                        Entre em contacto
                    </Button>
                    <Button
                        href="#centro-de-formacao"
                        variant="secondary"
                        icon={<GraduationCap className="size-5" />}
                    >
                        Conheça nossos serviços
                    </Button>
                </div>
            </div>

            <div className="relative z-10 flex justify-center pb-12">
                <a
                    href="#quem-somos"
                    aria-label="Rolar para a próxima secção"
                    className="liquid-glass flex size-14 items-center justify-center rounded-full text-white transition-colors hover:bg-white/20"
                >
                    <ArrowDown className="size-6" />
                </a>
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
