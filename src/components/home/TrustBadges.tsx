"use client";

import { Shield, Clock, Award, Users, Phone, Heart, CheckCircle2, Star } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const badges = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Full coverage for your peace of mind",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Clock,
    title: "Same-Day Response",
    description: "We respond within 2 hours",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Award,
    title: "5-Star Rated",
    description: "Perfect rating on Google",
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: Users,
    title: "Family Owned",
    description: "Personal service guaranteed",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Phone,
    title: "We Answer Calls",
    description: "Real people, real responses",
    color: "from-brand-red to-red-600",
  },
  {
    icon: Heart,
    title: "Se Habla Español",
    description: "Bilingual team available",
    color: "from-pink-500 to-rose-500",
  },
];

const guarantees = [
  "Free estimates with no obligation",
  "Honest, upfront pricing",
  "Quality work guaranteed",
  "Reliable scheduling",
  "Professional equipment",
  "Eco-friendly options available",
];

export function TrustBadges() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-brand-gold/10 text-brand-green-dark px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-green-dark mb-4">
            Trust Built on Results
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We may not have decades of history, but we have something better:
            a commitment to personal service that larger companies can&apos;t match.
          </p>
        </div>

        {/* Trust badges grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.title}
                className="group relative bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${badge.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading font-bold text-brand-green-dark text-sm mb-1">
                  {badge.title}
                </h3>
                <p className="text-xs text-gray-500">{badge.description}</p>
              </div>
            );
          })}
        </div>

        {/* Guarantees section */}
        <div className="bg-gradient-to-r from-brand-green-dark to-brand-green-primary rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left - Text */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-6 h-6 text-brand-gold fill-brand-gold" />
                <span className="text-brand-gold font-semibold">Our Promise to You</span>
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                The Moreno Difference
              </h3>
              <p className="text-gray-200 leading-relaxed">
                When you work with us, you&apos;re not just another account number.
                You work directly with the owner, and we treat every property like
                it&apos;s our own. That&apos;s the personal touch that big companies
                can&apos;t offer.
              </p>
            </div>

            {/* Right - Guarantees list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {guarantees.map((guarantee) => (
                <div
                  key={guarantee}
                  className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" />
                  <span className="text-sm">{guarantee}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Ready to experience the difference? Get your free estimate today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-green-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-green-800 transition-colors"
            >
              Request Free Estimate
            </a>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-brand-red text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
