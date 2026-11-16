import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { brandAssets } from "@/data/assets";

export default function BrandIntroduction() {
  return (
    <section
      className="py-16 md:py-20 bg-[#F3F8F2]"
      aria-label="About Pranashieldwellness"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Logo / visual */}
          <div className="flex items-center justify-center">
            <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px]">
              <Image
                src={brandAssets.logo.symbol}
                alt="Pranashieldwellness brand symbol"
                fill
                style={{ objectFit: "contain" }}
                sizes="260px"
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <SectionHeading
              eyebrow="Our Brand"
              heading="Built Around Your Wellness"
              description="Pranashieldwellness was founded with a clear purpose — to create supplements that people can trust. Every product in our range is thoughtfully developed to support health in a meaningful, honest way."
            />
            <div
              className="mt-6 space-y-3.5 text-sm sm:text-[15px] leading-relaxed text-[#526157]"
            >
              <p>
                We believe wellness is a daily commitment, not a quick fix. Our
                approach is to provide products that complement a healthy
                lifestyle, without overpromising or making unsupported claims.
              </p>
              <p>
                Product details, formulations, and full ingredient information
                will be made available as each supplement is prepared for
                launch.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
