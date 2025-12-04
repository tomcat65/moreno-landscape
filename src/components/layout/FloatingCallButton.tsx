"use client";

import { Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function FloatingCallButton() {
  return (
    <a
      href={siteConfig.phoneHref}
      className="fixed bottom-6 right-6 z-50 md:hidden
        w-14 h-14 rounded-full bg-brand-red text-white
        flex items-center justify-center shadow-lg
        hover:bg-red-700 active:scale-95 transition-all
        animate-pulse hover:animate-none"
      aria-label={`Call ${siteConfig.phone}`}
    >
      <Phone className="w-6 h-6" />
    </a>
  );
}
