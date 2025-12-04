"use client";

import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
  service?: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Maria G.",
    location: "Cinco Ranch",
    rating: 5,
    text: "Excellent service! They showed up on time, did exactly what they promised, and my yard looks amazing. Best part? They actually answer their phone when you call. Will definitely use them again!",
    date: "2 weeks ago",
    service: "Lawn Maintenance",
  },
  {
    id: 2,
    name: "Robert T.",
    location: "Richmond",
    rating: 5,
    text: "Finally found a landscaper I can trust! Professional, affordable, and they speak Spanish which made communication with my parents so much easier. Highly recommend Moreno Landscaping.",
    date: "1 month ago",
    service: "Garden Maintenance",
  },
  {
    id: 3,
    name: "Jennifer S.",
    location: "Fulshear",
    rating: 5,
    text: "Our lawn was a disaster after the summer heat. The team came out the same day I called, gave me a fair quote, and transformed our yard in just a few hours. Outstanding work!",
    date: "3 weeks ago",
    service: "Complete Yard Cleanup",
  },
  {
    id: 4,
    name: "David L.",
    location: "Cross Creek Ranch",
    rating: 5,
    text: "They installed our Christmas lights last year and it was absolutely magical! Professional setup, reasonable prices, and they handled everything including takedown. Already booked them for this year.",
    date: "2 months ago",
    service: "Christmas Lights",
  },
  {
    id: 5,
    name: "Patricia M.",
    location: "Pecan Grove",
    rating: 5,
    text: "I've used several landscaping companies over the years, but Moreno is by far the best. Personal service, fair pricing, and you can tell they actually care about the quality of their work.",
    date: "1 week ago",
    service: "Lawn Maintenance",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={cn(
            "w-4 h-4",
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          )}
        />
      ))}
    </div>
  );
}

export function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextReview = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google branding */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white shadow-lg rounded-full px-6 py-3 mb-6">
            <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="font-semibold text-gray-700">Google Reviews</span>
          </div>

          {/* Rating summary */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-5xl font-bold text-brand-green-dark">
              {averageRating.toFixed(1)}
            </span>
            <div className="text-left">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 text-sm">Based on {reviews.length}+ reviews</p>
            </div>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-green-dark">
            What Our Customers Say
          </h2>
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation buttons */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-brand-green-primary hover:shadow-xl transition-all"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-brand-green-primary hover:shadow-xl transition-all"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Review Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 relative overflow-hidden">
            {/* Quote decoration */}
            <Quote className="absolute top-6 right-6 w-16 h-16 text-brand-green-primary/10" />

            <div className="relative">
              {reviews.map((review, index) => (
                <div
                  key={review.id}
                  className={cn(
                    "transition-all duration-500",
                    index === currentIndex
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 absolute inset-0 translate-x-8"
                  )}
                >
                  {/* Review header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-green-primary to-brand-green-dark flex items-center justify-center text-white font-bold text-xl">
                      {review.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-heading font-bold text-brand-green-dark">
                        {review.name}
                      </h4>
                      <p className="text-sm text-gray-500">{review.location}, TX</p>
                      <div className="flex items-center gap-2 mt-1">
                        <StarRating rating={review.rating} />
                        <span className="text-xs text-gray-400">{review.date}</span>
                      </div>
                    </div>
                    {review.service && (
                      <span className="hidden sm:block bg-brand-green-primary/10 text-brand-green-primary px-3 py-1 rounded-full text-xs font-medium">
                        {review.service}
                      </span>
                    )}
                  </div>

                  {/* Review text */}
                  <p className="text-gray-700 text-lg leading-relaxed italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === currentIndex
                    ? "bg-brand-green-primary w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Happy with our service? We&apos;d love to hear from you!
          </p>
          <a
            href="https://g.page/r/moreno-landscaping/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-green-primary font-semibold hover:underline"
          >
            Leave us a review on Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
