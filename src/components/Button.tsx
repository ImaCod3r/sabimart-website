import type { ReactNode } from "react";
import { Link } from "react-scroll";

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
        <Link
            to={href.replace(/^#/, "")}
            smooth
            duration={500}
            offset={-80}
            className={`gel inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full px-8 py-3.5 text-white transition hover:brightness-110 ${variantClasses[variant]} ${className}`}
        >
            {icon}
            {children}
        </Link>
    );
}

export default Button;
