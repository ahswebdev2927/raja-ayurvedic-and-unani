import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { Product } from "@/types";
import Button from "./Button";

interface ProductCardProps {
  product: Product;
  showFeatures?: boolean;
}

export default function ProductCard({
  product,
  showFeatures = false,
}: ProductCardProps) {
  return (
    <article className="group flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1">
      {/* Product Image Area */}
      <div className="relative w-full aspect-[4/3] bg-slate-50 overflow-hidden">
        {/* Category tag */}
        <span className="absolute top-4 left-4 z-10 text-xs font-semibold uppercase tracking-wider text-primary bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md shadow-xs border border-slate-100">
          {product.category}
        </span>
        
        <Image
          src={product.image}
          alt={`Image of ${product.name}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>

      {/* Product Details Area */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div className="space-y-3">
          <h3 className="font-heading text-lg sm:text-xl font-bold text-primary group-hover:text-primary-light transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-sm sm:text-base text-neutral-gray font-light leading-relaxed">
            {product.description}
          </p>

          {/* Optional Bullet Features */}
          {showFeatures && product.features && product.features.length > 0 && (
            <ul className="space-y-1.5 pt-2" aria-label="Product features">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-primary font-light">
                  <Check className="w-4 h-4 text-primary-light shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* CTA Button */}
        <div className="pt-6 mt-auto">
          <Button href={product.buttonLink} variant="outline" className="w-full">
            {product.buttonText}
          </Button>
        </div>
      </div>
    </article>
  );
}
