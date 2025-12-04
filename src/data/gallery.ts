export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "lawn" | "garden" | "trees" | "general";
  featured?: boolean;
}

// Generate gallery data from existing portfolio images
// Images are numbered 4865-4893 (29 total)
export const galleryImages: GalleryImage[] = [
  // Featured images (first 6 for homepage preview)
  { id: "img-4865", src: "/images/portfolio/IMG_4865.webp", alt: "Professional lawn care in Katy TX", category: "lawn", featured: true },
  { id: "img-4866", src: "/images/portfolio/IMG_4866.webp", alt: "Landscaping project in Richmond", category: "garden", featured: true },
  { id: "img-4867", src: "/images/portfolio/IMG_4867.webp", alt: "Garden maintenance in Fulshear", category: "garden", featured: true },
  { id: "img-4868", src: "/images/portfolio/IMG_4868.webp", alt: "Lawn renovation in Cinco Ranch", category: "lawn", featured: true },
  { id: "img-4869", src: "/images/portfolio/IMG_4869.webp", alt: "Tree trimming service", category: "trees", featured: true },
  { id: "img-4870", src: "/images/portfolio/IMG_4870.webp", alt: "Flower bed cleaning", category: "garden", featured: true },

  // Regular portfolio images
  { id: "img-4871", src: "/images/portfolio/IMG_4871.webp", alt: "Moreno Landscaping project", category: "general" },
  { id: "img-4872", src: "/images/portfolio/IMG_4872.webp", alt: "Moreno Landscaping project", category: "lawn" },
  { id: "img-4873", src: "/images/portfolio/IMG_4873.webp", alt: "Moreno Landscaping project", category: "garden" },
  { id: "img-4874", src: "/images/portfolio/IMG_4874.webp", alt: "Moreno Landscaping project", category: "lawn" },
  { id: "img-4875", src: "/images/portfolio/IMG_4875.webp", alt: "Moreno Landscaping project", category: "general" },
  { id: "img-4876", src: "/images/portfolio/IMG_4876.webp", alt: "Moreno Landscaping project", category: "trees" },
  { id: "img-4877", src: "/images/portfolio/IMG_4877.webp", alt: "Moreno Landscaping project", category: "lawn" },
  { id: "img-4878", src: "/images/portfolio/IMG_4878.webp", alt: "Moreno Landscaping project", category: "garden" },
  { id: "img-4879", src: "/images/portfolio/IMG_4879.webp", alt: "Moreno Landscaping project", category: "general" },
  { id: "img-4880", src: "/images/portfolio/IMG_4880.webp", alt: "Moreno Landscaping project", category: "lawn" },
  { id: "img-4881", src: "/images/portfolio/IMG_4881.webp", alt: "Moreno Landscaping project", category: "garden" },
  { id: "img-4882", src: "/images/portfolio/IMG_4882.webp", alt: "Moreno Landscaping project", category: "trees" },
  { id: "img-4883", src: "/images/portfolio/IMG_4883.webp", alt: "Moreno Landscaping project", category: "lawn" },
  { id: "img-4884", src: "/images/portfolio/IMG_4884.webp", alt: "Moreno Landscaping project", category: "general" },
  { id: "img-4885", src: "/images/portfolio/IMG_4885.webp", alt: "Moreno Landscaping project", category: "garden" },
  { id: "img-4886", src: "/images/portfolio/IMG_4886.webp", alt: "Moreno Landscaping project", category: "lawn" },
  { id: "img-4887", src: "/images/portfolio/IMG_4887.webp", alt: "Moreno Landscaping project", category: "trees" },
  { id: "img-4888", src: "/images/portfolio/IMG_4888.webp", alt: "Moreno Landscaping project", category: "general" },
  { id: "img-4889", src: "/images/portfolio/IMG_4889.webp", alt: "Moreno Landscaping project", category: "lawn" },
  { id: "img-4890", src: "/images/portfolio/IMG_4890.webp", alt: "Moreno Landscaping project", category: "garden" },
  { id: "img-4891", src: "/images/portfolio/IMG_4891.webp", alt: "Moreno Landscaping project", category: "lawn" },
  { id: "img-4892", src: "/images/portfolio/IMG_4892.webp", alt: "Moreno Landscaping project", category: "general" },
  { id: "img-4893", src: "/images/portfolio/IMG_4893.webp", alt: "Moreno Landscaping project", category: "garden" },
];

export const featuredImages = galleryImages.filter((img) => img.featured);

export const categories = ["all", "lawn", "garden", "trees", "general"] as const;
export type GalleryCategory = (typeof categories)[number];
