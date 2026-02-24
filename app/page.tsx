import Link from "next/link";
import { GlassCard } from "./components/GlassCard";
import { AnimatedSection } from "./components/AnimatedSection";
import { CommandBarMock } from "./components/CommandBarMock";

/* ─── Data ─── */

const features = [
  {
    title: "Turn goals into plans",
    desc: "Describe what you want done in plain English. Pane breaks it into projects, tasks, and dependencies automatically.",
    span: true,
    visual: (
      <div className="mt-5 rounded-xl bg-white/[0.03] border border-border p-4 space-y-2.5 text-xs font-mono">
        <div className="text-text-muted mb-3 text-[11px] uppercase tracking-wider">
          Launch Product Redesign
        </div>
        {[
          { done: true, text: "Draft press release" },
          { done: true, text: "Schedule social media posts" },
          { done: false, text: "Review landing page copy" },
          { done: false, text: "Set up analytics dashboard" },
        ].map((t) => (
          <div key={t.text} className="flex items-center gap-2.5">
            <div
              className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ${
                t.done
                  ? "bg-accent/20 text-accent"
                  : "border border-border"
              }`}
            >
              {t.done && (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2.5 5l2 2 3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <span className={t.done ? "text-text-subtle line-through" : "text-text-muted"}>
              {t.text}
            </span>
          </div>
        ))}
        <div className="pt-2 flex items-center gap-3">
          <div className="flex-1 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
            <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-accent to-accent-3" />
          </div>
          <span className="text-text-subtle text-[11px]">50%</span>
        </div>
      </div>
    ),
  },
  {
    title: "One workspace, not six tabs",
    desc: "Chat, tasks, docs, timeline — all in a single view. Stop context-switching between scattered tools.",
    span: false,
    visual: (
      <div className="mt-4 flex gap-1.5">
        {["Chat", "Tasks", "Notes"].map((tab, i) => (
          <div
            key={tab}
            className={`px-3 py-1 rounded-md text-[11px] font-medium ${
              i === 0
                ? "bg-accent/15 text-accent border border-accent/30"
                : "bg-white/[0.04] text-text-subtle border border-transparent"
            }`}
          >
            {tab}
          </div>
        ))}
        <div className="px-2 py-1 rounded-md text-[11px] text-text-subtle bg-white/[0.04]">
          &middot;&middot;&middot;
        </div>
      </div>
    ),
  },
  {
    title: "Real actions, your approval",
    desc: "Create calendar events, reminders, and notes on your Mac. Every action goes through you first.",
    span: false,
    visual: (
      <div className="mt-4 rounded-lg bg-white/[0.03] border border-border p-3 flex items-center gap-3">
        <div
          className="w-7 h-7 rounded-md flex items-center justify-center shrink-0"
          style={{ background: "linear-gradient(135deg, #FF6363, #E04545)" }}
        >
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <rect x="2" y="3" width="12" height="11" rx="1.5" stroke="white" strokeWidth="1.5" />
            <path d="M2 6.5h12" stroke="white" strokeWidth="1.2" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[11px] font-semibold text-text">Add meeting</div>
          <div className="text-[10px] text-text-subtle">Thu 2pm — Design review</div>
        </div>
        <div className="flex gap-1.5">
          <div className="w-6 h-6 rounded-md bg-accent/15 text-accent flex items-center justify-center cursor-pointer">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 6l2.5 2.5L9 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="w-6 h-6 rounded-md bg-white/[0.06] text-text-subtle flex items-center justify-center cursor-pointer">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    ),
  },
];

const audiences = [
  {
    title: "Product managers",
    desc: "Stop copying action items from meeting notes into five different apps.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 7h6M7 10h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Founders",
    desc: "Juggle follow-ups, scheduling, and execution between calls while you ship.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3l6.5 3.75v6.5L10 17l-6.5-3.75v-6.5L10 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Consultants",
    desc: "Keep client commitments from scattering across chat, calendars, docs, and inboxes.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 17c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Ops leads & EAs",
    desc: "Coordinate moving parts across teams without writing scripts or building tools.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const trustItems = [
  {
    title: "Approval-gated actions",
    desc: "High-impact actions are surfaced for your explicit approval before execution.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2l1.5 3h3.2l-2.6 1.9 1 3L10 8l-3.1 1.9 1-3L5.3 5h3.2L10 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M4 13h12M4 16h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Local-first processing",
    desc: "Your app data stays on your Mac. We never send Apple app data to AI providers.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="4" y="8" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 8V5.5a3 3 0 0 1 6 0V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Project-scoped context",
    desc: "Work stays targeted per project. No cross-project data leakage or drift.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="11" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="3" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="11" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Persistent memory",
    desc: "Conversation and project state persist. Context survives resets and reconnects.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const appIcons = [
  {
    name: "Calendar",
    gradient: "linear-gradient(135deg, #FF6363, #CC3333)",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="16" rx="2" stroke="white" strokeWidth="1.8" />
        <path d="M3 9h18" stroke="white" strokeWidth="1.5" />
        <path d="M8 2v5M16 2v5" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <text x="12" y="18" textAnchor="middle" fill="white" fontSize="8" fontWeight="700">17</text>
      </svg>
    ),
  },
  {
    name: "Reminders",
    gradient: "linear-gradient(135deg, #FF9F0A, #CC7E00)",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.8" />
        <path d="M8 12l2.5 2.5L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Notes",
    gradient: "linear-gradient(135deg, #FFD60A, #CCB000)",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="3" width="16" height="18" rx="2" stroke="white" strokeWidth="1.8" />
        <path d="M8 8h8M8 12h6M8 16h4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Mail",
    gradient: "linear-gradient(135deg, #007AFF, #0055CC)",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="white" strokeWidth="1.8" />
        <path d="M3 7l9 5 9-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Messages",
    gradient: "linear-gradient(135deg, #30D158, #1FA040)",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H8l-4 3V6z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
];

/* ─── Page ─── */

export default function Home() {
  return (
    <>
      {/* ━━━ Hero ━━━ */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        {/* Dot grid subtle bg */}
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          {/* Copy */}
          <div>
            <AnimatedSection delay={0}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-accent bg-accent/10 border border-accent/25 font-mono">
                Free during beta
              </span>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.04] tracking-tight">
                AI that executes
                <br />
                work{" "}
                <span className="gradient-text">on your Mac.</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="mt-6 text-lg sm:text-xl text-text-muted max-w-xl leading-relaxed">
                Pane is your AI chief of staff for macOS. Give it one sentence
                and it turns into real execution — planning, follow-through, and
                app-level actions across your workflow.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <a
                  href="#waitlist"
                  className="inline-flex px-7 py-3.5 rounded-full text-sm font-bold
                    bg-accent text-accent-ink cursor-pointer
                    shadow-[0_0_30px_rgba(0,194,224,0.25)]
                    hover:shadow-[0_0_50px_rgba(0,194,224,0.45)]
                    hover:-translate-y-0.5
                    transition-all duration-200"
                >
                  Get Early Access
                </a>
                <span className="text-sm text-text-subtle">
                  macOS 14+ &middot; No credit card
                </span>
              </div>
            </AnimatedSection>
          </div>

          {/* Command bar mock */}
          <AnimatedSection delay={400} direction="right" className="hidden lg:block">
            <CommandBarMock />
          </AnimatedSection>
        </div>
      </section>

      {/* ━━━ Problem → Solution ━━━ */}
      <section className="relative py-28 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <p className="text-2xl sm:text-3xl lg:text-4xl text-text-muted leading-relaxed font-light">
            Most AI tools are still{" "}
            <strong className="text-text font-semibold">answer engines</strong>.
            They help you think, then hand the work back.
            <br className="hidden sm:block" />
            <span className="gradient-text font-semibold">
              {" "}Pane closes that gap
            </span>
            : it plans, executes, and keeps
            momentum moving — on your Mac.
          </p>
        </AnimatedSection>
      </section>

      {/* ━━━ Native Mac Integrations ━━━ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3 font-mono">
              Native Mac Integration
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              One agent. Five apps.
              <br />
              <span className="text-text-muted">Zero tab-switching.</span>
            </h2>
            <p className="mt-4 text-text-muted max-w-2xl mx-auto text-lg">
              Pane connects directly to the apps you already use on macOS — no
              browser extensions, no SaaS logins.
            </p>
          </AnimatedSection>

          {/* App icon row */}
          <div className="mt-14 flex flex-wrap justify-center items-center gap-6 sm:gap-10">
            {appIcons.map((app, i) => (
              <AnimatedSection key={app.name} delay={i * 100}>
                <div className="flex flex-col items-center gap-3 group">
                  <div
                    className="app-icon-squircle transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                    style={{ background: app.gradient }}
                  >
                    {app.svg}
                  </div>
                  <span className="text-xs font-medium text-text-muted group-hover:text-text transition-colors">
                    {app.name}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Connecting line */}
          <AnimatedSection delay={600}>
            <div className="mt-8 flex items-center justify-center gap-2">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent/30" />
              <div className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-mono text-accent font-semibold">
                Pane
              </div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent/30" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ━━━ Features — Bento Grid ━━━ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3 font-mono">
              What It Does
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              From idea to done —{" "}
              <span className="text-text-muted">in your apps.</span>
            </h2>
            <p className="mt-4 text-text-muted text-lg max-w-2xl">
              Private beta features available now in the macOS app.
            </p>
          </AnimatedSection>

          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <AnimatedSection
                key={f.title}
                delay={i * 120}
                className={f.span ? "md:row-span-2" : ""}
              >
                <div className={`gradient-border-card p-6 h-full ${f.span ? "flex flex-col" : ""}`}>
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-text-muted leading-relaxed">
                    {f.desc}
                  </p>
                  {f.visual}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ Who It's For ━━━ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3 font-mono">
              Who This Is For
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Built for people who{" "}
              <span className="text-text-muted">run work, not terminals.</span>
            </h2>
          </AnimatedSection>

          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {audiences.map((a, i) => (
              <AnimatedSection key={a.title} delay={i * 100}>
                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 text-accent flex items-center justify-center shrink-0">
                      {a.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold">{a.title}</h3>
                      <p className="mt-1.5 text-sm text-text-muted leading-relaxed">
                        {a.desc}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ Trust & Safety ━━━ */}
      <section className="relative py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-2/[0.02] to-transparent pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3 font-mono">
              Trust &amp; Safety
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Execution with control,
              <br />
              <span className="text-text-muted">not blind autonomy.</span>
            </h2>
            <p className="mt-4 text-text-muted max-w-2xl">
              <Link href="/security" className="text-accent hover:underline underline-offset-4 transition-colors">
                Read our full security architecture &rarr;
              </Link>
            </p>
          </AnimatedSection>

          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {trustItems.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100}>
                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-2/10 border border-accent-2/20 text-accent-2 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold">{item.title}</h3>
                      <p className="mt-1.5 text-sm text-text-muted leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ FAQ ━━━ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3 font-mono">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-10">
              Before you join
            </h2>
          </AnimatedSection>

          {[
            {
              q: "What do I need to start?",
              a: "macOS 14+ and a free Google AI Studio API key. That\u2019s enough for beta onboarding.",
            },
            {
              q: "Is this a developer tool?",
              a: "No. If you can explain your outcome clearly, Pane handles the task planning and execution for you.",
            },
            {
              q: "How much does it cost?",
              a: "Pane is free during the beta. We\u2019ll introduce pricing before general availability \u2014 beta users will get early-adopter benefits.",
            },
            {
              q: "How are invites handled?",
              a: "Invites are rolling and limited during private beta. Join the waitlist and we\u2019ll email you when your slot opens.",
            },
          ].map((faq, i) => (
            <AnimatedSection key={faq.q} delay={i * 80}>
              <details className="group mb-3 rounded-xl border border-border bg-surface backdrop-blur-md">
                <summary className="cursor-pointer px-6 py-4 font-semibold text-sm select-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-text-subtle group-open:rotate-45 transition-transform duration-200 text-lg leading-none">
                    +
                  </span>
                </summary>
                <p className="px-6 pb-5 text-sm text-text-muted leading-relaxed">
                  {faq.a}
                </p>
              </details>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ━━━ Bottom CTA ━━━ */}
      <section id="waitlist" className="relative py-32 px-6 text-center">
        {/* Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vh] rounded-full bg-accent/[0.06] blur-[100px]" />
        </div>

        <AnimatedSection className="relative max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3 font-mono">
            Get Started
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Try Pane{" "}
            <span className="gradient-text">free during beta</span>
          </h2>
          <p className="mt-4 text-text-muted text-lg">
            Join the waitlist for early access. No credit card, no commitment.
          </p>
          <div className="mt-10">
            <a
              href="mailto:noah@withpane.com?subject=Pane%20Beta%20Access"
              className="inline-flex px-10 py-4 rounded-full text-base font-bold
                bg-accent text-accent-ink cursor-pointer
                shadow-[0_0_40px_rgba(0,194,224,0.3)]
                hover:shadow-[0_0_60px_rgba(0,194,224,0.5)]
                hover:-translate-y-1
                transition-all duration-300"
            >
              Request Beta Access
            </a>
          </div>
          <p className="mt-5 text-sm text-text-subtle">
            No spam. Private beta invites only.
          </p>
        </AnimatedSection>
      </section>
    </>
  );
}
