import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BenefitsSection } from "@/components/BenefitsSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TeamSection } from "@/components/TeamSection";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <BenefitsSection
        variant=""
        iconUrl="https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-3.svg"
        label="BENEFITS"
        title="Why Choose Us"
        description="Partner with an AI agency delivering smart solutions."
      />
      <FeaturesSection />
      <ServicesSection />
      <TeamSection /> 
      <FAQSection />
      <Footer />
    </div>
  );
}
