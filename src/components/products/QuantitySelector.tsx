"use client";

import React from "react";

interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
  min?: number;
  max?: number;
  disabled?: boolean;
  className?: string;
}

export default function QuantitySelector({
  quantity,
  onChange,
  min = 1,
  max = 99,
  disabled = false,
  className = "",
}: QuantitySelectorProps) {
  const handleDecrement = () => {
    if (disabled || quantity <= min) return;
    onChange(quantity - 1);
  };

  const handleIncrement = () => {
    if (disabled || quantity >= max) return;
    onChange(quantity + 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const val = parseInt(e.target.value, 10);
    if (isNaN(val)) {
      onChange(min);
    } else {
      onChange(Math.max(min, Math.min(max, val)));
    }
  };

  return (
    <div
      className={`inline-flex items-center rounded-lg border border-[#E4ECE4] bg-white overflow-hidden shadow-xs ${
        disabled ? "opacity-60 cursor-not-allowed" : ""
      } ${className}`}
    >
      <button
        type="button"
        onClick={handleDecrement}
        disabled={disabled || quantity <= min}
        aria-label="Decrease quantity"
        className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center text-[#183D32] hover:bg-[#F3F8F2] hover:text-[#126336] disabled:text-[#C5D5CA] disabled:hover:bg-transparent disabled:cursor-not-allowed transition-colors cursor-pointer select-none font-medium text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25834B]"
      >
        −
      </button>

      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        aria-label="Product quantity"
        value={quantity}
        onChange={handleInputChange}
        disabled={disabled}
        className="w-12 text-center text-sm sm:text-base font-semibold text-[#183D32] bg-transparent border-x border-[#E4ECE4] py-2 focus:outline-none font-[var(--font-inter)]"
      />

      <button
        type="button"
        onClick={handleIncrement}
        disabled={disabled || quantity >= max}
        aria-label="Increase quantity"
        className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center text-[#183D32] hover:bg-[#F3F8F2] hover:text-[#126336] disabled:text-[#C5D5CA] disabled:hover:bg-transparent disabled:cursor-not-allowed transition-colors cursor-pointer select-none font-medium text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25834B]"
      >
        +
      </button>
    </div>
  );
}
