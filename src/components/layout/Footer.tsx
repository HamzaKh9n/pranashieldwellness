"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { quickLinks, customerInfoLinks, legalLinks } from "@/data/navigation";
import { brandAssets } from "@/data/assets";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full bg-[#183D32] text-white mt-auto border-t border-[rgba(255,255,255,0.22)]"
      aria-label="Footer"
    >
      <Container>
        {/* Top Section — Responsive Three-Column Layout (55–70px padding) */}
        <div className="py-14 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Column 1 — Brand (White container for symbol, White Brand Name, Clear Introduction) */}
          <div className="lg:col-span-6 flex flex-col">
            <Link
              href="/"
              aria-label="Pranashieldwellness — Home"
              className="inline-flex items-center gap-3.5 group mb-4"
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 bg-white p-2 rounded-lg shadow-sm">
                <Image
                  src={brandAssets.logo.symbol}
                  alt="Pranashieldwellness brand symbol"
                  fill
                  style={{ objectFit: "contain" }}
                  priority={false}
                />
              </div>
              <span
                className="text-2xl sm:text-[1.7rem] font-semibold tracking-tight text-[#FFFFFF] transition-colors group-hover:text-[#DCEEDC]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Pranashieldwellness
              </span>
            </Link>

            <p
              className="text-[14.5px] leading-relaxed text-[#E0E9E2] max-w-sm"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Explore the Pranashieldwellness collection and discover our approach
              to everyday wellness.
            </p>
          </div>

          {/* Column 2 — Quick Links (Navigation links: #FFFFFF, Hover: #DCEEDC) */}
          <div className="lg:col-span-3">
            <h3
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[#FFFFFF] mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm" style={{ fontFamily: "var(--font-body)" }}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#FFFFFF] hover:text-[#DCEEDC] transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Customer Information (Navigation links: #FFFFFF, Hover: #DCEEDC) */}
          <div className="lg:col-span-3">
            <h3
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[#FFFFFF] mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Customer Information
            </h3>
            <ul className="space-y-2.5 text-sm" style={{ fontFamily: "var(--font-body)" }}>
              {customerInfoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#FFFFFF] hover:text-[#DCEEDC] transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section — Compact & Centered (35–45px padding) */}
        <div className="py-10 border-t border-[rgba(255,255,255,0.22)]">
          <div className="max-w-[460px] mx-auto text-center px-4">
            <h3
              className="text-xl sm:text-[1.35rem] font-semibold text-[#FFFFFF] tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              A little wellness in your inbox
            </h3>
            <p
              className="mt-1 text-sm text-[#E0E9E2]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Stay connected with Pranashieldwellness.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-5 flex items-stretch w-full max-w-[420px] mx-auto border border-[rgba(255,255,255,0.22)] focus-within:border-[#DCEEDC] transition-colors rounded-lg bg-black/20 overflow-hidden"
            >
              <label htmlFor="footer-newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-newsletter-email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2.5 text-sm text-[#FFFFFF] placeholder-[#C5D5CA] bg-transparent outline-none font-[var(--font-inter)]"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="px-4 py-2.5 text-[#FFFFFF] bg-[#25834B] hover:bg-[#126336] transition-colors flex items-center justify-center font-medium cursor-pointer"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Bar — Responsive (Legal links & secondary info: #C5D5CA, Hover: #DCEEDC) */}
        <div
          className="py-5 border-t border-[rgba(255,255,255,0.22)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#C5D5CA]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <p>© {currentYear} Pranashieldwellness. All rights reserved.</p>

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[#C5D5CA] hover:text-[#DCEEDC] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
