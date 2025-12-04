"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

interface BeforeAfterPair {
  before: string;
  after: string;
  title: string;
  location: string;
}

const transformations: BeforeAfterPair[] = [
  {
    before: "/images/portfolio/IMG_4865.webp",
    after: "/images/portfolio/IMG_4869.webp",
    title: "Complete Lawn Renovation",
    location: "Cinco Ranch, TX",
  },
  {
    before: "/images/portfolio/IMG_4871.webp",
    after: "/images/portfolio/IMG_4873.webp",
    title: "Backyard Transformation",
    location: "Richmond, TX",
  },
  {
    before: "/images/portfolio/IMG_4892.webp",
    after: "/images/portfolio/IMG_4893.webp",
    title: "Garden Bed Cleanup",
    location: "Fulshear, TX",
  },
];

function SingleBeforeAfter({ pair }: { pair: BeforeAfterPair }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
      setSliderPosition(percentage);
    },
    []
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  return (
    <div className="group">
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] rounded-xl overflow-hidden cursor-ew-resize select-none shadow-xl"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Full width, behind) */}
        <div className="absolute inset-0">
          <Image
            src={pair.after}
            alt={`After: ${pair.title}`}
            fill
            className="object-cover"
          />
          <div className="absolute bottom-4 right-4 bg-brand-green-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
            After
          </div>
        </div>

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full" style={{ width: `${100 / (sliderPosition / 100)}%` }}>
            <Image
              src={pair.before}
              alt={`Before: ${pair.title}`}
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-4 left-4 bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Before
          </div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize z-10"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          {/* Handle circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-brand-green-primary">
            <div className="flex gap-0.5">
              <div className="w-0.5 h-4 bg-brand-green-primary rounded-full" />
              <div className="w-0.5 h-4 bg-brand-green-primary rounded-full" />
            </div>
          </div>
        </div>

        {/* Instruction overlay */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Drag to compare
        </div>
      </div>

      {/* Caption */}
      <div className="mt-4 text-center">
        <h4 className="font-heading font-bold text-brand-green-dark">
          {pair.title}
        </h4>
        <p className="text-sm text-gray-500">{pair.location}</p>
      </div>
    </div>
  );
}

export function BeforeAfterSlider() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-brand-gold/10 text-brand-green-dark px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Real Results
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-green-dark mb-4">
            See the Transformation
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Drag the slider to see the dramatic before and after of our recent
            projects. Every lawn tells a story of dedication and expertise.
          </p>
        </div>

        {/* Before/After Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformations.map((pair, index) => (
            <SingleBeforeAfter key={index} pair={pair} />
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-gradient-to-r from-brand-green-dark to-brand-green-primary rounded-2xl text-white">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-brand-gold">100+</p>
            <p className="text-sm text-gray-200">Lawns Transformed</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-brand-gold">5.0</p>
            <p className="text-sm text-gray-200">Star Rating</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-brand-gold">9</p>
            <p className="text-sm text-gray-200">Expert Services</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-brand-gold">2hr</p>
            <p className="text-sm text-gray-200">Avg. Response Time</p>
          </div>
        </div>
      </div>
    </section>
  );
}
