import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";

export const metadata: Metadata = {
  title: "Regional VP Opportunity | HOLDRY",
  description: "Convert your time and talent into permanent equity ownership with HOLDRY."
};

const receiveItems = [
  "Curated acquisition targets in your territory",
  "Due diligence and deal support for qualified opportunities",
  "Financing guidance and lender relationships",
  "Operational playbooks post-acquisition",
  "Back-office infrastructure (CRM, tracking, support)"
];

const askItems = [
  "Consistent prospecting activity — part-time to start",
  "Willingness to operate the business when an acquisition closes",
  "Alignment with HOLDRY standards and process",
  "Long-term mindset focused on wealth building"
];

const profile = [
  "High business acumen and interpersonal skills",
  "Comfortable with direct outreach",
  "Seeking equity ownership, not just income",
  "Patient, disciplined, long-term oriented"
];

export default function RegionalVPPage() {
  return (
    <div>
      <Hero
        eyebrow="For Operators"
        title="The Regional VP Opportunity"
        description="Convert your time and talent into permanent equity ownership."
        cta={{ href: "/contact", label: "Apply Now" }}
        secondaryCta={{ href: "/contact", label: "Talk with us" }}
      >
        <p className="text-sand/80">
          HOLDRY provides intelligence, capital access, and infrastructure. You provide execution — prospecting,
          relationships, and disciplined operations.
        </p>
      </Hero>

      <section className="section space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent/90">The Opportunity</p>
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon={<div className="h-3 w-3 rounded-full bg-accent" />}
            title="Intelligence"
            description="Proprietary market intelligence and targeted lists to open conversations that matter."
          />
          <FeatureCard
            icon={<div className="h-3 w-3 rounded-full bg-accent" />}
            title="Capital"
            description="Structured access to capital so qualified opportunities move quickly to closing."
          />
          <FeatureCard
            icon={<div className="h-3 w-3 rounded-full bg-accent" />}
            title="Infrastructure"
            description="Playbooks, systems, and back-office support that let you stay focused on high-value work."
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
        title="Ready to explore?"
        description="Share your background and territory focus. We respond quickly and discreetly."
        cta={{ href: "/contact", label: "Apply Now" }}
      />

      <section className="section pb-20">
        <div className="card flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-accent/80">Model</p>
            <h3 className="text-2xl font-semibold text-sand">Execution with aligned ownership</h3>
            <p className="text-sand/75">
              HOLDRY wins when you win. Equity in the businesses you acquire and operate — not a salary.
            </p>
          </div>
          <Link href="/contact" className="btn-secondary">
            Discuss fit
          </Link>
        </div>
      </section>
    </div>
  );
}
