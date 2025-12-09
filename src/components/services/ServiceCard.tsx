import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SeasonalBadge } from "@/components/ui/Badge";
import type { Service } from "@/data/services";
import { Check } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import PhoneLink from "@/components/PhoneLink";

interface ServiceCardProps {
  service: Service;
  expanded?: boolean;
}

export function ServiceCard({ service, expanded = false }: ServiceCardProps) {
  const Icon = service.icon;

  if (!expanded) {
    // Compact view for grid
    return (
      <Card className="h-full">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-brand-green-primary/10 flex items-center justify-center">
              <Icon className="w-6 h-6 text-brand-green-primary" />
            </div>
            {service.seasonal && <SeasonalBadge />}
          </div>

          <h3 className="font-heading font-bold text-lg text-brand-green-dark mb-2">
            {service.name}
          </h3>

          <p className="text-gray-600 text-sm mb-4 flex-grow">
            {service.shortDesc}
          </p>

          <Link href="/contact" className="mt-auto">
            <Button variant="outline" size="sm" className="w-full">
              Get Quote
            </Button>
          </Link>
        </CardContent>
      </Card>
    );
  }

  // Expanded view with full details
  return (
    <Card id={service.slug} className="scroll-mt-24">
      <CardContent className="p-6 md:p-8">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left: Icon, title, description */}
          <div className="md:col-span-2">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-lg bg-brand-green-primary flex items-center justify-center flex-shrink-0">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-heading font-bold text-xl text-brand-green-dark">
                    {service.name}
                  </h3>
                  {service.seasonal && <SeasonalBadge />}
                </div>
                <p className="text-gray-600 mt-1">{service.shortDesc}</p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              {service.fullDesc}
            </p>

            {/* What's included */}
            <div>
              <h4 className="font-heading font-bold text-brand-green-dark mb-3">
                What&apos;s Included:
              </h4>
              <ul className="space-y-2">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-brand-green-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: CTA */}
          <div className="md:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
              <p className="font-heading font-bold text-brand-green-dark mb-2">
                Interested in {service.name}?
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Get a free, no-obligation estimate for your property.
              </p>
              <CTAButton href="/contact" location="service_card" variant="green" className="w-full mb-3">
                Get Free Estimate
              </CTAButton>
              <PhoneLink className="w-full">
                <Button variant="outline" className="w-full">
                  Call 832.718.0431
                </Button>
              </PhoneLink>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
