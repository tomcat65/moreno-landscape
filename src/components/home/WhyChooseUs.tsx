import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Phone, Clock, Users, Shield, MessageCircle, Star } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const features = [
  {
    icon: Users,
    title: "Work With the Owner",
    description:
      "No dispatchers or call centers. You deal directly with the owner who cares about your property.",
  },
  {
    icon: Clock,
    title: "Fast Response",
    description:
      "We return calls within 2 hours and offer same-day estimates for most services.",
  },
  {
    icon: MessageCircle,
    title: "Se Habla Espanol",
    description:
      "Bilingual service available. We're proud to serve our Spanish-speaking community.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description:
      "Full coverage for your peace of mind. Professional service with protection.",
  },
  {
    icon: Star,
    title: "Quality Guaranteed",
    description:
      "We're not satisfied until you are. Our reputation is built on happy customers.",
  },
  {
    icon: Phone,
    title: "Always Available",
    description:
      "Easy to reach by phone, text, or email. We actually answer our phones!",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <SectionHeading
              title="Why Choose Moreno Landscaping?"
              subtitle="We're not the biggest, but we might be the best for your needs. Here's what sets us apart."
              align="left"
            />

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-green-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-green-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-brand-green-dark mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Logo 2 (Badge/Seal) + CTA */}
          <div className="text-center lg:text-left">
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              {/* Logo 2 as trust badge */}
              <div className="flex justify-center mb-8">
                <Image
                  src="/images/logos/logo2.png"
                  alt={`${siteConfig.name} - Trusted Service`}
                  width={200}
                  height={200}
                  className="w-40 h-40 md:w-48 md:h-48 object-cover"
                />
              </div>

              <h3 className="font-heading text-2xl font-bold text-brand-green-dark mb-4">
                Ready to Transform Your Lawn?
              </h3>

              <p className="text-gray-600 mb-6">
                Get a free, no-obligation estimate. We&apos;ll assess your
                property and provide honest recommendations.
              </p>

              <div className="space-y-4">
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-brand-red text-white font-bold rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call {siteConfig.phone}
                </a>

                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span>Mon-Sat: 7AM - 7PM</span>
                  <span>•</span>
                  <span className="text-brand-green-primary font-medium">
                    FREE Estimates
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
