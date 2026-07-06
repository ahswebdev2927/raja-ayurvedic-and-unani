import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Container from "./Container";
import Button from "./Button";
import SectionTitle from "./SectionTitle";

const bullets = [
  "Dr. Raja Jabeen S.A. (BUMS) Chief Physician",
  "100% Pure, Organic, and Heavy-Metal Tested Herbs",
  "Specialized Women's & General Health Treatments",
  "15+ Years of Dedicated Clinical Experience",
];

export default function AboutSection() {
  return (
    <section className="py-16 sm:py-24 bg-white" aria-labelledby="about-section-title">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with decoration */}
          <div className="lg:col-span-6 relative">
            {/* Background design elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/5 rounded-2xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-slate-100 rounded-full -z-10" />

            <div className="relative h-[350px] sm:h-[450px] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-100">
              <Image
                src="/images/about/RajaAyurvedicandUnani.jpg"
                alt="Raja Ayurvedic & Unani Clinic consultation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Experience badge */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-md border border-slate-100 flex items-center gap-3">
              <span className="font-heading text-3xl font-extrabold text-accent">15+</span>
              <span className="text-xs font-semibold text-primary uppercase tracking-wide leading-tight">
                Years of<br />Clinical Practice
              </span>
            </div>
          </div>

          {/* Right Column: Copy & Bullets */}
          <div className="lg:col-span-6 space-y-6">
            <SectionTitle
              title="Authentic Ayurvedic Consultation & Herbal Products in Hyderabad"
              tag="Raja Ayurvedic & Unani"
              align="left"
              className="mb-6!" // Force margin overrides
            />

            <p className="text-neutral-gray text-base sm:text-lg font-light leading-relaxed">
              Welcome to Raja Ayurvedic and Unani PVT. LTD. We specialize in providing scientific, personalized Ayurvedic and Unani consultations along with premium herbal products at Saleem Nagar, Malakpet. Directed by certified physician Dr. Raja Jabeen S.A. (BUMS), we address the root causes of chronic ailments to restore natural metabolic balance and physical vitality.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-primary font-medium">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button href="/about" variant="primary" size="md">
                Learn More About Us
              </Button>
              <Button href="/contact" variant="ghost" size="md" className="group">
                <span>Book Consultation</span>
                <span className="inline-block transform group-hover:translate-x-1.5 transition-transform ml-1">→</span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
