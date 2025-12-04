// Re-export types from data files
export type { Service, ServiceId } from "@/data/services";
export type { GalleryImage, GalleryCategory } from "@/data/gallery";
export type { Testimonial } from "@/data/testimonials";
export type { SiteConfig } from "@/data/siteConfig";

// Common component prop types
export interface BaseProps {
  className?: string;
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

// Hero variant types
export type HeroVariant = "dark" | "light" | "image";
