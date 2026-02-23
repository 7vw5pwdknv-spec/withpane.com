import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Pane",
  description: "Privacy Policy for Pane, the AI agent for macOS.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <Link
            href="/"
            className="text-sm text-text-subtle hover:text-text-muted transition-colors"
          >
            &larr; Back to home
          </Link>
          <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight">
            Privacy Policy
          </h1>
        </div>

        {/* Content */}
        <article className="prose-legal">
          <p>
            <strong>Effective Date:</strong> February 22, 2026
          </p>

          <p>
            This Privacy Policy describes how Pane (&ldquo;<strong>we</strong>
            ,&rdquo; &ldquo;<strong>us</strong>,&rdquo; or &ldquo;
            <strong>our</strong>&rdquo;) collects, uses, and shares information
            about you when you use our macOS application and related services
            (the &ldquo;<strong>Service</strong>&rdquo;). By using the Service,
            you agree to the collection and use of information in accordance
            with this policy.
          </p>

          <hr />

          <h2>1. Information We Collect</h2>

          <h3>1.1 Information You Provide</h3>
          <ul>
            <li>
              <strong>Account Information:</strong> When you sign up, we may
              collect your name, email address, and payment information.
            </li>
            <li>
              <strong>User Content:</strong> Goals, tasks, and instructions you
              provide to Pane for planning and execution.
            </li>
            <li>
              <strong>Communications:</strong> Any messages or feedback you send
              to us directly.
            </li>
          </ul>

          <h3>1.2 Information Collected Automatically</h3>
          <ul>
            <li>
              <strong>Usage Data:</strong> How you interact with the Service,
              including features used, actions taken, and timestamps.
            </li>
            <li>
              <strong>Device Information:</strong> Device type, operating system
              version, and unique device identifiers.
            </li>
            <li>
              <strong>Log Data:</strong> Error logs and performance data to help
              us diagnose issues.
            </li>
          </ul>

          <h3>1.3 Information from Third-Party Integrations</h3>
          <p>
            When you connect Apple Calendar, Reminders, Notes, Mail, or
            Messages, Pane accesses data from these applications solely to
            execute tasks on your behalf. This data is processed locally on your
            device and is not transmitted to our servers unless necessary for the
            Service to function.
          </p>

          <hr />

          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To provide, maintain, and improve the Service</li>
            <li>
              To execute tasks and plans based on your instructions
            </li>
            <li>
              To communicate with you about updates, security alerts, and
              support
            </li>
            <li>To monitor and analyze usage patterns and trends</li>
            <li>
              To detect, prevent, and address technical issues and abuse
            </li>
          </ul>

          <hr />

          <h2>3. How We Share Your Information</h2>
          <p>
            We do not sell your personal information. We may share information in
            the following circumstances:
          </p>
          <ul>
            <li>
              <strong>Service Providers:</strong> With vendors who help us
              operate the Service (e.g., hosting, analytics), bound by
              confidentiality obligations.
            </li>
            <li>
              <strong>AI Model Providers:</strong> Task descriptions may be sent
              to third-party AI providers (e.g., Google Gemini) for processing.
              We do not send your Apple app data to these providers.
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law,
              regulation, or legal process.
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with a merger,
              acquisition, or sale of assets.
            </li>
          </ul>

          <hr />

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your information. However, no method of transmission over the
            Internet or electronic storage is 100% secure, and we cannot
            guarantee absolute security.
          </p>

          <hr />

          <h2>5. Data Retention</h2>
          <p>
            We retain your information for as long as your account is active or
            as needed to provide the Service. We may retain certain information
            as required by law or for legitimate business purposes.
          </p>

          <hr />

          <h2>6. Your Rights</h2>
          <p>
            Depending on your jurisdiction, you may have the right to:
          </p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Object to or restrict certain processing</li>
            <li>Data portability</li>
          </ul>
          <p>
            To exercise these rights, contact us at{" "}
            <a href="mailto:hello@withpane.com" className="text-accent hover:underline">
              hello@withpane.com
            </a>
            .
          </p>

          <hr />

          <h2>7. Children&apos;s Privacy</h2>
          <p>
            The Service is not intended for children under 13. We do not
            knowingly collect personal information from children under 13. If we
            become aware that we have collected such information, we will take
            steps to delete it.
          </p>

          <hr />

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any material changes by posting the new policy on this page
            and updating the effective date.
          </p>

          <hr />

          <h2>9. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, contact us at:</p>
          <p>
            Pane
            <br />
            <a href="mailto:hello@withpane.com" className="text-accent hover:underline">
              hello@withpane.com
            </a>
          </p>
        </article>
      </div>
    </div>
  );
}
