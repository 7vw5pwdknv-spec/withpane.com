import Link from "next/link";
import { Hero } from "@/components/Hero";

export default function AboutPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero Manifesto */}
      <Hero
        eyebrow="The Manifesto"
        title="Search is Broken. We Fixed the Engine."
        description="Holdry provides the intelligence infrastructure for the modern searcher. We eliminate the friction of traditional deal sourcing so you can move from 'searching' to 'owning' in half the time."
      >
        <div className="space-y-6">
          <p className="text-xl font-bold text-sand">The 2,000-Hour Problem</p>
          <p className="text-sand/70 leading-relaxed">
            The average searcher spends over 2,000 hours before reaching their first LOI. 
            Most of that time is burned on stale public listings, cold-calling businesses 
            that aren&apos;t for sale, and fighting over-leveraged auctions. 
          </p>
          <p className="text-sand/70 leading-relaxed italic">
            &quot;We built Holdry to turn those 2,000 hours of grind into 200 hours of 
            high-intent execution.&quot;
          </p>
        </div>
      </Hero>

      {/* The Thesis Grid */}
      <section className="section py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Column 1: The Problem */}
          <div className="card space-y-6 border border-white/5 bg-midnight/40 p-10">
            <h2 className="text-2xl font-black uppercase tracking-tight text-sand">The Noise</h2>
            <p className="text-sand/75 leading-relaxed">
              Standard deal sourcing is a war of attrition. Public platforms like BizBuySell 
              are where deals go to die—crowded with tire-kickers and unrealistic multiples. 
              Searching there isn&apos;t a strategy; it&apos;s a hope.
            </p>
            <div className="h-px w-full bg-white/5" />
            <p className="text-sand/75 leading-relaxed">
              Without proprietary data, you are just another voice in a crowded inbox. 
              You need an edge that isn&apos;t accessible to the masses.
            </p>
          </div>

          {/* Column 2: The Holdry Infrastructure */}
          <div className="card space-y-6 border border-accent/20 bg-accent/5 p-10">
            <h2 className="text-2xl font-black uppercase tracking-tight text-accent">The Intelligence</h2>
            <p className="text-sand/75 leading-relaxed">
              We replaced &quot;hope&quot; with a data engine. By aggregating signals 
              that others miss, we create a proprietary map of the off-market landscape.
            </p>
            <ul className="space-y-4 pt-2">
              {[
                { label: "Proprietary Signal Lab", desc: "Access targets before they ever hit the market." },
                { label: "SBA Loan Database", desc: "Aggregate insights from 893k+ historical records." },
                { label: "Financing Cheat Sheets", desc: "Playbooks for low-equity, high-leverage closings." },
                { label: "AI Deep Enrichment", desc: "Instant owner, property, and asset intelligence." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-accent font-bold">✓</span>
                  <div>
                    <p className="font-bold text-sand leading-none">{item.label}</p>
                    <p className="mt-1 text-xs text-sand/50">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Core Values / Operating Principles */}
      <section className="section space-y-12 py-10">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-black tracking-tighter text-sand md:text-5xl">Built by Operators.</h2>
          <p className="text-xs font-bold uppercase tracking-widest text-sand/50">Our Operating Principles</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Data Over Hype",
              desc: "We don&apos;t sell coaching or &apos;mindset.&apos; We sell raw infrastructure. Actionable intelligence that leads to LOIs."
            },
            {
              title: "Proprietary First",
              desc: "If a deal is public, it&apos;s too late. We focus exclusively on the signals that lead to proprietary, off-market conversations."
            },
            {
              title: "Velocity is Key",
              desc: "Our goal is to shave 6-12 months off your search timeline. We provide the tools to let you move at institutional speed."
            }
          ].map((principle, i) => (
            <div key={i} className="space-y-4 border-t border-white/10 pt-6">
              <h3 className="text-lg font-black text-accent">{principle.title}</h3>
              <p className="text-sm leading-relaxed text-sand/60">{principle.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section py-20">
        <div className="space-y-8 rounded-[3rem] border border-white/5 bg-gradient-to-br from-midnight to-charcoal p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black tracking-tighter text-sand md:text-6xl">
            Stop searching. <br />
            <span className="text-accent">Start acquiring.</span>
          </h2>
          <p className="mx-auto max-w-xl text-sand/60">
            Holdry is the engine for the next generation of essential service owners. 
            Pick your tier and get immediate access to the workspace.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/pricing" className="btn-primary px-10 py-4 font-bold">
              View the Platform
            </Link>
            <Link href="/newsletter" className="btn-secondary px-10 py-4 font-bold border-white/10">
              Read the Manifesto
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
