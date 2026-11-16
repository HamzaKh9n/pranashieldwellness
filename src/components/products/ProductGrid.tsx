import type { Product } from "@/types/product";
import ProductCard from "@/components/products/ProductCard";
import { cn } from "@/lib/utils";

interface ProductGridProps {
  products: Product[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export default function ProductGrid({
  products,
  columns,
  className,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div
        className="py-16 text-center"
        style={{ color: "var(--color-body)" }}
      >
        <p
          className="text-lg font-medium"
          style={{
            color: "var(--color-heading)",
            fontFamily: "var(--font-heading)",
          }}
        >
          No products found
        </p>
        <p className="mt-2 text-sm">
          Products will be listed here once they are available.
        </p>
      </div>
    );
  }

  // Determine balanced column layout
  const gridCols =
    columns === 2
      ? "grid-cols-1 sm:grid-cols-2 max-w-4xl"
      : columns === 3
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      : columns === 4
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      : products.length <= 2
      ? "grid-cols-1 sm:grid-cols-2 max-w-4xl"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={cn("grid gap-6 sm:gap-8 items-stretch", gridCols, className)}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
