import React from "react";
import { MapPin, Navigation } from "lucide-react";
import { contactConfig } from "@/data/contactConfig";

export default function GoogleMap() {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=17.376272%2C78.509147`;

  return (
    <div className="flex flex-col md:block md:relative w-full md:h-[450px] lg:h-[500px]">
      {/* Address Card: block on mobile, absolute overlay on desktop */}
      <div className="mb-6 md:mb-0 md:absolute md:right-6 md:top-6 md:z-10 md:max-w-sm w-full bg-white border border-slate-100 p-5 rounded-2xl shadow-sm md:shadow-xl flex gap-4 items-start">
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

      {/* Interactive Map Frame: occupies full height of parent on desktop, fixed height on mobile */}
      <div className="w-full h-[320px] md:h-full rounded-2xl overflow-hidden shadow-lg border border-slate-100">
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
      </div>
    </div>
  );
}
