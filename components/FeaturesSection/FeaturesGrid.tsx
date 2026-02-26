import { FeatureCard } from "./FeaturesCard";

export const FeaturesGrid = () => {
  return (
    <div className="relative content-center items-center box-border caret-transparent gap-x-6 flex flex-col shrink-0 h-min justify-center gap-y-6 w-full">
      <div className="relative content-center items-center box-border caret-transparent gap-x-6 flex flex-col shrink-0 flex-wrap h-min justify-start gap-y-6 w-full md:content-start md:items-start md:flex-row">
        <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <FeatureCard
            variant="md:grow-[1.5]"
            iconSrc="https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-13.svg"
            title="Cutting-Edge AI"
            description="Deploy AI solutions that adapt quickly, learn fast, and scale with your business needs."
            graphicSrc="https://c.animaapp.com/mloikyq0WG9Ud9/assets/2.avif"
            graphicClassName=""
            graphicSizes="max((max(min(100vw - 80px, 1200px), 300px) - 64px) / 2, 1px)"
          />
        </div>
        <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <FeatureCard
            variant="md:grow"
            iconSrc="https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-14.svg"
            title="Automated Workflows"
            description="Streamline tasks and boost efficiency with powerful, scalable AI-powered automation tools for growing teams and projects."
          />
        </div>
      </div>
      <div className="relative content-center items-center box-border caret-transparent gap-x-6 flex flex-col shrink-0 flex-wrap h-min justify-start gap-y-6 w-full md:content-start md:items-start md:flex-row">
        <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <FeatureCard
            variant="md:grow"
            iconSrc="https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-15.svg"
            title="Insightful Analytics"
            description="Gain deep, real-time data insights with advanced AI analytics to guide smarter strategies, decisions, and scalable business growth."
          />
        </div>
        <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <FeatureCard
            variant="md:grow-[1.5]"
            iconSrc="https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-16.svg"
            title="AI-Powered Support"
            description="Enhance customer experience with AI-driven virtual assistants available for support and engagement."
            graphicSrc="https://c.animaapp.com/mloikyq0WG9Ud9/assets/15.png"
            graphicClassName="md:aspect-[auto_800_/_1200]"
            graphicSizes="max((max(min(100vw - 80px, 1200px), 300px) - 64px) / 2, 1px)"
          />
        </div>
      </div>
    </div>
  );
};
