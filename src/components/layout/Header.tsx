"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Container from "@/components/ui/Container";
import Navigation from "@/components/layout/Navigation";
import MobileMenu from "@/components/layout/MobileMenu";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";
import { brandAssets } from "@/data/assets";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { itemCount } = useCart();
  const router = useRouter();

  // Close search with Escape key
  useEffect(() => {
    if (!searchOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [searchOpen]);

  const filteredProducts = searchQuery.trim()
    ? products.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (filteredProducts.length > 0) {
      router.push(`/products/${filteredProducts[0].slug}`);
      setSearchOpen(false);
      setSearchQuery("");
    } else {
      router.push(`/products`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <>
      <header
        className="sticky top-0 z-30 w-full bg-[#FAF9F4] border-b border-[#E4ECE4]"
      >
        <Container>
          <div className="relative flex items-center justify-between h-[80px] md:h-[120px]">
            {/* Left Section: Navigation links (Desktop) or Mobile Menu Toggle */}
            <div className="flex items-center z-10 min-w-0">
              {/* Mobile Menu Icon (Left on mobile) */}
              <button
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                onClick={() => setMenuOpen((v) => !v)}
                className="md:hidden flex items-center justify-center w-10 h-10 -ml-2 rounded text-[#183D32] hover:text-[#25834B] hover:bg-[#F3F8F2] transition-colors"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                >
                  {menuOpen ? (
                    <>
                      <path d="M18 6L6 18" />
                      <path d="M6 6l12 12" />
                    </>
                  ) : (
                    <>
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </>
                  )}
                </svg>
              </button>

              {/* Desktop Navigation Links */}
              <Navigation />
            </div>

            {/* Center Section: Brand Logo — Perfectly Centered in Viewport */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20 pointer-events-auto">
              <Link
                href="/"
                aria-label="Pranashieldwellness — Home"
                className="flex items-center justify-center py-1 transition-opacity hover:opacity-90"
              >
                {/* 65–85px displayed height on desktop, ~54px on mobile, aspect ratio 1.2:1 */}
                <div className="relative h-[54px] sm:h-[68px] md:h-[78px] w-[65px] sm:w-[82px] md:w-[94px]">
                  <Image
                    src={brandAssets.logo.full}
                    alt="Pranashieldwellness"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                    sizes="(max-width: 640px) 65px, (max-width: 1024px) 82px, 94px"
                  />
                </div>
              </Link>
            </div>

            {/* Right Section: Utility icons (Search, Account, Cart) */}
            <div className="flex items-center justify-end gap-2 sm:gap-4 lg:gap-5 z-10 text-[#183D32]">
              {/* Search */}
              <button
                aria-label="Search"
                onClick={() => setSearchOpen(true)}
                className="flex items-center justify-center w-10 h-10 rounded text-[#183D32] hover:text-[#25834B] hover:bg-[#F3F8F2] transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </button>

              {/* Account (hidden on smallest screens, available in mobile menu) */}
              <Link
                href="/account"
                aria-label="Customer Account"
                className="hidden sm:flex items-center justify-center w-10 h-10 rounded text-[#183D32] hover:text-[#25834B] hover:bg-[#F3F8F2] transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="8" r="5" />
                  <path d="M20 21a8 8 0 0 0-16 0" />
                </svg>
              </Link>

              {/* Shopping Bag / Cart */}
              <Link
                href="/cart"
                aria-label={`Shopping cart${itemCount > 0 ? `, ${itemCount} items` : ""}`}
                className="flex items-center justify-center w-10 h-10 rounded text-[#183D32] hover:text-[#25834B] hover:bg-[#F3F8F2] transition-colors relative"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                {itemCount > 0 && (
                  <span
                    className="absolute top-1 right-1 min-w-[17px] h-[17px] px-1 flex items-center justify-center text-[10px] font-bold text-white rounded-full bg-[#183D32]"
                  >
                    {itemCount > 9 ? "9+" : itemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </Container>

        {/* Mobile Navigation Drawer */}
        <MobileMenu
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
          onOpenSearch={() => setSearchOpen(true)}
        />
      </header>

      {/* Interactive Search Overlay */}
      {searchOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Search products"
          className="fixed inset-0 z-50 flex flex-col bg-black/40"
        >
          <div
            className="w-full bg-[#FAF9F4] border-b border-[#E4ECE4] shadow-lg animate-in slide-in-from-top duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <Container>
              <div className="py-6 sm:py-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-between pb-3 border-b border-[#E4ECE4]">
                  <form onSubmit={handleSearchSubmit} className="flex-1 flex items-center gap-3">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#183D32" strokeWidth="1.75">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.35-4.35" />
                    </svg>
                    <input
                      type="search"
                      autoFocus
                      placeholder="Search TestoXtreme, GAIN-PRO, supplements…"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full text-base sm:text-lg bg-transparent border-none outline-none text-[#183D32] placeholder-[#526157] font-[var(--font-inter)]"
                    />
                  </form>
                  <button
                    onClick={() => {
                      setSearchOpen(false);
                      setSearchQuery("");
                    }}
                    aria-label="Close search"
                    className="p-1.5 text-[#526157] hover:text-[#183D32] transition-colors"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Instant Suggestions */}
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#526157] mb-2.5">
                    {searchQuery.trim() ? "Matching Products" : "Featured Products"}
                  </p>
                  <div className="flex flex-col gap-2">
                    {(searchQuery.trim() ? filteredProducts : products).map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.slug}`}
                        onClick={() => {
                          setSearchOpen(false);
                          setSearchQuery("");
                        }}
                        className="flex items-center justify-between p-2 rounded hover:bg-[#F3F8F2] transition-colors text-sm text-[#183D32]"
                      >
                        <span className="font-medium">{product.name}</span>
                        <span className="text-xs text-[#25834B]">View product →</span>
                      </Link>
                    ))}
                    {searchQuery.trim() && filteredProducts.length === 0 && (
                      <p className="text-sm text-[#526157] py-2">
                        No products found matching &ldquo;{searchQuery}&rdquo;.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </Container>
          </div>
          <div className="flex-1" onClick={() => setSearchOpen(false)} />
        </div>
      )}
    </>
  );
}
