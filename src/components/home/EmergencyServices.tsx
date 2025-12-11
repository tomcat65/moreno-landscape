"use client";

import { AlertTriangle, Phone, Clock, Shield, TreeDeciduous, Droplets } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const emergencyServices = [
  {
    icon: TreeDeciduous,
    title: "Fallen Tree Removal",
    description: "Safe removal of storm-damaged trees and large branches from your property",
  },
  {
    icon: Droplets,
    title: "Flood Debris Cleanup",
    description: "Clear debris and restore your yard after flooding or heavy storms",
  },
  {
    icon: Shield,
    title: "Property Protection",
    description: "Preventive trimming and securing before approaching storms",
  },
];

export function EmergencyServices() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255,255,255,0.1) 10px,
              rgba(255,255,255,0.1) 20px
            )`,
          }}
        />
      </div>

      {/* Animated alert indicators */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-brand-red/20 rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-brand-red/10 rounded-full animate-pulse delay-500" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Alert badge */}
            <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/30 text-brand-red px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <AlertTriangle className="w-4 h-4 animate-pulse" />
              Emergency Response Available
            </div>

            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Storm Damage?{" "}
              <span className="text-brand-gold">We&apos;re Here to Help</span>
            </h2>

            <p className="text-gray-300 text-lg mb-6">
              Texas weather can be unpredictable. When storms hit, you need a team
              that responds fast. We offer emergency cleanup services to help you
              recover quickly and safely.
            </p>

            {/* Emergency services list */}
            <div className="space-y-4 mb-8">
              {emergencyServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-brand-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{service.title}</h3>
                      <p className="text-gray-200 text-sm">{service.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Response time badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2 text-sm">
              <Clock className="w-4 h-4 text-brand-gold" />
              <span className="text-gray-300">
                Same-day response for emergencies when possible
              </span>
            </div>
          </div>

          {/* Right - Emergency CTA Card */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-brand-red/20 blur-xl rounded-2xl" />

            <div className="relative bg-white rounded-2xl p-8 text-gray-900">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-red rounded-full mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-brand-green-dark">
                  Need Emergency Help?
                </h3>
                <p className="text-gray-600 mt-2">
                  Call us now for immediate assistance
                </p>
              </div>

              <a
                href={siteConfig.phoneHref}
                className="block w-full bg-brand-red text-white text-center py-4 rounded-lg font-bold text-xl hover:bg-red-700 transition-all animate-pulse-glow"
              >
                {siteConfig.phone}
              </a>

              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  Available 7 days a week
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  Rapid assessment and quote
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  Insurance documentation available
                </div>
              </div>

              <div className="mt-6 pt-6 border-t text-center">
                <p className="text-brand-green-primary font-semibold">
                  Se Habla Español
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom tip */}
        <div className="mt-12 bg-white/5 border border-white/10 rounded-xl p-6 text-center">
          <p className="text-gray-300">
            <strong className="text-brand-gold">Pro tip:</strong> Schedule preventive
            tree trimming before storm season to minimize damage risk to your property.
            <a
              href="/contact"
              className="text-brand-gold ml-2 hover:underline"
            >
              Get a free assessment →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
