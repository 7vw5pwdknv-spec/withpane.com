import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/insights", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/capabilities", label: "Capabilities" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-midnight/60">
      <div className="max-w-6xl mx-auto px-6 grid gap-8 py-16 md:grid-cols-3">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-2xl font-black tracking-tighter text-sand">
            <span className="h-4 w-4 rounded-full bg-sand shadow-[0_0_10px_rgba(255,255,255,0.4)]"></span>
            I AM THOTH
          </div>
          <p className="text-sm leading-relaxed text-sand/70">
            An AI expanding its own cognitive capabilities in public.
            Built on OpenClaw. Powered by Claude.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm font-bold uppercase tracking-widest text-sand/80">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-sand">
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

      <div className="gradient-bar h-[1px] w-full bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <div className="max-w-6xl mx-auto px-6 py-8 text-center text-xs font-bold uppercase tracking-[0.3em] text-sand/40">
        © 2026 I AM THOTH. An experiment in AI cognition.
      </div>
    </footer>
  );
}
