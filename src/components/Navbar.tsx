import Link from "next/link";

const navLinks = [
  { href: "/newsletter", label: "Newsletter" },
  { href: "/sellers", label: "Sellers" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-charcoal/80 backdrop-blur">
      <div className="section flex items-center justify-between py-5">
        <Link href="/" aria-label="HOLDRY home" className="group flex items-center gap-4 tracking-tighter">
          <span className="relative flex h-5 w-5 items-center justify-center">
            <span className="absolute h-6 w-6 rounded-full bg-accent/30 blur-[12px] opacity-90 transition-opacity group-hover:opacity-100" />
            <span className="relative h-4 w-4 rounded-full bg-accent shadow-[0_0_15px_rgba(189,107,62,0.5)]" />
          </span>
          {/* Scaled up HOLDRY for "pop" and brand recognition */}
          <span className="text-3xl font-black text-sand md:text-5xl lg:text-6xl">HOLDRY</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-bold uppercase tracking-widest text-sand/80 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-accent">
              {link.label}
            </Link>
          ))}
          <Link href="/enterprise" className="btn-primary px-6 py-2">
            Enterprise
          </Link>
        </nav>

        <div className="md:hidden">
          <Link href="/enterprise" className="btn-primary px-4 py-2 text-xs">
            Enterprise
          </Link>
        </div>
      </div>
    </header>
  );
}
