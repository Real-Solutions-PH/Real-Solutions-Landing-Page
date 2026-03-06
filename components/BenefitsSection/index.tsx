import { FadeIn } from "@/utils/animation";
import { SectionHeader } from "../SectionHeader";
import { BenefitsGrid } from "./BenefitsGrid";


export type BenefitsSectionProps = {
  variant: string;
  iconUrl?: string;
  label?: string;
  title?: string;
  description?: string;
  quote?: string;
  founderTitle?: string;
  founderImageUrl?: string;
  founderImageAlt?: string;
};

export const BenefitsSection = (props: BenefitsSectionProps) => {
  return (
    <section className="relative content-center items-center box-border caret-transparent flex flex-col shrink-0 h-min justify-center w-full z-[2] px-6 py-20 md:px-12 lg:px-20 md:py-[100px] bg-neutral-100 gap-x-10 gap-y-10 scroll-mt-2.5">
      <div className="relative content-center items-center box-border caret-transparent flex flex-col shrink-0 h-min max-w-[1640px] w-full z-[2] gap-x-11 justify-center gap-y-11">
        <FadeIn>
          <SectionHeader
            iconUrl={props.iconUrl || ""}
            label={props.label || ""}
            title={props.title || ""}
            description={props.description || ""}
          />
        </FadeIn>
        <FadeIn delay={0.2}>
          <BenefitsGrid />
        </FadeIn>
      </div>
    </section>
  );
};
