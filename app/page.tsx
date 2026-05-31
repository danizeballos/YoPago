//import Features from '@/components/features-section';
import HeroSection from '@/components/hero-section';
import IntegrationsSection from '@/components/integrations-section';
import StatsSection from '@/components/stats-section';
//import TeamSection from '@/components/team';
import FaqsSection from '@/components/faq-section';
import FooterSection from '@/components/footer';
//import HeroSection2 from '@/components/hero-section2';
import ServicesSection from '@/components/services-section';
import IndustriesSection from '@/components/industries-section';


export default function Home() {
  return (
    <div>
      <HeroSection />
      <IntegrationsSection />
      <StatsSection />
      <ServicesSection />
      <IndustriesSection />
      <FaqsSection />
      <FooterSection />
    </div>
  );
}