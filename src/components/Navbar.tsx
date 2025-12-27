import Link from "next/link";

const navLinks = [
  { href: "/regional-vp", label: "Regional VP" },
  { href: "/sellers", label: "Sellers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-charcoal/80 backdrop-blur">
      <div className="section flex items-center justify-between py-4">
        {/* Logo / Home */}
        <Link
          href="/"
          aria-label="HOLDRY home"
          className="group flex items-center gap-3 tracking-tight"
        >
          <span className="relative flex h-3.5 w-3.5 items-center justify-center">
            <span className="absolute h-3.5 w-3.5 rounded-full bg-accent/25 blur-[6px] transition-opacity group-hover:opacity-100 opacity-70" />
            <span className="relative h-3 w-3 rounded-full bg-accent" />
          </span>

          <span className="text-xl font-semibold text-sand md:text-2xl">
            HOLDRY
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-sand/80 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-accent">
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary">
            Apply
          </Link>
        </nav>

        <div className="md:hidden">
          <Link href="/contact" className="btn-primary">
            Apply
          </Link>
        </div>
      </div>
    </header>
  );
}
