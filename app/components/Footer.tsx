import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <span className="text-sm text-text-subtle">
          &copy; {new Date().getFullYear()} Pane. All rights reserved.
        </span>
        <div className="flex gap-6">
          <Link
            href="/privacy"
            className="text-sm text-text-subtle hover:text-text-muted transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-sm text-text-subtle hover:text-text-muted transition-colors"
          >
            Terms of Service
          </Link>
          <a
            href="mailto:hello@withpane.com"
            className="text-sm text-text-subtle hover:text-text-muted transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
