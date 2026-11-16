import Image from "next/image";
import Link from "next/link";
import Card from "@/components/ui/Card";

export interface CategoryCardProps {
  name: string;
  description: string;
  href: string;
  image: string;
  itemCount?: number;
}

export default function CategoryCard({
  name,
  description,
  href,
  image,
  itemCount,
}: CategoryCardProps) {
  return (
    <Link href={href} className="group block h-full focus:outline-none">
      <Card
        variant="interactive"
        className="flex flex-col h-full bg-white overflow-hidden"
      >
        {/* Visual Focus Area */}
        <div className="relative w-full aspect-[4/3] bg-[#F3F8F2] overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            style={{ objectFit: "cover" }}
            className="transition-transform duration-300 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>

        {/* Clean Bottom-Aligned Text Area */}
        <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
          <div>
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <h3
                className="text-lg font-semibold text-[#183D32] group-hover:text-[#126336] transition-colors font-[var(--font-heading)]"
              >
                {name}
              </h3>
              {itemCount !== undefined && (
                <span className="text-xs text-[#526157] font-medium font-[var(--font-body)]">
                  {itemCount} {itemCount === 1 ? "Product" : "Products"}
                </span>
              )}
            </div>

            <p
              className="text-sm text-[#526157] leading-relaxed line-clamp-2"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {description}
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-[#E4ECE4] flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-[#126336]">
            <span>Explore Category</span>
            <span
              className="transition-transform duration-150 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
