import { SectionHeader } from "@/components/SectionHeader";
import { FadeIn } from "@/utils/animation";
import { TeamCarousel } from "./TeamCarousel";

export const TeamSection = () => {
  return (
    <section className="relative content-center items-center bg-neutral-100 box-border caret-transparent gap-x-8 flex flex-col shrink-0 h-min justify-center gap-y-8 w-full z-[1] px-6 py-12 md:py-16 md:px-12 lg:px-20">
      <div className="relative content-center items-center box-border caret-transparent gap-x-11 flex flex-col shrink-0 h-min justify-start max-w-[1640px] gap-y-11 w-full z-[3]">
        <FadeIn>
          <SectionHeader
            iconUrl="https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-37.svg"
            label="TEAM"
            title="Team Behind Success"
            description="Meet the experts behind our AI—driven to deliver smart solutions."
          />
        </FadeIn>
        <FadeIn delay={0.2} fullWidth>
          <div className="relative content-center items-center box-border caret-transparent gap-x-0 flex flex-col shrink-0 h-min justify-start gap-y-0 w-full z-[1] rounded-[14px] md:content-start md:items-start">
            <TeamCarousel />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
