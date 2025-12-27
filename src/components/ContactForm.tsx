interface ContactFormProps {
  title: string;
  description: string;
}

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnnanped";

export function ContactForm({ title, description }: ContactFormProps) {
  return (
    <form
      action={FORMSPREE_ENDPOINT}
      method="POST"
      className="card space-y-6 rounded-2xl bg-midnight/70"
    >
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-sand">{title}</h3>
        <p className="text-sm text-sand/70">{description}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-sand/80">
          Name
          <input
            type="text"
            name="name"
            required
            className="w-full rounded-lg border border-white/10 bg-charcoal/70 px-3 py-3 text-sand placeholder:text-sand/40 focus:border-accent focus:outline-none"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-sand/80">
          Email
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-lg border border-white/10 bg-charcoal/70 px-3 py-3 text-sand placeholder:text-sand/40 focus:border-accent focus:outline-none"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-sand/80">
          Phone
          <input
            type="tel"
            name="phone"
            className="w-full rounded-lg border border-white/10 bg-charcoal/70 px-3 py-3 text-sand placeholder:text-sand/40 focus:border-accent focus:outline-none"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-sand/80">
          I am a
          <select
            name="persona"
            className="w-full rounded-lg border border-white/10 bg-charcoal/70 px-3 py-3 text-sand focus:border-accent focus:outline-none"
            defaultValue="Regional VP candidate"
          >
            <option>Regional VP candidate</option>
            <option>Business owner considering sale</option>
            <option>Partner / lender / advisor</option>
            <option>Other</option>
          </select>
        </label>
        <label className="md:col-span-2 space-y-2 text-sm font-medium text-sand/80">
          LinkedIn or Website
          <input
            type="url"
            name="link"
            placeholder="https://"
            className="w-full rounded-lg border border-white/10 bg-charcoal/70 px-3 py-3 text-sand placeholder:text-sand/40 focus:border-accent focus:outline-none"
          />
        </label>
        <label className="md:col-span-2 space-y-2 text-sm font-medium text-sand/80">
          Brief Background
          <textarea
            name="background"
            rows={4}
            className="w-full rounded-lg border border-white/10 bg-charcoal/70 px-3 py-3 text-sand placeholder:text-sand/40 focus:border-accent focus:outline-none"
            placeholder="Share relevant experience, territory interests, or business details."
          />
        </label>
      </div>
      <button type="submit" className="btn-primary w-full justify-center md:w-auto">
        Submit
      </button>
      <p className="text-xs text-sand/60">Protected by Formspree. We respond within two business days.</p>
    </form>
  );
}
