"use client";

import { HeroVariantA } from "./HeroVariantA";
import { HeroVariantB } from "./HeroVariantB";
import { HeroVariantC } from "./HeroVariantC";
import type { HeroVariant } from "@/types";

interface HeroProps {
  variant?: HeroVariant;
}

/**
 * Hero component with switchable variants
 * Use ?hero=dark|light|image in URL to switch variants for client preview
 */
export function Hero({ variant = "dark" }: HeroProps) {
  switch (variant) {
    case "light":
      return <HeroVariantB />;
    case "image":
      return <HeroVariantC />;
    case "dark":
    default:
      return <HeroVariantA />;
  }
}

// Export individual variants for direct use
export { HeroVariantA, HeroVariantB, HeroVariantC };
