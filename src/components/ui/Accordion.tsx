"use client";

import React, { useState } from "react";

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
  allowMultiple?: boolean;
  className?: string;
}

export default function Accordion({
  items,
  defaultOpenId,
  allowMultiple = false,
  className = "",
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(
    defaultOpenId ? [defaultOpenId] : []
  );

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`divide-y divide-[#E4ECE4] border-t border-b border-[#E4ECE4] ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const headingId = `accordion-heading-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <div key={item.id} className="py-1">
            <h3>
              <button
                id={headingId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                className="w-full py-4 flex items-center justify-between text-left text-sm sm:text-base font-semibold text-[#183D32] hover:text-[#126336] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25834B] cursor-pointer"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <span>{item.title}</span>
                <span
                  className={`ml-4 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-200 text-[#183D32] ${
                    isOpen ? "rotate-180 text-[#126336]" : ""
                  }`}
                  aria-hidden="true"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>
            </h3>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={headingId}
                className="pb-5 pt-1 text-sm text-[#526157] leading-relaxed font-[var(--font-inter)]"
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
