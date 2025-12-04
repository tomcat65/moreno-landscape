import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";
import {
  Phone,
  MapPin,
  Users,
  Heart,
  Shield,
  Clock,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Moreno Landscaping & Lawn Service. Family-owned landscaping company serving Katy, Richmond, Fulshear and West Houston since day one with personal service and professional results.",
};

const values = [
  {
    icon: Heart,
    title: "Personal Service",
    description:
      "You work directly with the owner, not a call center. We treat every property like it's our own.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description:
      "We show up when we say we will. Your time is valuable, and we respect that.",
  },
  {
    icon: Shield,
    title: "Quality Work",
    description:
      "We're not satisfied until you are. Our reputation is built on consistent, quality results.",
  },
  {
    icon: MessageCircle,
    title: "Communication",
    description:
      "We actually answer our phones and return calls promptly. Questions? Just ask.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-green-dark text-white py-16 md:py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              About Moreno Landscaping
            </h1>
            <p className="text-lg text-gray-200">
              Family-owned landscaping serving West Houston with personal
              service and professional results.
            </p>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Our Story"
                subtitle="Building beautiful lawns and lasting relationships"
                align="left"
              />

              <div className="prose prose-lg text-gray-600">
                <p>
                  Moreno Landscaping & Lawn Service was founded with a simple
                  belief: every homeowner deserves professional landscaping with
                  personal attention.
                </p>
                <p>
                  Unlike large corporate landscaping companies where you never
                  know who&apos;s going to show up, with us you work directly with
                  the owner. We take pride in every lawn we care for and every
                  project we complete.
                </p>
                <p>
                  We&apos;re proud to serve the diverse communities of Katy,
                  Richmond, Fulshear, and surrounding areas. Our bilingual team
                  is here to serve you - <strong>Se Habla Espanol</strong>.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/images/logos/logo2.png"
                  alt="Moreno Landscaping - Trusted Service"
                  width={300}
                  height={300}
                  className="rounded-full shadow-2xl object-cover"
                  style={{ border: '0.5px solid rgba(0, 0, 0, 0.1)' }}
                />
                <div className="absolute -bottom-4 -right-4 bg-brand-gold text-brand-green-dark font-bold px-4 py-2 rounded-lg shadow-lg">
                  Family Owned
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container>
          <SectionHeading
            title="What We Stand For"
            subtitle="The values that guide everything we do"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-green-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-brand-green-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-brand-green-dark mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                title="Areas We Serve"
                subtitle="Proudly serving West Houston communities"
                align="left"
              />

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-brand-green-primary font-semibold mb-2">
                    <MapPin className="w-5 h-5" />
                    Primary Service Areas
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {siteConfig.primaryAreas.map((area) => (
                      <span
                        key={area}
                        className="bg-brand-green-primary text-white px-3 py-1 rounded-full text-sm"
                      >
                        {area}, TX
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                    <Users className="w-5 h-5" />
                    Also Serving
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {siteConfig.extendedAreas.map((area) => (
                      <span
                        key={area}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-gray-600">
                  Not sure if we serve your area? Give us a call and we&apos;ll
                  let you know!
                </p>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-brand-green-dark rounded-2xl p-8 text-white">
              <h3 className="font-heading text-2xl font-bold mb-6">
                Get in Touch
              </h3>

              <div className="space-y-4 mb-8">
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-3 text-brand-gold hover:underline"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-bold text-lg">{siteConfig.phone}</span>
                </a>
                <p className="text-gray-300">{siteConfig.hours.weekdays}</p>
                <p className="text-gray-300">{siteConfig.hours.weekend}</p>
              </div>

              <div className="bg-brand-green-primary/30 rounded-lg p-4 mb-6">
                <p className="text-brand-gold font-semibold">
                  Se Habla Espanol
                </p>
                <p className="text-gray-300 text-sm">
                  Bilingual service available for our community
                </p>
              </div>

              <Link href="/contact">
                <Button variant="gold" className="w-full">
                  Request Free Estimate
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
