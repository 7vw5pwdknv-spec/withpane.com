import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="card h-full space-y-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-sand/70">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-sand">{title}</h3>
      <p className="text-sm text-sand/75 leading-relaxed">{description}</p>
    </div>
  );
}
