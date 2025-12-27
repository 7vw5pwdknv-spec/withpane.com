import type { Metadata } from "next";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";

export const metadata: Metadata = {
  title: "Sell to HOLDRY | Essential Service Acquisitions",
  description: "We acquire and grow essential service businesses with respect for what you have built."
};

const industries = [
  "Landscaping & Lawn Care",
  "Pest Control",
  "HVAC Services",
  "Janitorial & Cleaning",
  "Security & Alarm",
  "Pool Services",
  "Related essential services"
];

const expectations = [
  "Confidential initial conversation",
  "Fair, straightforward valuation",
  "Flexible deal structures",
  "Smooth transition support"
];

const SELLER_FORMSPREE_ENDPOINT = "https://formspree.io/f/mnnqqzap";

export default function SellersPage() {
  return (
    <div>
      <Hero
        eyebrow="For Sellers"
        title="Considering an Exit?"
        description="We acquire and grow essential service businesses with respect for what you have built."
        cta={{ href: "#sell", label: "Start a confidential conversation" }}
      >
        <p className="text-sand/80">
          We buy to hold and grow, not to flip. We preserve what works — your team, your customers, your reputation.
        </p>
      </Hero>

      <section className="section space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent/90">Our Approach</p>
        <div className="grid gap-6 md:grid-cols-2">
          <FeatureCard
            icon={<div className="h-3 w-3 rounded-full bg-accent" />}
            title="Long-term ownership"
            description="We buy to hold. We invest for durable cash flow and market leadership, not quick flips."
          />
          <FeatureCard
            icon={<div className="h-3 w-3 rounded-full bg-accent" />}
            title="Respect for legacy"
            description="We preserve what works — your people, your customers, your reputation — while modernizing thoughtfully."
          />
          <FeatureCard
            icon={<div className="h-3 w-3 rounded-full bg-accent" />}
            title="Flexible structures"
            description="We structure deals that work for you, including seller financing and flexible transition timelines."
          />
          <FeatureCard
            icon={<div className="h-3 w-3 rounded-full bg-accent" />}
            title="Discreet execution"
            description="We move with discretion and professionalism to protect relationships and continuity."
          />
        </div>
      </section>

      <section className="section grid gap-6 md:grid-cols-2">
        <div className="card space-y-4">
          <h3 className="text-xl font-semibold text-sand">Industries We Acquire</h3>
          <ul className="space-y-3 text-sand/75">
            {industries.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card space-y-4">
          <h3 className="text-xl font-semibold text-sand">What to Expect</h3>
          <ul className="space-y-3 text-sand/75">
            {expectations.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section pb-20" id="sell">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card space-y-4">
            <h3 className="text-xl font-semibold text-sand">Start a confidential conversation</h3>
            <p className="text-sand/75">
              Share as much as you’re comfortable sharing. We typically respond within two business days.
            </p>

            <form action={SELLER_FORMSPREE_ENDPOINT} method="POST" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  name="name"
                  placeholder="Name"
                  required
                  className="rounded-lg border border-white/10 bg-charcoal/70 px-3 py-3 text-sm text-sand placeholder:text-sand/40 focus:border-accent focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="rounded-lg border border-white/10 bg-charcoal/70 px-3 py-3 text-sm text-sand placeholder:text-sand/40 focus:border-accent focus:outline-none"
                />
                <input
                  name="phone"
                  placeholder="Phone"
                  className="rounded-lg border border-white/10 bg-charcoal/70 px-3 py-3 text-sm text-sand placeholder:text-sand/40 focus:border-accent focus:outline-none"
                />
                <input
                  name="location"
                  placeholder="Location"
                  className="rounded-lg border border-white/10 bg-charcoal/70 px-3 py-3 text-sm text-sand placeholder:text-sand/40 focus:border-accent focus:outline-none"
                />
              </div>

              <input
                name="businessType"
                placeholder="Business Type"
                className="w-full rounded-lg border border-white/10 bg-charcoal/70 px-3 py-3 text-sm text-sand placeholder:text-sand/40 focus:border-accent focus:outline-none"
              />

              <textarea
                name="description"
                rows={4}
                placeholder="Brief description"
                className="w-full rounded-lg border border-white/10 bg-charcoal/70 px-3 py-3 text-sm text-sand placeholder:text-sand/40 focus:border-accent focus:outline-none"
              />

              <button type="submit" className="btn-primary w-full justify-center md:w-auto">
                Send confidentially
              </button>

              <p className="text-xs text-sand/60">We keep every conversation discreet and aligned with your timeline.</p>
            </form>
          </div>

          <div className="card space-y-4">
            <h3 className="text-xl font-semibold text-sand">How we work</h3>
            <p className="text-sand/75">
              We prioritize discretion, clarity, and follow-through. If there’s a fit, we move quickly and professionally.
            </p>
            <div className="space-y-2 text-sm text-sand/75">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>Confidential initial review</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>Straightforward valuation conversation</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>Flexible structures and smooth transition support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
