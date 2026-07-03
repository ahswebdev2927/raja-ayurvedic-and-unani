import React from "react";
import type { Metadata } from "next";
import { ShieldCheck, Award, Activity, Sparkles } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { productsData } from "@/data/products";

export const metadata: Metadata = {
  title: "Ayurvedic & Unani Products Catalog | Raja Ayurvedic and Unani PVT. LTD",
  description: "Shop our classical Ayurvedic and Unani oils, herbal powders, and wellness remedies. Recommended by BUMS & Naturopathy consultant Dr. Jabeen Malik.",
  keywords: [
    "Ayurvedic Products Hyderabad",
    "Unani Medicines Malakpet",
    "Naturopathy Remedies India",
    "Raja Ayurvedic & Unani",
    "Dr Jabeen Malik BUMS"
  ],
  alternates: {
    canonical: "https://rajaayurvedic.com/products",
  },
  openGraph: {
    title: "Ayurvedic & Unani Products Catalog | Raja Ayurvedic and Unani PVT. LTD",
    description: "Shop our organic oils, Ashwagandha capsules, and Unani formulations. Dr. Jabeen Malik BUMS Naturopathy consultations.",
    url: "https://rajaayurvedic.com/products",
    type: "website",
  },
};

export default function ProductsPage() {
  const breadcrumbItems = [
    { label: "Products", href: "/products" }
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
        "item": "https://rajaayurvedic.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": "https://rajaayurvedic.com/products"
      }
    ]
  };

  // Product schemas dynamically generated
  const productSchemas = productsData.map((prod) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": prod.name,
    "image": prod.image,
    "description": prod.description,
    "category": prod.category,
    "offers": {
      "@type": "Offer",
      "price": prod.price ? prod.price.replace("₹", "") : "0.00",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": `https://rajaayurvedic.com/products#${prod.id}`
    }
  }));

  // Dedicated Product FAQs
  const productFaqs = [
    {
      id: "prod-faq-1",
      question: "How do I select the right formulation for my needs?",
      answer: "Since every individual body type (prakriti) is different, we recommend consulting our chief physician Dr. Jabeen Malik (BUMS | Naturopathy) to receive a customized recommendation."
    },
    {
      id: "prod-faq-2",
      question: "Are your Ayurvedic and Unani products safe for long-term use?",
      answer: "Yes, all our classical oils, herbal powders, and capsules are formulated using 100% natural, ethically sourced herbs and pure seed bases. They contain zero mineral oils, synthetic paraffins, or heavy metals."
    },
    {
      id: "prod-faq-3",
      question: "How can I purchase or order these products?",
      answer: "You can click on the 'Inquire / Book Now' button on any product. This will let you directly message our Malakpet Saleem Nagar desk via WhatsApp or email to process home delivery."
    },
    {
      id: "prod-faq-4",
      question: "Where can I read more detailed specifications of each product?",
      answer: "The complete product details, usage directions, chemical composition, and benefits are printed clearly on their respective product labels and images."
    }
  ];

  // Core Strengths list
  const coreStrengths = [
    {
      icon: ShieldCheck,
      title: "Authentic Heritage",
      desc: "Time-tested recipes sourced strictly from ancient Ayurvedic and Unani classical medical texts."
    },
    {
      icon: Award,
      title: "BUMS & Naturopathy Directed",
      desc: "Supervised directly under Dr. Jabeen Malik, ensuring high professional standards and clinical safety."
    },
    {
      icon: Activity,
      title: "100% Organic Purity",
      desc: "Ethically harvested herbs processed without mineral oils, artificial parabens, or preservatives."
    },
    {
      icon: Sparkles,
      title: "Holistic Health Care",
      desc: "Treating the cellular root cause of metabolic disorders to restore natural physical balance."
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {productSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <PageHero
        title="Our Wellness Catalog"
        description="Explore our range of classical oils, herbal powders, and remedies. All product specifications are printed directly on their labels."
        breadcrumbItems={breadcrumbItems}
      />

      {/* 1. Products Catalog Section (No search/filters, showFeatures={false}) */}
      <section className="py-16 sm:py-24 bg-white" aria-labelledby="products-grid-title">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="products-grid-title" className="font-heading text-3xl sm:text-4xl font-extrabold text-primary">
              Featured Formulations
            </h2>
            <p className="mt-4 text-base text-neutral-gray font-light">
              Pure Ayurvedic and Unani remedies crafted to promote wellness and long-term vitality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {productsData.map((product) => (
              <ProductCard key={product.id} product={product} showFeatures={false} />
            ))}
          </div>
        </Container>
      </section>

      {/* 2. Our Core Strengths Section (Dark Forest Green Background with Gold/Amber Accents) */}
      <section className="py-16 sm:py-24 bg-primary text-white relative overflow-hidden border-y border-slate-800" aria-labelledby="strengths-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(227,154,22,0.08),transparent_40%)] pointer-events-none" />
        <Container className="relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 px-3.5 py-1 rounded-full border border-accent/20">
              Why Choose Us
            </span>
            <h2 id="strengths-title" className="font-heading text-3xl sm:text-4xl font-extrabold mt-4 text-white">
              Our Core Strengths
            </h2>
            <p className="mt-4 text-slate-300 font-light">
              We stand for purity, medical expertise, and authentic holistic care in Unani and Ayurvedic traditions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreStrengths.map((strength, idx) => {
              const Icon = strength.icon;
              return (
                <div key={idx} className="p-6 bg-slate-800/40 rounded-2xl border border-slate-700/30 hover:border-accent/30 transition-all duration-300 group">
                  <div className="p-3 w-fit rounded-xl bg-primary text-accent mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">{strength.title}</h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">{strength.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. Products FAQ Section */}
      <section className="py-16 sm:py-24 bg-white" aria-labelledby="prod-faq-title">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="prod-faq-title" className="font-heading text-3xl sm:text-4xl font-extrabold text-primary">
              Product FAQs
            </h2>
            <p className="mt-4 text-base text-neutral-gray font-light">
              Find answers to common questions about our Unani and Ayurvedic product preparations.
            </p>
          </div>

          <FAQ items={productFaqs} />
        </Container>
      </section>

      <CTA
        title="Schedule a Consultation with Dr. Jabeen Malik"
        description="Every body type requires different care. Schedule a virtual or physical session at our Malakpet Saleem Nagar clinic to receive custom Unani, Ayurvedic, and Naturopathy guidance."
        buttonText="Get Consultation"
        buttonLink="/contact"
      />
    </>
  );
}
