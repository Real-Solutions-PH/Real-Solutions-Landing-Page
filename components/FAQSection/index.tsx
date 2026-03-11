import { SectionHeader } from "@/components/SectionHeader";
import { FadeIn } from "@/utils/animation";
import { FAQList } from "./FAQList";

export const FAQSection = () => {
  return (
    <section
      id="faq"
      className="relative flex flex-col items-center justify-center w-full px-6 py-20 bg-neutral-100 md:px-12 lg:px-20 md:py-[100px] scroll-mt-2.5 overflow-hidden"
    >
      <div className="relative flex flex-col items-center w-full max-w-[1240px] gap-12 sm:gap-16 z-[1]">
        <FadeIn>
          <SectionHeader
            iconUrl="https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-44.svg"
            label="FAQS"
            title="Questions? Answers!"
            description="Find Some quick answers to the most common questions."
          />
        </FadeIn>

        <FadeIn delay={0.2} fullWidth className="flex justify-center">
          <FAQList />
        </FadeIn>
      </div>

      {/* Background decoration consistent with other sections */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-neutral-200/20 rounded-full blur-[160px] -z-10" />
    </section>
  );
};
