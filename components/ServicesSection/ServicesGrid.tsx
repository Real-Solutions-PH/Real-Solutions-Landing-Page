import { ServiceCard } from "./ServicesCard";

export const ServicesGrid = () => {
  return (
    <div className="relative content-center items-center box-border caret-transparent gap-x-6 flex flex-col shrink-0 h-min justify-center max-w-[500px] gap-y-6 w-full md:max-w-none">
      <div className="relative content-center items-center box-border caret-transparent gap-x-6 flex flex-col shrink-0 flex-wrap h-min justify-center gap-y-6 w-full md:content-start md:items-start md:flex-row">
        <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <ServiceCard
            variant="md:grow md:h-[374px]"
            title="AI Strategy Consulting"
            description="Get expert guidance to implement AI solutions that drive business growth"
            logoUrl="https://c.animaapp.com/mloikyq0WG9Ud9/assets/8x7d36XigNJwbX3MhEzcU6N7N8.png"
            logoAlt="logo"
            logoSizes="58px"
          />
        </div>
        <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <ServiceCard
            variant="md:grow-[2] md:h-[374px]"
            title="Content Generation"
            description="We provide seamless content creation solutions that generate captivating, high-quality content in line with your brand’s voice."
            menuItems={[
              "Continue writing",
              "Fix spelling",
              "Explain in detail",
            ]}
            generateButtonText="Generate"
          />
        </div>
      </div>
      <div className="relative content-center items-center box-border caret-transparent gap-x-6 flex flex-col shrink-0 flex-wrap h-min justify-center gap-y-6 w-full md:content-start md:items-start md:flex-row">
        <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <ServiceCard
            variant="md:grow-[2] md:h-[382px]"
            title="AI-Powered Chatbots"
            description="We develop AI-driven chatbots with advanced cognitive technologies to elevate customer support and automate business operations."
            chatPlaceholder="Type a message"
          />
        </div>
        <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <ServiceCard
            variant="md:grow md:h-[382px]"
            title="Automated Workflows"
            description="Automate workflows to streamline tasks, boost efficiency, and save time"
            logoUrl="https://c.animaapp.com/mloikyq0WG9Ud9/assets/8x7d36XigNJwbX3MhEzcU6N7N8.png"
            logoAlt="logo"
            workflowIcons={[
              {
                src: "https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-18.svg",
                alt: "Icon",
              },
              {
                src: "https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-19.svg",
                alt: "Icon",
              },
              {
                src: "https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-20.svg",
                alt: "Icon",
              },
              {
                src: "https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-21.svg",
                alt: "Icon",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
