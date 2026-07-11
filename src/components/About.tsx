import type { ReactNode } from "react";
import { Eye, Gem, Target } from "lucide-react";

interface CardProps {
    icon: ReactNode;
    title: string;
    children: ReactNode;
}

function Card({ icon, title, children }: CardProps) {
    return (
        <div className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-lg shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-xl">
            <div className="gel flex size-14 items-center justify-center rounded-full bg-gradient-to-b from-sky-400 to-sky-600 text-white">
                {icon}
            </div>
            <h3 className="mt-6 text-xl font-semibold text-slate-900">{title}</h3>
            <p className="mt-3 leading-relaxed text-slate-600">{children}</p>
        </div>
    );
}

function About() {
    return (
        <section id="quem-somos" className="bg-slate-50 py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                        Quem somos
                    </h2>

                    {/* Separador entre o título e o texto */}
                    <div className="mx-auto mt-6 h-px w-full max-w-xs bg-gradient-to-r from-transparent via-sky-500/60 to-transparent" />

                    <p className="mt-8 text-lg leading-relaxed text-slate-600">
                        A Sabimart é uma empresa prestadora de serviços de tecnologia. Além dos
                        nossos serviços tech, mantemos um Centro de Formação dedicado a capacitar
                        profissionais e futuros talentos digitais.
                    </p>
                    <p className="mt-6 text-lg leading-relaxed text-slate-600">
                        Acreditamos que tecnologia e conhecimento andam juntos: por isso, unimos
                        prestação de serviços com formação prática, criando valor real para
                        empresas, instituições e pessoas.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-3">
                    <Card icon={<Target className="size-7" />} title="Missão">
                        Fornecer soluções tecnológicas de qualidade e formar profissionais
                        capacitados para o mercado digital.
                    </Card>
                    <Card icon={<Eye className="size-7" />} title="Visão">
                        Ser referência em serviços tech e formação digital.
                    </Card>
                    <Card icon={<Gem className="size-7" />} title="Valores">
                        Qualidade, Proximidade, Inovação, Compromisso com o desenvolvimento das
                        comunidades onde atuamos.
                    </Card>
                </div>
            </div>
        </section>
    );
}

export default About;
