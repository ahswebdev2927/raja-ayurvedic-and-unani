import React from "react";
import { MapPin, Navigation } from "lucide-react";
import { contactConfig } from "@/data/contactConfig";

export default function GoogleMap() {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=17.376272%2C78.509147`;

  return (
    <section className="relative w-full h-[400px] sm:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg border border-slate-100">
      {/* Interactive Map Frame */}
      <iframe
        src={contactConfig.googleMapEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`${contactConfig.companyName} location map`}
        className="w-full h-full"
      />

      {/* Floating Address Overlay Card */}
      <div className="absolute top-4 left-4 right-4 md:left-auto md:right-6 md:top-6 z-10 max-w-sm bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-slate-100 flex gap-4 items-start">
        <div className="p-3 bg-primary/10 text-accent rounded-xl shrink-0">
          <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <div className="space-y-3">
          <div>
            <h3 className="font-heading font-extrabold text-primary text-sm sm:text-base leading-snug">
              {contactConfig.companyName}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-neutral-gray leading-relaxed font-light">
              {contactConfig.address.streetAddress},<br />
              {contactConfig.address.locality}, {contactConfig.address.region}, {contactConfig.address.country} {contactConfig.address.postalCode}
            </p>
          </div>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary hover:bg-accent text-white hover:text-primary rounded-xl text-xs font-semibold tracking-wide shadow-sm hover:shadow transition-all duration-300 group cursor-pointer"
          >
            <Navigation className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
