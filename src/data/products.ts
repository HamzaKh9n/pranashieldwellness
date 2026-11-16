import type { Product } from "@/types/product";
import { brandAssets } from "@/data/assets";

/**
 * Pranashieldwellness Central Product Catalog
 *
 * NOTE ON PRICING:
 * All prices listed below (e.g. ₹999 for TestoXtreme, ₹1,299 for GAIN-PRO) are
 * temporary dummy / demo values used for frontend development and visual layout testing.
 * They are NOT client-approved retail prices and will be configured prior to commercial launch.
 * `isDemoPrice: true` explicitly flags these values.
 */
export const products: Product[] = [
  {
    id: "testoxtreme",
    slug: "testoxtreme",
    name: "TestoXtreme",
    // Primary background-containing mockup image
    image: brandAssets.products.testoxtreme.lifestyle,
    lifestyleImage: brandAssets.products.testoxtreme.lifestyle,
    gallery: [
      brandAssets.products.testoxtreme.lifestyle,
      brandAssets.products.testoxtreme.bottle,
      brandAssets.hero.testoxtreme,
    ],
    shortDescription:
      "A premium botanical wellness supplement formulated to support vitality, physical resilience, and everyday energy.",
    description:
      "TestoXtreme is part of the core Pranashieldwellness collection, developed to complement an active lifestyle and everyday vitality. Crafted with traditional botanical principles and modern quality standards, each batch is sealed for freshness and verified purity.",
    // Temporary demo prices for frontend development
    price: 999,
    originalPrice: 1299,
    isDemoPrice: true,
    currency: "INR",
    category: "Vitality & Strength",
    specifications: [
      { label: "Product Form", value: "Vegetarian Capsules" },
      { label: "Net Quantity", value: "60 Capsules per bottle" },
      { label: "Serving Suggestion", value: "1–2 Capsules daily with water, as directed" },
      { label: "Category", value: "Vitality & Wellness Formula" },
      { label: "Packaging", value: "Sealed, moisture-resistant bottle" },
      { label: "Brand", value: "Pranashieldwellness" },
    ],
    featured: true,
    available: true,
    badge: "Vitality Formula",
    imageSettings: {
      fit: "contain",
      position: "center",
      scale: 1,
    },
  },
  {
    id: "gain-pro",
    slug: "gain-pro",
    name: "GAIN-PRO",
    // Primary background-containing mockup image
    image: brandAssets.products.gainPro.lifestyle,
    lifestyleImage: brandAssets.products.gainPro.lifestyle,
    gallery: [
      brandAssets.products.gainPro.lifestyle,
      brandAssets.products.gainPro.bottle,
      brandAssets.hero.gainpro,
    ],
    shortDescription:
      "A wellness supplement thoughtfully formulated to support strength, active recovery, and muscular endurance.",
    description:
      "GAIN-PRO is engineered to support your fitness and recovery journey. Designed as part of the core Pranashieldwellness collection, it brings together purposeful botanical ingredients to assist active individuals in meeting their strength and post-activity wellness goals.",
    // Temporary demo prices for frontend development
    price: 1299,
    originalPrice: 1599,
    isDemoPrice: true,
    currency: "INR",
    category: "Performance & Mass",
    specifications: [
      { label: "Product Form", value: "Vegetarian Capsules" },
      { label: "Net Quantity", value: "60 Capsules per bottle" },
      { label: "Serving Suggestion", value: "1–2 Capsules daily with water post-workout or as directed" },
      { label: "Category", value: "Strength & Recovery Formula" },
      { label: "Packaging", value: "Sealed, moisture-resistant bottle" },
      { label: "Brand", value: "Pranashieldwellness" },
    ],
    featured: true,
    available: true,
    badge: "Strength & Recovery",
    imageSettings: {
      fit: "contain",
      position: "center",
      scale: 1,
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
