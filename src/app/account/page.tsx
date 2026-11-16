import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Customer Account",
  description: "Manage your Pranashieldwellness customer profile and track orders.",
};

export default function AccountPage() {
  return (
    <>
      <div className="py-12 md:py-16 bg-[#F3F8F2] border-b border-[#E4ECE4]">
        <Container>
          <SectionHeading
            eyebrow="CUSTOMER PORTAL"
            heading="Your Account"
            description="Manage your orders, saved addresses, and communication preferences."
          />
        </Container>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <Card
            variant="default"
            className="max-w-lg mx-auto text-center p-8 sm:p-10 border border-[#E4ECE4] bg-[#FAF9F4] rounded-2xl shadow-xs"
          >
            <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-2xl bg-[#DCEEDC] text-[#126336]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 0 0-16 0" />
              </svg>
            </div>
            <h2
              className="text-2xl font-semibold text-[#183D32] mb-2.5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Authentication Coming Soon
            </h2>
            <p className="text-sm text-[#526157] leading-relaxed mb-7 max-w-sm mx-auto">
              Customer accounts, one-click ordering, and live parcel tracking will activate alongside our official e-commerce launch.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button as="a" href="/products" variant="primary" size="md">
                Browse Products
              </Button>
              <Button as="a" href="/contact" variant="secondary" size="md">
                Contact Support
              </Button>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
