import { Phone, MapPin, Calendar } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";
import CTAButton from "@/components/CTAButton";
import PhoneLink from "@/components/PhoneLink";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container size="md">
        <div className="text-center">
          {/* Badge */}
          <span className="inline-block bg-brand-gold text-brand-green-dark font-bold px-4 py-2 rounded-full mb-6">
            FREE ESTIMATES
          </span>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-green-dark mb-4">
            Ready for a Beautiful Lawn?
          </h2>

          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Get your free, no-obligation estimate today. We&apos;ll visit your
            property, assess your needs, and provide an honest quote.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <CTAButton href="/contact" location="cta_section" variant="green" size="lg">
              Request Free Estimate
            </CTAButton>
            <PhoneLink>
              <Button variant="red" size="lg" className="gap-2">
                <Phone className="w-5 h-5" />
                Call {siteConfig.phone}
              </Button>
            </PhoneLink>
          </div>

          {/* Info cards */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="p-6 bg-gray-50 rounded-lg">
              <Calendar className="w-8 h-8 text-brand-green-primary mx-auto mb-3" />
              <h3 className="font-semibold text-brand-green-dark mb-1">
                Same-Day Estimates
              </h3>
              <p className="text-sm text-gray-600">
                Quick response for urgent needs
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <MapPin className="w-8 h-8 text-brand-green-primary mx-auto mb-3" />
              <h3 className="font-semibold text-brand-green-dark mb-1">
                Serving Your Area
              </h3>
              <p className="text-sm text-gray-600">
                {siteConfig.primaryAreas.join(", ")} & more
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <Phone className="w-8 h-8 text-brand-green-primary mx-auto mb-3" />
              <h3 className="font-semibold text-brand-green-dark mb-1">
                Se Habla Espanol
              </h3>
              <p className="text-sm text-gray-600">
                Bilingual service available
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
