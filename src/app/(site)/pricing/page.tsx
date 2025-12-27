import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";

export const metadata: Metadata = {
  title: "Pricing | HOLDRY",
  description:
    "Choose the right path for your acquisition journey. Explorer for learning, Searcher for active acquisition, Partner for aligned ownership."
};

const tiers = [
  {
    name: "Explorer",
    price: "$49–99/mo",
    label: "Learn the landscape",
    description:
      "For curious future owners who want clarity, frameworks, and market context before committing to an active search.",
    highlights: [
      "Acquisition fundamentals & playbooks",
      "Industry primers and market landscapes",
      "Deal evaluation templates and checklists",
      "Weekly insights and acquisition guides"
    ],
    ctaPrimary: { href: "/contact#apply", label: "Join waitlist" },
    ctaSecondary: { href: "/contact", label: "Ask a question" },
    tone: "standard"
  },
  {
    name: "Searcher",
    price: "$199–499/mo",
    label: "The economic engine",
    description:
      "For active searchers who want focused support, tools, and guidance through sourcing, diligence, and closing.",
    highlights: [
      "Priority access to operator resources",
      "Deal screening frameworks & scoring",
      "Diligence support playbooks (SBA-ready)",
      "Financing guidance and lender context",
      "Structured weekly execution cadence"
    ],
    ctaPrimary: { href: "/contact#apply", label: "Join waitlist" },
    ctaSecondary: { href: "/contact", label: "Talk with us" },
    tone: "featured"
  },
  {
    name: "Partner",
    price: "$500–1,000/mo + equity",
    label: "Apply-only",
    description:
      "For high-capability operators seeking aligned capital and long-term ownership. Selection-based and performance-driven.",
    highlights: [
      "Upgrades from strong Searchers",
      "Direct support on sourcing and diligence",
      "Clear expectations & performance standards",
      "Aligned ownership economics",
      "Discretion-first relationship"
    ],
    ctaPrimary: { href: "/contact#apply", label: "Apply / request review" },
    ctaSecondary: { href: "/regional-vp", label: "View operator track" },
    tone: "premium"
  }
];

function TierCard({
  name,
  price,
  label,
  description,
  highlights,
  ctaPrimary,
  ctaSecondary,
  tone
}: (typeof tiers)[number]) {
  const isFeatured = tone === "featured";
  const isPremium = tone === "premium";

  return (
    <div className="relative">
      {(isFeatured || isPremium) && (
        <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-[linear-gradient(135deg,rgba(200,90,30,0.55),rgba(255,255,255,0.06),rgba(200,90,30,0.20))] opacity-90 blur-[0px]" />
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
                Recommended
              </span>
            )}
            {isPremium && (
              <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                Selective
              </span>
            )}
          </div>

          <p className="text-sm uppercase tracking-[0.2em] text-accent/90">{label}</p>

          <p className="text-3xl font-semibold text-sand">{price}</p>

          <p className="text-sand/75 leading-relaxed">{description}</p>
        </div>

        <div className="mt-6 space-y-3">
          <p className="text-sm font-semibold text-sand">Includes</p>
          <ul className="space-y-3 text-sm text-sand/75">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
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
        title="Choose the right path"
        description="Explorer is for learning. Searcher is for active acquisition. Partner is selective and aligned for ownership."
        cta={{ href: "/contact#apply", label: "Join waitlist" }}
        secondaryCta={{ href: "/contact", label: "Talk with us" }}
      >
        <div className="space-y-4 text-sand/80">
          <p>
            HOLDRY is built for disciplined operators. Most serious candidates start with <span className="font-semibold text-sand">Searcher</span>,
            then move into <span className="font-semibold text-sand">Partner</span> when fit is clear.
          </p>
          <p className="text-sm text-sand/70">
            Payments are not enabled yet — join the waitlist and we’ll share access details as tiers open.
          </p>
        </div>
      </Hero>

      <section className="section space-y-8">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-sand md:text-3xl">Plans</h2>
          <p className="max-w-3xl text-sand/75">
            We’re intentional about who we bring in. Explorer is self-serve. Searcher is guided. Partner is apply-only.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <TierCard key={tier.name} {...tier} />
          ))}
        </div>
      </section>

      <section className="section space-y-6">
        <div className="card space-y-4">
          <h3 className="text-xl font-semibold text-sand">Which plan should I choose?</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-sand">Choose Explorer if…</p>
              <p className="text-sm text-sand/75">
                You’re learning the process, want frameworks, and you’re not yet running a weekly sourcing cadence.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-sand">Choose Searcher if…</p>
              <p className="text-sm text-sand/75">
                You’re actively searching, evaluating opportunities, and want structured support through diligence and financing.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-sand">Choose Partner if…</p>
              <p className="text-sm text-sand/75">
                You’re ready to acquire and operate, want aligned capital support, and are comfortable with performance expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Join the waitlist"
        description="Tell us where you are in the journey and what you’re looking to acquire. We’ll follow up quickly and discreetly."
        cta={{ href: "/contact#apply", label: "Join waitlist" }}
      />
    </div>
  );
}
