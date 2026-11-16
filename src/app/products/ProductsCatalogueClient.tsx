"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductGrid from "@/components/products/ProductGrid";
import { products } from "@/data/products";

export default function ProductsCatalogueClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories: string[] = [
    "All",
    ...Array.from(
      new Set(
        products
          .map((p) => p.category)
          .filter((c): c is string => Boolean(c))
      )
    ),
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <>
      {/* Page Header */}
      <div className="py-12 md:py-16 bg-[#F3F8F2] border-b border-[#E4ECE4]">
        <Container>
          <SectionHeading
            eyebrow="PRANASHIELDWELLNESS COLLECTION"
            heading="All Products"
            description="Explore our focused collection of premium wellness supplements, formulated with care for your health and vitality."
          />
        </Container>
      </div>

      {/* Catalogue & Filter Section */}
      <section className="py-12 md:py-18 bg-white">
        <Container>
          {/* Category Filter Pills */}
          {categories.length > 1 && (
            <div className="mb-10 flex flex-wrap items-center gap-2.5">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-lg border transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25834B] ${
                      isSelected
                        ? "bg-[#25834B] text-white border-[#25834B] shadow-xs"
                        : "bg-white text-[#183D32] border-[#E4ECE4] hover:bg-[#F3F8F2] hover:border-[#126336]"
                    }`}
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {cat}
                  </button>
                );
              })}
              <span className="ml-auto text-xs text-[#526157] font-medium hidden sm:inline-block">
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
              </span>
            </div>
          )}

          {/* Product Grid */}
          <ProductGrid products={filteredProducts} />

          {/* Store Guarantee Strip */}
          <div className="mt-16 pt-12 border-t border-[#E4ECE4] grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-full bg-[#DCEEDC] text-[#126336] flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#183D32] mb-1 font-[var(--font-heading)]">
                  Verified Purity
                </h3>
                <p className="text-xs text-[#526157] leading-relaxed">
                  Carefully developed formulas crafted under strict quality control standards.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-full bg-[#DCEEDC] text-[#126336] flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#183D32] mb-1 font-[var(--font-heading)]">
                  Botanical Formulations
                </h3>
                <p className="text-xs text-[#526157] leading-relaxed">
                  Natural botanical extracts selected for purposeful wellness support.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-full bg-[#DCEEDC] text-[#126336] flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#183D32] mb-1 font-[var(--font-heading)]">
                  Sealed Freshness
                </h3>
                <p className="text-xs text-[#526157] leading-relaxed">
                  Packaged in tamper-evident, moisture-resistant bottles to preserve potency.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
