import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Learn about the Pranashieldwellness returns and refund process.",
};

export default function RefundsPage() {
  return (
    <>
      <div className="py-10 md:py-14 bg-[#F3F8F2] border-b border-[#E4ECE4]">
        <Container>
          <SectionHeading
            eyebrow="Customer Service"
            heading="Refund Policy"
            description="Our guidelines on returns, exchanges, and refunds."
          />
        </Container>
      </div>

      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="max-w-3xl space-y-6 text-sm text-[#526157] leading-relaxed">
            <div>
              <h2 className="text-lg font-semibold text-[#183D32] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Returns & Cancellations
              </h2>
              <p>
                We take pride in our products. In the event of a damaged or incorrect shipment,
                please notify our customer support team within 48 hours of receipt.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#183D32] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Refund Eligibility
              </h2>
              <p>
                Detailed return authorization procedures and processing timeframes
                will be published prior to commercial sales opening.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
