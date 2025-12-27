import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/regional-vp", label: "Regional VP" },
  { href: "/sellers", label: "Sellers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-charcoal/80 backdrop-blur">
      <div className="section flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <span className="h-3 w-3 rounded-full bg-accent"></span>
          HOLDRY
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
