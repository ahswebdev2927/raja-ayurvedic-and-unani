import React from "react";
import * as Icons from "lucide-react";
import { FeatureItem } from "@/types";

interface FeatureCardProps {
  feature: FeatureItem;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  // Dynamically resolve the icon component from lucide-react
  const IconComponent = (Icons as any)[feature.iconName];

  return (
    <article className="group relative p-6 sm:p-8 bg-slate-50 hover:bg-white rounded-2xl border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Decorative top border highlight on hover */}
      <span className="absolute top-0 inset-x-0 h-1 bg-accent rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <div className="flex flex-col h-full space-y-4">
        {/* Icon wrapper */}
        <div className="p-3.5 w-fit rounded-xl bg-white text-primary group-hover:bg-accent group-hover:text-primary transition-colors shadow-sm duration-300 border border-slate-100/50">
          {IconComponent ? (
            <IconComponent className="w-6 h-6 transition-transform group-hover:scale-110 duration-300" />
          ) : (
            <Icons.HelpCircle className="w-6 h-6" />
          )}
        </div>

        {/* Feature Title */}
        <h3 className="font-heading text-lg sm:text-xl font-bold text-primary group-hover:text-primary-light transition-colors duration-300">
          {feature.title}
        </h3>

        {/* Feature Description */}
        <p className="text-sm sm:text-base text-neutral-gray font-light leading-relaxed flex-grow">
          {feature.description}
        </p>
      </div>
    </article>
  );
}
