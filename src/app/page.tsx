import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BrandIntroduction from "@/components/home/BrandIntroduction";
import BrandValues from "@/components/home/BrandValues";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Pranashieldwellness — Premium Wellness Supplements",
  description:
    "Wellness begins with the choices you make. Explore the Pranashieldwellness collection of premium supplements.",
};

function ClosingCTA() {
  return (
    <section
      className="py-16 md:py-20"
      style={{ backgroundColor: "var(--color-bg-secondary)" }}
      aria-label="Browse our products"
    >
      <Container>
        <div className="max-w-xl mx-auto text-center">
          <p
            className="mb-3 text-xs font-semibold tracking-widest uppercase text-[#126336]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Get Started
          </p>
          <h2
            className="text-3xl sm:text-4xl font-semibold mb-4"
            style={{ color: "var(--color-heading)", fontFamily: "var(--font-heading)" }}
          >
            Ready to explore?
          </h2>
          <p className="mb-8 text-sm leading-relaxed" style={{ color: "var(--color-body)" }}>
            Browse our available supplements and find out how Pranashieldwellness
            can support your wellness goals.
          </p>
          <Button as="a" href="/products" variant="primary" size="lg">
            Browse Products
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <BrandIntroduction />
      <BrandValues />
      <ClosingCTA />
    </>
  );
}
