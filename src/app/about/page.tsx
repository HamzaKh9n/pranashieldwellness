import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { brandAssets } from "@/data/assets";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Pranashieldwellness — our story, our approach, and our commitment to thoughtful wellness supplementation.",
};

export default function AboutPage() {
  return (
    <>
      {/* 1. Page Header */}
      <div className="py-12 md:py-16 bg-[#F3F8F2] border-b border-[#E4ECE4]">
        <Container>
          <SectionHeading
            eyebrow="OUR BRAND STORY"
            heading="About Pranashieldwellness"
            description="A modern wellness brand built on thoughtful botanical formulation, transparent communication, and genuine care for daily health."
          />
        </Container>
      </div>

      {/* 2. Brand Background & Purpose */}
      <section className="py-14 md:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Brand Lockup Container */}
            <div className="md:col-span-5 flex items-center justify-center">
              <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] p-6 rounded-2xl bg-[#F3F8F2] border border-[#E4ECE4] flex items-center justify-center shadow-xs">
                <Image
                  src={brandAssets.logo.symbol}
                  alt="Pranashieldwellness brand symbol"
                  fill
                  style={{ objectFit: "contain" }}
                  className="p-6"
                  sizes="260px"
                  priority
                />
              </div>
            </div>

            {/* Editorial Content */}
            <div className="md:col-span-7 space-y-5 text-sm sm:text-base leading-relaxed text-[#526157]">
              <h2
                className="text-2xl sm:text-3xl font-semibold mb-3 text-[#183D32]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Our Purpose & Philosophy
              </h2>
              <p>
                Pranashieldwellness was established with the conviction that
                everyday supplementation should be honest, dependable, and grounded in
                verified quality. In a crowded marketplace, our focus is simple:
                develop focused, purposeful formulations that complement active,
                health-conscious lifestyles.
              </p>
              <p>
                We believe that wellness is a continuous daily practice rather than a
                hasty promise. We do not manufacture unsupported claims or exaggerated
                benefits. Instead, we invest in disciplined sourcing, hygienic batch
                preparation, and clean packaging.
              </p>
              <p>
                As our product line prepares for official availability, complete
                specifications, analytical documentation, and guidance will be provided
                with full clarity.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Button as="a" href="/products" variant="primary">
                  Browse Products
                </Button>
                <Button as="a" href="/contact" variant="secondary">
                  Contact Our Team
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Core Brand Pillars */}
      <section className="py-14 md:py-20 bg-[#F3F8F2] border-t border-b border-[#E4ECE4]" aria-label="Our core principles">
        <Container>
          <SectionHeading
            eyebrow="OUR STANDARDS"
            heading="The Principles We Work By"
            description="Every Pranashieldwellness formulation is shaped by three non-negotiable principles."
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Transparency First",
                text: "We publish verified product information, clear ingredients, and straightforward usage guidance without marketing exaggeration.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                ),
              },
              {
                title: "Disciplined Quality",
                text: "Every supplement batch undergoes hygienic formulation and is sealed in tamper-evident, moisture-resistant packaging to preserve botanical potency.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
              },
              {
                title: "Accessible Support",
                text: "We believe in direct, respectful customer service. Our team is available to assist you with inquiries about formulations, orders, and brand values.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                ),
              },
            ].map((pillar) => (
              <Card
                key={pillar.title}
                variant="default"
                className="p-7 flex flex-col bg-white border border-[#E4ECE4] transition-all duration-200 hover:border-[#126336] rounded-xl shadow-xs"
              >
                <div className="w-11 h-11 rounded-lg bg-[#DCEEDC] text-[#126336] flex items-center justify-center mb-5">
                  {pillar.icon}
                </div>
                <h3
                  className="text-lg font-semibold text-[#183D32] mb-2 font-[var(--font-heading)]"
                >
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#526157] leading-relaxed">
                  {pillar.text}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Contact & Community CTA */}
      <section className="py-14 md:py-18 bg-white" aria-label="Get in touch">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2
              className="text-2xl sm:text-3xl font-semibold text-[#183D32] mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Have Questions for Our Team?
            </h2>
            <p className="text-sm sm:text-base text-[#526157] leading-relaxed mb-7">
              Whether you want to learn more about our upcoming product launches,
              formulations, or brand vision, we are always glad to connect.
            </p>
            <Button as="a" href="/contact" variant="primary" size="lg">
              Get in Touch
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
