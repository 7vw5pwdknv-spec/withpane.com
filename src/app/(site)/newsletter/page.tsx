import Link from "next/link";

export default function NewsletterPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="section pt-16 lg:pt-24">
        <div className="mx-auto max-w-3xl text-center space-y-8">
          <p className="text-sm font-black uppercase tracking-[0.4em] text-accent">
            Weekly Intelligence
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tighter text-sand md:text-6xl">
            Get One Buyable Business Breakdown Every Monday
          </h1>
          <p className="text-lg text-sand/80 md:text-xl leading-relaxed">
            See exactly what Holdry can do. Every week, we profile a proprietary off-market 
            opportunity with full financial analysis, sale-leaseback potential, and lender matches. 
            Free.
          </p>

          {/* Dual Action Zone */}
          <div className="flex flex-col items-center gap-6 pt-4">
            <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full rounded-xl border border-white/10 bg-midnight/50 px-5 py-4 text-sand outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50"
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap px-8 py-4 font-bold"
              >
                Subscribe Free
              </button>
            </form>
            <p className="text-xs text-sand/40 font-medium uppercase tracking-widest">
              No credit card. No fluff. Just data.
            </p>
            
            <div className="pt-4">
              <Link href="/pricing" className="text-sand/60 hover:text-accent transition-colors text-sm font-bold border-b border-sand/20 pb-1">
                Already know the vibes? View the Platform Pricing →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Prop Grid */}
      <section className="section py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Column 1: The Newsletter Value */}
          <div className="card space-y-6 border border-white/5 bg-midnight/40 p-10">
            <h2 className="text-2xl font-bold text-sand">The Deal Breakdown</h2>
            <ul className="space-y-4">
              {[
                { label: "Property ownership analysis", desc: "We identify if the real estate is a goldmine or a liability." },
                { label: "SBA Lender matches", desc: "Matches from our database of 893k historical loan records." },
                { label: "Zero-cash-down deal structures", desc: "Creative financing playbooks for low-equity injection." },
                { label: "Founder Notes", desc: "My raw thoughts on search, memes, and the industry news." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-accent">✓</span>
                  <div>
                    <p className="font-bold text-sand leading-none">{item.label}</p>
                    <p className="text-sm text-sand/60 mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: The Holdry Platform Value (The Upsell) */}
          <div className="card space-y-6 border border-accent/20 bg-accent/5 p-10">
            <h2 className="text-2xl font-bold text-sand">The Full Platform</h2>
            <p className="text-sand/70">
              The newsletter is a window. The platform is the engine. While the newsletter gives you 
              one deal, the platform gives you 5,000+ proprietary targets synced to your ClickUp 
              workspace.
            </p>
            <div className="space-y-4 pt-2">
              <div className="rounded-lg bg-midnight/60 p-4 border border-white/5">
                <p className="text-sm font-bold text-sand">The Data Edge</p>
                <p className="text-xs text-sand/50">Immediate access to owner-verified data and AI deep enrichment.</p>
              </div>
              <Link href="/pricing" className="btn-secondary w-full justify-center py-4 font-bold">
                Get Started with Holdry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Recent Issues */}
      <section className="section py-10">
        <div className="rounded-[2rem] border border-white/5 bg-midnight/30 p-12 text-center">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-sand/40 mb-8">
            Recent Issues in the Archive
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Week 4: $2.3M Phoenix HVAC", detail: "Owner Age 67 • $1.1M Property Included" },
              { title: "Week 3: $1.8M Austin Plumbing", detail: "Perfect Sale-Leaseback Candidate" },
              { title: "Week 2: $3.1M Denver Electrical", detail: "High-Margin Recurring Revenue Signal" }
            ].map((issue, i) => (
              <div key={i} className="rounded-xl bg-white/5 p-6 text-left border border-white/5 hover:border-accent/30 transition-colors">
                <p className="font-bold text-sand mb-1">{issue.title}</p>
                <p className="text-xs text-sand/40 font-medium">{issue.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Personal Note */}
      <section className="section py-16">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-block h-12 w-12 rounded-full bg-accent/20 p-2">
            <span className="text-2xl">✍️</span>
          </div>
          <h3 className="text-xl font-bold text-sand mb-4">A Note from the Founder</h3>
          <p className="text-sand/60 italic leading-relaxed">
            &quot;I built Holdry because I was tired of seeing searchers burn 200 hours a month on 
            BizBuySell garbage. Whether I&apos;m sharing a creative financing trick or addressing 
            the latest industry drama, this newsletter is where I stay connected to the search 
            community. I hope to see you in the inbox.&quot;
          </p>
        </div>
      </section>
    </div>
  );
}
