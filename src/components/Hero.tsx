import Link from "next/link";
import type { ReactNode } from "react";

interface HeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  cta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  children?: ReactNode;
}

export function Hero({ eyebrow, title, description, cta, secondaryCta, children }: HeroProps) {
  return (
    <section className="section grid gap-10 pb-10 pt-14 md:grid-cols-2 md:items-center lg:pt-20">
      <div className="space-y-6">
        {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent/90">{eyebrow}</p>}
        <h1 className="text-3xl font-semibold leading-tight tracking-tight text-sand md:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="max-w-2xl text-lg text-sand/80 md:text-xl">{description}</p>
        <div className="flex flex-wrap items-center gap-4">
          {cta && (
            <Link href={cta.href} className="btn-primary">
              {cta.label}
            </Link>
          )}
          {secondaryCta && (
            <Link href={secondaryCta.href} className="btn-secondary">
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>

      {/* Upgraded “pop” card */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-midnight/80 shadow-soft backdrop-blur">
        {/* Accent glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

        {/* Header strip */}
        <div className="flex items-center justify-between border-b border-white/10 px-8 py-5">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            <p className="text-sm font-semibold tracking-tight text-sand">HOLDRY Advantage</p>
          </div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-sand/60">Highlights</p>
        </div>

        {/* Content */}
        <div className="grid-fade p-8">
          {children}
        </div>
      </div>
    </section>
  );
}
