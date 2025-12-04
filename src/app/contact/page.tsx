import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/data/siteConfig";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Moreno Landscaping for a free estimate. Serving Katy, Richmond, Fulshear and West Houston. Call 832.718.0431 or fill out our contact form.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-green-dark text-white py-16 md:py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-200 mb-6">
              Ready for a beautiful lawn? Get your free, no-obligation estimate
              today. We typically respond within 2 hours during business hours.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-brand-gold text-brand-green-dark px-4 py-2 rounded-full font-semibold">
                FREE Estimates
              </span>
              <span className="bg-brand-green-primary text-white px-4 py-2 rounded-full">
                Same-Day Response
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form - 2 columns */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="font-heading text-2xl font-bold text-brand-green-dark mb-2">
                  Request Your Free Estimate
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we&apos;ll get back to you within
                  2 hours during business hours.
                </p>

                <ContactForm />
              </div>
            </div>

            {/* Contact Info Sidebar - 1 column */}
            <div className="space-y-6">
              {/* Phone Card */}
              <div className="bg-brand-green-dark rounded-xl p-6 text-white">
                <h3 className="font-heading font-bold text-lg mb-4">
                  Prefer to Call?
                </h3>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-3 text-brand-gold hover:underline text-xl font-bold"
                >
                  <Phone className="w-6 h-6" />
                  {siteConfig.phone}
                </a>
                <p className="text-gray-300 mt-2 text-sm">
                  We actually answer our phones!
                </p>
                <div className="mt-4 p-3 bg-brand-green-primary/30 rounded-lg">
                  <p className="text-brand-gold font-semibold text-sm">
                    Se Habla Espanol
                  </p>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-2 text-brand-green-dark font-bold mb-4">
                  <Clock className="w-5 h-5" />
                  Business Hours
                </div>
                <div className="space-y-2 text-gray-600">
                  <p>{siteConfig.hours.weekdays}</p>
                  <p>{siteConfig.hours.weekend}</p>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Emergency services available
                </p>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-2 text-brand-green-dark font-bold mb-4">
                  <Mail className="w-5 h-5" />
                  Email Us
                </div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-brand-green-primary hover:underline"
                >
                  {siteConfig.email}
                </a>
              </div>

              {/* Service Areas Card */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-2 text-brand-green-dark font-bold mb-4">
                  <MapPin className="w-5 h-5" />
                  Service Areas
                </div>
                <p className="text-gray-600 mb-2">
                  <strong>Primary:</strong>{" "}
                  {siteConfig.primaryAreas.join(", ")}, TX
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>Also serving:</strong>{" "}
                  {siteConfig.extendedAreas.slice(0, 4).join(", ")} & more
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-white border-t">
        <Container size="md">
          <div className="text-center">
            <h3 className="font-heading text-xl font-bold text-brand-green-dark mb-4">
              Why Request an Estimate?
            </h3>
            <div className="grid sm:grid-cols-3 gap-6 text-sm text-gray-600">
              <div>
                <p className="font-semibold text-brand-green-primary mb-1">
                  100% Free
                </p>
                <p>No obligation, no pressure</p>
              </div>
              <div>
                <p className="font-semibold text-brand-green-primary mb-1">
                  Fast Response
                </p>
                <p>Usually within 2 hours</p>
              </div>
              <div>
                <p className="font-semibold text-brand-green-primary mb-1">
                  Honest Pricing
                </p>
                <p>No hidden fees or surprises</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
