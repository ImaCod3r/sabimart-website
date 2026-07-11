import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
    href: string;
    variant?: ButtonVariant;
    icon?: ReactNode;
    children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-gradient-to-b from-sky-400 to-sky-600",
    secondary: "bg-gradient-to-b from-neutral-700 to-black",
};

function Button({ href, variant = "primary", icon, children }: ButtonProps) {
    return (
        <a
            href={href}
            className={`gel inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 text-white transition hover:brightness-110 ${variantClasses[variant]}`}
        >
            {icon}
            {children}
        </a>
    );
}

export default Button;
