import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
    href: string;
    variant?: ButtonVariant;
    icon?: ReactNode;
    children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-sky-500 hover:bg-sky-400",
    secondary: "bg-black hover:bg-neutral-800",
};

function Button({ href, variant = "primary", icon, children }: ButtonProps) {
    return (
        <a
            href={href}
            className={`inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 text-white transition-colors ${variantClasses[variant]}`}
        >
            {icon}
            {children}
        </a>
    );
}

export default Button;
