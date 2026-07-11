import type { ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";

function Reason({ children }: { children: ReactNode }) {
    return (
        <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-xl">
            <CheckCircle2 className="size-6 shrink-0 text-sky-600" />
            <p className="leading-relaxed text-slate-700">{children}</p>
        </div>
    );
}

function WhyUs() {
    return (
        <section id="porque-sabimart" className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                        Por que escolher a Sabimart
                    </h2>

                    {/* Separador entre o título e o conteúdo */}
                    <div className="mx-auto mt-6 h-px w-full max-w-xs bg-gradient-to-r from-transparent via-sky-500/60 to-transparent" />
                </div>

                <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2">
                    <Reason>
                        Equipa técnica qualificada e atenta às necessidades do cliente.
                    </Reason>
                    <Reason>
                        Aliamos serviço técnico à formação, gerando know-how contínuo.
                    </Reason>
                    <Reason>
                        Metodologia prática, focada em resultados reais.
                    </Reason>
                    <Reason>
                        Compromisso com qualidade e melhoria contínua.
                    </Reason>
                </div>
            </div>
        </section>
    );
}

export default WhyUs;
