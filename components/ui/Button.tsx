import Link from "next/link";
import { type ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-medium transition-colors duration-150 min-h-12";

const variants = {
  primary: "bg-accent text-paper hover:bg-accent-dark",
  secondary:
    "border border-ink/25 text-ink hover:border-accent hover:text-accent-dark",
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
        <span aria-hidden="true" className="text-sm">
          ↗
        </span>
        <span className="sr-only">(külső link, új lapon nyílik meg)</span>
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
