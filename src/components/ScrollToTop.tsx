import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { animateScroll } from "react-scroll";

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => setIsVisible(window.scrollY > 400);

        toggleVisibility();
        window.addEventListener("scroll", toggleVisibility, { passive: true });
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <button
            type="button"
            onClick={() => animateScroll.scrollToTop({ smooth: true, duration: 500 })}
            aria-label="Voltar ao topo"
            className={`liquid-glass fixed bottom-6 left-1/2 z-50 flex size-12 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full text-white transition-all duration-300 hover:bg-white/20 ${
                isVisible
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-4 opacity-0"
            }`}
        >
            <ArrowUp className="size-5 text-black" />
        </button>
    );
}

export default ScrollToTop;
