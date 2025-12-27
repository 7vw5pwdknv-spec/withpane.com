import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";

const pillars = [
  {
    title: "Proprietary Deal Flow",
    description: "Access curated acquisition targets in your territory",
    icon: <div className="h-3 w-3 rounded-full bg-accent" />
  },
  {
    title: "Capital Access",
    description: "Acquire businesses without personal capital injection",
    icon: <div className="h-3 w-3 rounded-full bg-accent" />
  },
  {
    title: "Operational Playbooks",
    description: "Proven frameworks for growth and market consolidation",
    icon: <div className="h-3 w-3 rounded-full bg-accent" />
  }
];

export default function HomePage() {
  return (
    <div>
      <Hero
        eyebrow="HOLDRY"
        title="Build Ownership in Essential Businesses"
        description="HOLDRY partners with exceptional operators to acquire and grow service companies across America."
        cta={{ href: "/regional-vp", label: "Explore the Opportunity" }}
        secondaryCta={{ href: "/contact", label: "Speak with us" }}
      >
        <div className="space-y-5">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent/90">Proprietary edge</p>
            <p className="text-lg font-semibold text-sand">Built for disciplined ownership</p>
          </div>

          <div className="space-y-4 text-sm text-sand/80 leading-relaxed">
            <div className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
              <span>Proprietary intelligence across secondary and emerging markets</span>
            </div>
            <div className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
              <span>Capital partnerships aligned to long-term ownership</span>
            </div>
            <div className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
              <span>Discretion, discipline, and operational rigor</span>
            </div>
          </div>
        </div>
      </Hero>

      <section className="section space-y-8">
        <div className="space-y-3">
          {/* Removed “Value Proposition” */}
          <h2 className="text-2xl font-semibold text-sand md:text-3xl">What sets HOLDRY apart</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <FeatureCard key={pillar.title} icon={pillar.icon} title={pillar.title} description={pillar.description} />
          ))}
        </div>
      </section>

      <section className="section space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent/90">What We Do</p>
        <div className="card space-y-4">
          <p className="text-lg text-sand/80">
            HOLDRY is a private acquisition platform focused on systematically acquiring essential service businesses —
            landscaping, pest control, HVAC, janitorial, security, and related industries — in secondary and emerging
            markets nationwide.
          </p>
        </div>
      </section>

      <section className="section space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent/90">Who We Work With</p>
            <h2 className="text-2xl font-semibold text-sand md:text-3xl">Selective partnerships for both sides</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card space-y-3">
            <h3 className="text-xl font-semibold text-sand">For Operators</h3>
            <p className="text-sand/75">
              Convert your time and relationships into permanent equity ownership with proprietary deal flow and capital
              behind you.
            </p>
            <Link href="/regional-vp" className="btn-secondary inline-flex w-fit">
              Explore the Regional VP track
            </Link>
          </div>
          <div className="card space-y-3">
            <h3 className="text-xl font-semibold text-sand">For Sellers</h3>
            <p className="text-sand/75">
              Exit to a disciplined operator who respects what you have built and invests for the long term.
            </p>
            <Link href="/sellers" className="btn-secondary inline-flex w-fit">
              Learn about selling to HOLDRY
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to start a conversation?"
        description="Whether you are an operator or an owner, we move quickly, quietly, and with purpose."
        cta={{ href: "/contact", label: "Get in touch" }}
      />
    </div>
  );
}
