export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "lawn" | "garden" | "trees" | "general";
  featured?: boolean;
}

// Comprehensive gallery with all portfolio images
// Categories: lawn, garden, trees, general
export const galleryImages: GalleryImage[] = [
  // Featured images (first 6 for homepage preview)
  { id: "img-4882", src: "/images/portfolio/IMG_4882.webp", alt: "Professional lawn care team in Katy TX", category: "lawn", featured: true },
  { id: "img-3101", src: "/images/portfolio/IMG_3101.webp", alt: "Complete lawn renovation after transformation", category: "lawn", featured: true },
  { id: "img-5077", src: "/images/portfolio/IMG_5077.webp", alt: "Garden bed cleanup and maintenance", category: "garden", featured: true },
  { id: "img-3100", src: "/images/portfolio/IMG_3100.webp", alt: "Backyard transformation project", category: "garden", featured: true },
  { id: "img-4875", src: "/images/portfolio/IMG_4875.webp", alt: "Tree trimming service", category: "trees", featured: true },
  { id: "img-4876", src: "/images/portfolio/IMG_4876.webp", alt: "Professional tree care", category: "trees", featured: true },

  // Lawn care images
  { id: "img-0793", src: "/images/portfolio/IMG_0793.webp", alt: "Lawn before renovation", category: "lawn" },
  { id: "img-4865", src: "/images/portfolio/IMG_4865.webp", alt: "Professional lawn care in Katy TX", category: "lawn" },
  { id: "img-4868", src: "/images/portfolio/IMG_4868.webp", alt: "Lawn renovation in Cinco Ranch", category: "lawn" },
  { id: "img-4872", src: "/images/portfolio/IMG_4872.webp", alt: "Lawn maintenance service", category: "lawn" },
  { id: "img-4874", src: "/images/portfolio/IMG_4874.webp", alt: "Lawn care project", category: "lawn" },
  { id: "img-4877", src: "/images/portfolio/IMG_4877.webp", alt: "Lawn renovation project", category: "lawn" },
  { id: "img-4880", src: "/images/portfolio/IMG_4880.webp", alt: "Lawn maintenance", category: "lawn" },
  { id: "img-4883", src: "/images/portfolio/IMG_4883.webp", alt: "Lawn care service", category: "lawn" },
  { id: "img-4886", src: "/images/portfolio/IMG_4886.webp", alt: "Lawn renovation", category: "lawn" },
  { id: "img-4889", src: "/images/portfolio/IMG_4889.webp", alt: "Lawn maintenance project", category: "lawn" },
  { id: "img-4891", src: "/images/portfolio/IMG_4891.webp", alt: "Lawn care in Richmond", category: "lawn" },
  { id: "img-1013", src: "/images/portfolio/IMG_1013.webp", alt: "Lawn service project", category: "lawn" },
  { id: "img-1015", src: "/images/portfolio/IMG_1015.webp", alt: "Lawn maintenance work", category: "lawn" },
  { id: "img-1019", src: "/images/portfolio/IMG_1019.webp", alt: "Lawn care service", category: "lawn" },
  { id: "img-1020", src: "/images/portfolio/IMG_1020.webp", alt: "Lawn renovation project", category: "lawn" },
  { id: "img-2026", src: "/images/portfolio/IMG_2026.webp", alt: "Lawn maintenance", category: "lawn" },
  { id: "img-2027", src: "/images/portfolio/IMG_2027.webp", alt: "Lawn care project", category: "lawn" },
  { id: "img-2036", src: "/images/portfolio/IMG_2036.webp", alt: "Lawn service", category: "lawn" },
  { id: "img-2037", src: "/images/portfolio/IMG_2037.webp", alt: "Lawn maintenance work", category: "lawn" },
  { id: "img-2525", src: "/images/portfolio/IMG_2525.webp", alt: "Lawn care project", category: "lawn" },
  { id: "img-2526", src: "/images/portfolio/IMG_2526.webp", alt: "Lawn renovation", category: "lawn" },
  { id: "img-3102", src: "/images/portfolio/IMG_3102.webp", alt: "Lawn maintenance service", category: "lawn" },
  { id: "img-3251", src: "/images/portfolio/IMG_3251.webp", alt: "Lawn care work", category: "lawn" },
  { id: "img-4570", src: "/images/portfolio/IMG_4570.webp", alt: "Lawn service project", category: "lawn" },
  { id: "img-4907", src: "/images/portfolio/IMG_4907.webp", alt: "Lawn maintenance", category: "lawn" },
  { id: "img-4909", src: "/images/portfolio/IMG_4909.webp", alt: "Lawn care service", category: "lawn" },
  { id: "img-5084", src: "/images/portfolio/IMG_5084.webp", alt: "Lawn renovation project", category: "lawn" },
  { id: "img-9744", src: "/images/portfolio/IMG_9744.webp", alt: "Lawn maintenance work", category: "lawn" },

  // Garden and flower bed images
  { id: "img-3450", src: "/images/portfolio/IMG_3450.webp", alt: "Garden bed before cleanup", category: "garden" },
  { id: "img-4866", src: "/images/portfolio/IMG_4866.webp", alt: "Landscaping project in Richmond", category: "garden" },
  { id: "img-4867", src: "/images/portfolio/IMG_4867.webp", alt: "Garden maintenance in Fulshear", category: "garden" },
  { id: "img-4870", src: "/images/portfolio/IMG_4870.webp", alt: "Flower bed cleaning", category: "garden" },
  { id: "img-4873", src: "/images/portfolio/IMG_4873.webp", alt: "Garden bed project", category: "garden" },
  { id: "img-4878", src: "/images/portfolio/IMG_4878.webp", alt: "Garden maintenance", category: "garden" },
  { id: "img-4881", src: "/images/portfolio/IMG_4881.webp", alt: "Garden bed cleanup", category: "garden" },
  { id: "img-4885", src: "/images/portfolio/IMG_4885.webp", alt: "Garden project", category: "garden" },
  { id: "img-4890", src: "/images/portfolio/IMG_4890.webp", alt: "Garden maintenance work", category: "garden" },
  { id: "img-4893", src: "/images/portfolio/IMG_4893.webp", alt: "Garden bed renovation", category: "garden" },
  { id: "img-3458", src: "/images/portfolio/IMG_3458.webp", alt: "Garden maintenance project", category: "garden" },
  { id: "img-0791", src: "/images/portfolio/IMG_0791.webp", alt: "Backyard garden before transformation", category: "garden" },
  { id: "img-0792", src: "/images/portfolio/IMG_0792.webp", alt: "Garden project", category: "garden" },
  { id: "img-2038", src: "/images/portfolio/IMG_2038.webp", alt: "Garden transformation", category: "garden" },

  // Tree trimming and tree care images
  { id: "img-4869", src: "/images/portfolio/IMG_4869.webp", alt: "Tree trimming service", category: "trees" },
  { id: "img-4887", src: "/images/portfolio/IMG_4887.webp", alt: "Tree care project", category: "trees" },
  { id: "img-4871", src: "/images/portfolio/IMG_4871.webp", alt: "Tree trimming work", category: "trees" },

  // General landscaping and mixed projects
  { id: "img-4879", src: "/images/portfolio/IMG_4879.webp", alt: "Moreno Landscaping project", category: "general" },
  { id: "img-4884", src: "/images/portfolio/IMG_4884.webp", alt: "Landscaping service", category: "general" },
  { id: "img-4888", src: "/images/portfolio/IMG_4888.webp", alt: "Landscaping project", category: "general" },
  { id: "img-4892", src: "/images/portfolio/IMG_4892.webp", alt: "Landscaping work", category: "general" },
];

export const featuredImages = galleryImages.filter((img) => img.featured);

export const categories = ["all", "lawn", "garden", "trees", "general"] as const;
export type GalleryCategory = (typeof categories)[number];
