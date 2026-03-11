import { SectionHeader } from "@/components/SectionHeader";
import { FadeIn } from "@/utils/animation";
import { ServicesGrid } from "./ServicesGrid";

export const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative content-center items-center bg-neutral-100 box-border caret-transparent gap-x-10 flex flex-col shrink-0 min-h-screen justify-center gap-y-10 w-full z-[2] overflow-hidden px-6 py-20 scroll-mt-2.5 md:px-12 lg:px-20 md:py-[100px]"
    >
      <div className="relative content-center items-center box-border caret-transparent gap-x-11 flex flex-col shrink-0 h-min justify-center max-w-[1640px] gap-y-11 w-full z-[2]">
        <FadeIn>
          <SectionHeader
            iconUrl="https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-17.svg"
            label="SERVICES"
            title="Our AI-Driven Services"
            description="Leverage AI features that boost performance to your business."
          />
        </FadeIn>
        <FadeIn delay={0.2} fullWidth>
          <ServicesGrid />
        </FadeIn>
      </div>
    </section>
  );
};
