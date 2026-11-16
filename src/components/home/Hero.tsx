"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { brandAssets } from "@/data/assets";

type HeroSlide = {
  id: string;
  eyebrow: string;
  heading: string;
  description: string;
  primaryBtn: {
    text: string;
    href: string;
  };
  secondaryBtn: {
    text: string;
    href: string;
  };
  image: string;
  alt: string;
  imageBg: string;
};

const slides: HeroSlide[] = [
  {
    id: "gain-pro",
    eyebrow: "PRANASHIELDWELLNESS COLLECTION",
    heading: "Discover GAIN-PRO",
    description:
      "Meet GAIN-PRO, part of the Pranashieldwellness product collection. Explore the product and its details.",
    primaryBtn: {
      text: "Explore GAIN-PRO",
      href: "/products/gain-pro",
    },
    secondaryBtn: {
      text: "Explore All Products",
      href: "/products",
    },
    image: brandAssets.hero.gainpro,
    alt: "GAIN-PRO wellness supplement packaging in botanical setting",
    imageBg: "#183D32",
  },
  {
    id: "testoxtreme",
    eyebrow: "FEATURED PRODUCT",
    heading: "Meet TestoXtreme",
    description:
      "Discover TestoXtreme from the Pranashieldwellness collection. Learn more about its packaging and product information.",
    primaryBtn: {
      text: "Explore TestoXtreme",
      href: "/products/testoxtreme",
    },
    secondaryBtn: {
      text: "Explore All Products",
      href: "/products",
    },
    image: brandAssets.hero.testoxtreme,
    alt: "TestoXtreme wellness supplement packaging in botanical setting",
    imageBg: "#F3F8F2",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prevSlide();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      nextSlide();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    setTouchStartX(null);
  };

  const activeSlide = slides[current];

  return (
    <section
      className="relative w-full bg-[#F3F8F2] border-b border-[#E4ECE4] overflow-hidden select-none focus:outline-none"
      aria-roledescription="carousel"
      aria-label="Featured Products Carousel"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* =========================================================
          DESKTOP & TABLET TWO-COLUMN SPLIT (md:grid)
          - Left: Solid #F3F8F2 panel with anchored, non-jumping controls
          - Right: 16:9 proportioned image area with object-contain
          ========================================================= */}
      <div className="hidden md:grid md:grid-cols-12 w-full h-[440px] lg:h-[480px] xl:h-[520px] 2xl:h-[560px] items-stretch">
        {/* Left Content Column — Fixed height with mt-auto anchored controls */}
        <div className="md:col-span-5 lg:col-span-5 xl:col-span-5 bg-[#F3F8F2] flex flex-col justify-between px-6 sm:px-8 md:px-8 lg:px-12 xl:px-16 pt-8 md:pt-10 lg:pt-12 pb-6 md:pb-8 lg:pb-10 z-10 border-r border-[#E4ECE4]">
          {/* Slide Content (Top Area) */}
          <div className="flex-1 flex flex-col justify-start max-w-md w-full">
            {/* Eyebrow */}
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[#126336] mb-2 sm:mb-3"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {activeSlide.eyebrow}
            </p>

            {/* Heading */}
            <h1
              className="text-2xl sm:text-3xl lg:text-[2.25rem] xl:text-[2.65rem] font-semibold tracking-[-0.015em] leading-[1.15] text-[#183D32] mb-3 sm:mb-3.5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {activeSlide.heading}
            </h1>

            {/* Description */}
            <p
              className="text-sm sm:text-base leading-relaxed text-[#526157] mb-6 sm:mb-7"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {activeSlide.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-3.5">
              <Button
                as="a"
                href={activeSlide.primaryBtn.href}
                variant="primary"
                size="md"
              >
                {activeSlide.primaryBtn.text}
              </Button>

              <Button
                as="a"
                href={activeSlide.secondaryBtn.href}
                variant="secondary"
                size="md"
              >
                {activeSlide.secondaryBtn.text}
              </Button>
            </div>
          </div>

          {/* Fixed Carousel Controls — Anchored to bottom with mt-auto, NEVER shifts vertically */}
          <div className="mt-auto pt-4 lg:pt-5 border-t border-[#E4ECE4] flex items-center justify-between w-full max-w-md">
            {/* Slide Indicators & Counter */}
            <div className="flex items-center gap-3">
              <div
                className="flex items-center gap-2"
                role="tablist"
                aria-label="Carousel pagination"
              >
                {slides.map((slide, idx) => {
                  const isActive = idx === current;
                  return (
                    <button
                      key={`desktop-dot-${slide.id}`}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`Slide ${idx + 1}: ${slide.heading}`}
                      onClick={() => goToSlide(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25834B] ${
                        isActive
                          ? "w-7 bg-[#183D32]"
                          : "w-2.5 bg-[#526157]/40 hover:bg-[#183D32]"
                      }`}
                    />
                  );
                })}
              </div>
              <span className="text-xs font-medium text-[#526157] tracking-wider font-[var(--font-inter)]">
                {current + 1} / {slides.length}
              </span>
            </div>

            {/* Previous & Next Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous slide"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-[#183D32] border border-[#E4ECE4] hover:bg-[#FAF9F4] hover:border-[#126336] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25834B]"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-[#183D32] border border-[#E4ECE4] hover:bg-[#FAF9F4] hover:border-[#126336] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25834B]"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right Image Column — Dedicated 16:9 Artwork Area with object-contain */}
        <div className="md:col-span-7 lg:col-span-7 xl:col-span-7 relative h-full overflow-hidden bg-[#F3F8F2]">
          {slides.map((slide, idx) => {
            const isActive = idx === current;
            return (
              <div
                key={`desktop-img-${slide.id}`}
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${
                  isActive
                    ? "opacity-100 z-10 pointer-events-auto"
                    : "opacity-0 z-0 pointer-events-none"
                }`}
                style={{ backgroundColor: slide.imageBg }}
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${idx + 1} of ${slides.length}: ${slide.heading}`}
                aria-hidden={!isActive}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    priority={idx === 0}
                    sizes="(min-width: 768px) 60vw, 100vw"
                    style={{ objectFit: "contain" }}
                    className="object-contain object-center"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================================
          MOBILE HERO (md:hidden)
          - Solid text section above with non-jumping controls
          - Complete uncropped 16:9 artwork below
          ========================================================= */}
      <div
        className="md:hidden flex flex-col w-full bg-[#F3F8F2]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Solid Text Section with Anchored Controls */}
        <Container className="py-7 sm:py-8 flex flex-col justify-between">
          <div>
            <p
              className="text-xs font-semibold tracking-[0.18em] uppercase text-[#126336] mb-2"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {activeSlide.eyebrow}
            </p>

            <h1
              className="text-2xl sm:text-3xl font-semibold leading-tight tracking-tight text-[#183D32] mb-2.5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {activeSlide.heading}
            </h1>

            <p
              className="text-sm sm:text-base leading-relaxed text-[#526157] mb-5"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {activeSlide.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 mb-6">
              <Button
                as="a"
                href={activeSlide.primaryBtn.href}
                variant="primary"
                size="md"
                className="w-full sm:w-auto"
              >
                {activeSlide.primaryBtn.text}
              </Button>

              <Button
                as="a"
                href={activeSlide.secondaryBtn.href}
                variant="secondary"
                size="md"
                className="w-full sm:w-auto"
              >
                {activeSlide.secondaryBtn.text}
              </Button>
            </div>
          </div>

          {/* Consistent Mobile Controls Row */}
          <div className="pt-4 border-t border-[#E4ECE4] flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <div
                className="flex items-center gap-2"
                role="tablist"
                aria-label="Mobile carousel pagination"
              >
                {slides.map((slide, idx) => {
                  const isActive = idx === current;
                  return (
                    <button
                      key={`mobile-dot-${slide.id}`}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`Slide ${idx + 1}: ${slide.heading}`}
                      onClick={() => goToSlide(idx)}
                      className="min-h-[44px] flex items-center justify-center px-0.5 cursor-pointer"
                    >
                      <span
                        className={`h-2.5 rounded-full transition-all duration-300 block ${
                          isActive
                            ? "w-7 bg-[#183D32]"
                            : "w-2.5 bg-[#526157]/40"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
              <span className="text-xs font-medium text-[#526157] tracking-wider font-[var(--font-inter)]">
                {current + 1} / {slides.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous slide"
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white text-[#183D32] border border-[#E4ECE4] hover:bg-[#FAF9F4] active:scale-95 transition-transform cursor-pointer"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white text-[#183D32] border border-[#E4ECE4] hover:bg-[#FAF9F4] active:scale-95 transition-transform cursor-pointer"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </Container>

        {/* Dedicated 16:9 Artwork Area Below — Full 1.79:1 aspect ratio preserving packaging */}
        <div className="relative w-full aspect-[2752/1536] overflow-hidden border-t border-[#E4ECE4]">
          {slides.map((slide, idx) => {
            const isActive = idx === current;
            return (
              <div
                key={`mobile-img-${slide.id}`}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  isActive
                    ? "opacity-100 z-10 pointer-events-auto"
                    : "opacity-0 z-0 pointer-events-none"
                }`}
                style={{ backgroundColor: slide.imageBg }}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  sizes="100vw"
                  priority={idx === 0}
                  style={{ objectFit: "contain" }}
                  className="object-contain object-center"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
