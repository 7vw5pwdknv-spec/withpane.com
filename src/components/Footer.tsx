import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" }
];

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/disclaimer", label: "Disclaimer" }
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-midnight/60">
      <div className="section grid gap-8 py-16 md:grid-cols-3">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-2xl font-black tracking-tighter text-sand">
            <span className="h-4 w-4 rounded-full bg-accent shadow-[0_0_10px_rgba(189,107,62,0.8)]"></span>
            HOLDRY
          </div>
          <p className="text-sm leading-relaxed text-sand/70">
            The proprietary acquisition intelligence platform for search fund operators and essential service acquirers.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm font-bold uppercase tracking-widest text-sand/80">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-accent">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3 text-sm text-sand/60 md:items-end">
          {legalLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-sand">
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="gradient-bar h-[1px] w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="section py-8 text-center text-xs font-bold uppercase tracking-[0.3em] text-sand/40">
        © 2026 HOLDRY. All rights reserved.
      </div>
    </footer>
  );
}
