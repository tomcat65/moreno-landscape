import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { SeasonalBadge } from "@/components/ui/Badge";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";

export function ServiceGrid() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <SectionHeading
          title="Our Services"
          subtitle="Professional landscaping and lawn care services to keep your property looking its best year-round."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.id} className="group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-brand-green-primary/10 flex items-center justify-center group-hover:bg-brand-green-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-brand-green-primary" />
                    </div>
                    {service.seasonal && <SeasonalBadge />}
                  </div>

                  <h3 className="font-heading font-bold text-lg text-brand-green-dark mb-2 group-hover:text-brand-green-primary transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">
                    {service.shortDesc}
                  </p>

                  <Link
                    href={`/services#${service.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-brand-green-primary hover:text-brand-green-dark transition-colors"
                    aria-label={`Learn more about ${service.name} service`}
                  >
                    Learn More About {service.name}
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View all services CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-brand-green-primary font-semibold hover:text-brand-green-dark transition-colors"
          >
            View All Service Details
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
