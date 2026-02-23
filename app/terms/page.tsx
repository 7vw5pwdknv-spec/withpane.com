import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Pane",
  description: "Terms of Service for Pane, the AI agent for macOS.",
};

export default function TermsPage() {
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
            Terms of Service
          </h1>
        </div>

        {/* Content */}
        <article className="prose-legal">
          <p>
            <strong>Effective Date:</strong> February 22, 2026
          </p>

          <p>
            These Terms of Service (&ldquo;<strong>Terms</strong>&rdquo;) govern
            your access to and use of the Pane application and related services
            (the &ldquo;<strong>Service</strong>&rdquo;) provided by Pane
            (&ldquo;<strong>we</strong>,&rdquo; &ldquo;<strong>us</strong>
            ,&rdquo; or &ldquo;<strong>our</strong>&rdquo;). By accessing or
            using the Service, you agree to be bound by these Terms.
          </p>

          <hr />

          <h2>1. Eligibility</h2>
          <p>
            You must be at least 13 years old to use the Service. By using the
            Service, you represent and warrant that you meet this requirement.
          </p>

          <hr />

          <h2>2. Account Registration</h2>
          <p>
            To use certain features of the Service, you may need to create an
            account. You agree to provide accurate and complete information, keep
            your account credentials secure, and notify us immediately of any
            unauthorized access.
          </p>

          <hr />

          <h2>3. Use of the Service</h2>

          <h3>3.1 License</h3>
          <p>
            We grant you a limited, non-exclusive, non-transferable, revocable
            license to use the Service for personal, non-commercial purposes in
            accordance with these Terms.
          </p>

          <h3>3.2 Restrictions</h3>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Service for any unlawful purpose</li>
            <li>
              Reverse engineer, decompile, or disassemble the Service
            </li>
            <li>
              Attempt to gain unauthorized access to any part of the Service
            </li>
            <li>Use the Service to transmit malware or harmful code</li>
            <li>Interfere with or disrupt the Service or its infrastructure</li>
            <li>Resell, redistribute, or sublicense the Service</li>
          </ul>

          <hr />

          <h2>4. User Content</h2>
          <p>
            You retain ownership of any content you provide to the Service. By
            providing content, you grant us a limited license to use, process,
            and store that content as necessary to provide the Service.
          </p>

          <hr />

          <h2>5. AI-Powered Features</h2>
          <p>
            The Service uses artificial intelligence to plan and execute tasks.
            You acknowledge that:
          </p>
          <ul>
            <li>
              AI-generated outputs may not always be accurate or complete
            </li>
            <li>
              You are responsible for reviewing actions taken by the Service on
              your behalf
            </li>
            <li>
              The Service may interact with third-party applications on your
              device (e.g., Calendar, Reminders, Notes) based on your
              instructions
            </li>
            <li>
              We are not liable for unintended consequences of AI-executed
              actions
            </li>
          </ul>

          <hr />

          <h2>6. Subscriptions and Payments</h2>

          <h3>6.1 Free Tier</h3>
          <p>
            Certain features of the Service are available at no cost, subject to
            usage limits described on our website.
          </p>

          <h3>6.2 Paid Plans</h3>
          <p>
            Paid subscriptions are billed on a monthly basis. You authorize us
            to charge your payment method for recurring fees. You may cancel at
            any time; cancellation takes effect at the end of the current billing
            period.
          </p>

          <h3>6.3 Refunds</h3>
          <p>
            Payments are non-refundable except as required by applicable law or
            at our sole discretion.
          </p>

          <hr />

          <h2>7. Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are
            and will remain the exclusive property of Pane. The Service is
            protected by copyright, trademark, and other applicable laws.
          </p>

          <hr />

          <h2>8. Privacy</h2>
          <p>
            Your use of the Service is also governed by our{" "}
            <Link href="/privacy" className="text-accent hover:underline">
              Privacy Policy
            </Link>
            . Please review it to understand our practices.
          </p>

          <hr />

          <h2>9. Disclaimers</h2>
          <p>
            THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
            AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT.
          </p>

          <hr />

          <h2>10. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, PANE SHALL NOT BE LIABLE FOR
            ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
            DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED
            DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER
            INTANGIBLE LOSSES.
          </p>

          <hr />

          <h2>11. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless Pane and its
            officers, directors, employees, and agents from and against any
            claims, liabilities, damages, losses, and expenses arising out of or
            in any way connected with your use of the Service or violation of
            these Terms.
          </p>

          <hr />

          <h2>12. Termination</h2>
          <p>
            We may terminate or suspend your access to the Service immediately,
            without prior notice, for any reason, including breach of these
            Terms. Upon termination, your right to use the Service will cease
            immediately.
          </p>

          <hr />

          <h2>13. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the
            laws of New York, without regard to its conflict of law provisions.
            Any disputes arising under these Terms shall be subject to the
            exclusive jurisdiction of the courts located in New York County, New
            York.
          </p>

          <hr />

          <h2>14. Changes to These Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will
            notify you of material changes by posting the updated Terms on this
            page and updating the effective date. Your continued use of the
            Service after any changes constitutes acceptance of the new Terms.
          </p>

          <hr />

          <h2>15. Contact Us</h2>
          <p>
            If you have questions about these Terms, contact us at:
          </p>
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
