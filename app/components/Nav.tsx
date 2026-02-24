"use client";

import Link from "next/link";

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-bg/70 border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold tracking-wide text-accent"
        >
          Pane
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/security"
            className="text-sm font-medium text-text-muted hover:text-text transition-colors duration-200"
          >
            Security
          </Link>
          <a
            href="#waitlist"
            className="px-5 py-2.5 rounded-full text-sm font-semibold
              bg-accent/10 text-accent border border-accent/30
              hover:bg-accent/20 hover:border-accent/50
              transition-all duration-200"
          >
            Join Beta
          </a>
        </div>
      </div>
    </nav>
  );
}
