import { SectionHeader } from "@/components/SectionHeader";
import { FadeIn } from "@/utils/animation";
import { TeamCarousel } from "./TeamCarousel";

export const TeamSection = () => {
  return (
    <section
      id="team"
      className="relative flex flex-col items-center justify-center w-full px-6 py-20 bg-neutral-100 md:px-12 lg:px-20 md:py-[100px] scroll-mt-2.5 overflow-hidden"
    >
      <div className="relative flex flex-col items-center w-full max-w-[1240px] gap-12 sm:gap-16 z-[2]">
        <FadeIn>
          <SectionHeader
            iconUrl="https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-37.svg"
            label="TEAM"
            title="Team Behind Success"
            description="Meet the experts behind our AI—driven to deliver smart solutions."
          />
        </FadeIn>

        <FadeIn delay={0.2} fullWidth>
          <TeamCarousel />
        </FadeIn>
      </div>

      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neutral-200/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neutral-200/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 -z-10" />
    </section>
  );
};
