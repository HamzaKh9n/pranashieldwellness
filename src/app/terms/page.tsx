import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the Pranashieldwellness terms and conditions.",
};

export default function TermsPage() {
  return (
    <>
      <div className="py-10 md:py-14 bg-[#F3F8F2] border-b border-[#E4ECE4]">
        <Container>
          <SectionHeading
            eyebrow="Legal"
            heading="Terms of Service"
            description="Guidelines and terms governing your use of Pranashieldwellness."
          />
        </Container>
      </div>

      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="max-w-3xl space-y-6 text-sm text-[#526157] leading-relaxed">
            <div>
              <h2 className="text-lg font-semibold text-[#183D32] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Acceptance of Terms
              </h2>
              <p>
                By accessing and using this website, you agree to comply with and be bound by
                these Terms of Service. Final commercial terms will be published ahead of
                commercial transaction availability.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#183D32] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Product Information
              </h2>
              <p>
                We strive to ensure all product information is accurate. Specific details,
                ingredients, and usage instructions are provided on individual product pages.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#183D32] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Inquiries
              </h2>
              <p>
                For questions regarding these terms, please contact our team via the contact page.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
