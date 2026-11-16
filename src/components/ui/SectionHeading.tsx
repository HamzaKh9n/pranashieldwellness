import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className="mb-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#126336]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-[#183D32]"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {heading}
      </h2>
      {description && (
        <p
          className="mt-3 text-sm sm:text-base leading-relaxed text-[#526157]"
        >
          {description}
        </p>
      )}
    </div>
  );
}
