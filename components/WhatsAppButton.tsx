import React from "react";
import { contactConfig } from "@/data/contactConfig";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-center">
      <a
        href={contactConfig.whatsapp.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="p-3.5 rounded-full bg-[#25d366] text-white shadow-lg border border-slate-700/10 transition-all duration-300 ease-in-out hover:bg-[#128c7e] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#25d366] focus:ring-offset-2 hover:scale-105 animate-whatsapp-pulse relative shrink-0"
      >
        {/* High-fidelity WhatsApp SVG Icon */}
        <svg 
          className="w-6 h-6 fill-current" 
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Floating Animated Tooltip */}
      <div 
        className="ml-3.5 px-3 py-1.5 bg-primary text-white text-xs font-semibold rounded-lg shadow-md border border-slate-700/20 whitespace-nowrap pointer-events-none relative flex items-center animate-whatsapp-tooltip"
      >
        {/* Tooltip left-facing arrow */}
        <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-primary rotate-45 border-l border-b border-slate-700/10" />
        <span className="relative z-10">Contact Us Now!</span>
      </div>
    </div>
  );
}
