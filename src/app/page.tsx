import { Hero } from "@/components/home/Hero";
import { SeasonalBanner } from "@/components/home/SeasonalBanner";
import { TrustBadges } from "@/components/home/TrustBadges";
import { ServiceGrid } from "@/components/home/ServiceGrid";
import { BeforeAfterSlider } from "@/components/home/BeforeAfterSlider";
import { GoogleReviews } from "@/components/home/GoogleReviews";
import { ServiceAreasMap } from "@/components/home/ServiceAreasMap";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQSection } from "@/components/home/FAQSection";
import { EmergencyServices } from "@/components/home/EmergencyServices";
import { CTASection } from "@/components/home/CTASection";
import type { HeroVariant } from "@/types";

interface HomePageProps {
  searchParams: Promise<{ hero?: string }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  // Allow hero variant switching via URL param for client review
  // Usage: /?hero=dark | /?hero=light | /?hero=image
  const params = await searchParams;
  const heroVariant = (params.hero as HeroVariant) || "dark";

  return (
    <>
      <Hero variant={heroVariant} />
      <SeasonalBanner />
      <TrustBadges />
      <ServiceGrid />
      <BeforeAfterSlider />
      <GoogleReviews />
      <ServiceAreasMap />
      <WhyChooseUs />
      <Testimonials />
      <FAQSection />
      <EmergencyServices />
      <CTASection />
    </>
  );
}
