import React from "react";
import Container from "./Container";
import Button from "./Button";

interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export default function CTA({
  title,
  description,
  buttonText,
  buttonLink,
}: CTAProps) {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden bg-primary text-white">
      {/* Decorative vector background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,119,6,0.15),transparent_50%)]" />
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-slate-300 text-lg sm:text-xl font-light mb-8 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
          <div className="flex justify-center">
            <Button
              variant="gold"
              size="lg"
              href={buttonLink}
              className="px-8 py-4 font-semibold text-primary rounded-full hover:scale-105 transition-transform"
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
