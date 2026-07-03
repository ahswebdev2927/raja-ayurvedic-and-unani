"use client";

import React, { useState, useMemo } from "react";
import { Search, SlidersHorizontal, Info } from "lucide-react";
import { Product } from "@/types";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

const categories = [
  "All",
  "Therapies",
  "Herbal Remedies",
  "Wellness Packages",
  "Skincare & Beauty",
];

export default function ProductGrid({ products }: ProductGridProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter and Search logic combined
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All" || product.category === activeCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, activeCategory, searchTerm]);

  return (
    <div className="space-y-10">
      {/* Controls Container */}
      <div className="flex flex-col md:flex-row gap-5 justify-between items-center bg-slate-50 p-6 rounded-2xl border border-slate-100/80">
        
        {/* Category Tabs */}
        <div 
          className="flex flex-wrap gap-2 w-full md:w-auto" 
          role="tablist" 
          aria-label="Product Categories"
        >
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isSelected}
                aria-controls="product-grid-display"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full cursor-pointer transition-all ${
                  isSelected
                    ? "bg-primary text-white shadow-xs"
                    : "bg-white text-primary border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:max-w-xs shrink-0">
          <label htmlFor="product-search" className="sr-only">Search products</label>
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            id="product-search"
            type="search"
            placeholder="Search catalog..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-full text-sm placeholder-slate-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          />
        </div>
      </div>

      {/* Grid Display */}
      <div 
        id="product-grid-display"
        className="relative min-h-[300px]"
        role="tabpanel"
        aria-label={`${activeCategory} products`}
      >
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                showFeatures={true} // Show full specifications on products page
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-20 px-4 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200 max-w-lg mx-auto flex flex-col items-center space-y-4 animate-scale-up">
            <div className="p-3 bg-slate-100 rounded-full text-neutral-gray">
              <Info className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-lg font-bold text-primary">No items found</h3>
            <p className="text-sm text-neutral-gray max-w-xs font-light">
              We couldn't find any products matching "{searchTerm}" under the category "{activeCategory}". Try refining your search terms.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("All");
              }}
              className="text-xs font-semibold uppercase tracking-wider text-accent hover:text-accent-hover cursor-pointer"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
