"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./Button";
import Container from "./Container";

const slides = [
  {
    id: 1,
    title: "Experience the Essence of True Healing",
    subtitle: "Discover natural wellness through authentic Ayurvedic therapies tailored to your unique mind-body constitution.",
    image: "/images/heroSlider/18871.jpg",
    primaryText: "Explore Therapies",
    primaryHref: "/products",
    secondaryText: "Consult Doctor",
    secondaryHref: "/contact",
  },
  {
    id: 2,
    title: "Pure Herbal Remedies for Vitality",
    subtitle: "Ethically sourced, certified organic formulations crafted to boost immunity, restore balance, and enhance long-term health.",
    image: "/images/heroSlider/2151160267.jpg",
    primaryText: "View Remedies",
    primaryHref: "/products",
    secondaryText: "Our Story",
    secondaryHref: "/about",
  },
  {
    id: 3,
    title: "Holistic Detox & Rejuvenation Retreats",
    subtitle: "Revitalize your body at the cellular level with our signature Panchakarma programs and certified physician supervision.",
    image: "/images/heroSlider/2149480157.jpg",
    primaryText: "About Detox",
    primaryHref: "/products",
    secondaryText: "Book Appointment",
    secondaryHref: "/contact",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleNext = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Autoplay functionality
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, handleNext]);

  return (
    <section
      className="relative w-full h-[450px] sm:h-[550px] lg:h-[650px] overflow-hidden bg-primary"
      aria-label="Welcome Slider"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Slides wrapper */}
      <div className="relative w-full h-full">
        {slides.map((slide, idx) => {
          const isActive = idx === current;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
              aria-hidden={!isActive}
            >
              {/* Background Image */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-transparent z-10" />
              <Image
                src={slide.image}
                alt="" // Decorative background
                fill
                priority={idx === 0}
                className="object-cover object-center"
                sizes="100vw"
              />

              {/* Content Overlay */}
              <div className="absolute inset-0 z-20 flex items-center">
                <Container>
                  <div className="max-w-2xl text-left text-white space-y-4 sm:space-y-6 animate-slide-up">
                    <span className="inline-block px-3 py-0.5 sm:px-3.5 sm:py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-gold bg-gold/10 rounded-full border border-gold/20">
                      Ayurveda Store India & Wellness
                    </span>
                    <h2 className="font-heading text-2xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                      {slide.title}
                    </h2>
                    <p className="text-slate-300 text-sm sm:text-base lg:text-lg font-light leading-relaxed">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-3 pt-1">
                      <Button href={slide.primaryHref} variant="gold" size="sm" className="sm:py-3 sm:px-6 sm:text-base">
                        {slide.primaryText}
                      </Button>
                      <Button href={slide.secondaryHref} variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-primary sm:py-3 sm:px-6 sm:text-base">
                        {slide.secondaryText}
                      </Button>
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/10 hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-accent"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/10 hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-accent"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Indicators Dots */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center space-x-2.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
              idx === current
                ? "bg-gold w-8"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
            aria-current={idx === current ? "true" : "false"}
          />
        ))}
      </div>
    </section>
  );
}
