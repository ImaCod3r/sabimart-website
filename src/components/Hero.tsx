import { MessageCircle } from "lucide-react";
import bg from "../assets/bg.png";
import TypewriterText from "./TypewriterText";

function Hero() {
  return (
    <section
      className="relative flex min-h-screen flex-col bg-sky-300 bg-cover bg-bottom bg-no-repeat"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* Leve escurecimento no topo para dar contraste ao texto e à navegação */}
      <div className="absolute inset-x-0 top-0 h-2/3 bg-linear-to from-sky-500/25 to-transparent" />

      {/* Desvanece para branco na base, dando continuidade com a próxima secção */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-white" />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-20 pb-10 text-center md:pt-28">
        <h1 className="max-w-4xl text-3xl font-semibold leading-tight text-white drop-shadow-sm md:text-5xl">
          <TypewriterText text="Tech que resolve. Formação que transforma." />
        </h1>

        {/* Separador entre o título e o subtítulo */}
        <div className="mt-8 h-px w-full max-w-xl bg-linear-to from-transparent via-white/60 to-transparent" />

        <p className="mt-8 text-base text-white drop-shadow-sm md:text-lg">
          Tecnologia e formação para impulsionar o teu negócio.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="#contactos"
            className="gel inline-flex items-center gap-3 rounded-2xl bg-linear-to-br from-blue-500 to-indigo-500 px-8 py-4 text-lg font-medium text-white shadow-xl shadow-indigo-500/30 transition hover:brightness-110"
          >
            <MessageCircle className="size-5" />
            Fale conosco
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
