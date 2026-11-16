import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import { formatPrice } from "@/lib/utils";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface FeaturedProductCardProps {
  product: Product;
  useLifestyleMockup?: boolean;
}

export default function FeaturedProductCard({
  product,
  useLifestyleMockup = true,
}: FeaturedProductCardProps) {
  const displayImage =
    useLifestyleMockup && product.lifestyleImage
      ? product.lifestyleImage
      : product.image;

  const isLifestyle = useLifestyleMockup && Boolean(product.lifestyleImage);

  return (
    <Card
      as="article"
      variant="interactive"
      className="group flex flex-col h-full bg-white"
    >
      {/* Prominent Image Stage */}
      <Link
        href={`/products/${product.slug}`}
        aria-label={`Featured: ${product.name}`}
        className="relative block w-full bg-[#F3F8F2] overflow-hidden aspect-[4/3] sm:aspect-[16/10]"
      >
        {displayImage ? (
          <div className="relative w-full h-full">
            <Image
              src={displayImage}
              alt={product.name}
              fill
              style={{ objectFit: isLifestyle ? "cover" : "contain" }}
              className={`transition-transform duration-300 ease-out group-hover:scale-[1.03] ${
                !isLifestyle ? "p-6 sm:p-8" : ""
              }`}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-[#526157]">
            <p className="text-xs text-[#526157] font-medium">Image coming soon</p>
          </div>
        )}

        {/* Featured Tag */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
          <span className="px-3 py-1 text-[11px] font-semibold tracking-wider uppercase bg-[#183D32] text-white rounded-sm shadow-sm">
            Featured
          </span>
          {product.badge && (
            <span className="hidden sm:inline-block px-2.5 py-1 text-[11px] font-medium tracking-wide bg-white text-[#183D32] border border-[#E4ECE4] rounded-sm">
              {product.badge}
            </span>
          )}
        </div>
      </Link>

      {/* Prominent Information Area */}
      <div className="flex flex-col flex-1 p-6 sm:p-7">
        <div className="flex items-center justify-between gap-2 mb-2">
          <span
            className="text-xs font-semibold tracking-[0.18em] uppercase text-[#126336]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {product.category}
          </span>
          {isLifestyle && (
            <span className="text-[11px] text-[#526157] font-medium">
              Lifestyle Staged
            </span>
          )}
        </div>

        <h3
          className="text-xl sm:text-2xl font-semibold text-[#183D32] mb-2.5 font-[var(--font-inter)]"
        >
          <Link
            href={`/products/${product.slug}`}
            className="hover:text-[#126336] transition-colors"
          >
            {product.name}
          </Link>
        </h3>

        {product.shortDescription && (
          <p
            className="text-sm leading-relaxed text-[#526157] mb-6 flex-1"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {product.shortDescription}
          </p>
        )}

        {/* Price & Action */}
        <div className="mt-auto pt-5 border-t border-[#E4ECE4] flex items-center justify-between gap-4">
          <div>
            <span className="block text-[11px] font-medium text-[#526157] uppercase tracking-wider">
              Pricing
            </span>
            <span
              className="text-base font-semibold text-[#183D32]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {product.price !== null
                ? formatPrice(product.price, product.currency)
                : "Pricing announced soon"}
            </span>
          </div>

          <Button
            as="a"
            href={`/products/${product.slug}`}
            variant="primary"
            size="md"
            className="rounded-md"
          >
            View Product
          </Button>
        </div>
      </div>
    </Card>
  );
}
