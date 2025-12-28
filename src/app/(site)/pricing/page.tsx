import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";

export const metadata: Metadata = {
  title: "Pricing | HOLDRY",
  description:
    "A three-tier model for disciplined acquisition. Explorer for self-serve learning, Searcher for active acquisition, Partner for aligned ownership."
};

const tiers = [
  {
    name: "Explorer",
    price: "$49.99/mo",
    label: "Self-serve access",
    description:
      "For curious future owners who want limited access to the platform and a clear path to learning the process.",
    highlights: ["Limited data access", "Self-serve tools", "No support"],
    ctaPrimary: { href: "/partner#apply", label: "Join waitlist" },
    ctaSecondary: { href: "/partner#apply", label: "Ask a question" },
    tone: "standard"
  },
  {
    name: "Searcher",
    price: "$249.99/mo",
    label: "Full access + execution support",
    description:
      "For active searchers who want full territory data, a workflow to stay organized, and tools to move faster with higher quality.",
    highlights: ["Full territory data", "CRM + pipeline tracking", "Enrichment tools", "Community access"],
    ctaPrimary: { href: "/partner#apply", label: "Request access" },
    ctaSecondary: { href: "/partner#apply", label: "Talk with us" },
    tone: "featured"
  },
  {
    name: "Partner",
    price: "Monthly pricing by request",
    label: "Everything + aligned ownership",
    description:
      "For high-capability operators seeking mentorship, deal support, and capital access — structured for long-term ownership.",
    highlights: ["Everything in Searcher", "Mentorship + support", "Deal support", "Capital access"],
    meta: ["HOLDRY Equity: 19.9%", "Volume target: 10–50 partners"],
    ctaPrimary: { href: "/partner#apply", label: "Apply / request review" },
    ctaSecondary: { href: "/partner", label: "Learn more" },
    tone: "premium"
  }
];

function TierCard({
  name,
  price,
  label,
  description,
  highlights,
  meta,
  ctaPrimary,
  ctaSecondary,
  tone
}: (typeof tiers)[number]) {
  const isFeatured = tone === "featured";
  const isPremium = tone === "premium";

  return (
    <div className="relative">
      {(isFeatured || isPremium) && (
        <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-[linear-gradient(135deg,rgba(200,90,30,0.55),rgba(255,255,255,0.06),rgba(200,90,30,0.20))] opacity-90" />
      )}

      <div
        className={`relative card h-full rounded-3xl border border-white/10 p-8 ${
          isFeatured ? "bg-midnight/80" : isPremium ? "bg-midnight/75" : "bg-midnight/60"
        }`}
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-2xl font-semibold text-sand">{name}</h3>

            {isFeatured && (
              <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                Most popular
              </span>
            )}

            {isPremium && (
              <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                Selective
              </span>
            )}
          </div>

          <p className="text-sm uppercase tracking-[0.2em] text-accent/90">{label}</p>

          <div className="space-y-1">
            <p className="text-3xl font-semibold text-sand">{price}</p>
            {isPremium && (
              <p className="text-xs text-sand/60">
                Partner pricing is set case-by-case based on fit, scope, and market focus.
              </p>
            )}
          </div>

          <p className="text-sand/75 leading-relaxed">{description}</p>
        </div>

        <div className="mt-6 space-y-3">
          <p className="text-sm font-semibold text-sand">What you get</p>
          <ul className="space-y-3 text-sm text-sand/75">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {meta?.length ? (
            <div className="mt-5 rounded-2xl border border-white/10 bg-charcoal/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent/80">Partner notes</p>
              <div className="mt-3 space-y-2 text-sm text-sand/70">
                {meta.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href={ctaPrimary.href} className="btn-primary">
            {ctaPrimary.label}
          </Link>
          <Link href={ctaSecondary.href} className="btn-secondary">
            {ctaSecondary.label}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <div>
      <Hero
        eyebrow="Pricing"
        title="The three-tier model"
        description="Each tier serves a different customer, captures different value, and feeds the next."
        cta={{ href: "/partner#apply", label: "Join waitlist" }}
        secondaryCta={{ href: "/partner", label: "Learn about Partner" }}
      >
        <div className="space-y-4 text-sand/80">
          <p>
            Start with <span className="font-semibold text-sand">Explorer</span> to learn the landscape. Move into{" "}
            <span className="font-semibold text-sand">Searcher</span> when you’re actively sourcing.{" "}
            <span className="font-semibold text-sand">Partner</span> is selective and designed for aligned ownership.
          </p>
          <p className="text-sm text-sand/70">
            Payments aren’t enabled yet — join the waitlist and we’ll share access details as tiers open.
          </p>
        </div>
      </Hero>

      <section className="section space-y-8">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-sand md:text-3xl">Plans</h2>
          <p className="max-w-3xl text-sand/75">
            Explorer is self-serve. Searcher is full access for active acquisition. Partner is selective and includes
            capital access and deeper support.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <TierCard key={tier.name} {...tier} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="card space-y-4">
          <h3 className="text-xl font-semibold text-sand">Recommended starting point</h3>
          <p className="text-sand/75">
            If you’re running an active sourcing cadence (weekly outreach, calls, and follow-up), start with{" "}
            <span className="font-semibold text-sand">Searcher</span>. If you’re still learning and calibrating your thesis,
            start with <span className="font-semibold text-sand">Explorer</span>.
          </p>
        </div>
      </section>

      <CTASection
        title="Join the waitlist"
        description="Tell us where you are in the journey and what you’re looking to acquire. We’ll follow up quickly and discreetly."
        cta={{ href: "/partner#apply", label: "Join waitlist" }}
      />
    </div>
  );
}
