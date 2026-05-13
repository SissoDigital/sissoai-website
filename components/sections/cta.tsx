import { CalEmbed } from "@/components/cal-embed";
import { ContactForm } from "@/components/forms/contact-form";
import { WhatsAppCta } from "@/components/whatsapp-cta";

export function CTA() {
  return (
    <section id="cta" className="scroll-mt-12 bg-background">
      <div className="mx-auto max-w-[1200px] px-6 py-12 md:py-20">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Let&apos;s map your bottlenecks.
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            In 30 minutes, I will map your highest-leverage automation
            opportunity. No pitch. If there is no fit, I will tell you
            immediately.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <WhatsAppCta />
            <CalEmbed />
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold leading-tight text-foreground md:text-2xl">
              Not ready for a call? Tell me what&apos;s broken.
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
