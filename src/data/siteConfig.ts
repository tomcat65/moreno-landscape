export const siteConfig = {
  name: "Moreno Landscaping & Lawn Service",
  shortName: "Moreno Landscaping",
  phone: "832.718.0431",
  phoneHref: "tel:+18327180431",
  email: "info@morenolandscaping.vip",

  // Service areas
  primaryAreas: ["Katy", "Richmond", "Fulshear"] as const,
  extendedAreas: [
    "Cinco Ranch",
    "Cross Creek Ranch",
    "Pecan Grove",
    "Grand Lakes",
    "Harvest Green",
    "Weston Lakes",
    "Sugar Land",
    "Cypress",
  ] as const,
  state: "TX",

  // Business hours
  hours: {
    weekdays: "Mon-Sat: 7:00 AM - 7:00 PM",
    weekend: "Sunday: Closed",
  },

  // SEO
  tagline: "Professional Landscaping Services in Katy, TX",
  description:
    "Trusted landscaping and lawn care services in Katy, Richmond, and Fulshear TX. Family-owned, free estimates, se habla Español. Call 832.718.0431",

  // Social links (placeholders for now)
  social: {
    facebook: "#",
    instagram: "#",
  },

  // Key features/badges
  features: {
    freeEstimates: true,
    seHablaEspanol: true,
    licensedInsured: true,
    familyOwned: true,
  },
} as const;

export type SiteConfig = typeof siteConfig;

// Navigation links
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
