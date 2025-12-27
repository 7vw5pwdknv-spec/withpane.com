import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-charcoal">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
