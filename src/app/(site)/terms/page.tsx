import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | HOLDRY",
  description: "Terms of service for using the Holdry holding company website."
};

export default function TermsPage() {
  return (
    <section className="section space-y-6">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sand/50">
          Legal
        </p>
        <h1 className="text-3xl font-semibold text-sand">
          Terms of Service
        </h1>
        <p className="text-sand/70">
          Effective date: December 2024
        </p>
      </div>

      <div className="card space-y-4 text-sm text-sand/80 leading-relaxed">
        <p>
          This website provides information about HOLDRY and does not constitute
          an offer or guarantee of services, investment solicitation, or legal
          advice. By using this site you agree to use it for lawful purposes and
          not to interfere with its security or operation.
        </p>

        <p>
          All content is provided &quot;as is&quot; without warranties of any kind.
          HOLDRY is not liable for damages arising from use of the site. Links to
          third parties are provided for convenience and do not imply endorsement.
        </p>

        <p>
          We may update these terms from time to time. Continued use of the site
          after changes means you accept the updated terms.
        </p>
      </div>
    </section>
  );
}
