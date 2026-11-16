import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description: "Learn about Pranashieldwellness shipping policies and delivery timelines.",
};

export default function ShippingPage() {
  return (
    <>
      <div className="py-10 md:py-14 bg-[#F3F8F2] border-b border-[#E4ECE4]">
        <Container>
          <SectionHeading
            eyebrow="Customer Service"
            heading="Shipping Policy"
            description="Information regarding shipping, handling, and delivery."
          />
        </Container>
      </div>

      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="max-w-3xl space-y-6 text-sm text-[#526157] leading-relaxed">
            <div>
              <h2 className="text-lg font-semibold text-[#183D32] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Order Processing
              </h2>
              <p>
                Orders will be processed and prepared for dispatch following order confirmation.
                Full courier partnerships and estimated transit timelines will be published
                ahead of product dispatch availability.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#183D32] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Delivery Locations
              </h2>
              <p>
                Pranashieldwellness delivers to verified postal codes. Tracking details
                will be provided via email upon shipment.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
