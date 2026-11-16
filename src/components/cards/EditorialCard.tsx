import Image from "next/image";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export interface EditorialCardProps {
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  href: string;
  ctaText?: string;
  imagePosition?: "left" | "right";
  className?: string;
}

export default function EditorialCard({
  eyebrow,
  title,
  description,
  image,
  href,
  ctaText = "Discover Formula",
  imagePosition = "left",
  className,
}: EditorialCardProps) {
  const isImageRight = imagePosition === "right";

  return (
    <Card
      variant="default"
      className={`grid grid-cols-1 md:grid-cols-12 bg-white overflow-hidden items-center ${
        className || ""
      }`}
    >
      {/* Lifestyle Photography Region */}
      <div
        className={`relative w-full aspect-[4/3] md:aspect-auto md:h-full md:min-h-[360px] bg-[#F3F8F2] overflow-hidden ${
          isImageRight
            ? "md:col-span-6 md:order-2"
            : "md:col-span-6 md:order-1"
        }`}
      >
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Editorial Content Region */}
      <div
        className={`p-6 sm:p-10 md:col-span-6 flex flex-col justify-center ${
          isImageRight ? "md:order-1" : "md:order-2"
        }`}
      >
        {eyebrow && (
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase text-[#126336] mb-2.5"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {eyebrow}
          </p>
        )}

        <h3
          className="text-2xl sm:text-3xl font-semibold leading-tight text-[#183D32] mb-3.5"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h3>

        <p
          className="text-sm sm:text-base leading-relaxed text-[#526157] mb-6"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {description}
        </p>

        <div>
          <Button as="a" href={href} variant="primary" size="md" className="rounded-md">
            {ctaText}
          </Button>
        </div>
      </div>
    </Card>
  );
}
