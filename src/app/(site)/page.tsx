import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";

const pillars = [
  {
    title: "Proprietary Deal Flow",
    description: "Sourcing intelligence designed for disciplined search",
    icon: <div className="h-3 w-3 rounded-full bg-accent" />
  },
  {
    title: "Capital Access",
    description: "Aligned capital pathways to close the right deal",
    icon: <div className="h-3 w-3 rounded-full bg-accent" />
  },
  {
    title: "Operational Playbooks",
    description: "Frameworks and rigor for durable, long-term ownership",
    icon: <div className="h-3 w-3 rounded-full bg-accent" />
  }
];

export default function HomePage() {
  return (
    <div>
      <Hero
        eyebrow="HOLDRY"
        title="Build Ownership in Essential Businesses"
        description="HOLDRY partners with disciplined operators to acquire and grow essential service companies across America."
        cta={{ href: "/partner", label: "Partner with HOLDRY" }}
        secondaryCta={{ href: "/pricing", label: "View pricing" }}
      >
        <div className="space-y-5">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent/90">HOLDRY-powered search</p>
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
            <h3 className="text-xl font-semibold text-sand">For Partners</h3>
            <p className="text-sand/75">
              Convert your skill and execution into permanent equity ownership with sourcing intelligence and aligned capital.
            </p>
            <Link href="/partner" className="btn-secondary inline-flex w-fit">
              Explore Partner with HOLDRY
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
        title="Ready to start?"
        description="If you’re a serious operator, apply to partner with HOLDRY. If you’re a business owner, start a discreet conversation."
        cta={{ href: "/partner#apply", label: "Apply" }}
      />
    </div>
  );
}
