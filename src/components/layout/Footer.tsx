import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig, navLinks } from "@/data/siteConfig";
import { services } from "@/data/services";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-green-dark text-white">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info + Logo 2 */}
            <div className="lg:col-span-1">
              <Image
                src="/images/logos/logo2.png"
                alt={siteConfig.name}
                width={160}
                height={160}
                className="w-40 h-40 mb-4 rounded-full object-cover shadow-lg"
                style={{ border: '0.5px solid white' }}
              />
              <p className="text-gray-300 text-sm mb-4">
                Professional landscaping services for Katy, Richmond, Fulshear
                and surrounding areas. Family-owned with a commitment to
                quality.
              </p>
              <div className="flex flex-col gap-2 text-sm">
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-2 text-brand-gold hover:underline font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  {siteConfig.phone}
                </a>
                <span className="flex items-center gap-2 text-gray-300">
                  <Mail className="w-4 h-4" />
                  {siteConfig.email}
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-brand-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">
                Our Services
              </h3>
              <ul className="space-y-2">
                {services.slice(0, 6).map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/services#${service.slug}`}
                      className="text-gray-300 hover:text-brand-gold transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/services"
                    className="text-brand-gold hover:underline font-medium"
                  >
                    View All Services →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">
                Service Areas
              </h3>
              <div className="flex items-start gap-2 mb-3">
                <MapPin className="w-4 h-4 mt-1 text-brand-gold flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Primary Areas:</p>
                  <p className="text-gray-300 text-sm">
                    {siteConfig.primaryAreas.join(", ")}, {siteConfig.state}
                  </p>
                </div>
              </div>
              <div className="text-gray-300 text-sm">
                <p className="font-medium text-white mb-1">Also Serving:</p>
                <p>{siteConfig.extendedAreas.join(", ")}</p>
              </div>
              <div className="mt-4 p-3 bg-brand-green-primary/30 rounded-lg">
                <p className="text-brand-gold font-semibold text-sm">
                  Se Habla Espanol
                </p>
                <p className="text-gray-300 text-xs mt-1">
                  Bilingual service available
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm text-center md:text-left">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-300">
              <span>Licensed & Insured</span>
              <span className="text-brand-gold font-medium">FREE Estimates</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
