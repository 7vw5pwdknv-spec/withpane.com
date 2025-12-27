import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Partner with HOLDRY",
  description:
    "HOLDRY-powered search for disciplined operators. Apply to partner with HOLDRY for aligned ownership in essential service acquisitions."
};

const receiveItems = [
  "HOLDRY-powered sourcing intelligence in targeted markets",
  "Deal screening frameworks and diligence support",
  "Financing guidance and lender context for qualified opportunities",
  "Operational playbooks post-acquisition",
  "Back-office infrastructure (CRM, tracking, support)"
];

const askItems = [
  "Consistent sourcing/prospecting activity (part-time to start is fine)",
  "Willingness to operate the business when an acquisition closes",
  "Alignment with HOLDRY standards, discretion, and process",
  "Long-term mindset focused on ownership and compounding"
];

const profile = [
  "High business acumen and strong interpersonal skills",
  "Comfortable with direct outreach and follow-through",
  "Seeking equity ownership, not just income",
  "Patient, disciplined, long-term oriented"
];

export default function PartnerPage() {
  return (
    <div>
      <Hero
        eyebrow="For Operators"
        title="Partner with HOLDRY"
        description="A disciplined, ownership-first path to acquiring essential service businesses."
        cta={{ href: "#apply", label: "Apply" }}
        secondaryCta={{ href: "/pricing", label: "View pricing" }}
      >
        <p className="text-sand/80">
          HOLDRY provides intelligence, capital access, and infrastructure. You provide execution — sourcing, relationships,
          and disciplined operations. The outcome is aligned ownership.
        </p>
      </Hero>

      <section className="section space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent/90">The Model</p>
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon={<div className="h-3 w-3 rounded-full bg-accent" />}
            title="Intelligence"
            description="Targeted lists and market intelligence to open conversations that matter."
          />
          <FeatureCard
            icon={<div className="h-3 w-3 rounded-full bg-accent" />}
            title="Capital"
            description="Aligned capital pathways so qualified opportunities move quickly to closing."
          />
          <FeatureCard
            icon={<div className="h-3 w-3 rounded-full bg-accent" />}
            title="Infrastructure"
            description="Playbooks and support systems so you stay focused on high-value work."
          />
        </div>
      </section>

      <section className="section grid gap-6 md:grid-cols-2">
        <div className="card space-y-4">
          <h3 className="text-xl font-semibold text-sand">What You Receive</h3>
          <ul className="space-y-3 text-sand/75">
            {receiveItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card space-y-4">
          <h3 className="text-xl font-semibold text-sand">What We Ask</h3>
          <ul className="space-y-3 text-sand/75">
            {askItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="card space-y-4">
          <h3 className="text-xl font-semibold text-sand">Who This Is For</h3>
          <div className="grid gap-3 md:grid-cols-2">
            {profile.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sand/75">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Apply to partner with HOLDRY"
        description="Share your background and what you’re looking to acquire. We respond quickly and discreetly."
        cta={{ href: "#apply", label: "Apply" }}
      />

      <section className="section pb-20" id="apply">
        <div className="grid gap-8 md:grid-cols-2">
          <ContactForm
            title="Partner / HOLDRY-powered search"
            description="Tell us where you are in the journey, what you want to acquire, and where you want to operate."
          />

          <div className="card space-y-4">
            <h3 className="text-xl font-semibold text-sand">What happens next</h3>
            <p className="text-sand/75">
              If there’s a fit, we’ll schedule a short call and align on expectations, target industries, and execution cadence.
              We keep every conversation discreet.
            </p>
            <div className="space-y-2 text-sm text-sand/75">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>We review submissions quickly (typically within two business days).</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>Strong candidates may be invited into a structured next step.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>Partner is selective; we optimize for long-term alignment.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
