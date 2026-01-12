import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | HOLDRY",
  description: "Privacy policy for the Holdry holding company website."
};

export default function PrivacyPage() {
  return (
    <section className="section space-y-6">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sand/50">Legal</p>
        <h1 className="text-3xl font-semibold text-sand">Privacy Policy</h1>
        <p className="text-sand/70">Effective date: December 2024</p>
      </div>
      <div className="card space-y-4 text-sm text-sand/80 leading-relaxed">
        <p>HOLDRY values your privacy. This policy describes how we handle information on this site.</p>
        <p>
          We collect information you provide directly, such as when you submit a contact form. We may also collect
          anonymized analytics data to improve the site. We do not sell personal information.
        </p>
        <p>
          Information submitted through forms is processed by Formspree or similar providers. Their use of your data is
          governed by their own policies.
        </p>
        <p>
          We use reasonable administrative and technical safeguards to protect information. No method of transmission is
          perfectly secure and we cannot guarantee absolute security.
        </p>
        <p>
          This site is intended for business inquiries within the United States. If you have questions about this policy,
          contact us at privacy@holdry.com.
        </p>
      </div>
    </section>
  );
}
