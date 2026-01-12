'use client'

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

import Link from "next/link";
import { useState } from "react";
import { subscribeToNewsletter } from "@/app/actions/subscribe";

export default function InsightsPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(formData: FormData) {
    setStatus('loading');
    try {
      const result = await subscribeToNewsletter(formData);
      if (result && result.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error("Subscription submission failed:", err);
      setStatus('error');
    }
  }

  return (
    <div className="min-h-screen pb-20">
      <section className="section pt-16 lg:pt-24">
        <div className="mx-auto max-w-3xl text-center space-y-8">
          <p className="text-sm font-black uppercase tracking-[0.4em] text-sand/50">
            Insights
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tighter text-sand md:text-6xl">
            The Holdry briefing
          </h1>
          <p className="text-lg text-sand/80 md:text-xl leading-relaxed">
            Periodic notes on long-term ownership, resilient operations, and the themes shaping durable businesses.
          </p>

          <div className="flex flex-col items-center gap-6 pt-4">
            <form action={handleSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <input
                name="email"
                type="email"
                placeholder={status === 'success' ? "You're on the list" : "Enter your email"}
                required
                disabled={status === 'success' || status === 'loading'}
                className="w-full rounded-xl border border-white/10 bg-midnight/50 px-5 py-4 text-sand outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="btn-primary whitespace-nowrap px-8 py-4 font-bold disabled:opacity-50"
              >
                {status === 'loading' ? 'Joining...' : status === 'success' ? 'Subscribed' : "Subscribe"}
              </button>
            </form>
            {status === 'error' && (
              <p className="text-red-400 text-xs font-bold">
                Submission failed. Please check your connection or try again.
              </p>
            )}
            <p className="text-xs text-sand/40 font-medium uppercase tracking-widest">
              No spam. Occasional updates only.
            </p>
            <div className="pt-4">
              <Link href="/about" className="text-sand/60 hover:text-sand transition-colors text-sm font-bold border-b border-sand/20 pb-1">
                Learn about Holdry →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card space-y-6 border border-white/10 bg-midnight/40 p-10">
            <h2 className="text-2xl font-bold text-sand">What we cover</h2>
            <ul className="space-y-4">
              {[
                { label: "Ownership philosophy", desc: "How we think about permanent capital and stewardship." },
                { label: "Operational playbooks", desc: "Practical frameworks for durable growth." },
                { label: "Market observations", desc: "Signals across essential industries and services." },
                { label: "People & leadership", desc: "The teams and culture that sustain performance." }
              ].map((item) => (
                <li key={item.label} className="flex gap-4">
                  <span className="text-sand/60">•</span>
                  <div>
                    <p className="font-bold text-sand leading-none">{item.label}</p>
                    <p className="text-sm text-sand/60 mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="card space-y-6 border border-white/10 bg-midnight/60 p-10">
            <h2 className="text-2xl font-bold text-sand">A note from Holdry</h2>
            <p className="text-sand/70">
              We believe the most resilient businesses are built quietly, with disciplined operators and patient capital.
              This briefing shares the themes we see across the portfolio and the conversations we are having with
              founders.
            </p>
            <div className="space-y-4 pt-2">
              <div className="rounded-lg bg-charcoal/40 p-4 border border-white/10">
                <p className="text-sm font-bold text-sand">Long-term perspective</p>
                <p className="text-xs text-sand/50">Designed for owners, operators, and partners.</p>
              </div>
              <Link href="/partner" className="btn-secondary w-full justify-center py-4 font-bold">
                Start a conversation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-10">
        <div className="rounded-[2rem] border border-white/10 bg-midnight/40 p-12 text-center">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-sand/40 mb-8">
            Recent themes
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Designing for permanence", detail: "Why long-term ownership changes decision-making." },
              { title: "Operational focus", detail: "The compounding value of incremental improvements." },
              { title: "People first", detail: "Leadership continuity in multi-generational businesses." }
            ].map((issue) => (
              <div key={issue.title} className="rounded-xl bg-white/5 p-6 text-left border border-white/10 hover:border-white/30 transition-colors">
                <p className="font-bold text-sand mb-1">{issue.title}</p>
                <p className="text-xs text-sand/40 font-medium">{issue.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section py-16">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-block h-12 w-12 rounded-full bg-white/10 p-2">
            <span className="text-2xl">✍️</span>
          </div>
          <h3 className="text-xl font-bold text-sand mb-4">From the Holdry team</h3>
          <p className="text-sand/60 italic leading-relaxed">
            &quot;We created this briefing to share how we think about enduring businesses. It is a window into our
            investment philosophy, operational priorities, and the people who make it all work.&quot;
          </p>
        </div>
      </section>
    </div>
  );
}
