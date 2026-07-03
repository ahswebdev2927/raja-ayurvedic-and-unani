import React from "react";

interface SectionTitleProps {
  id?: string;
  title: string;
  subtitle?: string;
  tag?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionTitle({
  id,
  title,
  subtitle,
  tag,
  align = "center",
  className = "",
}: SectionTitleProps) {
  const isLeft = align === "left";

  return (
    <div
      id={id}
      className={`mb-12 md:mb-16 max-w-3xl ${isLeft ? "text-left" : "text-center mx-auto"} ${className}`}
    >
      {tag && (
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-3.5 bg-accent-light/35 px-3 py-1 rounded-full">
          {tag}
        </span>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-primary mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-neutral-gray font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
