"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Sparkles, Phone, Calendar, Clock, Star } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

export function SeasonalBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Check if we're in Christmas season (Oct 15 - Jan 15)
  const now = new Date();
  const month = now.getMonth();
  const day = now.getDate();
  const isChristmasSeason =
    (month >= 9 && day >= 15) || // Oct 15 onwards
    month === 10 || // November
    month === 11 || // December
    (month === 0 && day <= 15); // Jan 1-15

  if (!isChristmasSeason) return null;

  return (
    <section
      className={cn(
        "relative overflow-hidden transition-all duration-1000",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-green-900 to-red-900 animate-gradient-shift" />

      {/* Snow/sparkle overlay */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Decorative lights string */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-500 via-green-500 via-yellow-400 via-blue-500 to-red-500 opacity-75" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
              <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
              <span className="text-yellow-400 font-bold text-sm uppercase tracking-wider">
                Limited Time Offer
              </span>
              <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
            </div>

            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
              Professional Christmas Light Installation
            </h2>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-white/90 text-sm mb-4">
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                Full-Service Setup
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-green-400" />
                Seasonal Rental Available
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-blue-400" />
                We Handle Takedown
              </span>
            </div>

            <p className="text-white/80 max-w-xl text-sm md:text-base">
              Let us transform your home into a winter wonderland! Professional installation,
              quality lights, and hassle-free removal included. Book early for best availability.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact?service=christmas-lights"
              className="group bg-brand-gold text-brand-green-dark px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-all hover:scale-105 shadow-lg shadow-yellow-500/20 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5 group-hover:animate-spin" />
              Get Free Quote
            </Link>
            <a
              href={siteConfig.phoneHref}
              className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/30 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phone}
            </a>
          </div>
        </div>

        {/* Urgency indicator */}
        <div className="mt-6 flex items-center justify-center lg:justify-start">
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </span>
            <span>Booking for {now.getFullYear()} season - Limited spots available!</span>
          </div>
        </div>
      </div>

      {/* Bottom decorative lights */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-red-500 via-green-500 via-blue-400 to-yellow-400 opacity-75" />
    </section>
  );
}
