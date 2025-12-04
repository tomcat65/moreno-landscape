"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig, navLinks } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logos/logo1.png"
              alt={siteConfig.name}
              width={180}
              height={60}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium text-gray-700 hover:text-brand-green-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Phone CTA - Always visible */}
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.phoneHref}
              className="hidden sm:flex items-center gap-2 text-brand-red font-bold hover:underline"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phone}
            </a>
            <Link href="/contact" className="hidden md:inline-flex">
              <Button variant="gold" size="sm">
                Free Estimate
              </Button>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 min-h-touch min-w-touch flex items-center justify-center"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation Drawer */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="bg-white border-t">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-6 py-3 min-h-touch flex items-center font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-green-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-6 py-4 border-t mt-2">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-2 text-brand-red font-bold text-lg"
              >
                <Phone className="w-5 h-5" />
                {siteConfig.phone}
              </a>
              <p className="text-sm text-brand-green-primary mt-2 font-medium">
                Se Habla Espanol
              </p>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
