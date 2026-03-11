import { SectionHeader } from "@/components/SectionHeader";
import { FadeIn } from "@/utils/animation";
import { FAQList } from "./FAQList";

export const FAQSection = () => {
  return (
    <section className="static [align-items:normal] bg-transparent shadow-none box-content caret-black gap-x-[normal] block flex-row h-auto justify-normal gap-y-[normal] w-auto p-0 rounded-b-none md:relative md:content-center md:items-center md:aspect-auto md:bg-neutral-100 md:shadow-[rgba(0,0,0,0.2)_1px_20px_30px_-12px] md:box-border md:caret-transparent md:gap-x-8 md:flex md:flex-col md:h-min md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-8 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top px-6 md:px-12 lg:px-20 md:py-[100px] md:scroll-m-0 md:scroll-p-[auto] md:rounded-b-[50px]">
      <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block flex-row shrink h-auto justify-normal max-w-none min-h-0 min-w-0 gap-y-[normal] w-auto z-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-11 md:flex md:flex-col md:shrink-0 md:h-min md:justify-start md:max-w-[1240px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-11 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:z-[1] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
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
    </section>
  );
};
