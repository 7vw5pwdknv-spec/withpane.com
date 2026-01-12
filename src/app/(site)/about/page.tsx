import Link from "next/link";
import { Hero } from "@/components/Hero";

export default function AboutPage() {
  return (
    <div className="min-h-screen pb-20">
      <Hero
        eyebrow="Company"
        title="Holdry is a long-term parent company"
        description="We acquire and steward businesses with durable demand, strong operators, and a commitment to thoughtful growth. Our model centers on continuity, not exits."
        cta={{ href: "/partner", label: "Connect With Us" }}
        secondaryCta={{ href: "/pricing", label: "Portfolio Overview" }}
      >
        <div className="space-y-6">
          <p className="text-xl font-bold text-sand">Our Mission</p>
          <p className="text-sand/70 leading-relaxed">
            Holdry exists to be a stable home for great businesses. We invest with a permanent capital mindset and provide
            operational support so companies can thrive across generations.
          </p>
          <p className="text-sand/70 leading-relaxed italic">
            &quot;We prioritize stewardship, continuity, and the people who keep these businesses running.&quot;
          </p>
        </div>
      </Hero>

      <section className="section py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card space-y-6 border border-white/10 bg-midnight/40 p-10">
            <h2 className="text-2xl font-black uppercase tracking-tight text-sand">The Opportunity</h2>
            <p className="text-sand/75 leading-relaxed">
              Many founder-led businesses seek a buyer who will protect their legacy. Holdry offers a quiet, aligned
              transition with long-term ownership and ongoing investment.
            </p>
            <div className="h-px w-full bg-white/10" />
            <p className="text-sand/75 leading-relaxed">
              We value stable cash flows, loyal customers, and the people who deliver day-to-day excellence.
            </p>
          </div>

          <div className="card space-y-6 border border-white/10 bg-midnight/60 p-10">
            <h2 className="text-2xl font-black uppercase tracking-tight text-sand">The Holdry Approach</h2>
            <p className="text-sand/75 leading-relaxed">
              We partner with operators to strengthen margins, modernize systems, and scale responsibly. Decisions are
              measured in years, not quarters.
            </p>
            <ul className="space-y-4 pt-2">
              {[
                { label: "Permanent ownership", desc: "We do not rely on a fixed exit timeline." },
                { label: "Operator-first", desc: "We back management teams with real support." },
                { label: "Responsible growth", desc: "We invest in people, systems, and resilience." },
                { label: "Transparent governance", desc: "We align incentives with long-term value." }
              ].map((item) => (
                <li key={item.label} className="flex gap-4">
                  <span className="text-sand/60 font-bold">•</span>
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

      <section className="section space-y-12 py-10">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-black tracking-tighter text-sand md:text-5xl">Values that endure.</h2>
          <p className="text-xs font-bold uppercase tracking-widest text-sand/50">How we show up</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Stewardship",
              desc: "We treat every business as if it were our own long-term legacy."
            },
            {
              title: "Clarity",
              desc: "We communicate directly with leadership teams and act with transparency."
            },
            {
              title: "Partnership",
              desc: "We share responsibility with operators, aligning outcomes across stakeholders."
            }
          ].map((principle) => (
            <div key={principle.title} className="space-y-4 border-t border-white/10 pt-6">
              <h3 className="text-lg font-black text-sand">{principle.title}</h3>
              <p className="text-sm leading-relaxed text-sand/60">{principle.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section py-20">
        <div className="space-y-8 rounded-[3rem] border border-white/10 bg-gradient-to-br from-midnight to-charcoal p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black tracking-tighter text-sand md:text-6xl">
            A stable home for great businesses.
          </h2>
          <p className="mx-auto max-w-xl text-sand/60">
            If you are exploring a transition or looking for a long-term partner, we would welcome a confidential
            conversation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/partner" className="btn-primary px-10 py-4 font-bold">
              Speak with Holdry
            </Link>
            <Link href="/pricing" className="btn-secondary px-10 py-4 font-bold border-white/20">
              Portfolio Overview
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
