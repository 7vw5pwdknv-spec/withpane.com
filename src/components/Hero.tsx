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
      <div className="card grid-fade min-h-[260px] rounded-3xl border border-white/5 bg-midnight/60 p-8">
        {children}
      </div>
    </section>
  );
}
