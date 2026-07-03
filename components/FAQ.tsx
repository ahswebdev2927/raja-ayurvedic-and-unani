"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "@/types";
import { faqData as defaultFaqData } from "@/data/faq";

interface FAQProps {
  items?: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const data = items || defaultFaqData;

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {data.map((item) => {
        const isOpen = openId === item.id;
        
        return (
          <div
            key={item.id}
            className="border border-slate-100 rounded-xl bg-slate-50 overflow-hidden transition-all duration-300"
          >
            {/* Accordion Header */}
            <h3>
              <button
                type="button"
                id={`faq-btn-${item.id}`}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${item.id}`}
                onClick={() => toggleFAQ(item.id)}
                className="flex justify-between items-center w-full px-6 py-4.5 text-left font-heading text-sm sm:text-base font-bold text-primary hover:text-accent hover:bg-slate-100/50 transition-colors focus:outline-none cursor-pointer"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-neutral-gray transition-transform duration-300 shrink-0 ml-4 ${
                    isOpen ? "rotate-180 text-accent" : ""
                  }`}
                />
              </button>
            </h3>

            {/* Accordion Panel */}
            <div
              id={`faq-panel-${item.id}`}
              role="region"
              aria-labelledby={`faq-btn-${item.id}`}
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[300px] border-t border-slate-100" : "max-h-0"
              }`}
            >
              <div className="p-6 bg-white text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
