import type { Metadata } from "next";
import { GlassCard } from "../components/GlassCard";

export const metadata: Metadata = {
  title: "Security — Pane",
  description:
    "How Pane keeps your data safe: approval-gated actions, local-first processing, and project-scoped sandboxing.",
};

const pillars = [
  {
    tag: "01",
    title: "Approval-gated actions",
    headline: "You stay in the loop on every high-impact decision.",
    summary:
      "Unlike unconstrained agentic AI tools that execute freely and ask forgiveness later, Pane surfaces every consequential action for your explicit approval before it touches your apps.",
    details: [
      "Every write operation — creating calendar events, sending messages, modifying reminders — requires your confirmation in a clear, human-readable preview before it executes.",
      "Read-only operations like pulling context from Notes or checking your schedule happen silently so you're never interrupted for low-risk tasks.",
      "The approval layer is enforced at the application architecture level — outside the model — ensuring that prompt injection or model behavior cannot initiate actions without explicit user approval.",
      "You get a complete audit trail of every action Pane has taken and every action you've approved or rejected.",
    ],
  },
  {
    tag: "02",
    title: "Local-first processing",
    headline: "Your data never leaves your Mac unless you say so.",
    summary:
      "Pane processes your Apple app data — Calendar, Reminders, Notes, Mail, Messages — entirely on-device. It is never uploaded to our servers or forwarded to third-party AI providers.",
    details: [
      "Apple app data is read and processed through native macOS APIs on your hardware. No intermediary cloud services sit between Pane and your data.",
      "When Pane calls an AI model to reason about your request, it sends only the minimal task description needed to generate a plan — never the raw contents of your emails, messages, or notes.",
      "Pane does not transmit, store, or collect the contents of your Calendar, Inbox, or other local Apple apps. All processing occurs on-device.",
      "Your API key connects directly to the AI provider. Pane never proxies, logs, or stores the traffic.",
    ],
  },
  {
    tag: "03",
    title: "Project-scoped context",
    headline: "Sandboxed by design. No cross-contamination.",
    summary:
      "Every project in Pane operates in its own isolated context. This prevents the cross-project data leakage and context drift that plague most agentic AI tools today.",
    details: [
      "Each project has its own conversation history, task state, and memory. Project A cannot read, reference, or be influenced by Project B.",
      "Context isolation means a prompt in one workspace can never surface confidential data from another — even by accident or adversarial design.",
      "When you archive or delete a project, its context is fully purged. There is no residual memory or hidden state that persists after removal.",
      "This sandboxing model mirrors how secure operating systems isolate processes — applied to your AI workflow so each engagement stays self-contained.",
    ],
  },
];

const principles = [
  {
    title: "Minimal data exposure",
    desc: "We follow the principle of least privilege. Pane requests only the permissions it needs, accesses only the data relevant to your current task, and retains nothing longer than necessary.",
  },
  {
    title: "No training on your data",
    desc: "Your conversations, tasks, and app data are never used to train AI models. What happens in Pane stays in Pane.",
  },
  {
    title: "Transparent architecture",
    desc: "Documentation details all data flows, permission boundaries, and which operations remain strictly local — allowing independent verification.",
  },
  {
    title: "Fail-safe defaults",
    desc: "When in doubt, Pane asks. Ambiguous instructions, unusual scope requests, or anything outside normal operating parameters triggers a confirmation — not a best guess.",
  },
];

export default function SecurityPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-accent bg-accent/10 border border-accent/25 font-mono">
            Security &amp; Trust
          </span>
          <h1 className="mt-6 text-5xl sm:text-6xl font-bold leading-[1.08] tracking-tight">
            Agentic AI you can
            <br />
            <span className="text-accent">actually trust.</span>
          </h1>
          <p className="mt-6 text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            Most agentic AI tools ask for broad access, act unpredictably, and
            blur the line between what you asked for and what they decided to do.
            Pane is built differently — with guardrails that are structural, not
            optional.
          </p>
        </div>
      </section>

      {/* Why this matters */}
      <section className="border-t border-border py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl sm:text-3xl text-text-muted leading-relaxed">
            The promise of agentic AI is real work getting done autonomously. But
            autonomy without accountability is a liability.{" "}
            <strong className="text-text font-semibold">
              Pane gives you the upside of AI execution with the control you need
              to deploy it responsibly.
            </strong>
          </p>
        </div>
      </section>

      {/* Three pillars — expanded */}
      <section className="border-t border-border py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
            Three Pillars
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Security by architecture, not by promise.
          </h2>
          <p className="mt-4 text-text-muted max-w-2xl">
            Each guardrail is enforced at the system level. They cannot be
            overridden by prompt engineering, edge cases, or model hallucination.
          </p>

          <div className="mt-16 space-y-20">
            {pillars.map((pillar) => (
              <div key={pillar.tag}>
                {/* Pillar header */}
                <div className="flex items-start gap-5 mb-8">
                  <span className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center text-accent font-mono font-bold text-sm">
                    {pillar.tag}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-text-muted text-lg leading-relaxed">
                      {pillar.headline}
                    </p>
                  </div>
                </div>

                {/* Summary */}
                <GlassCard className="p-7 mb-6">
                  <p className="text-text-muted leading-relaxed">
                    {pillar.summary}
                  </p>
                </GlassCard>

                {/* Detail bullets */}
                <ul className="space-y-4 pl-1">
                  {pillar.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="mt-2 h-2 w-2 rounded-full bg-accent/60 shrink-0" />
                      <p className="text-sm text-text-muted leading-relaxed">
                        {d}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guiding principles */}
      <section className="border-t border-border py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
            Design Principles
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            How we think about security.
          </h2>
          <p className="mt-4 text-text-muted max-w-2xl">
            Beyond the three pillars, these principles inform every engineering
            and product decision we make.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {principles.map((p) => (
              <GlassCard key={p.title} className="p-6">
                <h3 className="text-base font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {p.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="border-t border-border py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
            How We Compare
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-10">
            Pane vs. unconstrained AI agents.
          </h2>

          <GlassCard className="overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left px-6 py-4 font-semibold text-text-subtle">
                    Capability
                  </th>
                  <th className="text-center px-6 py-4 font-semibold text-accent">
                    Pane
                  </th>
                  <th className="text-center px-6 py-4 font-semibold text-text-subtle">
                    Typical AI Agent
                  </th>
                </tr>
              </thead>
              <tbody className="text-text-muted">
                {[
                  ["Action approval required", "Always", "Rarely or never"],
                  ["App data sent to cloud", "Never", "Often by default"],
                  ["Cross-project isolation", "Enforced", "Not guaranteed"],
                  ["Audit trail", "Built-in", "Varies"],
                  ["Prompt injection protection", "Architecture-level", "Prompt-level"],
                  ["Data used for training", "Never", "Opt-out if available"],
                ].map(([cap, pane, other]) => (
                  <tr key={cap} className="border-b border-border last:border-0">
                    <td className="px-6 py-3.5">{cap}</td>
                    <td className="px-6 py-3.5 text-center text-accent font-medium">
                      {pane}
                    </td>
                    <td className="px-6 py-3.5 text-center text-text-subtle">
                      {other}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </GlassCard>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-28 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Ready to try AI execution you can trust?
          </h2>
          <p className="mt-4 text-text-muted">
            Join the private beta. Free access, no commitment, full control.
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
        </div>
      </section>
    </>
  );
}
