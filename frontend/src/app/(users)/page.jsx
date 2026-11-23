import { Hero } from '../../component/home/Hero.jsx';
import { StatsStrip } from '../../component/home/StatsStrip.jsx';
import { ServicesOverview } from '../../component/home/ServicesOverview.jsx';
import { FeaturedPortfolio } from '../../component/home/FeaturedPortfolio.jsx';
import { WhyChooseUs } from '../../component/home/WhyChooseUs.jsx';
import { ProcessPreview } from '../../component/home/ProcessPreview.jsx';
import { TechStackSection } from '../../component/home/TechStackSection.jsx';
import { TestimonialSection } from '../../component/home/TestimonialSection.jsx';

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ServicesOverview />
      <FeaturedPortfolio />
      <WhyChooseUs />
      <ProcessPreview />
      <TechStackSection />
      <TestimonialSection />
    </>
  );
}
