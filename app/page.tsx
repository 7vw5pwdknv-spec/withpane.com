import Link from "next/link";
import { GlassCard } from "./components/GlassCard";

const features = [
  {
    title: "Turn goals into plans",
    desc: "Describe what you want done in plain English. Pane breaks it into projects, tasks, and dependencies automatically.",
  },
  {
    title: "One workspace, not six tabs",
    desc: "Chat, tasks, docs, timeline — all in a single view. Stop context-switching between scattered tools.",
  },
  {
    title: "Real actions, your approval",
    desc: "Create calendar events, reminders, and notes on your Mac. Every action goes through you first.",
  },
];

const audiences = [
  {
    title: "Product managers",
    desc: "Stop copying action items from meeting notes into five different apps.",
  },
  {
    title: "Founders",
    desc: "Juggle follow-ups, scheduling, and execution between calls while you ship.",
  },
  {
    title: "Consultants",
    desc: "Keep client commitments from scattering across chat, calendars, docs, and inboxes.",
  },
  {
    title: "Ops leads & EAs",
    desc: "Coordinate moving parts across teams without writing scripts or building tools.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-accent bg-accent/10 border border-accent/25 font-mono">
              Free during beta
            </span>
            <h1 className="mt-5 text-5xl sm:text-6xl lg:text-[4rem] font-bold leading-[1.05] tracking-tight">
              AI that executes work
              <br />
              <span className="text-accent">on your Mac.</span>
            </h1>
            <p className="mt-6 text-lg text-text-muted max-w-xl leading-relaxed">
              Pane is your AI chief of staff for macOS. Give it one sentence and
              it turns into real execution — planning, follow-through, and
              app-level actions across your workflow.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <a
                href="#waitlist"
                className="inline-flex px-7 py-3.5 rounded-full text-sm font-bold
                  bg-accent text-accent-ink
                  shadow-[0_0_30px_rgba(0,194,224,0.25)]
                  hover:shadow-[0_0_40px_rgba(0,194,224,0.4)]
                  hover:-translate-y-0.5
                  transition-all duration-200"
              >
                Get Early Access — Free
              </a>
              <span className="text-sm text-text-subtle">
                macOS 14+ &middot; No credit card required
              </span>
            </div>
          </div>

          <GlassCard className="p-7">
            <h2 className="text-base font-semibold mb-5 text-text">
              What changes when Pane is in your stack
            </h2>
            <ul className="space-y-4 text-sm text-text-muted">
              {[
                "Action items stop dying in chat history.",
                "Follow-ups get scheduled before they slip.",
                "Approvals stay with you. Busywork does not.",
                "Your week runs from one view, not six tabs.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-accent/70 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </section>

      {/* Problem statement */}
      <section className="border-t border-border py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl sm:text-3xl text-text-muted leading-relaxed">
            Most AI tools are still{" "}
            <strong className="text-text font-semibold">answer engines</strong>.
            They help you think, then hand the work back to you. Pane closes
            that gap: it plans, executes, and keeps momentum moving on your Mac.
          </p>
        </div>
      </section>

      {/* Integrations */}
      <section className="border-t border-border py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
            Native Mac Integration
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            One agent. Five apps. Zero tab-switching.
          </h2>
          <p className="mt-4 text-text-muted max-w-2xl mx-auto">
            Pane connects directly to the apps you already use on macOS — no
            browser extensions, no SaaS logins.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {[
              { name: "Calendar", icon: "Cal" },
              { name: "Reminders", icon: "Rem" },
              { name: "Notes", icon: "Not" },
              { name: "Mail", icon: "Mail" },
              { name: "Messages", icon: "Msg" },
            ].map((app) => (
              <GlassCard key={app.name} className="px-6 py-5 text-center min-w-[100px]">
                <div className="text-lg font-bold text-accent mb-1 font-mono">{app.icon}</div>
                <div className="text-sm font-medium text-text-muted">
                  {app.name}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
            What It Does
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            From idea to done — in your apps.
          </h2>
          <p className="mt-4 text-text-muted max-w-2xl">
            Private beta features available now in the macOS app.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {features.map((f) => (
              <GlassCard key={f.title} className="p-6">
                <h3 className="text-base font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {f.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="border-t border-border py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
            Who This Is For
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Built for people who run work, not terminals.
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {audiences.map((a) => (
              <GlassCard key={a.title} className="p-6">
                <h3 className="text-base font-semibold mb-2">{a.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {a.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="border-t border-border py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
            Trust & Safety
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Execution with control, not blind autonomy.
          </h2>
          <p className="mt-4 text-text-muted max-w-2xl">
            <Link href="/security" className="text-accent hover:underline underline-offset-4 transition-colors">
              Read our full security architecture &rarr;
            </Link>
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Approval-gated actions",
                desc: "High-impact actions are surfaced for your explicit approval before execution.",
              },
              {
                title: "Local-first processing",
                desc: "Your app data stays on your Mac. We never send Apple app data to AI providers.",
              },
              {
                title: "Project-scoped context",
                desc: "Work stays targeted per project. No cross-project data leakage or drift.",
              },
              {
                title: "Persistent memory",
                desc: "Conversation and project state persist. Context survives resets and reconnects.",
              },
            ].map((item) => (
              <GlassCard key={item.title} className="p-6">
                <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {item.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-10">
            Before you join
          </h2>
          {[
            {
              q: "What do I need to start?",
              a: "macOS 14+ and a free Google AI Studio API key. That's enough for beta onboarding.",
            },
            {
              q: "Is this a developer tool?",
              a: "No. If you can explain your outcome clearly, Pane handles the task planning and execution for you.",
            },
            {
              q: "How much does it cost?",
              a: "Pane is free during the beta. We'll introduce pricing before general availability — beta users will get early-adopter benefits.",
            },
            {
              q: "How are invites handled?",
              a: "Invites are rolling and limited during private beta. Join the waitlist and we'll email you when your slot opens.",
            },
          ].map((faq) => (
            <details
              key={faq.q}
              className="group mb-3 rounded-xl border border-border bg-surface backdrop-blur-md"
            >
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
          ))}
        </div>
      </section>

      {/* Waitlist CTA */}
      <section
        id="waitlist"
        className="border-t border-border py-28 px-6 text-center"
      >
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
            Get Started
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Try Pane free during beta
          </h2>
          <p className="mt-4 text-text-muted">
            Join the waitlist for early access. No credit card, no commitment.
          </p>
          <div className="mt-8">
            <a
              href="mailto:noah@withpane.com?subject=Pane%20Beta%20Access"
              className="inline-flex px-8 py-3.5 rounded-full text-sm font-bold
                bg-accent text-accent-ink
                shadow-[0_0_30px_rgba(0,194,224,0.25)]
                hover:shadow-[0_0_40px_rgba(0,194,224,0.4)]
                hover:-translate-y-0.5
                transition-all duration-200"
            >
              Request Beta Access
            </a>
          </div>
          <p className="mt-4 text-xs text-text-subtle">
            No spam. Private beta invites only.
          </p>
        </div>
      </section>
    </>
  );
}
