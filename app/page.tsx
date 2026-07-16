import React from "react";
import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import CTA from "@/components/CTA";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import Testimonials from "@/components/Testimonials";
import { productsData } from "@/data/products";

import { contactConfig } from "@/data/contactConfig";

export const metadata: Metadata = {
  title: "Raja Ayurvedic & Unani | Ayurvedic Consultation & Herbal Products Hyderabad",
  description: "Authentic Ayurvedic consultation & premium Unani herbal products in Hyderabad. Consult Dr. Raja Jabeen S.A. (BUMS) at Saleem Nagar, Malakpet for custom wellness solutions.",
  keywords: [
    "Ayurvedic Consultation Hyderabad",
    "Ayurvedic Products Hyderabad",
    "Ayurveda Doctor Malakpet",
    "Unani Medicines Saleem Nagar",
    "Ayurvedic Clinic Hyderabad",
    "Dr Raja Jabeen S.A. BUMS",
    "Naturopathy Consultant Hyderabad",
    "Classical Ayurvedic Oils Hyderabad",
    "Herbal Remedies Malakpet",
    "Ayurveda Store Saleem Nagar"
  ],
  alternates: {
    canonical: "https://rajaayurvedic.com",
  },
  openGraph: {
    description: "Holistic, doctor-certified Unani & Ayurvedic wellness programs, organic skincare products, and remedies.",
    url: "https://rajaayurvedic.com",
    siteName: "Raja Ayurvedic & Unani",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Raja Ayurvedic Healing and Therapy Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raja Ayurvedic | Authentic Ayurvedic Products & Natural Wellness India",
    description: "Experience the premium traditional healing of Ayurveda with organic herbs and expert advice.",
    images: ["https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1200&auto=format&fit=crop"],
  },
};

export default function HomePage() {
  // Get the 6 catalog products for the home page display
  const featuredProducts = productsData;

  // Structured Data (JSON-LD)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://rajaayurvedic.com/#organization",
    "name": "Raja Ayurvedic & Unani",
    "url": "https://rajaayurvedic.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://rajaayurvedic.com/RajaAyurvedic-logo.jpeg",
      "caption": "Raja Ayurvedic & Unani Logo"
    },
    "sameAs": [
      contactConfig.socials.facebook,
      contactConfig.socials.instagram,
      contactConfig.socials.youtube
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://rajaayurvedicandunani.com/#localbusiness",
    "name": "Raja Ayurvedic Wellness Center",
    "image": "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=600&auto=format&fit=crop",
    "telephone": contactConfig.phones[0].value,
    "email": contactConfig.emails.info,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": contactConfig.address.streetAddress,
      "addressLocality": contactConfig.address.locality,
      "addressRegion": contactConfig.address.region,
      "postalCode": contactConfig.address.postalCode,
      "addressCountry": contactConfig.address.countryCode
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "8.5241",
      "longitude": "76.9366"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "18:00"
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://rajaayurvedicandunani.com/#website",
    "name": "Raja Ayurvedic",
    "url": "https://rajaayurvedicandunani.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://rajaayurvedicandunani.com/products?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      {/* Inject JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* 1. Hero Section Slider */}
      <HeroSlider />

      {/* 2. About Section */}
      <AboutSection />

      {/* 3. Products Showcase Section */}
      <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-100" aria-labelledby="featured-products-title">
        <Container>
          <SectionTitle
            id="featured-products-title"
            title="Ayurvedic & Unani Products"
            subtitle="Explore our select range of classical oils, herbal powders, and remedies crafted under certified physician consultation in Hyderabad."
            tag="Herbal Products Catalog"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} showFeatures={false} />
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Why Choose Us Section */}
      <FeaturesSection />

      {/* 5. Reviews / Testimonials Section */}
      <Testimonials />

      {/* 6. Reusable Call to Action Component */}
      <CTA
        title="Begin Your Personal Journey to Natural Healing"
        description="Connect with our Unani & Ayurvedic consultant Dr. Raja Jabeen S.A. (BUMS) today to receive a personalized wellness and dietary roadmap."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />
    </>
  );
}
