import React from "react";
import Link from "next/link";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "highlight" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  icon,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed rounded-[4px] select-none text-center";

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 gap-1.5 sm:gap-2",
    lg: "text-sm px-5 sm:px-6 py-2.5 sm:py-3.5 gap-2 sm:gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-accent text-surface hover:bg-accent-deep active:bg-accent-deep shadow-xs",
    secondary:
      "bg-surface text-ink border border-line hover:border-accent hover:text-accent",
    outline:
      "bg-transparent text-ink border border-line hover:border-ink active:bg-sand/60",
    highlight:
      "bg-highlight text-surface hover:bg-accent active:bg-accent-deep",
    ghost:
      "bg-transparent text-ink-muted hover:text-ink hover:bg-sand/50",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
        {icon && <span className="inline-flex shrink-0">{icon}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
    </button>
  );
}
