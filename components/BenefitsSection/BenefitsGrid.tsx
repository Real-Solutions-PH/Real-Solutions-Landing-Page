import { BenefitCard } from "./BenefitsCard";

export const BenefitsGrid = () => {
  return (
    <div className="flex flex-col gap-6 w-full justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full md:max-w-none">
        <BenefitCard
          variant="variant1"
          title="AI Customer Support"
          description="Deploy chatbots to automate support, capture leads, and answer FAQs 24/7."
        />
        <BenefitCard
          variant="variant2"
          title="Workflow Automation"
          description="Cut manual work and delays with automated workflows for your team."
          badge1Text="80% Automation"
          badge2Text="10% Cost"
          beforeText="BEFORE"
          afterText="AFTER"
        />
        <BenefitCard
          variant="variant3"
          title="Custom AI Development"
          description="End-to-end product development for global startups and enterprises."
          logoUrl="https://c.animaapp.com/mloikyq0WG9Ud9/assets/8x7d36XigNJwbX3MhEzcU6N7N8.png"
          logoAlt="logo"
        />
      </div>
      <div className="w-full">
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
