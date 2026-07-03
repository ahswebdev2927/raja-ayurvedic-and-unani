"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Leaf } from "lucide-react";
import Container from "./Container";
import Button from "./Button";
import { useScroll } from "@/hooks/useScroll";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { scrolled } = useScroll(20);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "glassmorphism shadow-md py-3"
            : "bg-white/92 backdrop-blur-xl border-b border-slate-100 py-4"
        }`}
      >
        <Container className="relative z-50">
          <nav className="relative z-50 flex items-center justify-between" aria-label="Main Navigation">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group focus-visible:outline-none"
              aria-label="Raja Ayurvedic Home"
            >
              <div className="p-1.5 rounded-xl bg-primary text-gold group-hover:bg-accent transition-colors">
                <Leaf className="w-5 h-5" />
              </div>
              <span className="font-heading text-lg sm:text-xl font-bold tracking-tight text-primary">
                Raja<span className="text-accent font-medium">Ayurvedic & Unani</span>
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <ul className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`relative py-1 text-sm font-medium transition-colors focus-visible:outline-none hover:text-accent ${
                        active ? "text-accent" : "text-slate-600"
                      }`}
                    >
                      {link.label}
                      {active && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full animate-fade-in" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <Button href="/contact" variant="primary" size="sm" className="animate-cta-pulse">
                Book Appointment
              </Button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 -mr-2 rounded-xl text-primary md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-accent"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-40 bg-white md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="h-full flex flex-col justify-between pt-24 pb-6 px-6 overflow-y-auto">
          <ul className="space-y-4">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block py-3 text-lg font-semibold rounded-xl px-4 transition-colors ${
                      active
                        ? "bg-accent/10 text-accent"
                        : "text-primary hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 space-y-4">
            <Button href="/contact" variant="primary" size="lg" className="w-full">
              Book Appointment
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
