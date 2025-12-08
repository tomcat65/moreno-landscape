"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryImages, categories, type GalleryCategory } from "@/data/gallery";
import { cn } from "@/lib/utils";

interface GalleryGridProps {
  onImageClick?: (index: number) => void;
  showFilter?: boolean;
  limit?: number;
}

export function GalleryGrid({
  onImageClick,
  showFilter = true,
  limit,
}: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const displayImages = limit ? filteredImages.slice(0, limit) : filteredImages;

  return (
    <div>
      {/* Category Filter */}
      {showFilter && (
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full font-medium text-sm transition-colors capitalize",
                activeCategory === category
                  ? "bg-brand-green-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayImages.map((image, index) => {
          // Find the index in the full gallery array
          const fullGalleryIndex = galleryImages.findIndex((img) => img.id === image.id);
          return (
          <div
            key={image.id}
            className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
            onClick={() => onImageClick?.(fullGalleryIndex >= 0 ? fullGalleryIndex : index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-brand-green-dark/0 group-hover:bg-brand-green-dark/40 transition-colors flex items-center justify-center">
              <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                View
              </span>
            </div>
          </div>
          );
        })}
      </div>

      {/* Empty state */}
      {displayImages.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No images found in this category.</p>
        </div>
      )}
    </div>
  );
}
