import React from "react";
import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import GalleryClient from "@/components/GalleryClient";
import CTA from "@/components/CTA";
import { galleryData } from "@/data/gallery-data";

export const metadata: Metadata = {
  title: "Instagram Video Gallery | Raja Ayurvedic & Unani Hyderabad",
  description: "Watch video guide reels and natural remedies by chief physician Dr. Raja Jabeen S.A. (BUMS) covering fatty liver, skin problems, thyroid control, gastric issues, and viral fever relief.",
  keywords: [
    "Ayurvedic Video Gallery",
    "Ayurveda Instagram Reels",
    "Dr Raja Jabeen S.A. Videos",
    "Natural Remedy Reels",
    "Raja Ayurvedic Hyderabad Videos"
  ],
  alternates: {
    canonical: "https://rajaayurvedic.com/gallery",
  },
  openGraph: {
    title: "Instagram Video Gallery | Raja Ayurvedic & Unani Hyderabad",
    description: "Watch doctor-certified treatments, Unani health reels, and organic product highlights in action.",
    url: "https://rajaayurvedic.com/gallery",
    type: "website",
  },
};

export default function GalleryPage() {
  const breadcrumbItems = [
    { label: "Gallery", href: "/gallery" }
  ];

  // Breadcrumb List Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://rajaayurvedicandunani.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Video Gallery",
        "item": "https://rajaayurvedicandunani.com/gallery"
      }
    ]
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://rajaayurvedicandunani.com/gallery/#webpage",
    "url": "https://rajaayurvedicandunani.com/gallery",
    "name": "Video Gallery - Raja Ayurvedic",
    "description": "Watch our traditional Ayurvedic therapies, Kerala oil massage sessions, and yoga classes.",
    "publisher": {
      "@id": "https://rajaayurvedicandunani.com/#organization"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />

      <PageHero
        title="Our Video Gallery"
        description="Explore our latest wellness reels, therapist training sessions, and holistic lifestyle logs curated from our social feed."
        breadcrumbItems={breadcrumbItems}
      />

      <section className="py-16 sm:py-24 bg-white" aria-labelledby="gallery-catalog-heading">
        <h2 id="gallery-catalog-heading" className="sr-only">Instagram Reels Video Gallery Grid</h2>
        <Container>
          <GalleryClient items={galleryData} />
        </Container>
      </section>

      <CTA
        title="Follow Our Daily Healing Insights"
        description="We share health routines, dietary tips, and classical Ayurvedic knowledge daily. Follow our official account to join our growing global family."
        buttonText="Follow on Instagram"
        buttonLink="https://www.instagram.com/drjabeenmalik?igsh=MTkwa3cwNXV4b2hpeA=="
      />
    </>
  );
}
