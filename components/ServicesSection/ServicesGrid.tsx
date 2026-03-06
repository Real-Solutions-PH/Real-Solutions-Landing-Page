import { ServiceCard } from "./ServicesCard";

export const ServicesGrid = () => {
  return (
    <div className="relative content-center items-center box-border caret-transparent gap-x-6 flex flex-col shrink-0 h-min justify-center max-w-[500px] gap-y-6 w-full md:max-w-none">
      <div className="relative content-center items-center box-border caret-transparent gap-x-6 flex flex-col shrink-0 flex-wrap h-min justify-center gap-y-6 w-full md:content-start md:items-start md:flex-row">
        <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <ServiceCard
            variant="md:grow md:h-[374px]"
            title="AI Customer Support Stack"
            description="Fast 4-6 week deployment of full AI integration for local MSMEs."
            logoUrl="https://c.animaapp.com/mloikyq0WG9Ud9/assets/8x7d36XigNJwbX3MhEzcU6N7N8.png"
            logoAlt="logo"
            logoSizes="58px"
          />
        </div>
        <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <ServiceCard
            variant="md:grow-[2] md:h-[374px]"
            title="Custom Product Engineering"
            description="High-quality, end-to-end full-stack and AI development at a lower TCO for global startups."
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
            title="Workflow Automation for SMEs"
            description="Integrate AI with your existing tools like POS & booking systems to save hours."
            chatPlaceholder="Type a message"
          />
        </div>
        <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <ServiceCard
            variant="md:grow md:h-[382px]"
            title="Ongoing Maintenance Retainers"
            description="Ensure system uptime, continuous bug fixes, and continuous AI model tuning."
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
