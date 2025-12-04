import {
  Leaf,
  Sprout,
  Scissors,
  Fence,
  Droplet,
  Droplets,
  Flower2,
  TreeDeciduous,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  name: string;
  slug: string;
  icon: LucideIcon;
  shortDesc: string;
  fullDesc: string;
  includes: string[];
  seasonal?: boolean;
}

export const services: Service[] = [
  {
    id: "garden-maintenance",
    name: "Garden Maintenance",
    slug: "garden-maintenance",
    icon: Leaf,
    shortDesc: "Complete garden care and seasonal cleanup",
    fullDesc:
      "Keep your garden thriving year-round with our comprehensive maintenance services. We handle everything from regular weeding and pruning to seasonal cleanup and plant health monitoring.",
    includes: [
      "Regular weeding and cultivation",
      "Pruning and shaping plants",
      "Seasonal cleanup (spring/fall)",
      "Plant health inspection",
      "Pest and disease monitoring",
    ],
  },
  {
    id: "grass-planting",
    name: "Grass Planting",
    slug: "grass-planting",
    icon: Sprout,
    shortDesc: "Sod installation and lawn renovation",
    fullDesc:
      "Transform bare or damaged areas into lush, green lawns. We install premium sod varieties suited for the Texas climate and prepare your soil for optimal growth.",
    includes: [
      "Soil preparation and grading",
      "Sod installation (St. Augustine, Bermuda, Zoysia)",
      "Overseeding for thin lawns",
      "New lawn establishment",
      "Post-installation care guidance",
    ],
  },
  {
    id: "mow-edge-blow",
    name: "Mow, Edge & Blow",
    slug: "mow-edge-blow",
    icon: Scissors,
    shortDesc: "Weekly and bi-weekly lawn maintenance",
    fullDesc:
      "Professional lawn maintenance that keeps your yard looking pristine. We mow at the proper height for your grass type, create crisp edges, and leave your property spotless.",
    includes: [
      "Professional mowing at optimal height",
      "Crisp edging along walks and beds",
      "String trimming around obstacles",
      "Debris blowing and cleanup",
      "Clipping removal or mulching",
    ],
  },
  {
    id: "fences-drains",
    name: "Fences & Drains",
    slug: "fences-drains",
    icon: Fence,
    shortDesc: "Fence installation and drainage solutions",
    fullDesc:
      "Protect your property and solve water problems. We install quality fencing and implement drainage solutions to keep your yard dry and functional.",
    includes: [
      "Wood fence installation",
      "Vinyl fence installation",
      "French drain systems",
      "Surface drainage solutions",
      "Gutter drainage extensions",
    ],
  },
  {
    id: "fertilizer",
    name: "Fertilizer",
    slug: "fertilizer",
    icon: Droplet,
    shortDesc: "Lawn fertilization and weed control",
    fullDesc:
      "Give your lawn the nutrients it needs to thrive. Our fertilization programs are customized for Texas lawns and include weed prevention and control.",
    includes: [
      "Custom fertilization schedule",
      "Pre-emergent weed control",
      "Post-emergent weed treatment",
      "Soil testing and amendments",
      "Seasonal lawn treatments",
    ],
  },
  {
    id: "sprinkler-systems",
    name: "Sprinkler Systems",
    slug: "sprinkler-systems",
    icon: Droplets,
    shortDesc: "Repair, installation, and maintenance",
    fullDesc:
      "Efficient irrigation keeps your lawn healthy while saving water. We install new systems, repair existing ones, and optimize your watering schedule.",
    includes: [
      "New system installation",
      "Sprinkler head repair/replacement",
      "Controller programming",
      "Leak detection and repair",
      "Winterization services",
    ],
  },
  {
    id: "flower-bed-cleaning",
    name: "Flower Bed Cleaning",
    slug: "flower-bed-cleaning",
    icon: Flower2,
    shortDesc: "Mulching, weeding, and bed renovation",
    fullDesc:
      "Revitalize your flower beds with professional cleaning and renovation. We remove weeds, refresh mulch, and can install seasonal color to brighten your landscape.",
    includes: [
      "Thorough weed removal",
      "Mulch installation and refresh",
      "Bed edging and defining",
      "Dead plant removal",
      "Seasonal color planting",
    ],
  },
  {
    id: "tree-trimming",
    name: "Tree Trimming",
    slug: "tree-trimming",
    icon: TreeDeciduous,
    shortDesc: "Professional pruning and shaping",
    fullDesc:
      "Maintain healthy, beautiful trees with professional trimming. We remove dead branches, shape crowns, and can handle storm damage cleanup.",
    includes: [
      "Crown shaping and thinning",
      "Dead branch removal",
      "Storm damage cleanup",
      "Small tree removal",
      "Stump grinding coordination",
    ],
  },
  {
    id: "christmas-lights",
    name: "Christmas Lights",
    slug: "christmas-lights",
    icon: Sparkles,
    shortDesc: "Holiday lighting installation",
    fullDesc:
      "Make your home shine this holiday season! We design and install professional Christmas lighting, maintain it throughout the season, and handle takedown and storage.",
    includes: [
      "Custom lighting design",
      "Professional installation",
      "Season-long maintenance",
      "Takedown service",
      "Storage coordination",
    ],
    seasonal: true,
  },
];

export type ServiceId = (typeof services)[number]["id"];
