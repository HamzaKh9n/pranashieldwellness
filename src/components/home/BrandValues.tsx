import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/cards/FeatureCard";

function LeafIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function HeadphonesIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  );
}

const values = [
  {
    icon: <LeafIcon />,
    heading: "Our Approach",
    description:
      "We develop each product with care, focusing on what genuinely supports wellbeing without overstating results. Product details will be shared openly as they become available.",
  },
  {
    icon: <ShieldIcon />,
    heading: "Product Information",
    description:
      "Full ingredient details, usage guidance, and product specifications are being prepared and will be published ahead of each product launch.",
  },
  {
    icon: <HeadphonesIcon />,
    heading: "Customer Support",
    description:
      "We are here to answer your questions about our products. Reach out through the contact page and our team will get back to you.",
  },
];

export default function BrandValues() {
  return (
    <section
      className="py-14 sm:py-16 md:py-20 bg-white"
      aria-label="Brand values"
    >
      <Container>
        <SectionHeading
          eyebrow="Why Pranashieldwellness"
          heading="What we stand for"
          align="center"
          className="mb-10 sm:mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {values.map((value) => (
            <FeatureCard
              key={value.heading}
              icon={value.icon}
              heading={value.heading}
              description={value.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
