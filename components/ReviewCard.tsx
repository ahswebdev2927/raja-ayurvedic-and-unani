import React from "react";
import { Star } from "lucide-react";
import { Testimonial } from "@/types";

interface ReviewCardProps {
  testimonial: Testimonial;
}

export default function ReviewCard({ testimonial }: ReviewCardProps) {
  return (
    <article className="p-6 sm:p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
      <div className="space-y-4">
        {/* Rating Stars */}
        <div className="flex space-x-1" aria-label={`Rating: ${testimonial.rating} stars`}>
          {Array.from({ length: 5 }).map((_, idx) => (
            <Star
              key={idx}
              className={`w-5 h-5 ${idx < testimonial.rating
                  ? "fill-amber-500 text-amber-500"
                  : "text-slate-200"
                }`}
            />
          ))}
        </div>

        {/* Testimonial Quote */}
        <blockquote className="text-slate-600 font-light text-base leading-relaxed italic">
          &quot{testimonial.review}&quot
        </blockquote>
      </div>

      {/* Customer Info */}
      <div className="flex items-center gap-3.5 mt-6 pt-6 border-t border-slate-100/80">
        <div className="w-11 h-11 rounded-full bg-primary/10 text-primary border border-primary/20 flex items-center justify-center font-heading font-extrabold text-sm shrink-0">
          {(() => {
            const parts = testimonial.name.trim().split(/\s+/);
            if (parts.length === 0) return "?";
            if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
            return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
          })()}
        </div>
        <div>
          <h4 className="font-heading text-sm sm:text-base font-bold text-primary">
            {testimonial.name}
          </h4>
          {testimonial.role && (
            <p className="text-xs text-neutral-gray">{testimonial.role}</p>
          )}
        </div>
      </div>
    </article>
  );
}
