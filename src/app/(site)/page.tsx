import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";

const pillars = [
  {
    title: "Proprietary Off-Market Data",
    description: "Access businesses that haven't hit BizBuySell yet, sourced through deep industry signals.",
    icon: <div className="h-3 w-3 rounded-full bg-accent" />
  },
  {
    title: "SBA Lender Intelligence",
    description: "Identify high-probability financing with our database of 893k historical SBA loan records.",
    icon: <div className="h-3 w-3 rounded-full bg-accent" />
  },
  {
    title: "On-Demand Deep Enrichment",
    description: "Automated deep-dives including property values, asset-based lending data, and seller scores.",
    icon: <div className="h-3 w-3 rounded-full bg-accent" />
  }
];

export default function HomePage() {
  return (
    <div>
      <Hero
        eyebrow="FOR OPERATORS"
        title="Stop Wasting 200 Hours Cold-Calling Dead Leads"
        description="Access 5,000+ proprietary off-market targets enriched with AI intelligence, property ownership data, and historical SBA lender matches."
        cta={{ href: "/pricing", label: "See Pricing" }}
        secondaryCta={{ href: "/demo", label: "Demo" }}
        trustLine="Trusted by search fund operators in 12 states"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-accent">Real-Time Target Feed</span>
            <div className="flex items-center gap-2">
              <span className="flex h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
            </div>
          </div>
          <div className="space-y-3">
            {[
              { name: "Precision HVAC", revenue: "$2.4M", signal: "High", tag: "Off-Market" },
              { name: "GreenScape Services", revenue: "$1.8M", signal: "SBA Match", tag: "Property Enriched" },
              { name: "SafeState Security", revenue: "$3.1M", signal: "Direct", tag: "Owner-Verified" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between rounded-xl bg-white/5 p-3 text-sm">
                <div>
                  <p className="font-bold text-sand">{item.name}</p>
                  <p className="text-[11px] text-sand/40">{item.revenue} Revenue • {item.tag}</p>
                </div>
                <span className="rounded bg-accent/10 px-2 py-1 text-[9px] font-bold uppercase text-accent">{item.signal}</span>
              </div>
            ))}
          </div>
        </div>
      </Hero>

      <section className="section space-y-8">
        <h2 className="text-2xl font-bold tracking-tight text-sand md:text-3xl">The Holdry Model</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <FeatureCard key={pillar.title} icon={pillar.icon} title={pillar.title} description={pillar.description} />
          ))}
        </div>
      </section>

      {/* The "Cheat Sheet" Strategy Card - Fixed apostrophes here */}
      <section className="section py-6">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent/90">The Financing Advantage</p>
        <div className="card space-y-4 border-l-4 border-accent bg-accent/5">
          <p className="text-xl font-bold text-sand">The Cheat Sheet for Low-Equity Acquisitions</p>
          <p className="text-lg leading-relaxed text-sand/80">
            We provide aggregate insights across nearly **one million SBA loans**, plus granular data from asset-based lenders and sale-leaseback firms. 
            This isn&apos;t just data—it&apos;s a playbook for structuring acquisitions with minimal personal equity injection.
          </p>
        </div>
      </section>

      {/* The Data Edge (SaaS Pivot) Section */}
      <section className="section py-8">
        <div className="card group space-y-4 border border-white/10 p-12">
          <h3 className="text-3xl font-black text-sand">The Data Edge</h3>
          <p className="text-lg text-sand/75">
            Holdry has pivoted to a pure-play intelligence infrastructure. We no longer ask for equity or partnership; 
            we provide the software and data searchers need to operate at a professional level from Day 1.
          </p>
        </div>
      </section>

      <section className="section py-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card space-y-4 border border-white/5">
            <h3 className="text-xl font-bold text-sand">For Searchers & Funds</h3>
            <p className="text-sand/75">Get a ClickUp workspace pre-populated with 5,000+ off-market targets and AI-enriched seller data.</p>
            <Link href="/pricing" className="btn-primary inline-flex w-fit">View Searcher Plans</Link>
          </div>

          <div className="card space-y-4 border border-white/5">
            <h3 className="text-xl font-bold text-sand">For Business Owners</h3>
            <p className="text-sand/75">Exit to a professional operator. We bring you pre-vetted buyers with verified financing data.</p>
            <Link href="/sellers" className="btn-secondary inline-flex w-fit">Sell Your Business</Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Enterprise Solutions"
        description="Looking for custom data sets, unlimited deep-dives, or white-glove onboarding for your search fund? Let's build a custom plan."
        cta={{ href: "/demo", label: "Book a Custom Info Call" }}
      />
    </div>
  );
}
