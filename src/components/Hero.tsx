import Link from "next/link";
import type { ReactNode } from "react";

interface HeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  cta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  trustLine?: string; // New prop for social proof
  children?: ReactNode;
}

export function Hero({ 
  eyebrow, 
  title, 
  description, 
  cta, 
  secondaryCta, 
  trustLine, 
  children 
}: HeroProps) {
  return (
    <section className="section grid gap-10 pb-16 pt-14 md:grid-cols-2 md:items-center lg:pt-24">
      <div className="flex flex-col space-y-8">
        {/* Eyebrow - Keep subtle but tracking wider */}
        {eyebrow && (
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent/90">
            {eyebrow}
          </p>
        )}

        {/* Headline - Shifted to extrabold and tighter tracking for impact */}
        <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tighter text-sand md:text-5xl lg:text-6xl">
          {title}
        </h1>

        {/* Description - Max width limited for readability */}
        <p className="max-w-xl text-lg leading-relaxed text-sand/80 md:text-xl">
          {description}
        </p>

        {/* Action Area */}
        <div className="space-y-8">
          <div className="flex flex-wrap items-center gap-4">
            {cta && (
              <Link href={cta.href} className="btn-primary px-8 py-4 text-base font-bold shadow-lg shadow-accent/20">
                {cta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href} className="btn-secondary px-8 py-4 text-base font-bold">
                {secondaryCta.label}
              </Link>
            )}
          </div>

          {/* New Trust Line Element */}
          {trustLine && (
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-accent/30" />
              <p className="text-sm font-medium tracking-wide text-sand/50">
                {trustLine}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Visual Side: The "Data Card" */}
      <div className="relative lg:ml-4">
        {/* Intensified ambient glow for the "Intelligence" look */}
        <div className="pointer-events-none absolute -inset-10 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(189,107,62,0.3),transparent_60%)] blur-3xl" />

        {/* Gradient border with slightly more weight */}
        <div className="relative rounded-[2rem] bg-[linear-gradient(135deg,rgba(189,107,62,0.5),rgba(255,255,255,0.05),rgba(189,107,62,0.2))] p-[1px] transition-transform duration-500 hover:scale-[1.01]">
          <div className="card grid-fade min-h-[320px] rounded-[2rem] border border-white/5 bg-midnight/80 p-10 shadow-2xl backdrop-blur-md">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
