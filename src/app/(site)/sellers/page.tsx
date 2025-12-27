import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
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

export default function SellersPage() {
  return (
    <div>
      <Hero
        eyebrow="For Sellers"
        title="Considering an Exit?"
        description="We acquire and grow essential service businesses with respect for what you have built."
        cta={{ href: "/contact", label: "Get in Touch" }}
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

      <CTASection
        title="Start a confidential conversation"
        description="We respond quickly and with discretion."
        cta={{ href: "/contact", label: "Get in Touch" }}
      />
    </div>
  );
}
