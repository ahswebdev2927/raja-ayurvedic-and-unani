"use client";

import React, { useState, useRef } from "react";
import { Play, X, Leaf } from "lucide-react";
import { GalleryItem } from "@/data/gallery-data";
import Container from "./Container";
import Button from "./Button";

interface GalleryClientProps {
  items: GalleryItem[];
}

export default function GalleryClient({ items }: GalleryClientProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const openModal = (item: GalleryItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      {/* View More on Instagram Button */}
      <div className="flex justify-center mb-12">
        <a
          href="https://www.instagram.com/drjabeenmalik?igsh=MTkwa3cwNXV4b2hpeA=="
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#e1306c] hover:bg-[#d6295f] text-white rounded-xl text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer font-heading"
        >
          {/* Custom SVG Instagram Icon */}
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
          View More on Instagram
        </a>
      </div>

      {/* Grid Layout: 3 columns on desktop, 2 on tablet, 1 on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {items.map((item) => (
          <GridVideoCard key={item.id} item={item} onSelect={openModal} />
        ))}
      </div>

      {/* Instagram-style Modal Player */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-primary/80 backdrop-blur-md animate-fade-in"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Modal content box */}
          <div
            className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full grid grid-cols-1 md:grid-cols-12 max-h-[90vh] md:max-h-[80vh] border border-slate-100 animate-scale-up"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Left Side: Video Player */}
            <div className="md:col-span-7 bg-black flex items-center justify-center relative aspect-video md:aspect-auto md:h-[500px]">
              <video
                src={selectedItem.videoUrl}
                controls
                autoPlay
                loop
                playsInline
                className="w-full h-full object-contain"
              />
            </div>

            {/* Right Side: Instagram Details Panel */}
            <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto border-t md:border-t-0 md:border-l border-slate-100">
              
              {/* Top part: Brand header & Info */}
              <div className="space-y-6">
                {/* Brand Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded-lg bg-primary text-gold">
                      <Leaf className="w-4 h-4" />
                    </div>
                    <span className="font-heading text-sm font-bold text-primary">
                      RajaAyurvedic & Unani
                    </span>
                  </div>
                  
                  {/* Close button inside panel */}
                  <button
                    onClick={closeModal}
                    className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-primary transition-colors cursor-pointer"
                    aria-label="Close dialog"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Video Info */}
                <div className="space-y-3">
                  <h3 id="modal-title" className="font-heading text-lg sm:text-xl font-bold text-primary leading-snug">
                    {selectedItem.title}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-gray font-light leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>
              </div>

              {/* Bottom part: Instagram Button */}
              <div className="pt-6 border-t border-slate-100 mt-6 space-y-3">
                <Button
                  href={selectedItem.instaLink}
                  variant="primary"
                  className="w-full justify-center gap-2 font-semibold bg-[#e1306c] hover:bg-[#c13584] text-white border-none!"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span>View on Instagram</span>
                </Button>
                <button
                  onClick={closeModal}
                  className="w-full text-center py-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-primary cursor-pointer transition-colors"
                >
                  Dismiss Player
                </button>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* Individual Grid Card Component to handle hover play/pause */
interface GridVideoCardProps {
  item: GalleryItem;
  onSelect: (item: GalleryItem) => void;
}

function GridVideoCard({ item, onSelect }: GridVideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        // Safe check for browser auto-play restrictions
        console.log("Auto-play blocked:", err);
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset frame
    }
  };

  return (
    <article
      onClick={() => onSelect(item)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative cursor-pointer overflow-hidden rounded-2xl bg-slate-900 aspect-[9/16] sm:aspect-[3/4] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Dynamic Video */}
      <video
        ref={videoRef}
        src={item.videoUrl}
        muted
        loop
        playsInline
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
      />

      {/* Play indicator center (fades out on hover) */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors duration-300">
        <div className="p-4 rounded-full bg-white/20 backdrop-blur-xs text-white group-hover:scale-75 group-hover:opacity-0 transition-all duration-300">
          <Play className="w-8 h-8 fill-white text-white" />
        </div>
      </div>

      {/* Hover Information Overlay (slides and fades up) */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
        <div className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-gold uppercase tracking-wider">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <span>Instagram Feed</span>
          </span>
          <h3 className="font-heading text-lg font-bold text-white">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-light line-clamp-3 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </article>
  );
}
