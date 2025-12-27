import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | HOLDRY",
  description: "Informational disclaimer for HOLDRY."
};

export default function DisclaimerPage() {
  return (
    <section className="section space-y-6">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent/90">Legal</p>
        <h1 className="text-3xl font-semibold text-sand">Disclaimer</h1>
        <p className="text-sand/70">Informational purposes only</p>
      </div>
      <div className="card space-y-4 text-sm text-sand/80 leading-relaxed">
        <p>
          This website is for informational purposes only and does not constitute an offer to sell or a solicitation of an
          offer to buy any securities. Nothing on this site should be interpreted as financial, legal, or tax advice.
        </p>
        <p>
          References to opportunities for Regional Vice Presidents are not offers of employment. Engagements are subject
          to due diligence, mutual agreement, and compliance with applicable laws.
        </p>
        <p>
          HOLDRY makes no representation or warranty as to the completeness or accuracy of the information on this site and
          assumes no liability for reliance on it. You should conduct your own independent evaluation.
        </p>
      </div>
    </section>
  );
}
