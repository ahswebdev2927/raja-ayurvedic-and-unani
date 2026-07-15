"use client";

import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { contactConfig } from "@/data/contactConfig";

export default function StickySocials() {
  const [isExpanded, setIsExpanded] = useState(true);

  // Automatically collapse on mobile viewports on load/resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsExpanded(false);
      } else {
        setIsExpanded(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const socials = [
    {
      name: "Instagram",
      url: contactConfig.socials.instagram,
      color: "hover:text-accent hover:bg-accent/10",
      svg: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: contactConfig.socials.facebook,
      color: "hover:text-[#1877F2] hover:bg-[#1877F2]/10",
      svg: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: contactConfig.socials.youtube,
      color: "hover:text-[#FF0000] hover:bg-[#FF0000]/10",
      svg: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
          <polygon points="10 15 15 12 10 9" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <div
      className={`fixed right-0 top-[75%] -translate-y-1/2 z-45 transition-transform duration-300 ease-in-out flex items-center ${
        isExpanded ? "translate-x-0" : "translate-x-[52px]"
      }`}
    >
      {/* Toggle button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-center w-6 h-12 bg-primary hover:bg-slate-800 border border-r-0 border-slate-700/50 text-accent hover:text-white rounded-l-lg shadow-md cursor-pointer transition-colors duration-200 focus:outline-none"
        aria-label={isExpanded ? "Collapse Social Links" : "Expand Social Links"}
      >
        {isExpanded ? (
          <ChevronRight className="w-4 h-4 shrink-0" />
        ) : (
          <ChevronLeft className="w-4 h-4 shrink-0" />
        )}
      </button>

      {/* Social Icons Stack */}
      <div className="flex flex-col bg-primary/95 backdrop-blur-md border-l border-y border-slate-700/50 rounded-l-xl py-3 px-1.5 shadow-xl space-y-3">
        {socials.map((social) => {
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-10 h-10 rounded-lg text-slate-300 hover:scale-110 transition-all duration-200 ${social.color}`}
              aria-label={`Visit our ${social.name}`}
            >
              {social.svg}
            </a>
          );
        })}
      </div>
    </div>
  );
}
