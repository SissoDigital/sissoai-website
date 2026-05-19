import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/sections/site-footer";
import { CONTACT } from "@/lib/social";

export const metadata: Metadata = {
  title: "Privacy Policy | Sisso AI",
  description: "How Sisso AI collects and handles your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <main className="flex-1 bg-background">
        <article className="mx-auto max-w-3xl px-6 py-20">
          <Link
            href="/"
            className="text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-accent"
          >
            ← Back to home
          </Link>

          <h1 className="mt-8 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm uppercase tracking-widest text-muted-foreground">
            Effective: November 2026
          </p>

          <div className="mt-12 space-y-8 text-base leading-relaxed text-foreground md:text-lg">
            <p>
              Sisso AI (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;)
              operates the website sissoai.com and provides AI automation, CRM
              architecture, and chatbot consulting services. This Privacy
              Policy explains what information we collect, how we use it, and
              your rights regarding that information.
            </p>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                1. Information We Collect
              </h2>
              <p>
                We collect information you provide directly when you submit the
                contact form, message us via WhatsApp, schedule a call through
                our booking widget, or email us directly. This includes your
                name, email, business type, and a description of your
                operational bottleneck.
              </p>
              <p>
                We also collect limited technical information automatically
                through Vercel Analytics: page visits, referral source, browser
                type and device category, and general geographic region
                (country/city level only).
              </p>
              <p>
                We do not use third-party advertising cookies. We do not sell
                personal data.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                2. How We Use Your Information
              </h2>
              <p>
                We use the information you provide solely to respond to your
                inquiry within 24 hours, schedule and conduct discovery calls,
                prepare proposals for automation work, and send occasional
                updates if you explicitly opt in.
              </p>
              <p>
                Contact form submissions are routed through a Make.com
                automation workflow to our internal CRM. No information
                collected through this site is used for third-party marketing.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                3. Data Retention
              </h2>
              <p>
                We retain inquiry data for as long as the engagement remains
                active, plus 24 months for record-keeping. You may request
                earlier deletion at any time by emailing{" "}
                <a
                  href={`mailto:${CONTACT.emailPrimary}`}
                  className="text-accent underline-offset-4 hover:underline"
                >
                  {CONTACT.emailPrimary}
                </a>
                .
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                4. Data Sharing
              </h2>
              <p>
                We do not sell, rent, or trade your personal information. We
                share data only with the operational tools required to run our
                business: Vercel (hosting and analytics), Make.com (workflow
                automation), Airtable (internal CRM), and Google Workspace
                (email and scheduling). Each provider maintains their own
                privacy practices and security standards.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                5. Your Rights
              </h2>
              <p>
                You have the right to request a copy of the personal
                information we hold about you, request correction of inaccurate
                information, request deletion of your information, and withdraw
                consent for any future communication.
              </p>
              <p>
                To exercise these rights, email{" "}
                <a
                  href={`mailto:${CONTACT.emailPrimary}`}
                  className="text-accent underline-offset-4 hover:underline"
                >
                  {CONTACT.emailPrimary}
                </a>
                .
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                6. Security
              </h2>
              <p>
                We use industry-standard practices to protect your information
                in transit (TLS encryption) and at rest. No method of internet
                transmission is 100% secure, and we cannot guarantee absolute
                security.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                7. Children
              </h2>
              <p>
                Our services are not directed at children under 16. We do not
                knowingly collect information from minors.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                8. Updates to This Policy
              </h2>
              <p>
                We may update this policy from time to time. Material changes
                will be reflected with a new effective date. Continued use of
                our services after an update constitutes acceptance of the
                revised policy.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                9. Contact
              </h2>
              <p>
                Questions about this Privacy Policy can be sent to{" "}
                <a
                  href={`mailto:${CONTACT.emailPrimary}`}
                  className="text-accent underline-offset-4 hover:underline"
                >
                  {CONTACT.emailPrimary}
                </a>{" "}
                or via WhatsApp using the link in our site footer.
              </p>
            </section>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
