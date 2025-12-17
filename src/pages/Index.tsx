import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import BenefitsSection from "@/components/BenefitsSection";
import IndustriesSection from "@/components/IndustriesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CapabilitiesSection />
        <BenefitsSection />
        <IndustriesSection />
        <CaseStudiesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
