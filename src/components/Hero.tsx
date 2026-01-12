import Link from "next/link";
import type { ReactNode } from "react";

interface HeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  cta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  trustLine?: string;
  children?: ReactNode;
}

export function Hero({ eyebrow, title, description, cta, secondaryCta, trustLine, children }: HeroProps) {
  return (
    <section className="section grid gap-10 pb-16 pt-14 md:grid-cols-2 md:items-center lg:pt-24">
      <div className="flex flex-col space-y-8">
        {/* Eyebrow - Now much larger and high-visibility as requested */}
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sand/50">
            {eyebrow}
          </p>
        )}

        <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tighter text-sand md:text-5xl lg:text-7xl">
          {title}
        </h1>

        <p className="max-w-xl text-lg leading-relaxed text-sand/80 md:text-xl">
          {description}
        </p>

        <div className="space-y-8">
          <div className="flex flex-wrap items-center gap-4">
            {cta && (
              <Link href={cta.href} className="btn-primary px-8 py-4 text-base font-bold shadow-lg shadow-white/10">
                {cta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href} className="btn-secondary px-8 py-4 text-base font-bold">
                {secondaryCta.label}
              </Link>
            )}
          </div>

          {trustLine && (
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-white/30" />
              <p className="text-sm font-medium tracking-wide text-sand/50">
                {trustLine}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="relative lg:ml-4">
        <div className="pointer-events-none absolute -inset-10 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_60%)] blur-3xl" />
        <div className="relative rounded-[2rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.2),rgba(255,255,255,0.02))] p-[1px] transition-transform duration-500 hover:scale-[1.01]">
          <div className="card grid-fade min-h-[320px] rounded-[2rem] border border-white/10 bg-midnight/80 p-10 shadow-2xl backdrop-blur-md">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
