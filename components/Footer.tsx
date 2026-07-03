"use client";

import React from "react";
import Link from "next/link";
import { Leaf, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import Container from "./Container";
import { contactConfig } from "@/data/contactConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-slate-300 border-t border-slate-800" aria-label="Site Footer">
      <Container className="pt-16 pb-12">
        {/* Footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand block */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group focus:outline-none">
              <div className="p-1.5 rounded-xl bg-slate-800 text-gold group-hover:bg-accent transition-colors">
                <Leaf className="w-5 h-5" />
              </div>
              <span className="font-heading text-xl font-bold tracking-tight text-white">
                Raja<span className="text-accent font-medium">Ayurvedic & Unani</span>
              </span>
            </Link>
            <p className="text-sm font-light text-slate-400 leading-relaxed max-w-sm">
              Dedicated to restoring harmony, health, and vitality to your life through time-tested, authentic Ayurvedic remedies and therapies.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              <a
                href={contactConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-800 text-slate-300 hover:bg-accent hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href={contactConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-800 text-slate-300 hover:bg-accent hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href={contactConfig.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-800 text-slate-300 hover:bg-accent hover:text-primary transition-colors"
                aria-label="Twitter (X)"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href={contactConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-800 text-slate-300 hover:bg-accent hover:text-primary transition-colors"
                aria-label="Youtube"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
                  <polygon points="9.7 15 15.7 12 9.7 9 9.7 15" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="font-heading text-white text-base font-semibold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm font-light">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-accent transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-accent transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="font-heading text-white text-base font-semibold uppercase tracking-wider">
              Get in Touch
            </h3>
            <ul className="space-y-3.5 text-sm font-light">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {contactConfig.address.streetAddress},<br />
                  {contactConfig.address.locality}, {contactConfig.address.region}, {contactConfig.address.country} {contactConfig.address.postalCode}
                </span>
              </li>
              <li>
                <a href={contactConfig.phones[0].link} className="flex items-center gap-2.5 hover:text-accent transition-colors">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <span>{contactConfig.phones[0].value}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${contactConfig.emails.info}`} className="flex items-center gap-2.5 hover:text-accent transition-colors">
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  <span className="truncate">{contactConfig.emails.info}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="font-heading text-white text-base font-semibold uppercase tracking-wider">
              Business Hours
            </h3>
            <ul className="space-y-2.5 text-sm font-light">
              <li className="flex justify-between">
                <span>Monday - Saturday</span>
                <span className="text-white">10:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between text-amber-500">
                <span>Sunday</span>
                <span className="font-medium">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-slate-800/80" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-slate-500">
          <p>© {currentYear} Raja Ayurvedic and Unani PVT. LTD. All rights reserved. Designed for optimal holistic health.</p>
          <button
            onClick={handleBackToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all focus:outline-none focus:ring-1 focus:ring-accent"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
