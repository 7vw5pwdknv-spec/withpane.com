import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";

const pillars = [
  {
    title: "Permanent Ownership",
    description: "We invest for the long term and build enduring businesses without a forced exit timeline.",
    icon: <div className="h-3 w-3 rounded-full bg-sand/60" />
  },
  {
    title: "Operational Partnership",
    description: "We support operators with patient capital, strategic guidance, and shared infrastructure.",
    icon: <div className="h-3 w-3 rounded-full bg-sand/60" />
  },
  {
    title: "Capital Discipline",
    description: "We focus on resilient, cash-generative enterprises with thoughtful risk management.",
    icon: <div className="h-3 w-3 rounded-full bg-sand/60" />
  }
];

const focusAreas = [
  {
    title: "Essential Services",
    description: "Stable, recurring demand businesses with strong local or regional footprints."
  },
  {
    title: "Industrial & Logistics",
    description: "Asset-backed operators that keep core infrastructure moving."
  },
  {
    title: "Business Services",
    description: "Mission-critical providers with deep customer relationships."
  }
];

export default function HomePage() {
  return (
    <div>
      <Hero
        eyebrow="Holding Company"
        title="Long-term ownership of resilient enterprises"
        description="Holdry is a parent holding company focused on acquiring and stewarding durable businesses. We partner with operators and provide patient capital to help companies compound over decades."
        cta={{ href: "/partner", label: "Start a Conversation" }}
        secondaryCta={{ href: "/about", label: "Our Approach" }}
        trustLine="Private • Long-term • Operator-first"
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-sand/60">Portfolio Snapshot</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-sand/40">Confidential</span>
          </div>
          <div className="space-y-3">
            {[
              { name: "Holdry Infrastructure", focus: "Industrial Services", status: "Majority Owned" },
              { name: "Holdry Hospitality", focus: "Regional Operations", status: "Strategic Partner" },
              { name: "Holdry Logistics", focus: "Essential Freight", status: "Platform Company" }
            ].map((item) => (
              <div key={item.name} className="flex items-center justify-between rounded-xl bg-white/5 p-3 text-sm">
                <div>
                  <p className="font-bold text-sand">{item.name}</p>
                  <p className="text-[11px] text-sand/50">{item.focus}</p>
                </div>
                <span className="rounded border border-white/10 px-2 py-1 text-[9px] font-bold uppercase text-sand/70">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Hero>

      <section className="section space-y-8">
        <h2 className="text-2xl font-bold tracking-tight text-sand md:text-3xl">Our Operating Principles</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <FeatureCard key={pillar.title} icon={pillar.icon} title={pillar.title} description={pillar.description} />
          ))}
        </div>
      </section>

      <section className="section py-6">
        <div className="card space-y-4 border border-white/10 bg-midnight/70">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sand/50">Investment Focus</p>
          <p className="text-xl font-bold text-sand">Steady growth over speculative spikes</p>
          <p className="text-lg leading-relaxed text-sand/70">
            Holdry prioritizes cash-flowing businesses with durable demand, aligned leadership teams, and the ability to
            improve margins through thoughtful operational support.
          </p>
          <div className="grid gap-4 pt-2 md:grid-cols-3">
            {focusAreas.map((area) => (
              <div key={area.title} className="rounded-2xl border border-white/10 bg-charcoal/40 p-4">
                <p className="text-sm font-semibold text-sand">{area.title}</p>
                <p className="mt-2 text-xs text-sand/60">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section py-8">
        <div className="card group space-y-4 border border-white/10 p-12">
          <h3 className="text-3xl font-black text-sand">Built to hold, built to help</h3>
          <p className="text-lg text-sand/75">
            We are not a fund. We are a permanent home for founder-led businesses seeking continuity, operational support,
            and patient capital.
          </p>
        </div>
      </section>

      <section className="section py-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card space-y-4 border border-white/10">
            <h3 className="text-xl font-bold text-sand">For Operating Companies</h3>
            <p className="text-sand/70">
              We acquire and support businesses with strong fundamentals and leadership teams that want a long-term partner.
            </p>
            <Link href="/partner" className="btn-primary inline-flex w-fit">Start a Conversation</Link>
          </div>

          <div className="card space-y-4 border border-white/10 bg-midnight/50">
            <h3 className="text-xl font-bold text-sand">For Capital Partners</h3>
            <p className="text-sand/70">
              We collaborate with aligned investors and lenders who value stewardship, transparency, and steady compounding.
            </p>
            <Link href="/enterprise" className="btn-secondary inline-flex w-fit">Our Platform</Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Let’s build lasting enterprises"
        description="Share your business or partnership opportunity and we will respond with discretion."
        cta={{ href: "/partner", label: "Contact Holdry" }}
      />
    </div>
  );
}
