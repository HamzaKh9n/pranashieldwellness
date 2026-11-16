# Pranashieldwellness

Premium wellness e-commerce frontend built with Next.js 16, TypeScript, Tailwind CSS v4, and React 19.

---

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm 9 or later

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (fonts, cart provider, header/footer)
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles & CSS custom properties
│   ├── not-found.tsx       # 404 page
│   ├── products/
│   │   ├── page.tsx        # Products catalogue
│   │   └── [slug]/
│   │       └── page.tsx    # Individual product page
│   ├── about/page.tsx      # About Us
│   ├── contact/
│   │   ├── page.tsx        # Contact page (server wrapper)
│   │   └── ContactClient.tsx # Contact form (client component)
│   └── cart/page.tsx       # Shopping cart
│
├── components/
│   ├── layout/             # Header, Footer, AnnouncementBar, Navigation, MobileMenu
│   ├── home/               # Hero, FeaturedProducts, BrandIntroduction, BrandValues
│   ├── products/           # ProductCard, ProductGrid, ProductGallery, ProductDetails
│   └── ui/                 # Button, Container, SectionHeading, Breadcrumbs
│
├── context/
│   └── CartContext.tsx      # Cart state (useReducer + localStorage)
│
├── data/
│   ├── products.ts         # All product data (single source of truth)
│   └── navigation.ts       # Nav links and footer links
│
├── lib/
│   └── utils.ts            # cn(), formatPrice()
│
└── types/
    ├── product.ts          # Product type
    └── cart.ts             # CartItem type

public/
└── assets/
    ├── logo/
    │   ├── logo.png        # Full brand logo
    │   └── brand-symbol.png # Brand symbol / favicon
    └── products/
        ├── testoxtreme.png
        └── gain-pro.png
```

---

## How to Add a New Product

1. **Add the product image** to `public/assets/products/your-product.png`

2. **Add the product entry** in `src/data/products.ts`:

```typescript
{
  id: "your-product",
  slug: "your-product",           // Used in the URL: /products/your-product
  name: "Your Product Name",
  image: "/assets/products/your-product.png",
  gallery: ["/assets/products/your-product.png"],
  shortDescription: "Brief description shown on the product card.",
  description: "Longer description shown on the product detail page.",
  price: null,                    // Set to a number (e.g. 1299) when price is known
  currency: "INR",
  category: "Supplements",
  specifications: [
    { label: "Serving Size", value: "2 capsules" },
    // Add more as needed
  ],
  featured: true,                 // Show on homepage featured section
  available: false,               // Set true to enable Add to Cart
}
```

3. The product page at `/products/your-product` is generated automatically — no additional files needed.

---

## Where to Place New Images

| Type | Directory |
|---|---|
| Product bottles | `public/assets/products/` |
| Brand logos | `public/assets/logo/` |
| Hero / banner images | `public/assets/banners/` |
| Illustrations | `public/assets/illustrations/` |

Use `next/image` with `objectFit: "contain"` for product bottle images to preserve transparency and aspect ratio.

---

## Updating Brand Information

### Colors

All brand colors are defined as CSS custom properties in `src/app/globals.css`:

```css
:root {
  --color-brand-green: #25834b;
  --color-deep-green: #126336;
  /* etc. */
}
```

### Fonts

Font imports and CSS variables are configured in `src/app/layout.tsx`.

Currently using:
- **Lora** — headings (`var(--font-lora)`)
- **Inter** — body text, UI (`var(--font-inter)`)

### Announcement Bar

Edit `src/components/layout/AnnouncementBar.tsx`.

### Navigation Links

Edit `src/data/navigation.ts` — both header nav and footer links are controlled here.

### Footer Contact Details

Edit `src/components/layout/Footer.tsx` — replace the placeholder email and address with real values.

### Contact Page Details

Edit `src/app/contact/ContactClient.tsx` — update email, address, and business hours.

---

## Enabling Purchasing

When you are ready to enable purchasing:

1. Set `available: true` and add a real `price` number in `src/data/products.ts`
2. Connect the cart checkout to your payment provider in `src/app/cart/page.tsx`
3. Wire up the contact form in `src/app/contact/ContactClient.tsx` to your backend

---

## Tech Stack

| Technology | Version |
|---|---|
| Next.js | 16.x (App Router) |
| React | 19.x |
| TypeScript | 5.x |
| Tailwind CSS | 4.x |
| ESLint | 9.x |

---

## Design System

The visual design follows the brand's official guidelines:

- **Background:** `#FFFFFF` / `#F3F8F2`
- **Brand green (buttons):** `#25834B`
- **Hover / deep green:** `#126336`
- **Headings:** `#183D32`
- **Body text:** `#526157`
- **Borders:** `#E4ECE4`

Fonts: **Lora** (headings) + **Inter** (UI).
