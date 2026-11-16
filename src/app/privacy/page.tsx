import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the Pranashieldwellness privacy policy.",
};

export default function PrivacyPage() {
  return (
    <>
      <div className="py-10 md:py-14 bg-[#F3F8F2] border-b border-[#E4ECE4]">
        <Container>
          <SectionHeading
            eyebrow="Legal"
            heading="Privacy Policy"
            description="How Pranashieldwellness collects, uses, and protects your information."
          />
        </Container>
      </div>

      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="max-w-3xl space-y-6 text-sm text-[#526157] leading-relaxed">
            <div>
              <h2 className="text-lg font-semibold text-[#183D32] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Information We Collect
              </h2>
              <p>
                Pranashieldwellness collects information necessary to fulfill orders,
                respond to customer inquiries, and provide a secure shopping experience.
                Detailed data collection practices will be updated upon final system configuration.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#183D32] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Use of Information
              </h2>
              <p>
                Your personal details are used strictly for order fulfillment, customer support,
                and communicating essential product updates. We do not sell your personal data.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#183D32] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Contact
              </h2>
              <p>
                If you have questions regarding our privacy practices, please contact us at
                contact@pranashieldwellness.com.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
