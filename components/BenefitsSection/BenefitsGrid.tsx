import { BenefitCard } from "./BenefitsCard";

export const BenefitsGrid = () => {
  return (
    <div className="relative content-center items-center box-border caret-transparent gap-x-0 flex flex-col shrink-0 h-min justify-center gap-y-0 w-full">
      <div className="relative content-start items-start box-border caret-transparent gap-x-6 flex flex-col shrink-0 flex-wrap h-min justify-center max-w-[500px] gap-y-6 w-full md:flex-row md:max-w-none">
        <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <BenefitCard
            variant="variant1"
            title="Real-Time Analytics"
            description="Stay ahead with accurate, real-time performance tracking"
          />
        </div>
        <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <div className="static box-content caret-black basis-auto grow-0 shrink h-auto min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:basis-0 md:grow md:shrink-0 md:h-[360px] md:min-h-[auto] md:min-w-[300px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <BenefitCard
              variant="variant2"
              title="AI-Driven Growth"
              description="Make smarter moves with accurate, real-time business insights."
              badge1Text="80% Automation"
              badge2Text="10% Cost"
              beforeText="BEFORE"
              afterText="AFTER"
            />
          </div>
        </div>
        <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <div className="static box-content caret-black basis-auto grow-0 shrink h-auto min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:basis-0 md:grow md:shrink-0 md:h-[360px] md:min-h-[auto] md:min-w-[300px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <BenefitCard
              variant="variant3"
              title="Sync in real time"
              description="connect with your team instantly to track progress and updates"
              logoUrl="https://c.animaapp.com/mloikyq0WG9Ud9/assets/8x7d36XigNJwbX3MhEzcU6N7N8.png"
              logoAlt="logo"
            />
          </div>
        </div>
      </div>
      <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <BenefitCard
          variant="variant4"
          features={[
            {
              iconUrl:
                "https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-4.svg",
              iconAlt: "Icon",
              label: "Faster Innovation",
            },
            {
              iconUrl:
                "https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-5.svg",
              iconAlt: "Icon",
              label: "Virtual Assistance",
            },
            {
              iconUrl:
                "https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-6.svg",
              iconAlt: "Icon",
              label: "Scalable Solutions",
            },
            {
              iconUrl:
                "https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-7.svg",
              iconAlt: "Icon",
              label: "Personalized Experiences",
            },
            {
              iconUrl:
                "https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-8.svg",
              iconAlt: "Icon",
              label: "Cost Effective",
            },
            {
              iconUrl:
                "https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-9.svg",
              iconAlt: "Icon",
              label: "Real-Time Insights",
            },
            {
              iconUrl:
                "https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-10.svg",
              iconAlt: "Icon",
              label: "Automation",
            },
            {
              iconUrl:
                "https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-11.svg",
              iconAlt: "Icon",
              label: "Data-Driven Decisions",
            },
          ]}
        />
      </div>
    </div>
  );
};
