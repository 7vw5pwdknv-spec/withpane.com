import Link from "next/link";

export default function EnterprisePage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="section pt-16 lg:pt-24 text-center">
        <div className="mx-auto max-w-4xl space-y-8">
          <p className="text-sm font-black uppercase tracking-[0.4em] text-accent">
            Institutional Infrastructure
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tighter text-sand md:text-7xl">
            Scale Your Fund with <br />
            <span className="text-accent">Proprietary Intelligence.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-sand/80 md:text-xl">
            White-glove data solutions for search funds, independent sponsors, and family offices 
            requiring high-volume, off-market deal flow across multiple geographies.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { 
              title: "Unlimited Scope", 
              desc: "10,000+ proprietary leads across unlimited geographies. No data caps, no restrictions." 
            },
            { 
              title: "Human Verification", 
              desc: "Deep enrichment backed by human VA verification to ensure 100% owner accuracy." 
            },
            { 
              title: "Priority Access", 
              desc: "Receive 'Hot Contact' early access to seller-initiated leads before they hit the general platform." 
            }
          ].map((benefit, i) => (
            <div key={i} className="card border border-white/5 bg-midnight/40 p-8 space-y-4">
              <h3 className="text-lg font-bold text-accent">{benefit.title}</h3>
              <p className="text-sm text-sand/60 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Intake Section */}
      <section className="section py-10">
        <div className="mx-auto max-w-3xl rounded-[2.5rem] border border-accent/20 bg-accent/5 p-8 md:p-16 shadow-2xl">
          <div className="mb-10 text-center space-y-4">
            <h2 className="text-3xl font-black tracking-tight text-sand">Schedule Your Consultation</h2>
            <p className="text-sand/60">
              Tell us a bit about your organization to help us prepare for our strategy session.
            </p>
          </div>

          <form className="grid gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-sand/40 ml-1">Organization Name</label>
                <input type="text" placeholder="e.g. Blue Chip Search Fund" className="w-full rounded-xl border border-white/10 bg-midnight/50 px-5 py-4 text-sand outline-none focus:border-accent/50" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-sand/40 ml-1">Primary Geography</label>
                <input type="text" placeholder="e.g. National / Southeast" className="w-full rounded-xl border border-white/10 bg-midnight/50 px-5 py-4 text-sand outline-none focus:border-accent/50" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-sand/40 ml-1">Team Size / AUM Bucket</label>
              <select className="w-auto rounded-xl border border-white/10 bg-midnight px-5 py-4 text-sand outline-none focus:border-accent/50 appearance-none">
                <option>Independent Sponsor</option>
                <option>Traditional Search Fund ($1M - $5M raised)</option>
                <option>Institutional Fund ($5M+ raised)</option>
                <option>Family Office</option>
              </select>
            </div>

            <div className="pt-6 text-center">
              <Link 
                href="mailto:noah@holdry.com?subject=Enterprise Consultation Inquiry" 
                className="btn-primary flex w-full justify-center py-5 text-lg font-bold shadow-xl shadow-accent/20"
              >
                Send Inquiry to Noah →
              </Link>
              <p className="mt-4 text-center text-xs text-sand/40 font-medium italic">
                This will generate an email draft to Noah at Holdry.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Integration Value */}
      <section className="section py-16 text-center">
        <h3 className="text-xl font-bold text-sand mb-6">Custom Integrations Available</h3>
        <div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale">
          <span className="font-bold tracking-tighter text-2xl text-sand">SALESFORCE</span>
          <span className="font-bold tracking-tighter text-2xl text-sand">HUBSPOT</span>
          <span className="font-bold tracking-tighter text-2xl text-sand">CLICKUP</span>
          <span className="font-bold tracking-tighter text-2xl text-sand">AIRTABLE</span>
        </div>
      </section>
    </div>
  );
}
