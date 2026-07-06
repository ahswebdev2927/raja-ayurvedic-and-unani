import React from "react";
import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import GalleryClient from "@/components/GalleryClient";
import CTA from "@/components/CTA";
import { galleryData } from "@/data/gallery-data";

export const metadata: Metadata = {
  title: "Video Gallery & Instagram Feeds | Raja Ayurvedic Wellness",
  description: "Watch our traditional Ayurvedic therapies, Kerala oil massage sessions, yoga classes, and wellness retreat video reels from our Instagram feed in India.",
  keywords: [
    "Ayurvedic Video Gallery",
    "Ayurveda Instagram Reels",
    "Traditional Massage Videos",
    "Kerala Retreat Video Logs",
    "Natural Wellness Videos"
  ],
  alternates: {
    canonical: "https://rajaayurvedicandunani.com/gallery",
  },
  openGraph: {
    title: "Video Gallery & Instagram Feeds | Raja Ayurvedic Wellness",
    description: "Watch doctor-certified treatments, Panchakarma detox walkthroughs, and organic product highlights in action.",
    url: "https://rajaayurvedicandunani.com/gallery",
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
