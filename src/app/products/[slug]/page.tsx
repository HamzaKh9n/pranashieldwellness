import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ProductGallery from "@/components/products/ProductGallery";
import ProductDetails from "@/components/products/ProductDetails";
import ProductGrid from "@/components/products/ProductGrid";
import SectionHeading from "@/components/ui/SectionHeading";
import { getProductBySlug, products } from "@/data/products";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description:
      product.shortDescription ??
      `Learn more about ${product.name} from Pranashieldwellness.`,
    openGraph: {
      title: product.name,
      description: product.shortDescription ?? undefined,
      images: product.image ? [{ url: product.image }] : undefined,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const related = products
    .filter((p) => p.slug !== slug)
    .slice(0, 4);

  return (
    <>
      <section className="py-8 sm:py-12 md:py-16 bg-[#FAF9F4]">
        <Container>
          {/* Breadcrumbs */}
          <div className="mb-6 sm:mb-8">
            <Breadcrumbs
              crumbs={[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: product.name },
              ]}
            />
          </div>

          {/* Main Product Layout — 60% Left Media, 40% Right Info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
            {/* Left Image Area (~60%) */}
            <div className="lg:col-span-7 w-full">
              <ProductGallery
                images={product.gallery ?? (product.image ? [product.image] : [])}
                productName={product.name}
                imageSettings={product.imageSettings}
              />
            </div>

            {/* Right Information Area (~40%) */}
            <div className="lg:col-span-5 w-full">
              <ProductDetails product={product} />
            </div>
          </div>
        </Container>
      </section>

      {/* Related Products Section */}
      {related.length > 0 && (
        <section
          className="py-14 md:py-20 border-t border-[#E4ECE4] bg-white"
          aria-label="Related products"
        >
          <Container>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
              <SectionHeading
                eyebrow="Complete the collection"
                heading="More from Pranashieldwellness"
                description="Explore other formulas developed to complement your wellness journey."
              />
            </div>
            <ProductGrid products={related} />
          </Container>
        </section>
      )}
    </>
  );
}
