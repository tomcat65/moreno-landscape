import { Hero } from "@/components/home/Hero";
import dynamic from "next/dynamic";
import type { HeroVariant } from "@/types";

// Lazy load components to reduce initial bundle size
// Even above-the-fold components can be lazy loaded with proper loading states
const SeasonalBanner = dynamic(() => import("@/components/home/SeasonalBanner").then(mod => ({ default: mod.SeasonalBanner })), {
  loading: () => <div className="h-20" />, // Minimal height to prevent layout shift
});
const TrustBadges = dynamic(() => import("@/components/home/TrustBadges").then(mod => ({ default: mod.TrustBadges })), {
  loading: () => <div className="h-32" />,
});
const ServiceGrid = dynamic(() => import("@/components/home/ServiceGrid").then(mod => ({ default: mod.ServiceGrid })), {
  loading: () => <div className="h-96" />,
});

// Lazy load below-the-fold components to reduce initial bundle size
const BeforeAfterSlider = dynamic(() => import("@/components/home/BeforeAfterSlider").then(mod => ({ default: mod.BeforeAfterSlider })), {
  loading: () => <div className="py-16 md:py-24 bg-white" />,
});
const GoogleReviews = dynamic(() => import("@/components/home/GoogleReviews").then(mod => ({ default: mod.GoogleReviews })), {
  loading: () => <div className="py-16 bg-gray-50" />,
});
const ServiceAreasMap = dynamic(() => import("@/components/home/ServiceAreasMap").then(mod => ({ default: mod.ServiceAreasMap })), {
  loading: () => <div className="py-16 bg-white" />,
});
const WhyChooseUs = dynamic(() => import("@/components/home/WhyChooseUs").then(mod => ({ default: mod.WhyChooseUs })), {
  loading: () => <div className="py-16 bg-gray-50" />,
});
const Testimonials = dynamic(() => import("@/components/home/Testimonials").then(mod => ({ default: mod.Testimonials })), {
  loading: () => <div className="py-16 bg-white" />,
});
const FAQSection = dynamic(() => import("@/components/home/FAQSection").then(mod => ({ default: mod.FAQSection })), {
  loading: () => <div className="py-16 bg-gray-50" />,
});
const EmergencyServices = dynamic(() => import("@/components/home/EmergencyServices").then(mod => ({ default: mod.EmergencyServices })), {
  loading: () => <div className="py-16 bg-white" />,
});
const CTASection = dynamic(() => import("@/components/home/CTASection").then(mod => ({ default: mod.CTASection })), {
  loading: () => <div className="py-16 bg-brand-green-dark" />,
});

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
