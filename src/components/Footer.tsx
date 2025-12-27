import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/partner", label: "Partner" },
  { href: "/sellers", label: "Sellers" },
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
      <div className="section grid gap-6 py-10 md:grid-cols-3 md:items-center">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <span className="h-3 w-3 rounded-full bg-accent"></span>
            HOLDRY
          </div>
          <p className="text-sm text-sand/70">
            Private acquisition platform building permanent ownership in essential services.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-sand/80">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-accent">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-sand/80 md:justify-end">
          {legalLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-accent">
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="gradient-bar" />
      <div className="section py-6 text-sm text-sand/60">© 2024 HOLDRY. All rights reserved.</div>
    </footer>
  );
}
