import { MessageCircle } from "lucide-react";
import { Link } from "react-scroll";
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
        <div className="mt-6 h-px w-full max-w-xl bg-linear-to-r from-transparent via-white/60 to-transparent" />

        <p className="mt-6 text-base text-white drop-shadow-sm md:text-lg">
          Tecnologia e formação para impulsionar o teu negócio.
        </p>

        <div className="mt-10 flex justify-center">
          <Link
            to="contactos"
            smooth
            duration={500}
            offset={-80}
            className="inline-flex h-11 cursor-pointer flex-row items-center font-medium leading-none text-white transition hover:brightness-110"
            style={{
              isolation: "isolate",
              padding: "10px 20px",
              gap: "16px",
              borderRadius: "12px",
              background:
                "radial-gradient(101.79% 101.79% at 65.61% 81.79%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(114.65% 114.65% at 9.73% 17.27%, #1E82E0 0%, #1C38EA 100%)",
              boxShadow:
                "20px 20px 24px rgba(148, 172, 243, 0.4), inset -3px -3px 4px rgba(191, 229, 251, 0.4), inset 4px 4px 4px rgba(19, 26, 228, 0.1)",
            }}
          >
            <MessageCircle className="size-5" fill="currentColor" stroke="currentColor" />
            Fale conosco
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
