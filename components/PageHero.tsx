import Container from "./Container";
import Breadcrumb from "./Breadcrumb";

interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumbItems?: { label: string; href?: string }[];
}

export default function PageHero({
  title,
  description,
  breadcrumbItems,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary text-white pt-24 pb-16 sm:pt-28 sm:pb-20 border-b border-slate-800">
      {/* Decorative gradient overlay glow elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,119,6,0.12),transparent_50%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl opacity-35 pointer-events-none -z-10" />

      {breadcrumbItems && <Breadcrumb items={breadcrumbItems} light={true} />}

      <Container className="mt-6 relative z-10 text-center sm:text-left">
        <div className="max-w-3xl space-y-4 animate-slide-up">
          {/* Tagline label */}
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1 rounded-full border border-gold/20 mb-1">
            Raja Ayurvedic Wellness
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-gold">
            {title}
          </h1>
          {description && (
            <p className="text-slate-300 text-lg sm:text-xl font-light leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
