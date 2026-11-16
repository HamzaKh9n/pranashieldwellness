"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation" className="hidden md:flex items-center">
      <ul className="flex items-center gap-6 lg:gap-8">
        {navLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-[15px] font-[var(--font-inter)] tracking-normal transition-colors duration-150 relative py-1.5 ${
                  isActive
                    ? "text-[#183D32] font-semibold"
                    : "text-[#183D32] font-normal hover:text-[#25834B]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#183D32] rounded-full"
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
