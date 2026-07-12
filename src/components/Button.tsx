import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
    href: string;
    variant?: ButtonVariant;
    icon?: ReactNode;
    className?: string;
    children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-gradient-to-b from-sky-400 to-sky-600",
    secondary: "bg-gradient-to-b from-neutral-700 to-black",
};

function Button({ href, variant = "primary", icon, className = "", children }: ButtonProps) {
    return (
        <a
            href={href}
            className={`gel inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-3.5 text-white transition hover:brightness-110 ${variantClasses[variant]} ${className}`}
        >
            {icon}
            {children}
        </a>
    );
}

export default Button;
