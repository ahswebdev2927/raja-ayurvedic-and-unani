"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Product } from "@/types";
import ProductCard from "./ProductCard";

interface ProductCarouselProps {
  products: Product[];
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      const targetScroll =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative group">
      {/* Navigation Buttons (Visible on desktop hover) */}
      <button
        onClick={() => scroll("left")}
        className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white text-primary border border-slate-100 shadow-md hover:bg-slate-50 transition-all focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer hidden md:flex items-center justify-center"
        aria-label="Previous products"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white text-primary border border-slate-100 shadow-md hover:bg-slate-50 transition-all focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer hidden md:flex items-center justify-center"
        aria-label="Next products"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Scrollable container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 sm:gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6 px-1"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[280px] sm:w-[320px] md:w-[350px] shrink-0 snap-start snap-always"
          >
            <ProductCard product={product} showFeatures={true} />
          </div>
        ))}
      </div>
    </div>
  );
}
