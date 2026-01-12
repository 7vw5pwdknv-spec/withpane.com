import Link from "next/link";

const portfolioHighlights = [
  {
    name: "Platform Companies",
    description: "Core operating businesses that anchor each sector and provide shared infrastructure.",
    points: ["Majority ownership", "Dedicated leadership", "Shared services"]
  },
  {
    name: "Growth Partnerships",
    description: "Minority or structured investments that help founders accelerate with the right support.",
    points: ["Flexible capital", "Strategic guidance", "Aligned governance"]
  },
  {
    name: "Long-Term Holds",
    description: "Cash-generative businesses held permanently with operational excellence focus.",
    points: ["Stable cash flow", "Low leverage", "Durable demand"]
  }
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pb-20">
      <section className="section grid gap-10 pt-16 md:grid-cols-2 md:items-start lg:pt-24">
        <div className="space-y-6">
          <p className="text-sm font-black uppercase tracking-[0.4em] text-sand/50">Portfolio</p>
          <h1 className="text-4xl font-extrabold tracking-tighter text-sand md:text-6xl">
            A diversified, durable portfolio
          </h1>
          <p className="max-w-xl text-lg text-sand/70 leading-relaxed">
            Holdry invests across essential industries with a focus on stability, cash flow, and operator alignment.
            Individual company details are confidential.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/partner" className="btn-primary px-8 py-3 font-bold">
              Share an Opportunity
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] bg-midnight/60 border border-white/10 p-8 md:p-10">
          <h3 className="text-xl font-bold text-sand mb-4">Portfolio Mix</h3>
          <p className="text-sand/70 leading-relaxed text-sm">
            We maintain a balanced mix of platform companies, growth partnerships, and long-term holdings. Each investment
            is evaluated for resilience, leadership quality, and the ability to compound over time.
          </p>
          <div className="mt-6 grid gap-3 text-xs text-sand/50">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span>Sector Exposure</span>
              <span>Confidential</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span>Ownership Structures</span>
              <span>Flexible</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Hold Period</span>
              <span>Permanent</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          {portfolioHighlights.map((tier) => (
            <div key={tier.name} className="relative flex flex-col rounded-[2rem] border border-white/10 bg-midnight/50 p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-sand">{tier.name}</h3>
                <p className="mt-4 text-sm text-sand/60 leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4">
                  {tier.points.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-sand/80">
                      <span className="mt-1 text-sand/60">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/partner"
                className="mt-10 w-full rounded-xl py-4 text-center font-bold transition-all bg-white/10 text-sand hover:bg-white/20"
              >
                Discuss Fit
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="section pt-10">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-midnight/80 to-charcoal/40 border border-white/10 p-12 text-center">
          <h2 className="text-3xl font-bold text-sand mb-4">Confidential by design</h2>
          <p className="text-sand/60 max-w-xl mx-auto mb-8">
            We share company-specific information with serious operators and partners under confidentiality. Reach out to
            learn more about our portfolio philosophy.
          </p>
          <Link
            href="/partner"
            className="btn-secondary px-10 py-4 font-bold border-white/30 text-sand hover:bg-white/5"
          >
            Contact Holdry
          </Link>
        </div>
      </section>
    </div>
  );
}
