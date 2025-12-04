import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ServicesList } from "@/components/services/ServicesList";
import { siteConfig } from "@/data/siteConfig";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Professional landscaping services including lawn maintenance, tree trimming, sprinkler systems, flower bed cleaning, and Christmas light installation in Katy, Richmond, and Fulshear TX.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-green-dark text-white py-16 md:py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-lg text-gray-200 mb-6">
              Professional landscaping and lawn care services to keep your
              property looking its best. From weekly maintenance to seasonal
              projects, we&apos;ve got you covered.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-brand-gold text-brand-green-dark px-4 py-2 rounded-full font-semibold">
                FREE Estimates
              </span>
              <span className="bg-brand-green-primary text-white px-4 py-2 rounded-full">
                Se Habla Espanol
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container>
          <SectionHeading
            title="What We Offer"
            subtitle="Click on any service below to learn more about what's included."
            align="center"
          />

          <ServicesList expanded />
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <Container size="md">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-brand-green-dark mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Contact us today for a free estimate. We&apos;ll assess your
              property and provide honest recommendations tailored to your
              needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="green" size="lg">
                  Request Free Estimate
                </Button>
              </Link>
              <a href={siteConfig.phoneHref}>
                <Button variant="red" size="lg" className="gap-2">
                  <Phone className="w-5 h-5" />
                  Call {siteConfig.phone}
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
