"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { formatPrice } from "@/lib/utils";
import QuantitySelector from "@/components/products/QuantitySelector";

export default function CartPage() {
  const { items, itemCount, subtotal, removeItem, updateQuantity, clearCart } =
    useCart();

  if (itemCount === 0) {
    return (
      <section className="py-20 md:py-28 bg-white" aria-label="Shopping Cart">
        <Container>
          <div className="max-w-md mx-auto text-center">
            <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-[#F3F8F2] border border-[#E4ECE4] text-[#126336] flex items-center justify-center">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </div>
            <h1
              className="text-2xl sm:text-3xl font-semibold mb-3 text-[#183D32]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Your Shopping Bag is Empty
            </h1>
            <p className="text-sm text-[#526157] mb-8 leading-relaxed">
              Explore our collection of premium wellness supplements and discover products
              formulated to support your daily health and vitality.
            </p>
            <Button as="a" href="/products" variant="primary" size="lg">
              Explore Products
            </Button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-18 bg-white" aria-label="Shopping Cart">
      <Container>
        {/* Cart Header */}
        <div className="mb-8 pb-4 border-b border-[#E4ECE4] flex items-center justify-between gap-4">
          <div>
            <p
              className="text-xs font-semibold tracking-widest uppercase text-[#126336] mb-1"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Your Selection
            </p>
            <h1
              className="text-2xl sm:text-3xl font-semibold text-[#183D32]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Shopping Cart
              <span className="ml-2.5 text-base font-normal text-[#526157]">
                ({itemCount} {itemCount === 1 ? "item" : "items"})
              </span>
            </h1>
          </div>
          <button
            type="button"
            onClick={clearCart}
            className="text-xs font-semibold uppercase tracking-wider text-[#526157] hover:text-[#183D32] transition-colors cursor-pointer"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Clear cart
          </button>
        </div>

        {/* Cart Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Cart Items List */}
          <div className="lg:col-span-8 space-y-4">
            {items.map((item) => (
              <Card
                key={item.productId}
                variant="default"
                className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-4 sm:p-5 bg-white border border-[#E4ECE4] rounded-xl"
              >
                {/* Thumbnail */}
                <Link
                  href={`/products/${item.slug}`}
                  className="flex-shrink-0"
                >
                  <div className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-lg overflow-hidden bg-[#F3F8F2] border border-[#E4ECE4] flex items-center justify-center p-2">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        style={{ objectFit: "contain", padding: "0.25rem" }}
                        sizes="96px"
                      />
                    ) : (
                      <span className="text-xs text-[#526157]">No img</span>
                    )}
                  </div>
                </Link>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <Link href={`/products/${item.slug}`}>
                    <h3
                      className="text-base sm:text-lg font-semibold text-[#183D32] hover:text-[#25834B] transition-colors"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {item.name}
                    </h3>
                  </Link>
                  <p className="text-sm font-semibold text-[#183D32] mt-1">
                    {formatPrice(item.price)}
                  </p>

                  <div className="mt-3 flex items-center gap-4">
                    <QuantitySelector
                      quantity={item.quantity}
                      onChange={(newQty) => updateQuantity(item.productId, newQty)}
                      className="scale-90 origin-left"
                    />

                    <button
                      type="button"
                      onClick={() => removeItem(item.productId)}
                      className="text-xs font-medium text-[#526157] hover:text-[#183D32] underline transition-colors cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                {/* Item Total */}
                <div className="sm:text-right flex sm:flex-col justify-between sm:justify-center border-t sm:border-t-0 pt-2 sm:pt-0 border-[#E4ECE4]">
                  <span className="text-xs text-[#526157] sm:hidden">Total:</span>
                  <p className="text-base font-semibold text-[#183D32]">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Order Summary Card */}
          <div className="lg:col-span-4">
            <Card
              variant="muted"
              className="p-6 border border-[#E4ECE4] bg-[#F3F8F2] rounded-xl"
            >
              <h2
                className="text-lg font-semibold text-[#183D32] mb-4 pb-3 border-b border-[#E4ECE4]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Order Summary
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#526157]">Subtotal</span>
                  <span className="font-semibold text-[#183D32]">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-[#526157]">Shipping</span>
                  <span className="text-[#526157] italic">
                    Calculated at checkout
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-[#E4ECE4] flex justify-between text-base font-semibold text-[#183D32]">
                <span>Total</span>
                <span>{formatPrice(subtotal)}</span>
              </div>

              <div className="mt-5 p-3.5 text-xs bg-white rounded-lg border border-[#E4ECE4] text-[#526157] leading-relaxed">
                <span className="font-semibold text-[#183D32]">Notice: </span>
                Online checkout is currently pending final payment gateway verification ahead of official release.
              </div>

              <Button
                variant="primary"
                size="lg"
                disabled
                className="mt-5 w-full bg-[#E4ECE4] text-[#526157] !text-[#526157] border-[#E4ECE4] cursor-not-allowed hover:bg-[#E4ECE4] hover:text-[#526157]"
              >
                Proceed to Checkout
              </Button>

              <Link
                href="/products"
                className="mt-4 block text-center text-xs font-semibold uppercase tracking-wider text-[#126336] hover:text-[#25834B] transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              >
                ← Continue Shopping
              </Link>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
