"use client";

import { useEffect } from "react";
import Link from "next/link";
import { navLinks } from "@/data/navigation";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch?: () => void;
};

export default function MobileMenu({ isOpen, onClose, onOpenSearch }: MobileMenuProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/40 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer from Left */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className="fixed inset-y-0 left-0 z-50 w-80 max-w-[85vw] flex flex-col bg-[#FAF9F4] border-r border-[#E4ECE4] shadow-xl animate-in slide-in-from-left duration-200"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E4ECE4]">
          <span
            className="text-xs font-semibold tracking-[0.2em] uppercase text-[#183D32]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Menu
          </span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-1.5 -mr-1.5 rounded text-[#526157] hover:text-[#183D32] transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 px-6 py-6 overflow-y-auto">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block py-3.5 text-base font-medium text-[#183D32] border-b border-[#E4ECE4] hover:text-[#126336] transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Additional mobile utility actions */}
          <div className="mt-8 pt-4 border-t border-[#E4ECE4] flex flex-col gap-3">
            {onOpenSearch && (
              <button
                onClick={() => {
                  onClose();
                  onOpenSearch();
                }}
                className="flex items-center gap-3 py-2 text-sm font-medium text-[#183D32] hover:text-[#25834B] transition-colors text-left"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                <span>Search Products</span>
              </button>
            )}

            <Link
              href="/account"
              onClick={onClose}
              className="flex items-center gap-3 py-2 text-sm font-medium text-[#183D32] hover:text-[#25834B] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 0 0-16 0" />
              </svg>
              <span>Customer Account</span>
            </Link>

            <Link
              href="/cart"
              onClick={onClose}
              className="flex items-center gap-3 py-2 text-sm font-medium text-[#183D32] hover:text-[#25834B] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span>Shopping Cart</span>
            </Link>
          </div>
        </nav>

        {/* Footer info in menu */}
        <div className="px-6 py-4 bg-[#F3F8F2] border-t border-[#E4ECE4] text-xs text-[#526157]">
          <p>© {new Date().getFullYear()} Pranashieldwellness</p>
        </div>
      </div>
    </>
  );
}
