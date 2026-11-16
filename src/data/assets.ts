/**
 * Centralized Asset Configuration for Pranashieldwellness
 * Provides consistent, typed image paths across the storefront.
 */

export const brandAssets = {
  logo: {
    full: "/assets/logo/logo.png",
    symbol: "/assets/logo/brand-symbol.png",
  },
  hero: {
    gainpro: "/assets/hero/gainpro-Hero.png",
    testoxtreme: "/assets/hero/testoXtreme-Hero-clean.png",
  },
  products: {
    testoxtreme: {
      bottle: "/assets/products/testoxtreme.png",
      lifestyle: "/assets/mockups/testoxtremeMockup-clean.png",
    },
    gainPro: {
      bottle: "/assets/products/gain-pro.png",
      lifestyle: "/assets/mockups/gainpromockup-clean.png",
    },
  },
} as const;

export type BrandAssets = typeof brandAssets;
