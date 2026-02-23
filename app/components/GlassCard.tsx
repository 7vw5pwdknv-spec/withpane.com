import { ReactNode } from "react";

export function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-2xl border border-border bg-surface backdrop-blur-md
        before:absolute before:inset-0 before:rounded-2xl
        before:bg-gradient-to-br before:from-white/[0.04] before:to-transparent
        before:pointer-events-none
        hover:border-border-bright hover:bg-surface-hover
        transition-all duration-300 ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
