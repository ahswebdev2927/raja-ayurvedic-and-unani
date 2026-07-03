import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Award, Compass, Eye, Heart, Leaf, ShieldAlert } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About Us | Raja Ayurvedic and Unani PVT. LTD",
  description: "Learn about Raja Ayurvedic & Unani, our mission, values, expert BUMS and Naturopathy consultants, and our legacy of natural wellness.",
  keywords: [
    "About Raja Ayurvedic",
    "Unani Medicine Malakpet",
    "Naturopathy Hyderabad",
    "Natural Wellness India",
    "BUMS Doctors Hyderabad",
    "Natural Health Products"
  ],
  alternates: {
    canonical: "https://rajaayurvedic.com/about",
  },
  openGraph: {
    title: "About Us | Authentic Ayurvedic Healthcare Clinic India",
    description: "Discover our roots, mission, and the certified team of Ayurvedic doctors delivering traditional treatments.",
    url: "https://rajaayurvedic.com/about",
    type: "website",
  },
};

const values = [
  {
    icon: Leaf,
    title: "Authenticity",
    desc: "We strictly adhere to classical Ayurvedic texts (Ashtanga Hridaya, Charaka Samhita) for all treatments and preparations.",
  },
  {
    icon: Compass,
    title: "Holistic Vision",
    desc: "We treat the whole individual - body, mind, and spirit - rather than just suppressing isolated physical symptoms.",
  },
  {
    icon: Eye,
    title: "Quality Care",
    desc: "All herbal formulations are hand-crafted, organic, and tested to ensure they are free from heavy metals or contaminants.",
  },
];



const team = [
  {
    name: "Dr. Jabeen Malik, BUMS",
    role: "Chief Physician & Director",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop",
    bio: "An expert in both Ayurvedic and Unani systems of medicine, specializing in personalized Naturopathy, wellness lifestyle protocols, and metabolic health.",
  },
  {
    name: "Dr. Gautham Varma, BUMS, MD",
    role: "Senior Wellness Consultant",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=200&auto=format&fit=crop",
    bio: "A specialist in Kayachikitsa and traditional Unani treatments who designs personalized dietary regimes and herbal supplementation protocols.",
  },
  {
    name: "Anjali Menon",
    role: "Head of Therapy & Training",
    image: "https://images.unsplash.com/photo-1594824813573-246434de83fb?q=80&w=200&auto=format&fit=crop",
    bio: "Ensures the highest standards of therapy execution, training our therapist team in traditional Kerala massage strokes.",
  },
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
    "name": "About Us - Raja Ayurvedic",
    "description": "Learn about Raja Ayurvedic & Unani, our mission, values, BUMS certified doctors, and our legacy of natural healing.",
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

      {/* Introduction Section */}
      <section className="py-16 sm:py-24 bg-white" aria-labelledby="intro-title">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionTitle
                title="Leading Ayurvedic & Unani Wellness in Hyderabad"
                tag="Our Heritage"
                align="left"
                className="mb-6!"
              />
              <p className="text-neutral-gray text-base sm:text-lg font-light leading-relaxed">
                Raja Ayurvedic and Unani PVT. LTD was established to deliver pure, classical, and scientific consultations and traditional herbal products. Serving patients from our clinic in Saleem Nagar, Malakpet, Hyderabad, we combine time-tested Unani, Ayurvedic, and Naturopathy expertise to restore physical vitality and mental peace.
              </p>
              <p className="text-neutral-gray text-base sm:text-lg font-light leading-relaxed">
                By combining BUMS doctor-certified consultations with organic, heavy-metal tested medicines and classical therapies, we provide a holistic environment where your body can activate its natural, deep healing mechanisms.
              </p>
            </div>
            <div className="lg:col-span-6 relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-lg border border-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop"
                alt="Ayurvedic doctor preparing herbal ingredients"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

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



      {/* Team Section */}
      <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-100" aria-labelledby="team-title">
        <Container>
          <SectionTitle
            title="Meet Our Certified Specialists"
            subtitle="Our center is directed by BUMS (Bachelor of Unani Medicine & Surgery) and Naturopathy certified specialists."
            tag="Expert Team"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-md transition-shadow flex flex-col items-center p-6 text-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-5 border-2 border-slate-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-heading text-lg font-bold text-primary">{member.name}</h3>
                <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-3 block">{member.role}</span>
                <p className="text-sm text-neutral-gray font-light leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTA
        title="Ready to Restore Your Natural Equilibrium?"
        description="Receive BUMS Naturopathy doctor advice, customized remedies, and traditional therapies structured to your individual constitution."
        buttonText="Book Your Assessment"
        buttonLink="/contact"
      />
    </>
  );
}
