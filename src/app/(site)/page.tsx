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
    description: "Matched deals against our database of 893k loans to identify high-probability financing.",
    icon: <div className="h-3 w-3 rounded-full bg-accent" />
  },
  {
    title: "AI-Powered Deep Dives",
    description: "Automated enrichment including property values, owner profiles, and seller readiness scores.",
    icon: <div className="h-3 w-3 rounded-full bg-accent" />
  }
];

export default function HomePage() {
  return (
    <div>
      <Hero
        eyebrow="Proprietary Acquisition Intelligence"
        title="Stop Wasting 200 Hours Cold-Calling Dead Leads"
        description="Access 5,000+ proprietary off-market targets enriched with AI intelligence, property ownership data, and historical SBA lender matches. Move from 'Search' to 'LOI' faster."
        cta={{ href: "/pricing", label: "See Pricing" }}
        secondaryCta={{ href: "/demo", label: "Watch 3-Min Demo" }}
        trustLine="Trusted by search fund operators in 12 states"
      >
        {/* Mockup "Live Feed" component to demonstrate product value */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-accent">Real-Time Target Feed</span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-sand/40 italic">Syncing live signals</span>
              <span className="flex h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
            </div>
          </div>
          
          <div className="space-y-3">
            {[
              { name: "Precision HVAC", revenue: "$2.4M", signal: "High", tag: "Off-Market" },
              { name: "GreenScape Services", revenue: "$1.8M", signal: "SBA Match", tag: "Property Enriched" },
              { name: "SafeState Security", revenue: "$3.1M", signal: "Direct", tag: "Owner-Verified" },
            ].map((item, i) => (
              <div key={i} className="group flex items-center justify-between rounded-xl bg-white/5 p-3 text-sm transition-colors hover:bg-white/10">
                <div>
                  <p className="font-bold text-sand">{item.name}</p>
                  <p className="text-[11px] text-sand/40">{item.revenue} Revenue • {item.tag}</p>
                </div>
                <span className="rounded border border-accent/20 bg-accent/5 px-2 py-1 text-[9px] font-bold uppercase text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  {item.signal}
                </span>
              </div>
            ))}
          </div>
          <p className="pt-2 text-center text-[10px] text-sand/30 italic">Displaying 3 of 5,482 verified opportunities</p>
        </div>
      </Hero>

      <section className="section space-y-8">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold tracking-tight text-sand md:text-3xl">The Holdry Advantage</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <FeatureCard 
              key={pillar.title} 
              icon={pillar.icon} 
              title={pillar.title} 
              description={pillar.description} 
            />
          ))}
        </div>
      </section>

      <section className="section space-y-4">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent/90">Our Core Focus</p>
        <div className="card space-y-4 border-l-4 border-accent">
          <p className="text-lg leading-relaxed text-sand/80">
            Holdry is a private intelligence platform for systematically acquiring **essential service businesses** — 
            landscaping, HVAC, plumbing, and janitorial — in secondary markets. We help you skip the public market 
            noise and go direct to proprietary, financeable deal flow.
          </p>
        </div>
      </section>

      <section className="section space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent/90">Pathways</p>
            <h2 className="text-2xl font-bold tracking-tight text-sand md:text-3xl">Built for those who execute</h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="card group space-y-4 border border-white/5 transition-all hover:border-accent/20">
            <h3 className="text-xl font-bold text-sand">For Searchers & Funds</h3>
            <p className="text-sand/75">
              Stop digging through stale listings. Get a ClickUp workspace pre-populated with 5,000+ off-market targets and AI-enriched seller data.
            </p>
            <Link href="/partner" className="btn-primary inline-flex w-fit">
              View Searcher Plans
            </Link>
          </div>

          <div className="card space-y-4 border border-white/5">
            <h3 className="text-xl font-bold text-sand">For Business Owners</h3>
            <p className="text-sand/75">
              Exit to a professional operator. We skip the tire-kickers and bring you serious, pre-vetted buyers with verified financing.
            </p>
            <Link href="/sellers" className="btn-secondary inline-flex w-fit">
              Sell Your Business
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to end the grind?"
        description="Stop cold-calling and start closing. Pick a plan and get immediate access to your ClickUp workspace within 24 hours."
        cta={{ href: "/pricing", label: "Get Started Now" }}
      />
    </div>
  );
}
