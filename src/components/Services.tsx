import type { ReactNode } from "react";
import {
    Code2,
    Lightbulb,
    Monitor,
    Network,
    ShieldCheck,
    Wrench,
} from "lucide-react";

interface ServiceCardProps {
    icon: ReactNode;
    title: string;
    children: ReactNode;
}

function ServiceCard({ icon, title, children }: ServiceCardProps) {
    return (
        <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-xl">
            <div className="gel flex size-14 items-center justify-center rounded-full bg-gradient-to-b from-sky-400 to-sky-600 text-white">
                {icon}
            </div>
            <h3 className="mt-6 text-xl font-semibold text-slate-900">{title}</h3>
            <p className="mt-3 leading-relaxed text-slate-600">{children}</p>
        </div>
    );
}

function Services() {
    return (
        <section id="servicos" className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                        O que fazemos
                    </h2>

                    {/* Separador entre o título e o texto */}
                    <div className="mx-auto mt-6 h-px w-full max-w-xs bg-gradient-to-r from-transparent via-sky-500/60 to-transparent" />

                    <p className="mt-8 text-lg leading-relaxed text-slate-600">
                        Soluções tecnológicas completas para empresas, instituições e
                        pessoas.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <ServiceCard
                        icon={<Wrench className="size-7" />}
                        title="Suporte e Manutenção de TI"
                    >
                        Assistência técnica, manutenção de equipamentos e infraestrutura
                        tecnológica para empresas.
                    </ServiceCard>
                    <ServiceCard
                        icon={<Network className="size-7" />}
                        title="Redes e Infraestrutura"
                    >
                        Instalação e configuração de redes, servidores e sistemas
                        informáticos.
                    </ServiceCard>
                    <ServiceCard
                        icon={<Code2 className="size-7" />}
                        title="Desenvolvimento de Software / Web"
                    >
                        Criação de websites, sistemas e aplicações à medida das
                        necessidades do cliente.
                    </ServiceCard>
                    <ServiceCard
                        icon={<Monitor className="size-7" />}
                        title="Venda de Equipamentos e Consumíveis de TI"
                    >
                        Fornecimento de computadores, periféricos e material informático.
                    </ServiceCard>
                    <ServiceCard
                        icon={<Lightbulb className="size-7" />}
                        title="Consultoria Tecnológica"
                    >
                        Apoio na escolha e implementação de soluções tecnológicas para
                        negócios.
                    </ServiceCard>
                    <ServiceCard
                        icon={<ShieldCheck className="size-7" />}
                        title="Segurança Informática"
                    >
                        Soluções de proteção de dados e sistemas contra ameaças digitais.
                    </ServiceCard>
                </div>
            </div>
        </section>
    );
}

export default Services;
