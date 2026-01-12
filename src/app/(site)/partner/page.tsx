import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact HOLDRY",
  description: "Reach out to Holdry to discuss business transitions, partnerships, or long-term collaboration."
};

const supportItems = [
  {
    title: "Confidential introductions",
    description: "Private conversations with owners evaluating a long-term transition."
  },
  {
    title: "Permanent capital",
    description: "Patient, flexible capital aligned to multi-decade ownership."
  },
  {
    title: "Succession planning",
    description: "Support leadership continuity and thoughtful ownership transitions."
  },
  {
    title: "Operational support",
    description: "Shared services across finance, analytics, and strategic planning."
  }
];

const partnerProfiles = [
  "Founder-led businesses considering a transition",
  "Management teams seeking a stable parent company",
  "Capital partners aligned with permanent ownership",
  "Advisors and intermediaries with qualified opportunities"
];

export default function PartnerPage() {
  return (
    <div>
      <Hero
        eyebrow="Contact"
        title="Connect with Holdry"
        description="We welcome conversations with operators, founders, and partners seeking a long-term home for enduring businesses."
        cta={{ href: "#contact", label: "Send a Message" }}
        secondaryCta={{ href: "/about", label: "Our Company" }}
      >
        <p className="text-sand/80">
          Holdry is a holding company built on trust, discretion, and long-term ownership. Every inquiry is handled
          personally and confidentially.
        </p>
      </Hero>

      <section className="section space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sand/50">How we can help</p>
        <div className="grid gap-6 md:grid-cols-3">
          {supportItems.map((item) => (
            <FeatureCard
              key={item.title}
              icon={<div className="h-3 w-3 rounded-full bg-sand/70" />}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="card space-y-4">
          <h3 className="text-xl font-semibold text-sand">Who we work with</h3>
          <div className="grid gap-3 md:grid-cols-2">
            {partnerProfiles.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sand/75">
                <span className="mt-1 h-2 w-2 rounded-full bg-sand/60" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Start a confidential conversation"
        description="Tell us about your business or partnership interest, and we will follow up promptly."
        cta={{ href: "#contact", label: "Contact Holdry" }}
      />

      <section className="section pb-20" id="contact">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <div className="card border border-white/10 bg-midnight/60">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand/50">Holdry HQ</p>
              <p className="mt-2 text-sand/75">
                We are a private holding company with a distributed team. Conversations are handled discreetly and with
                care.
              </p>
            </div>

            <ContactForm
              title="General inquiry"
              description="Share a few details and a member of the Holdry team will follow up."
            />
          </div>

          <div className="card space-y-4">
            <h3 className="text-xl font-semibold text-sand">What happens next</h3>
            <p className="text-sand/75">
              We review each submission within two business days. If there is alignment, we will schedule a confidential
              call to learn more.
            </p>
            <div className="space-y-2 text-sm text-sand/75">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sand/60" />
                <span>We keep all information private and confidential.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sand/60" />
                <span>We focus on long-term fit and alignment.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sand/60" />
                <span>We move with care, not urgency.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
