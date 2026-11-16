export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductImageSettings {
  fit?: "contain" | "cover";
  position?: string;
  scale?: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  image: string;
  lifestyleImage?: string;
  gallery?: string[];

  // Demo Pricing for Frontend Development
  price: number;
  originalPrice?: number;
  isDemoPrice?: boolean;

  shortDescription?: string;
  description?: string;

  category?: string;
  specifications?: ProductSpecification[];

  available?: boolean;
  stockCount?: number;

  imageSettings?: ProductImageSettings;

  featured?: boolean;
  badge?: string | null;
  currency?: string;
}
