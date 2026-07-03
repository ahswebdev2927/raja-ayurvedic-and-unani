import React from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import FeatureCard from "./FeatureCard";
import { featuresData } from "@/data/features";

export default function FeaturesSection() {
  return (
    <section className="py-16 sm:py-24 bg-white" aria-labelledby="why-choose-us-title">
      <Container>
        <SectionTitle
          title="Why Choose Raja Ayurvedic?"
          subtitle="Combining ancient wisdom with certified healthcare standards to provide safe, natural, and highly effective healing pathways."
          tag="Our Core Strengths"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuresData.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}
