import Link from "next/link";

const navLinks = [
  { href: "/partner", label: "Partner" },
  { href: "/sellers", label: "Sellers" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-charcoal/80 backdrop-blur">
      <div className="section flex items-center justify-between py-4">
        <Link href="/" aria-label="HOLDRY home" className="group flex items-center gap-3 tracking-tight">
          <span className="relative flex h-4 w-4 items-center justify-center">
            <span className="absolute h-4 w-4 rounded-full bg-accent/25 blur-[10px] opacity-80 transition-opacity group-hover:opacity-100" />
            <span className="relative h-3 w-3 rounded-full bg-accent" />
          </span>
          <span className="text-2xl font-semibold text-sand md:text-3xl">HOLDRY</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-sand/80 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-accent">
              {link.label}
            </Link>
          ))}
          <Link href="/partner#apply" className="btn-primary">
            Apply
          </Link>
        </nav>

        <div className="md:hidden">
          <Link href="/partner#apply" className="btn-primary">
            Apply
          </Link>
        </div>
      </div>
    </header>
  );
}
