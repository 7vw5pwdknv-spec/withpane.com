import Link from "next/link";

const tiers = [
  {
    name: "Explorer",
    price: "$499",
    description: "Perfect for first-time searchers testing a specific industry or geography.",
    features: [
      "2,000 curated leads",
      "1 geography focus",
      "Owner name + property status",
      "Revenue estimates (PPP data)",
      "ClickUp workspace access",
      "Community chat access",
      "25 AI deep enrichments / mo",
      "Email support",
      "14-day money-back guarantee"
    ],
    cta: "Start Free Trial",
    href: "/checkout/explorer",
    mostPopular: false
  },
  {
    name: "Searcher",
    price: "$999",
    description: "For serious operators with capital raised who need to move from search to LOI.",
    features: [
      "5,000 curated leads",
      "Up to 2 geographies",
      "Property assessed values",
      "Soft data (Reviews, Social signals)",
      "AI agent with lender insights",
      "SBA database (893k loans)",
      "75 AI deep enrichments / mo",
      "Priority email + chat support",
      "Monthly group office hours"
    ],
    cta: "Start Free Trial",
    href: "/checkout/searcher",
    mostPopular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "White-glove data infrastructure for search funds and independent sponsors.",
    features: [
      "10,000+ proprietary leads",
      "Unlimited geographies",
      "White-glove onboarding",
      "Dedicated account manager",
      "Unlimited AI enrichments",
      "Human VA verification",
      "&quot;Hot contact&quot; early access",
      "Custom CRM integrations",
      "Full API access"
    ],
    cta: "Book a Call",
    href: "/demo",
    mostPopular: false
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header Section */}
      <section className="section grid gap-10 pt-16 md:grid-cols-2 md:items-start lg:pt-24">
        <div className="space-y-6">
          <p className="text-sm font-black uppercase tracking-[0.4em] text-accent">Pricing</p>
          <h1 className="text-4xl font-extrabold tracking-tighter text-sand md:text-6xl">
            The Three-Tier Model
          </h1>
          <p className="max-w-xl text-lg text-sand/70 leading-relaxed">
            Each tier is designed to meet you where you are in your acquisition journey—from 
            initial industry research to high-volume proprietary deal flow.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/newsletter" className="btn-primary px-8 py-3 font-bold">
              Join Newsletter
            </Link>
          </div>
        </div>

        {/* Updated Orange Info Box */}
        <div className="rounded-[2rem] bg-accent/10 border border-accent/20 p-8 md:p-10">
          <h3 className="text-xl font-bold text-accent mb-4">Choose Your Intensity</h3>
          <p className="text-sand/80 leading-relaxed space-y-4 text-sm">
            Whether you are an <strong>Explorer</strong> mapping out your first territory, 
            a <strong>Searcher</strong> ready to dominate a region with SBA-backed intelligence, 
            or an <strong>Enterprise</strong> fund requiring bespoke data pipelines, Holdry 
            provides the infrastructure to stop the cold-call grind.
          </p>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="section py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`relative flex flex-col rounded-[2rem] border p-8 transition-all duration-300 hover:translate-y-[-4px] ${
                tier.mostPopular 
                  ? "border-accent bg-midnight/60 shadow-2xl shadow-accent/10" 
                  : "border-white/5 bg-midnight/40 hover:border-white/10"
              }`}
            >
              {tier.mostPopular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-lg">
                  ⭐ Most Popular
                </span>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-sand">{tier.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-sand">{tier.price}</span>
                  {tier.price !== "Custom" && <span className="text-sand/40 text-sm font-medium">/mo</span>}
                </div>
                <p className="mt-4 text-sm text-sand/60 leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-sand/80">
                      <span className="mt-1 text-accent font-bold">✓</span>
                      <span dangerouslySetInnerHTML={{ __html: feature }} />
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href={tier.href}
                className={`mt-10 w-full rounded-xl py-4 text-center font-bold transition-all ${
                  tier.mostPopular 
                    ? "bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/20" 
                    : "bg-white/5 text-sand hover:bg-white/10 border border-white/10"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Wanna Talk? Card */}
      <section className="section pt-10">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-midnight/80 to-charcoal/40 border border-white/5 p-12 text-center">
          <h2 className="text-3xl font-bold text-sand mb-4">Wanna talk?</h2>
          <p className="text-sand/60 max-w-xl mx-auto mb-8">
            Have specific questions about our SBA database or how the ClickUp workspace 
            integrates with your current search? Let&apos;s clear it up.
          </p>
          <Link 
            href="/demo" 
            className="btn-secondary px-10 py-4 font-bold border-accent/40 text-accent hover:bg-accent/5"
          >
            Book a Calendly Appointment
          </Link>
          <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-sand/30">
            Chat with a representative of Holdry
          </p>
        </div>
      </section>
    </div>
  );
}
