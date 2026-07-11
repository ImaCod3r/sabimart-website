import { useEffect, useState } from "react";

interface TypewriterTextProps {
    text: string;
    /** Intervalo em ms entre cada caractere */
    speed?: number;
}

function TypewriterText({ text, speed = 45 }: TypewriterTextProps) {
    const [length, setLength] = useState(0);

    useEffect(() => {
        setLength(0);
        const interval = setInterval(() => {
            setLength((current) => {
                if (current >= text.length) {
                    clearInterval(interval);
                    return current;
                }
                return current + 1;
            });
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return (
        <span className="relative inline-block" aria-label={text}>
            {/* Texto completo invisível para reservar o espaço e evitar saltos de layout */}
            <span aria-hidden="true" className="invisible">
                {text}
            </span>
            <span aria-hidden="true" className="absolute inset-0">
                {text.slice(0, length)}
                <span className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.12em] animate-caret-blink bg-current" />
            </span>
        </span>
    );
}

export default TypewriterText;
