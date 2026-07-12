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
import Reveal from "./Reveal";

interface CourseCardProps {
    icon: ReactNode;
    children: ReactNode;
}

function CourseCard({ icon, children }: CourseCardProps) {
    return (
        <div className="flex h-full items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-xl">
            <div className="gel flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-sky-400 to-sky-600 text-white">
                {icon}
            </div>
            <h3 className="font-semibold text-slate-900">{children}</h3>
        </div>
    );
}

const courses = [
    { icon: <MousePointerClick className="size-6" />, name: "Informática na Ótica do Utilizador" },
    { icon: <Cpu className="size-6" />, name: "Manutenção e Reparação de Computadores" },
    { icon: <Router className="size-6" />, name: "Redes de Computadores" },
    { icon: <Palette className="size-6" />, name: "Design Gráfico" },
    { icon: <FileSpreadsheet className="size-6" />, name: "Ofimática (Word, Excel, PowerPoint)" },
    { icon: <Terminal className="size-6" />, name: "Introdução à Programação" },
    { icon: <Megaphone className="size-6" />, name: "Marketing Digital" },
    { icon: <Calculator className="size-6" />, name: "Contabilidade: do básico ao avançado com Primavera" },
];

function TrainingCenter() {
    return (
        <section id="centro-de-formacao" className="bg-slate-50 py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <Reveal className="mx-auto max-w-3xl text-center">
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
                </Reveal>

                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {courses.map((course, index) => (
                        <Reveal key={course.name} delay={(index % 4) * 100}>
                            <CourseCard icon={course.icon}>{course.name}</CourseCard>
                        </Reveal>
                    ))}
                </div>

                <Reveal className="mx-auto mt-16 max-w-3xl text-center">
                    <div className="flex items-center justify-center gap-3 text-slate-900">
                        <Users className="size-6 text-sky-600" />
                        <h3 className="text-xl font-semibold">Para quem é</h3>
                    </div>
                    <p className="mt-4 text-lg leading-relaxed text-slate-600">
                        Jovens, estudantes, profissionais em reconversão e empresas que
                        pretendam capacitar as suas equipas.
                    </p>

                    <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center sm:gap-6">
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
                </Reveal>
            </div>
        </section>
    );
}

export default TrainingCenter;
