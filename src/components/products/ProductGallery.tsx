"use client";

import { useState } from "react";
import Image from "next/image";
import type { ProductImageSettings } from "@/types/product";

type ProductGalleryProps = {
  images?: string[];
  productName: string;
  imageSettings?: ProductImageSettings;
};

export default function ProductGallery({
  images = [],
  productName,
  imageSettings,
}: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const validImages = images.filter(Boolean);

  if (validImages.length === 0) {
    return (
      <div className="relative w-full aspect-square rounded-2xl bg-white border border-[#E4ECE4] flex items-center justify-center p-6">
        <div className="text-center px-6 text-[#526157]">
          <svg
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="mx-auto mb-3 text-[#526157]"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          <p className="text-sm text-[#526157] font-medium">
            Product image coming soon
          </p>
        </div>
      </div>
    );
  }

  const activeSrc = validImages[activeIndex] || validImages[0];
  const fit = imageSettings?.fit ?? "contain";
  const position = imageSettings?.position ?? "center";
  const scale = imageSettings?.scale ?? 1;

  return (
    <div className="flex flex-col">
      {/* Primary Image Stage — Consistent Square Container */}
      <div className="relative w-full aspect-square rounded-2xl bg-white border border-[#E4ECE4] overflow-hidden flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={activeSrc}
            alt={`${productName} — view ${activeIndex + 1}`}
            fill
            style={{
              objectFit: fit,
              objectPosition: position,
              transform: scale !== 1 ? `scale(${scale})` : undefined,
            }}
            className="transition-transform duration-300 ease-out"
            sizes="(min-width: 1024px) 58vw, 100vw"
            priority
          />
        </div>
      </div>

      {/* Thumbnails Underneath (Only rendered when multiple images exist) */}
      {validImages.length > 1 && (
        <div
          className="flex items-center gap-3 mt-4 overflow-x-auto pb-1"
          aria-label="Product thumbnails"
        >
          {validImages.map((src, i) => {
            const isSelected = i === activeIndex;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`View ${productName} image ${i + 1}`}
                aria-current={isSelected}
                className={`relative w-20 h-20 sm:w-22 sm:h-22 rounded-xl bg-white overflow-hidden p-1.5 flex-shrink-0 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25834B] ${
                  isSelected
                    ? "border-2 border-[#25834B] shadow-xs"
                    : "border border-[#E4ECE4] hover:border-[#126336]"
                }`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={src}
                    alt={`${productName} thumbnail ${i + 1}`}
                    fill
                    style={{ objectFit: "contain" }}
                    className="object-contain object-center"
                    sizes="88px"
                  />
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
