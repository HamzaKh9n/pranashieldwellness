import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import { formatPrice } from "@/lib/utils";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Card
      as="article"
      variant="interactive"
      className={`group flex flex-col h-full bg-white ${className || ""}`}
    >
      {/* Product Image Stage (Large, Soft #F3F8F2 background, 10–14px rounded top) */}
      <Link
        href={`/products/${product.slug}`}
        aria-label={`View ${product.name}`}
        className="relative block w-full bg-[#F3F8F2] overflow-hidden aspect-[4/5] sm:aspect-[3/4]"
      >
        {product.image ? (
          <div className="relative w-full h-full p-6 sm:p-7 flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.name}
              fill
              style={{ objectFit: "contain" }}
              className="p-5 sm:p-6 transition-transform duration-300 ease-out group-hover:scale-[1.04]"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 380px"
              priority={false}
            />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-[#526157]">
            <p className="text-xs text-[#526157] font-medium">Image coming soon</p>
          </div>
        )}

        {/* Optional Category/Formula Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase bg-white text-[#183D32] border border-[#E4ECE4] rounded-sm">
            {product.badge}
          </span>
        )}
      </Link>

      {/* Information Area */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <p
          className="text-xs font-semibold tracking-[0.16em] uppercase text-[#126336] mb-1.5"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {product.category}
        </p>

        <h3
          className="text-lg sm:text-[1.15rem] font-semibold leading-snug text-[#183D32] mb-2 font-[var(--font-inter)]"
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
            className="text-sm leading-relaxed text-[#526157] mb-5 flex-1"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {product.shortDescription}
          </p>
        )}

        {/* Bottom Actions and Price */}
        <div className="mt-auto pt-4 border-t border-[#E4ECE4] flex items-center justify-between gap-3">
          <div>
            <span className="block text-[11px] font-medium text-[#526157] uppercase tracking-wider">
              Price
            </span>
            <span
              className="text-sm sm:text-base font-semibold text-[#183D32]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {product.price !== null
                ? formatPrice(product.price, product.currency)
                : "Coming soon"}
            </span>
          </div>

          <Button
            as="a"
            href={`/products/${product.slug}`}
            variant="secondary"
            size="sm"
            className="rounded-md"
          >
            View Product
          </Button>
        </div>
      </div>
    </Card>
  );
}
