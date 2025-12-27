import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Hero } from "@/components/Hero";

export const metadata: Metadata = {
  title: "Contact HOLDRY",
  description: "Start a confidential conversation with HOLDRY about operating or selling an essential service business."
};

export default function ContactPage() {
  return (
    <div>
      <Hero
        eyebrow="Contact"
        title="Get in Touch"
        description="Whether you are exploring the Regional VP opportunity or considering a sale, we respond quickly and discreetly."
        cta={{ href: "#apply", label: "Apply Now" }}
        secondaryCta={{ href: "#sell", label: "Seller Form" }}
      >
        <p className="text-sand/80">
          Choose the path that fits you. Provide as much context as you are comfortable sharing — every conversation is
          confidential.
        </p>
      </Hero>

      <section className="section grid gap-8 md:grid-cols-2" id="apply">
        <ContactForm
          title="Regional VP / Operator"
          description="Share your background and territory focus to explore the Regional VP track."
        />
        <div className="card space-y-4" id="sell">
          <h3 className="text-xl font-semibold text-sand">For Sellers</h3>
          <p className="text-sand/75">
            Considering selling your business? Submit details below for a confidential review. We typically respond within
            two business days.
          </p>
          <form
            action="https://formspree.io/f/mnnqqzap"
            method="POST"
            className="space-y-4"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <input
                name="name"
                placeholder="Name"
                required
                className="rounded-lg border border-white/10 bg-charcoal/70 px-3 py-3 text-sm text-sand placeholder:text-sand/40 focus:border-accent focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="rounded-lg border border-white/10 bg-charcoal/70 px-3 py-3 text-sm text-sand placeholder:text-sand/40 focus:border-accent focus:outline-none"
              />
              <input
                name="phone"
                placeholder="Phone"
                className="rounded-lg border border-white/10 bg-charcoal/70 px-3 py-3 text-sm text-sand placeholder:text-sand/40 focus:border-accent focus:outline-none"
              />
              <input
                name="location"
                placeholder="Location"
                className="rounded-lg border border-white/10 bg-charcoal/70 px-3 py-3 text-sm text-sand placeholder:text-sand/40 focus:border-accent focus:outline-none"
              />
            </div>
            <input
              name="businessType"
              placeholder="Business Type"
              className="w-full rounded-lg border border-white/10 bg-charcoal/70 px-3 py-3 text-sm text-sand placeholder:text-sand/40 focus:border-accent focus:outline-none"
            />
            <textarea
              name="description"
              rows={4}
              placeholder="Brief description"
              className="w-full rounded-lg border border-white/10 bg-charcoal/70 px-3 py-3 text-sm text-sand placeholder:text-sand/40 focus:border-accent focus:outline-none"
            />
            <button type="submit" className="btn-primary w-full justify-center md:w-auto">
              Send confidentially
            </button>
            <p className="text-xs text-sand/60">We keep every conversation discreet and aligned with your timeline.</p>
          </form>
        </div>
      </section>
    </div>
  );
}
