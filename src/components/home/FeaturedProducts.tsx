import Link from "next/link";
import Container from "@/components/ui/Container";
import FeaturedProductCard from "@/components/products/FeaturedProductCard";
import { getFeaturedProducts } from "@/data/products";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section
      className="py-14 sm:py-16 md:py-20 bg-white"
      aria-label="Featured products"
    >
      <Container>
        {/* Section Heading & View All link */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[#126336] mb-2"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Our Products
            </p>
            <h2
              className="text-2xl sm:text-3xl lg:text-[2.2rem] font-semibold leading-tight text-[#183D32]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Current Collection
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#526157] max-w-xl leading-relaxed">
              A focused range of wellness supplements to support your everyday goals.
            </p>
          </div>
          <Link
            href="/products"
            className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#126336] hover:text-[#25834B] transition-colors pb-0.5 sm:pb-1"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <span>View all products</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Featured Product Cards using the high-resolution mockups from assets/mockups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {featured.map((product) => (
            <FeaturedProductCard
              key={product.id}
              product={product}
              useLifestyleMockup={true}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
