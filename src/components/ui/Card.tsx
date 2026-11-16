import React from "react";
import { cn } from "@/lib/utils";

export type CardVariant = "default" | "muted" | "interactive";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  as?: React.ElementType;
}

export default function Card({
  variant = "default",
  as: Component = "div",
  className,
  children,
  ...props
}: CardProps) {
  const variantStyles: Record<CardVariant, string> = {
    default: "bg-white border border-[#E4ECE4] rounded-[12px]",
    muted: "bg-[#F3F8F2] border border-[#E4ECE4] rounded-[12px]",
    interactive:
      "bg-white border border-[#E4ECE4] rounded-[12px] transition-all duration-200 hover:border-[#25834B] hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]",
  };

  return (
    <Component
      className={cn(
        "overflow-hidden",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
