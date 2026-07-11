import { GraduationCap, MessageCircle } from "lucide-react";
import Button from "./Button";

function FinalCta() {
    return (
        <section className="relative overflow-hidden bg-slate-900 py-24">
            {/* Brilho suave ao centro para destacar o CTA */}
            <div className="absolute inset-x-0 top-0 mx-auto h-64 max-w-3xl rounded-full bg-sky-500/20 blur-3xl" />

            <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
                <h2 className="text-3xl font-semibold text-white md:text-4xl">
                    Pronto para dar o próximo passo?
                </h2>

                {/* Separador entre o título e o texto */}
                <div className="mx-auto mt-6 h-px w-full max-w-xs bg-gradient-to-r from-transparent via-white/50 to-transparent" />

                <p className="mt-8 text-lg leading-relaxed text-white/90">
                    Seja para resolver um desafio tecnológico do seu negócio ou para
                    investir na sua formação, a Sabimart está pronta para ajudar.
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
                    <Button href="#contactos" icon={<MessageCircle className="size-5" />}>
                        Contactar a Sabimart
                    </Button>
                    <a
                        href="#centro-de-formacao"
                        className="liquid-glass inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 text-white transition-colors hover:bg-white/20"
                    >
                        <GraduationCap className="size-5" />
                        Ver Cursos Disponíveis
                    </a>
                </div>
            </div>
        </section>
    );
}

export default FinalCta;
