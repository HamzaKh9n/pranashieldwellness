import type { Metadata } from "next";
import ProductsCatalogueClient from "./ProductsCatalogueClient";

export const metadata: Metadata = {
  title: "Products Catalogue",
  description:
    "Browse the full Pranashieldwellness collection of wellness supplements. Thoughtfully formulated to support vitality and active wellness.",
};

export default function ProductsPage() {
  return <ProductsCatalogueClient />;
}
