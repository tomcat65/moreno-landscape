"use client";

import { useState } from "react";
import { MapPin, Check, Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

interface AreaInfo {
  name: string;
  description: string;
  neighborhoods: string[];
  isPrimary: boolean;
}

const areaDetails: AreaInfo[] = [
  {
    name: "Katy",
    description: "Including all master-planned communities and established neighborhoods",
    neighborhoods: ["Cinco Ranch", "Cross Creek Ranch", "Elyson", "Cane Island", "Jordan Ranch", "Grand Lakes", "Morton Ranch", "Bellaterra"],
    isPrimary: true,
  },
  {
    name: "Richmond",
    description: "Serving the historic heart of Fort Bend County",
    neighborhoods: ["Pecan Grove", "Long Meadow Farms", "Harvest Green", "Riverstone"],
    isPrimary: true,
  },
  {
    name: "Fulshear",
    description: "Premium lawn care for Fulshear's growing communities",
    neighborhoods: ["Cross Creek Ranch", "Fulbrook", "Weston Lakes", "Tamarron"],
    isPrimary: true,
  },
  {
    name: "Sugar Land",
    description: "Professional service throughout Sugar Land",
    neighborhoods: ["First Colony", "New Territory", "Telfair", "Greatwood"],
    isPrimary: false,
  },
  {
    name: "Cypress",
    description: "Extending our reach to Northwest Houston",
    neighborhoods: ["Bridgeland", "Towne Lake", "Fairfield", "Copperfield"],
    isPrimary: false,
  },
];

export function ServiceAreasMap() {
  const [selectedArea, setSelectedArea] = useState<AreaInfo | null>(areaDetails[0]);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-brand-green-primary/10 text-brand-green-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Local & Trusted
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-green-dark mb-4">
            Proudly Serving West Houston
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We know your neighborhood because we&apos;re part of the community.
            Click on an area to see the communities we serve.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Interactive Map/Area Selector */}
          <div className="relative">
            {/* Stylized map background */}
            <div className="relative bg-gradient-to-br from-brand-green-dark/5 to-brand-green-primary/10 rounded-2xl p-8 border border-brand-green-primary/20">
              {/* Map grid pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `linear-gradient(to right, #2E7D32 1px, transparent 1px),
                                    linear-gradient(to bottom, #2E7D32 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }}
              />

              {/* Area pins */}
              <div className="relative grid grid-cols-2 gap-4">
                {areaDetails.map((area) => (
                  <button
                    key={area.name}
                    onClick={() => setSelectedArea(area)}
                    className={cn(
                      "relative p-4 rounded-xl text-left transition-all duration-300",
                      selectedArea?.name === area.name
                        ? "bg-white shadow-xl scale-105 border-2 border-brand-green-primary"
                        : "bg-white/60 hover:bg-white hover:shadow-lg border border-transparent"
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors",
                          selectedArea?.name === area.name
                            ? "bg-brand-green-primary text-white"
                            : "bg-gray-100 text-gray-500"
                        )}
                      >
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-heading font-bold text-brand-green-dark">
                          {area.name}
                          {area.isPrimary && (
                            <span className="ml-2 text-xs bg-brand-gold text-brand-green-dark px-2 py-0.5 rounded-full">
                              Primary
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {area.neighborhoods.length} neighborhoods
                        </p>
                      </div>
                    </div>

                    {/* Pulse effect for selected */}
                    {selectedArea?.name === area.name && (
                      <div className="absolute -inset-1 bg-brand-green-primary/20 rounded-xl animate-pulse -z-10" />
                    )}
                  </button>
                ))}
              </div>

              {/* Legend */}
              <div className="mt-6 flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-brand-gold" />
                  <span className="text-gray-600">Primary Area</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-gray-300" />
                  <span className="text-gray-600">Extended Service</span>
                </div>
              </div>
            </div>
          </div>

          {/* Area Details Panel */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {selectedArea ? (
              <div className="animate-scale-in">
                {/* Header */}
                <div className="bg-gradient-to-r from-brand-green-dark to-brand-green-primary p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-6 h-6" />
                    <h3 className="font-heading text-2xl font-bold">
                      {selectedArea.name}, TX
                    </h3>
                    {selectedArea.isPrimary && (
                      <span className="bg-brand-gold text-brand-green-dark px-3 py-1 rounded-full text-xs font-bold">
                        Primary Service Area
                      </span>
                    )}
                  </div>
                  <p className="text-gray-200">{selectedArea.description}</p>
                </div>

                {/* Neighborhoods list */}
                <div className="p-6">
                  <h4 className="font-heading font-semibold text-brand-green-dark mb-4">
                    Communities We Serve:
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedArea.neighborhoods.map((hood) => (
                      <div
                        key={hood}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <Check className="w-4 h-4 text-brand-green-primary flex-shrink-0" />
                        <span className="text-sm">{hood}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-6 pt-6 border-t">
                    <p className="text-sm text-gray-600 mb-4">
                      Live in {selectedArea.name}? Get your free estimate today!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="/contact"
                        className="flex-1 bg-brand-green-primary text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-green-800 transition-colors"
                      >
                        Request Estimate
                      </a>
                      <a
                        href={siteConfig.phoneHref}
                        className="flex-1 bg-brand-red text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                      >
                        <Phone className="w-4 h-4" />
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-12 text-center text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Select an area to see details</p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Don&apos;t see your area?{" "}
            <a href="/contact" className="text-brand-green-primary font-semibold hover:underline">
              Contact us
            </a>{" "}
            - we may still be able to help!
          </p>
        </div>
      </div>
    </section>
  );
}
