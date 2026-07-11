import type { ReactNode } from "react";
import {
    Calculator,
    Cpu,
    FileSpreadsheet,
    GraduationCap,
    Megaphone,
    MessageCircle,
    MousePointerClick,
    Palette,
    Router,
    Terminal,
    Users,
} from "lucide-react";
import Button from "./Button";

interface CourseCardProps {
    icon: ReactNode;
    children: ReactNode;
}

function CourseCard({ icon, children }: CourseCardProps) {
    return (
        <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-xl">
            <div className="gel flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-sky-400 to-sky-600 text-white">
                {icon}
            </div>
            <h3 className="font-semibold text-slate-900">{children}</h3>
        </div>
    );
}

function TrainingCenter() {
    return (
        <section id="centro-de-formacao" className="bg-slate-50 py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                        Centro de Formação Sabimart
                    </h2>

                    {/* Separador entre o título e o texto */}
                    <div className="mx-auto mt-6 h-px w-full max-w-xs bg-gradient-to-r from-transparent via-sky-500/60 to-transparent" />

                    <p className="mt-8 text-lg leading-relaxed text-slate-600">
                        O nosso Centro de Formação oferece cursos práticos nas áreas de
                        tecnologia, preparando alunos para o mercado de trabalho e para os
                        próprios serviços que prestamos.
                    </p>
                </div>

                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <CourseCard icon={<MousePointerClick className="size-6" />}>
                        Informática na Ótica do Utilizador
                    </CourseCard>
                    <CourseCard icon={<Cpu className="size-6" />}>
                        Manutenção e Reparação de Computadores
                    </CourseCard>
                    <CourseCard icon={<Router className="size-6" />}>
                        Redes de Computadores
                    </CourseCard>
                    <CourseCard icon={<Palette className="size-6" />}>
                        Design Gráfico
                    </CourseCard>
                    <CourseCard icon={<FileSpreadsheet className="size-6" />}>
                        Ofimática (Word, Excel, PowerPoint)
                    </CourseCard>
                    <CourseCard icon={<Terminal className="size-6" />}>
                        Introdução à Programação
                    </CourseCard>
                    <CourseCard icon={<Megaphone className="size-6" />}>
                        Marketing Digital
                    </CourseCard>
                    <CourseCard icon={<Calculator className="size-6" />}>
                        Contabilidade: do básico ao avançado com Primavera
                    </CourseCard>
                </div>

                <div className="mx-auto mt-16 max-w-3xl text-center">
                    <div className="flex items-center justify-center gap-3 text-slate-900">
                        <Users className="size-6 text-sky-600" />
                        <h3 className="text-xl font-semibold">Para quem é</h3>
                    </div>
                    <p className="mt-4 text-lg leading-relaxed text-slate-600">
                        Jovens, estudantes, profissionais em reconversão e empresas que
                        pretendam capacitar as suas equipas.
                    </p>

                    <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
                        <Button href="#contactos" icon={<GraduationCap className="size-5" />}>
                            Inscreve-te já
                        </Button>
                        <Button
                            href="#contactos"
                            variant="secondary"
                            icon={<MessageCircle className="size-5" />}
                        >
                            Pede mais informações
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TrainingCenter;
