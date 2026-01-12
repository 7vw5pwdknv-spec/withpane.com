import Link from "next/link";

interface CTASectionProps {
  title: string;
  description: string;
  cta: { href: string; label: string };
  subtle?: boolean;
}

export function CTASection({ title, description, cta, subtle }: CTASectionProps) {
  return (
    <section className="section">
      <div
        className={`card flex flex-col gap-6 rounded-3xl border border-white/5 ${
          subtle ? "bg-midnight/50" : "bg-gradient-to-r from-midnight via-midnight/80 to-charcoal"
        } p-8 md:flex-row md:items-center md:justify-between`}
      >
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-sand md:text-3xl">{title}</h2>
          <p className="text-sand/75 md:text-lg">{description}</p>
        </div>
        <Link href={cta.href} className="btn-primary">
          {cta.label}
        </Link>
      </div>
    </section>
  );
}
