import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";

export const metadata: Metadata = {
  title: "About HOLDRY",
  description: "HOLDRY builds ownership in essential service businesses through intelligence, capital, and disciplined execution."
};

const thesisPoints = [
  "Essential service industries remain highly fragmented",
  "Millions of owner-operated businesses will change hands in the next decade",
  "Most acquisition approaches fail due to poor sourcing, misaligned incentives, and capital constraints",
  "HOLDRY exists to solve these problems through superior intelligence, aligned partnerships, and disciplined execution"
];

const approachPoints = [
  "We deploy Regional Vice Presidents into carefully selected markets",
  "We provide proprietary deal flow, capital access, and operational support",
  "We build permanent ownership, not quick flips",
  "We win when our partners win"
];

export default function AboutPage() {
  return (
    <div>
      <Hero
        eyebrow="About"
        title="About HOLDRY"
        description="A private acquisition platform built for disciplined, long-term ownership in essential services."
      >
        <p className="text-sand/80">
          Founded with a long-term view, HOLDRY partners with operators who combine market savvy with operational rigor. We
          are selective because we are aligned for the duration.
        </p>
      </Hero>

      <section className="section grid gap-6 md:grid-cols-2">
        <div className="card space-y-4">
          <h3 className="text-xl font-semibold text-sand">The Thesis</h3>
          <ul className="space-y-3 text-sand/75">
            {thesisPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card space-y-4">
          <h3 className="text-xl font-semibold text-sand">The Approach</h3>
          <ul className="space-y-3 text-sand/75">
            {approachPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section pb-16">
        <div className="card space-y-4">
          <h3 className="text-xl font-semibold text-sand">Founder</h3>
          <p className="text-sand/75">
            Founded by seasoned operators, HOLDRY brings together expertise in capital markets, M&A sourcing, and
            multi-location operations with a long-term vision for building ownership in essential businesses.
          </p>
        </div>
      </section>

      <CTASection
        title="Connect with HOLDRY"
        description="Whether you are evaluating an operator track or considering a sale, we are intentional about every conversation."
        cta={{ href: "/contact", label: "Start the conversation" }}
        subtle
      />
    </div>
  );
}
