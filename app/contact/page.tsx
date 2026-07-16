import React from "react";
import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import ContactCard from "@/components/ContactCard";
import ContactForm from "@/components/ContactForm";
import GoogleMap from "@/components/GoogleMap";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { faqData } from "@/data/faq";
import { contactConfig } from "@/data/contactConfig";

export const metadata: Metadata = {
  title: "Contact Us & FAQ | Raja Ayurvedic & Unani Hyderabad",
  description: "Get in touch with Raja Ayurvedic and Unani PVT. LTD. Find our clinic address at Saleem Nagar, Malakpet, Hyderabad, call/WhatsApp us at +91 7673963808, and read FAQs.",
  keywords: [
    "Contact Raja Ayurvedic",
    "Ayurveda Clinic Hyderabad",
    "Ayurvedic Doctor Malakpet",
    "Saleem Nagar Clinic Address",
    "Raja Ayurvedic FAQ",
    "Unani Doctor Hyderabad"
  ],
  alternates: {
    canonical: "https://rajaayurvedic.com/contact",
  },
  openGraph: {
    title: "Contact Us & FAQ | Raja Ayurvedic & Unani Hyderabad",
    description: "Get directions, book appointments, and read common FAQs about our traditional treatments in Hyderabad.",
    url: "https://rajaayurvedic.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  const breadcrumbItems = [
    { label: "Contact", href: "/contact" }
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
        "item": "https://rajaayurvedicandunani.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact Us",
        "item": "https://rajaayurvedicandunani.com/contact"
      }
    ]
  };

  // FAQPage Schema Markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <PageHero
        title="Get in Touch"
        description="Book your appointment, consult our certified doctors, or ask any questions about our products and therapies."
        breadcrumbItems={breadcrumbItems}
      />

      {/* Contact Grid Section */}
      <section className="py-16 sm:py-24 bg-white" aria-labelledby="contact-form-heading">
        <h2 id="contact-form-heading" className="sr-only">Contact Details and Form</h2>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="max-w-md">
                <SectionTitle
                  title="Contact Information"
                  subtitle="Reach out to us via phone, email, or visit our wellness center directly. We look forward to welcoming you."
                  align="left"
                  className="mb-8!"
                />
              </div>

              <div className="space-y-4">
                <ContactCard
                  iconName="Phone"
                  title="Call & WhatsApp"
                  details={
                    <div className="space-y-1.5">
                      {contactConfig.phones.map((phone, index) => (
                        <a key={index} href={phone.link} className="hover:text-accent font-semibold block transition-colors">
                          {phone.label}: {phone.value}
                        </a>
                      ))}
                      <a href={contactConfig.whatsapp.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent font-semibold block text-emerald-600 transition-colors">
                        WhatsApp: {contactConfig.whatsapp.value}
                      </a>
                    </div>
                  }
                />
                
                <ContactCard
                  iconName="Mail"
                  title="Email Queries"
                  details={
                    <p>
                      <a href={`mailto:${contactConfig.emails.info}`} className="hover:text-accent font-semibold block transition-colors">
                        info: {contactConfig.emails.info}
                      </a>
                      <a href={`mailto:${contactConfig.emails.support}`} className="hover:text-accent block transition-colors text-xs text-neutral-gray mt-0.5">
                        support: {contactConfig.emails.support}
                      </a>
                    </p>
                  }
                />
                
                <ContactCard
                  iconName="Clock"
                  title="Consulting Hours"
                  details={
                    <p>
                      <span>Monday - Saturday: 10:00 AM - 6:00 PM</span><br />
                      <span className="text-amber-600 font-medium">Sunday: Closed</span>
                    </p>
                  }
                />
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </Container>
      </section>

      {/* Embedded Google Map Section */}
      <section className="py-8 bg-slate-50 border-y border-slate-100" aria-label="Interactive Map">
        <Container>
          <GoogleMap />
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-white" aria-labelledby="faq-section-heading">
        <Container>
          <SectionTitle
            id="faq-section-heading"
            title="Frequently Asked Questions"
            subtitle="Got questions? We have compiled answers to the most common queries regarding our Ayurvedic treatments, consultation process, and products."
            tag="Help & Knowledge Base"
          />
          <FAQ />
        </Container>
      </section>

      <CTA
        title="Need Custom Formulations or Bulk Orders?"
        description="We ship our doctor-certified organic capsules and skin oils globally. Send our support desk an email for bulk pricing."
        buttonText="Email Support Desk"
        buttonLink="mailto:support@rajaayurvedicandunani.com"
      />
    </>
  );
}
