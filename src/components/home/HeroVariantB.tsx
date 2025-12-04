import Link from "next/link";
import { Phone, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";

/**
 * Hero Variant B: Light & Clean
 * White background, green accents, professional feel
 */
export function HeroVariantB() {
  const highlights = [
    "Free Estimates",
    "Same-Day Response",
    "Se Habla Espanol",
    "Licensed & Insured",
  ];

  return (
    <section className="bg-white py-20 md:py-28 lg:py-32 border-b">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            {/* Service area */}
            <p className="text-brand-green-primary font-medium mb-4">
              Landscaping Services in {siteConfig.primaryAreas.join(", ")} TX
            </p>

            {/* Main headline */}
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-green-dark mb-6 leading-tight">
              Beautiful Lawns.
              <br />
              Fair Prices.
              <br />
              <span className="text-brand-green-primary">Real People.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-gray-600 mb-8">
              We answer our phones. We show up on time. We make your lawn
              beautiful. That&apos;s the Moreno difference.
            </p>

            {/* Highlights */}
            <ul className="grid grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-700">
                  <Check className="w-5 h-5 text-brand-green-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button variant="green" size="lg">
                  Get Free Estimate
                </Button>
              </Link>
              <a href={siteConfig.phoneHref}>
                <Button variant="outline" size="lg" className="gap-2">
                  <Phone className="w-5 h-5" />
                  {siteConfig.phone}
                </Button>
              </a>
            </div>
          </div>

          {/* Right: Feature card / Stats */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-10">
            <div className="text-center mb-8">
              <p className="text-brand-green-primary font-medium mb-2">
                Why Choose Us?
              </p>
              <h2 className="font-heading text-2xl font-bold text-brand-green-dark">
                Work Directly With the Owner
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-brand-green-primary">9</p>
                <p className="text-sm text-gray-600 mt-1">Services Offered</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-brand-green-primary">5★</p>
                <p className="text-sm text-gray-600 mt-1">Customer Rating</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-brand-gold">FREE</p>
                <p className="text-sm text-gray-600 mt-1">Estimates</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-brand-green-primary">2hr</p>
                <p className="text-sm text-gray-600 mt-1">Response Time</p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-brand-green-dark rounded-lg text-center">
              <p className="text-brand-gold font-semibold">Se Habla Espanol</p>
              <p className="text-white text-sm mt-1">
                Bilingual service for our community
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
