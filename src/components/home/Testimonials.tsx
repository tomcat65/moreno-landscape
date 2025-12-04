"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { featuredTestimonials } from "@/data/testimonials";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === featuredTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? featuredTestimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-16 md:py-24 bg-brand-green-dark">
      <Container>
        <SectionHeading
          title="What Our Customers Say"
          subtitle="Don't just take our word for it. Here's what homeowners in your neighborhood are saying."
          dark
        />

        {/* Desktop: Grid of testimonials */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTestimonials.slice(0, 6).map((testimonial) => (
            <Card key={testimonial.id} className="bg-white">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-brand-gold mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-brand-gold text-brand-gold"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="border-t pt-4">
                  <p className="font-semibold text-brand-green-dark">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.location}
                    {testimonial.service && ` • ${testimonial.service}`}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <Card className="bg-white">
            <CardContent className="p-6">
              <Quote className="w-8 h-8 text-brand-gold mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {Array.from({
                  length: featuredTestimonials[currentIndex].rating,
                }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-brand-gold text-brand-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                &ldquo;{featuredTestimonials[currentIndex].text}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t pt-4">
                <p className="font-semibold text-brand-green-dark">
                  {featuredTestimonials[currentIndex].name}
                </p>
                <p className="text-sm text-gray-500">
                  {featuredTestimonials[currentIndex].location}
                  {featuredTestimonials[currentIndex].service &&
                    ` • ${featuredTestimonials[currentIndex].service}`}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Carousel controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {featuredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-brand-gold" : "bg-white/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
