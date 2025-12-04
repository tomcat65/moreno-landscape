"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { LightboxModal } from "@/components/gallery/LightboxModal";
import { galleryImages } from "@/data/gallery";

export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-green-dark text-white py-16 md:py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Our Work
            </h1>
            <p className="text-lg text-gray-200">
              Browse our portfolio of landscaping projects in Katy, Richmond,
              Fulshear, and surrounding areas. See the quality and attention to
              detail we bring to every property.
            </p>
          </div>
        </Container>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionHeading
            title="Project Gallery"
            subtitle="Click any image to view it in full size. Filter by category to find specific types of work."
          />

          <GalleryGrid onImageClick={openLightbox} showFilter />
        </Container>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gray-50">
        <Container size="md">
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Like what you see? Let us transform your property too.
            </p>
            <a
              href="/contact"
              className="inline-block bg-brand-green-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-green-800 transition-colors"
            >
              Get Your Free Estimate
            </a>
          </div>
        </Container>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        currentIndex={currentImageIndex}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
}
