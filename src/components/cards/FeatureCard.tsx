import React from "react";
import Card from "@/components/ui/Card";

export interface FeatureCardProps {
  icon?: React.ReactNode;
  heading: string;
  description: string;
  className?: string;
}

export default function FeatureCard({
  icon,
  heading,
  description,
  className,
}: FeatureCardProps) {
  return (
    <Card
      variant="default"
      className={`p-6 sm:p-7 flex flex-col bg-[#F3F8F2] border border-[#E4ECE4] transition-colors duration-150 hover:border-[#126336] ${
        className || ""
      }`}
    >
      {icon && (
        <div
          className="mb-4 inline-flex items-center justify-center w-11 h-11 rounded-md text-[#126336] bg-[#DCEEDC]"
          aria-hidden="true"
        >
          {icon}
        </div>
      )}

      <h3
        className="text-base sm:text-lg font-semibold text-[#183D32] mb-2 font-[var(--font-heading)]"
      >
        {heading}
      </h3>

      <p
        className="text-sm leading-relaxed text-[#526157]"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {description}
      </p>
    </Card>
  );
}
