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

      {/* “Pop” card */}
      <div className="relative">
        {/* ambient glow */}
        <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(200,90,30,0.25),transparent_55%)] blur-2xl" />

        {/* gradient border */}
        <div className="rounded-[2rem] bg-[linear-gradient(135deg,rgba(200,90,30,0.45),rgba(255,255,255,0.06),rgba(200,90,30,0.18))] p-[1px]">
          <div className="card grid-fade min-h-[260px] rounded-[2rem] border border-white/5 bg-midnight/70 p-8 shadow-soft backdrop-blur">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
