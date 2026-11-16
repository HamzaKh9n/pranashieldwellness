"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import QuantitySelector from "@/components/products/QuantitySelector";
import Accordion, { AccordionItem } from "@/components/ui/Accordion";

type ProductDetailsProps = {
  product: Product;
};

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);
  const [addedNotice, setAddedNotice] = useState(false);
  const { addItem } = useCart();
  const router = useRouter();

  const isAvailable = Boolean(product.available);

  function handleAddToCart() {
    if (!isAvailable || product.price === null) return;
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity,
    });
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 3500);
  }

  function handleBuyItNow() {
    if (!isAvailable || product.price === null) return;
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity,
    });
    router.push("/cart");
  }

  // Accordion Sections for verified product specifications and details
  const accordionItems: AccordionItem[] = [
    ...(product.specifications && product.specifications.length > 0
      ? [
          {
            id: "specifications",
            title: "Product Specifications",
            content: (
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-1">
                {product.specifications.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex flex-col py-1 border-b border-[#E4ECE4]/60"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-wider text-[#126336]">
                      {spec.label}
                    </dt>
                    <dd className="text-sm font-medium text-[#183D32] mt-0.5">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            ),
          },
        ]
      : []),
    {
      id: "quality",
      title: "Quality Standards & Botanical Sourcing",
      content: (
        <div className="space-y-2 pt-1 text-sm text-[#526157] leading-relaxed">
          <p>
            Formulated using botanical extracts processed under strict hygienic
            manufacturing standards. Pranashieldwellness products are packaged
            without unnecessary fillers or artificial colorants.
          </p>
          <p className="text-xs text-[#526157] italic">
            Certified analytical batch testing and quality verification records
            are maintained for every production run.
          </p>
        </div>
      ),
    },
    {
      id: "storage",
      title: "Packaging & Storage Guidelines",
      content: (
        <div className="space-y-2 pt-1 text-sm text-[#526157] leading-relaxed">
          <p>
            Delivered in a sealed, moisture-resistant bottle designed to preserve
            potency and botanical integrity.
          </p>
          <p>
            Store in a cool, dry place away from direct sunlight. Reseal cap
            tightly after each use. Keep out of reach of children.
          </p>
        </div>
      ),
    },
    {
      id: "support",
      title: "Direct Customer Inquiries",
      content: (
        <div className="space-y-2 pt-1 text-sm text-[#526157] leading-relaxed">
          <p>
            Have questions about {product.name} or your order? Our support team
            is available to assist you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#126336] hover:text-[#25834B] transition-colors"
          >
            <span>Contact Support</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col">
      {/* 1. PRODUCT NAME */}
      <h1
        className="text-3xl sm:text-4xl lg:text-[2.5rem] font-semibold text-[#183D32] leading-tight tracking-tight mb-2 sm:mb-3"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {product.name}
      </h1>

      {/* 2. PRICE */}
      <div className="flex items-baseline gap-3 flex-wrap mb-1">
        <span
          className="text-2xl sm:text-3xl font-semibold text-[#183D32]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {formatPrice(product.price, product.currency)}
        </span>

        {product.originalPrice && product.originalPrice > product.price && (
          <span className="text-base sm:text-lg text-[#526157] line-through font-normal">
            {formatPrice(product.originalPrice, product.currency)}
          </span>
        )}

        {product.originalPrice && product.originalPrice > product.price && (
          <span className="px-2 py-0.5 text-xs font-semibold tracking-wide uppercase bg-[#DCEEDC] text-[#126336] rounded">
            Sale
          </span>
        )}
      </div>

      {/* 3. SHIPPING INFORMATION */}
      <p className="text-xs sm:text-sm text-[#526157] mb-4">
        Shipping calculated at checkout.
      </p>

      {/* 4. AVAILABILITY */}
      <div className="flex items-center gap-2 text-sm text-[#183D32] font-medium mb-5">
        <span
          className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
            isAvailable ? "bg-[#25834B]" : "bg-[#183D32]"
          }`}
        />
        <span>
          Availability:{" "}
          {product.stockCount !== undefined
            ? `${product.stockCount} in stock`
            : isAvailable
            ? "In stock"
            : "Currently unavailable"}
        </span>
      </div>

      {/* 5. QUANTITY SELECTOR */}
      <div className="mb-5">
        <label
          htmlFor="quantity-control"
          className="block text-xs font-semibold uppercase tracking-wider text-[#183D32] mb-2"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Quantity
        </label>
        <QuantitySelector
          quantity={quantity}
          onChange={setQuantity}
          disabled={!isAvailable}
        />
      </div>

      {/* 6. PURCHASE BUTTONS (Add to Cart + Buy It Now) */}
      <div className="flex flex-col gap-3 mb-6">
        {/* Add to Cart */}
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={!isAvailable}
          className="w-full h-12 sm:h-13 bg-[#25834B] hover:bg-[#126336] text-white font-medium text-base rounded-md transition-colors flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-xs"
        >
          Add to Cart
        </button>

        {/* Buy It Now */}
        <button
          type="button"
          onClick={handleBuyItNow}
          disabled={!isAvailable}
          className="w-full h-12 sm:h-13 bg-[#126336] hover:bg-[#0e4a28] text-white font-medium text-base rounded-md transition-colors flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-xs"
        >
          Buy It Now
        </button>

        {/* Added notice confirmation */}
        {addedNotice && (
          <div className="p-3 bg-[#DCEEDC] text-[#126336] text-xs font-medium rounded-md text-center transition-all animate-in fade-in duration-200">
            ✓ Added {quantity} × {product.name} to cart.{" "}
            <Link href="/cart" className="underline font-semibold ml-1 hover:text-[#183D32]">
              View Cart →
            </Link>
          </div>
        )}
      </div>

      {/* 7. PRODUCT SUMMARY */}
      {product.shortDescription && (
        <div className="pt-6 border-t border-[#E4ECE4] mb-3">
          <p
            className="text-base sm:text-[1.05rem] font-medium text-[#183D32] leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {product.shortDescription}
          </p>
        </div>
      )}

      {/* 8. PRODUCT DESCRIPTION */}
      {product.description && (
        <div className="text-sm sm:text-base leading-relaxed text-[#526157] space-y-3 mb-6">
          <p>{product.description}</p>
        </div>
      )}

      {/* 9. DETAILED SPECIFICATIONS ACCORDION */}
      <div className="mt-2">
        <Accordion items={accordionItems} defaultOpenId="specifications" />
      </div>
    </div>
  );
}
