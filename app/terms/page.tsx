import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/sections/site-footer";
import { CONTACT } from "@/lib/social";

export const metadata: Metadata = {
  title: "Terms of Service | Sisso AI",
  description: "Terms for engaging with Sisso AI services.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="mt-3 text-sm uppercase tracking-widest text-muted-foreground">
            Effective: November 2026
          </p>

          <div className="mt-12 space-y-8 text-base leading-relaxed text-foreground md:text-lg">
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access
              to and use of the Sisso AI website and consulting services
              provided by Sisso AI (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
              &ldquo;our&rdquo;). By using the site or engaging us for
              services, you agree to these Terms.
            </p>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                1. Services
              </h2>
              <p>
                Sisso AI provides AI automation, CRM architecture, chatbot, AI
                agent, and operational consulting services on a project basis.
                Specific scope, deliverables, timeline, and fees for any
                engagement are defined in a separate written proposal or
                statement of work, which controls in case of conflict with
                these Terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                2. Use of This Site
              </h2>
              <p>
                You may use this site for lawful purposes only. You agree not
                to reverse engineer, scrape, or copy substantial portions of
                the site, submit false or misleading information through our
                contact forms, attempt to compromise the security or integrity
                of the site, or use the site to send spam or malicious content.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                3. Intellectual Property
              </h2>
              <p>
                All content on this site, including text, design, code, and
                visual elements, is owned by Sisso AI or licensed for our use.
                You may share links to the site freely. You may not republish,
                redistribute, or create derivative works without written
                permission.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                4. Discovery Calls
              </h2>
              <p>
                We offer 30-minute discovery calls at no charge. The call is
                exploratory. We are not bound to take on any engagement based
                on a discovery call, and you are not obligated to engage us.
                Recordings are not made without explicit consent.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                5. Confidentiality
              </h2>
              <p>
                Information shared during discovery calls, in writing, or
                during active engagements is treated as confidential. We will
                not disclose specifics about your business, systems, or
                operations to third parties without your consent. Either party
                may request a formal NDA before substantive discussions.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                6. Limitation of Liability
              </h2>
              <p>
                The website is provided &ldquo;as is&rdquo; without warranty of
                any kind. To the maximum extent permitted by law, Sisso AI is
                not liable for indirect, incidental, or consequential damages
                arising from use of this site. Liability for any consulting
                engagement is governed by the specific agreement for that
                engagement.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                7. Third-Party Tools
              </h2>
              <p>
                Our services often integrate third-party platforms (Make.com,
                Airtable, OpenAI, Anthropic, WhatsApp Business API, Green API,
                and others). We are not responsible for changes, outages, or
                policy changes by those providers, but we will work in good
                faith to maintain integrations we have built.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                8. Termination
              </h2>
              <p>
                We reserve the right to refuse service or terminate any
                engagement at our discretion, subject to obligations defined in
                any active statement of work. You may stop using the site at
                any time without notice.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                9. Governing Law
              </h2>
              <p>
                These Terms are governed by the laws of Costa Rica, where
                Sisso AI is based. Any disputes will be resolved in the courts
                of Costa Rica, unless otherwise agreed in writing.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                10. Changes to These Terms
              </h2>
              <p>
                We may revise these Terms. The &ldquo;Effective&rdquo; date at
                the top will reflect any changes. Continued use of the site
                after changes are posted constitutes acceptance.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                11. Contact
              </h2>
              <p>
                Questions about these Terms can be sent to{" "}
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
