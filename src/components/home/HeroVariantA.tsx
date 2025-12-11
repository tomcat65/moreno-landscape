"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Phone, Star, Clock, Shield, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";
import CTAButton from "@/components/CTAButton";
import PhoneLink from "@/components/PhoneLink";

/**
 * Hero Variant A: Dark & Bold with animations
 * Parallax background, animated text, floating elements
 */
export function HeroVariantA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark via-[#1a3d1a] to-[#0d260d]">
        {/* Animated shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-green-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green-primary/5 rounded-full blur-3xl" />

        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={cn(
              "text-white transition-all duration-1000 ease-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            {/* Top badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-brand-gold text-brand-green-dark px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                <Star className="w-4 h-4 fill-current" />
                5-Star Rated
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full font-medium text-sm border border-white/20">
                <Clock className="w-4 h-4" />
                Same-Day Estimates
              </span>
            </div>

            {/* Main headline with animated gradient */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
              <span className="block">Professional Lawn Care,</span>
              <span className="block bg-gradient-to-r from-brand-gold via-yellow-300 to-brand-gold bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
                Personal Service
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-lg leading-relaxed">
              Family-owned landscaping serving {siteConfig.primaryAreas.join(", ")} and
              surrounding areas. We answer our phones, show up on time, and treat your
              lawn like it&apos;s our own.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <CTAButton href="/contact" location="hero" variant="gold" size="lg" className="group shadow-xl shadow-brand-gold/20 w-full sm:w-auto">
                Get FREE Estimate
                <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </CTAButton>
              <PhoneLink>
                <Button variant="red" size="lg" className="gap-2 shadow-xl shadow-brand-red/20 w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  {siteConfig.phone}
                </Button>
              </PhoneLink>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-brand-gold" />
                Licensed & Insured
              </span>
              <span className="flex items-center gap-2">
                <span className="text-brand-gold font-bold">Se Habla Español</span>
              </span>
            </div>
          </div>

          {/* Right - Featured Image with frame */}
          <div
            className={cn(
              "relative hidden lg:block transition-all duration-1000 delay-300 ease-out",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
            {/* Decorative frame */}
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-gold/20 to-brand-green-primary/20 rounded-2xl blur-xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <Image
                src="/images/portfolio/IMG_4882.webp"
                alt="Beautiful landscaped lawn by Moreno Landscaping"
                width={600}
                height={600}
                className="object-contain w-full h-[600px] bg-brand-green-dark/20"
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 0px, 600px"
                quality={85}
              />
              {/* Overlay with stats */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
                <div className="flex justify-around text-white text-center">
                  <div>
                    <p className="text-3xl font-bold text-brand-gold">9</p>
                    <p className="text-sm text-gray-300">Services</p>
                  </div>
                  <div className="border-l border-white/20 pl-6">
                    <p className="text-3xl font-bold text-brand-gold">100+</p>
                    <p className="text-sm text-gray-300">Happy Clients</p>
                  </div>
                  <div className="border-l border-white/20 pl-6">
                    <p className="text-3xl font-bold text-brand-gold">5★</p>
                    <p className="text-sm text-gray-300">Rating</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-brand-green-primary rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Call Now</p>
                  <p className="font-bold text-brand-green-dark">{siteConfig.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/50" />
      </div>
    </section>
  );
}
