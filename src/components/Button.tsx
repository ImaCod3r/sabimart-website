import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
    href: string;
    variant?: ButtonVariant;
    children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-sky-500 hover:bg-sky-400",
    secondary: "bg-black hover:bg-neutral-800",
};

function Button({ href, variant = "primary", children }: ButtonProps) {
    return (
        <a
            href={href}
            className={`rounded-full px-8 py-3.5 text-white transition-colors ${variantClasses[variant]}`}
        >
            {children}
        </a>
    );
}

export default Button;
