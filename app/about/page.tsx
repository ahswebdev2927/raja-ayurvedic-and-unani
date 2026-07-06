import React from "react";
import Image from "next/image";
import { Leaf, Shield, Heart, Eye, HeartPulse, Activity } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import CTA from "@/components/CTA";

const values = [
  {
    icon: Shield,
    title: "100% Herbal Purity",
    desc: "We provide purely herbal treatment using 100% natural remedies. Our medicines are carefully prepared without chemicals.",
  },
  {
    icon: Heart,
    title: "Holistic Health",
    desc: "Personalized consultation and holistic herbal care designed to support your overall well-being with minimal risk of side effects.",
  },
  {
    icon: Eye,
    title: "Clinical Excellence",
    desc: "Directed by a BUMS certified specialist with over 15 years of clinical practice in treating systemic and gynaecological disorders.",
  },
];

const womensHealthList = [
  "PCOD / PCOS",
  "Adenomyosis",
  "Endometriosis",
  "Ovarian Cysts",
  "Uterine Fibroids",
];

const generalHealthList = [
  "Hypertension (High Blood Pressure)",
  "Diabetes",
  "Hypothyroidism",
  "Hemorrhoids (Piles)",
  "Arthritis",
  "Osteoarthritis",
  "Rheumatoid Arthritis",
  "Sciatica",
  "General Weakness",
];

export default function AboutPage() {
  const breadcrumbItems = [
    { label: "About", href: "/about" }
  ];

  // Breadcrumb Schema Markup
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://rajaayurvedic.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://rajaayurvedic.com/about"
      }
    ]
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://rajaayurvedic.com/about/#webpage",
    "url": "https://rajaayurvedic.com/about",
    "name": "About Us - Raja Ayurvedic & Unani",
    "description": "Learn about Raja Ayurvedic & Unani, our Chief Physician Dr. Raja Jabeen S.A. (BUMS), and our specialities in women's and general health.",
    "publisher": {
      "@id": "https://rajaayurvedic.com/#organization"
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
        title="Our Story & Legacy"
        description="Specializing in authentic Ayurvedic consultations, Unani treatments, and organic wellness products in Hyderabad."
        breadcrumbItems={breadcrumbItems}
      />

      {/* Mission / Vision / Values */}
      <section className="py-16 sm:py-24 bg-slate-50 border-y border-slate-100" aria-label="Our Core Values">
        <Container>
          <SectionTitle
            title="What Drives Our Wellness Care"
            subtitle="Our foundational pillars focus on maintaining absolute purity of treatment methods and patient-centered healing."
            tag="Mission, Vision & Values"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="p-8 bg-white border border-slate-100 rounded-2xl shadow-xs text-center space-y-4">
                  <div className="p-3 w-fit rounded-xl bg-primary text-accent mx-auto">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-primary">{val.title}</h3>
                  <p className="text-sm sm:text-base text-neutral-gray font-light leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Chief Physician Section */}
      <section className="py-16 sm:py-24 bg-white" aria-labelledby="physician-title">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Doctor Image */}
            <div className="lg:col-span-5 relative h-[380px] sm:h-[480px] rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50">
              <Image
                src="/images/about/RajaAyurvedicandUnani.jpg"
                alt="Dr. Raja Jabeen S.A. (BUMS)"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-md border border-slate-100 flex justify-between items-center">
                <div>
                  <span className="block text-[9px] font-bold text-accent uppercase tracking-widest leading-none mb-1">Registration No.</span>
                  <span className="block font-heading text-xs sm:text-sm font-extrabold text-primary">PR-3832/1/2025B</span>
                </div>
                <div className="text-right">
                  <span className="block text-[9px] font-bold text-accent uppercase tracking-widest leading-none mb-1">Experience</span>
                  <span className="block font-heading text-xs sm:text-sm font-extrabold text-primary">15+ Years Clinical</span>
                </div>
              </div>
            </div>

            {/* Doctor Details & Statement */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-gold bg-gold/10 rounded-full border border-gold/20">
                Chief Physician & Director
              </span>
              <h2 id="physician-title" className="font-heading text-3xl sm:text-4xl font-bold text-primary">
                Dr. Raja Jabeen S.A. (BUMS)
              </h2>
              <p className="text-neutral-gray text-base sm:text-lg font-light leading-relaxed">
                Dr. Raja Jabeen S.A. is a highly distinguished Unani and Ayurvedic physician with a BUMS (Bachelor of Unani Medicine & Surgery) degree. With over 15 years of extensive clinical experience, she is dedicated to providing personalized consultations and natural, holistic healthcare.
              </p>

              <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-accent space-y-2">
                <h4 className="font-heading text-primary font-bold text-base sm:text-lg">Our Treatment Philosophy</h4>
                <p className="text-neutral-gray text-sm sm:text-base font-light italic leading-relaxed">
                  "We provide purely herbal treatment using 100% natural remedies. Our medicines are carefully prepared without chemicals and are designed to support your health with minimal risk of side effects."
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Specializations Section */}
      <section className="py-16 sm:py-24 bg-slate-50 border-y border-slate-100" aria-labelledby="specializations-title">
        <Container>
          <SectionTitle
            id="specializations-title"
            title="We Specialize in Treating"
            subtitle="Personalized consultation and holistic herbal care for your overall well-being."
            tag="Clinical Specialities"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            {/* Women's Health Column */}
            <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-xs space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-primary leading-none mb-1">Women's Health</h3>
                  <span className="block text-xs font-semibold text-accent uppercase tracking-wider">Gynaecological Disorders</span>
                </div>
              </div>

              <ul className="space-y-3 pt-4 border-t border-slate-100">
                {womensHealthList.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-neutral-gray font-light text-sm sm:text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* General Health Column */}
            <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-xs space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-primary leading-none mb-1">General Health</h3>
                  <span className="block text-xs font-semibold text-accent uppercase tracking-wider">Systemic Conditions</span>
                </div>
              </div>

              <ul className="space-y-3 pt-4 border-t border-slate-100">
                {generalHealthList.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-neutral-gray font-light text-sm sm:text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <CTA
        title="Ready to Restore Your Natural Equilibrium?"
        description="Receive certified Unani and Ayurvedic advice, customized remedies, and holistic care structured to your individual constitution."
        buttonText="Book Your Assessment"
        buttonLink="/contact"
      />
    </>
  );
}
