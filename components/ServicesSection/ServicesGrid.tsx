import { ServiceCard } from "./ServicesCard";

export const ServicesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      {/* Row 1 */}
      <ServiceCard
        variant="variant1"
        title="AI Customer Support Stack"
        description="Fast 4-6 week deployment of full AI integration for local MSMEs."
        logoUrl="https://c.animaapp.com/mloikyq0WG9Ud9/assets/8x7d36XigNJwbX3MhEzcU6N7N8.png"
        logoAlt="logo"
      />
      <ServiceCard
        variant="variant2"
        title="Custom Product Engineering"
        description="High-quality, end-to-end full-stack and AI development at a lower TCO for global startups."
        menuItems={["Continue writing", "Fix spelling", "Explain in detail"]}
        generateButtonText="Generate"
      />

      {/* Row 2 */}
      <ServiceCard
        variant="variant3"
        title="Workflow Automation for SMEs"
        description="Integrate AI with your existing tools like POS & booking systems to save hours."
        chatPlaceholder="Type a message"
      />
      <ServiceCard
        variant="variant4"
        title="Ongoing Maintenance Retainers"
        description="Ensure system uptime, continuous bug fixes, and continuous AI model tuning."
        logoUrl="https://c.animaapp.com/mloikyq0WG9Ud9/assets/8x7d36XigNJwbX3MhEzcU6N7N8.png"
        logoAlt="logo"
        workflowIcons={[
          {
            src: "https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-18.svg",
            alt: "OpenAI",
          },
          {
            src: "https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-19.svg",
            alt: "Discord",
          },
          {
            src: "https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-20.svg",
            alt: "GitHub",
          },
          {
            src: "https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-21.svg",
            alt: "Google Drive",
          },
        ]}
      />
    </div>
  );
};
