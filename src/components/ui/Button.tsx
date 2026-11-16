import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  as?: "button" | "a";
  href?: string;
  children: React.ReactNode;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#25834B] text-[#FFFFFF] !text-white border border-[#25834B] hover:bg-[#126336] hover:text-[#FFFFFF] hover:border-[#126336]",
  secondary:
    "bg-[#FFFFFF] text-[#126336] border border-[#E4ECE4] hover:bg-[#F3F8F2] hover:text-[#126336] hover:border-[#E4ECE4]",
  outline:
    "bg-transparent text-[#126336] border border-[#126336] hover:bg-[#126336] hover:text-[#FFFFFF] hover:border-[#126336]",
  ghost:
    "bg-transparent text-[#183D32] border border-transparent hover:text-[#126336] hover:bg-[#F3F8F2]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs sm:text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-7 py-3 text-sm sm:text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  as: Tag = "button",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-semibold font-[var(--font-inter)] tracking-wide transition-colors duration-150 cursor-pointer text-center select-none",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (Tag === "a" || href) {
    if (href && href.startsWith("/")) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
