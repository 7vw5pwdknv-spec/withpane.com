import Link from "next/link";

const navLinks = [
  { href: "/about", label: "Company" },
  { href: "/pricing", label: "Portfolio" },
  { href: "/enterprise", label: "Platform" },
  { href: "/newsletter", label: "Insights" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-charcoal/80 backdrop-blur">
      <div className="section flex items-center justify-between py-3">
        <Link href="/" aria-label="HOLDRY home" className="group flex items-center gap-4 tracking-tighter mr-10">
          <span className="relative flex h-5 w-5 items-center justify-center">
            <span className="absolute h-6 w-6 rounded-full bg-white/20 blur-[12px] opacity-90 transition-opacity group-hover:opacity-100" />
            <span className="relative h-4 w-4 rounded-full bg-sand shadow-[0_0_12px_rgba(255,255,255,0.4)]" />
          </span>
          <span className="text-3xl font-black text-sand md:text-5xl lg:text-6xl">HOLDRY</span>
        </Link>

        <nav className="hidden items-center flex-1 justify-start gap-8 text-sm font-bold uppercase tracking-widest text-sand/80 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-sand">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/partner" className="btn-primary px-6 py-2">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
