"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import ReviewCard from "./ReviewCard";
import { testimonialsData } from "@/data/testimonials";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleNext = useCallback(() => {
    setCurrent((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, handleNext]);

  return (
    <section
      className="py-16 sm:py-24 bg-slate-50 border-y border-slate-100/50"
      aria-label="Client Testimonials"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      <Container>
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Real reviews and transformational healing journeys shared by our wellness center visitors."
          tag="Reviews & Stories"
        />

        {/* Carousel container */}
        <div className="relative max-w-3xl mx-auto px-4 sm:px-8 mt-8">
          <Quote className="absolute top-0 left-0 w-16 h-16 text-slate-200/50 -translate-y-8 -translate-x-4 pointer-events-none" />

          {/* Testimonial card view with transition */}
          <div className="min-h-[280px] flex items-center justify-center">
            {testimonialsData.map((testimonial, idx) => {
              const isActive = idx === current;
              return (
                <div
                  key={testimonial.id}
                  className={`w-full transition-all duration-500 ease-in-out ${
                    isActive
                      ? "opacity-100 translate-x-0 scale-100 relative"
                      : "opacity-0 absolute pointer-events-none scale-95"
                  }`}
                  aria-hidden={!isActive}
                >
                  <ReviewCard testimonial={testimonial} />
                </div>
              );
            })}
          </div>

          {/* Slider Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex space-x-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    idx === current ? "bg-accent w-6" : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                  aria-current={idx === current ? "true" : "false"}
                />
              ))}
            </div>

            {/* Prev/Next Buttons */}
            <div className="flex space-x-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
