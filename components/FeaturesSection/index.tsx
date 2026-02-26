import { SectionHeader } from "@/components/SectionHeader";
import { FadeIn } from "@/utils/animation";
import { FeaturesGrid } from "./FeaturesGrid";

export const FeaturesSection = () => {
  return (
    <section id="features" className="relative content-center items-center bg-neutral-100 box-border caret-transparent gap-x-8 flex flex-col shrink-0 h-min justify-center gap-y-8 w-full z-[2] overflow-hidden px-[18px] py-20 md:px-10 md:py-[100px]">
      <div className="relative content-center items-center box-border caret-transparent gap-x-11 flex flex-col shrink-0 h-min justify-start max-w-[1350px] gap-y-11 w-full z-[3]">
        <FadeIn>
          <SectionHeader
            iconUrl="https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-12.svg"
            label="FEATURES"
            title="All features in 1 tool"
            description="Discover features that simplify workflows & grow your business."
          />
        </FadeIn>
        <FadeIn delay={0.2} fullWidth>
          <FeaturesGrid />
        </FadeIn>
        <FadeIn delay={0.4}>
          <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block shrink flex-nowrap h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-4 md:flex md:shrink-0 md:flex-wrap md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-4 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <div className="static box-content caret-black shrink min-h-0 min-w-0 z-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:z-[3] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <a
                  href="#pricing"
                  className="static text-black [align-items:normal] bg-transparent shadow-none box-content caret-black gap-x-[normal] inline h-auto justify-normal gap-y-[normal] w-auto p-0 rounded-none md:relative md:text-blue-700 md:content-center md:items-center md:aspect-auto md:bg-black md:shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px] md:box-border md:caret-transparent md:gap-x-1.5 md:flex md:h-min md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-1.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:px-6 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[10px] hover:scale-105 transition-transform duration-200"
                >
                  <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-2 md:flex md:shrink-0 md:h-min md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <p className="text-black text-base font-normal box-content caret-black leading-[normal] min-h-0 min-w-0 text-wrap font-times md:text-white md:text-sm md:font-medium md:aspect-auto md:box-border md:caret-transparent md:leading-[22.4px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-inter">
                        Get Started
                      </p>
                    </div>
                    <div className="static box-content caret-black shrink h-auto min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-5 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <img
                          src="https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-2.svg"
                          alt="Icon"
                          className="text-black box-content caret-black block shrink h-auto align-middle w-auto md:text-white md:aspect-auto md:box-border md:caret-transparent md:inline-block md:shrink-0 md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="static box-content caret-black shrink min-h-0 min-w-0 z-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:z-[3] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <a
                  href="#services"
                  className="static text-black [align-items:normal] bg-transparent shadow-none box-content caret-black gap-x-[normal] inline h-auto justify-normal gap-y-[normal] w-auto p-0 rounded-none md:relative md:text-blue-700 md:content-center md:items-center md:aspect-auto md:bg-neutral-100 md:shadow-[rgba(158,158,158,0.69)_0px_0.706592px_0.706592px_-0.583333px,rgba(158,158,158,0.68)_0px_1.80656px_1.80656px_-1.16667px,rgba(158,158,158,0.65)_0px_3.62176px_3.62176px_-1.75px,rgba(158,158,158,0.61)_0px_6.8656px_6.8656px_-2.33333px,rgba(158,158,158,0.52)_0px_13.6468px_13.6468px_-2.91667px,rgba(158,158,158,0.3)_0px_30px_30px_-3.5px,rgb(255,255,255)_0px_3px_1px_0px_inset] md:box-border md:caret-transparent md:gap-x-1.5 md:flex md:h-min md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-1.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:px-6 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[10px] hover:scale-105 transition-transform duration-200"
                >
                  <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-2 md:flex md:shrink-0 md:h-min md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <p className="text-black text-base font-normal box-content caret-black leading-[normal] min-h-0 min-w-0 text-wrap font-times md:text-sm md:font-medium md:aspect-auto md:box-border md:caret-transparent md:leading-[22.4px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-inter">
                        See Our Services
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
