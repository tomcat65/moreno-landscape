import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FreeEstimateBadge, SeHablaEspanolBadge } from "@/components/ui/Badge";
import { siteConfig } from "@/data/siteConfig";

/**
 * Hero Variant C: Image Background
 * Full-width background image with dark overlay
 */
export function HeroVariantC() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/portfolio/IMG_4882.webp"
          alt="Beautiful landscaped lawn"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-brand-green-dark/80" />
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-3xl text-white">
          {/* Service area badge */}
          <div className="flex flex-wrap gap-3 mb-6">
            <FreeEstimateBadge />
            <SeHablaEspanolBadge />
          </div>

          {/* Main headline */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Your Lawn Deserves
            <br />
            <span className="text-brand-gold">Expert Care</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
            Professional landscaping services in{" "}
            {siteConfig.primaryAreas.join(", ")} and surrounding areas. We treat
            every lawn like it&apos;s our own.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link href="/contact">
              <Button variant="gold" size="lg">
                Get Your Free Estimate
              </Button>
            </Link>
            <a href={siteConfig.phoneHref}>
              <Button
                variant="red"
                size="lg"
                className="gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now: {siteConfig.phone}
              </Button>
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-300">
            <span>✓ Licensed & Insured</span>
            <span>✓ Same-Day Estimates</span>
            <span>✓ Family Owned</span>
          </div>
        </div>
      </Container>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
