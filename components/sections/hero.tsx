import { buttonVariants } from "@/components/ui/button";
import { IndustryPills } from "@/components/ui/industry-pills";
import { AmbientField } from "@/components/visual/ambient-field";
import { SystemStatus } from "@/components/visual/system-status";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section data-reveal className="relative hero-atmosphere bg-background">
      {/* AmbientField — full-bleed background layer behind the hero content */}
      <AmbientField className="absolute inset-0 -z-0 h-full w-full opacity-50" />

      {/* SystemStatus pill — top-right corner of the hero */}
      <SystemStatus className="absolute right-6 top-6 z-10 md:right-8 md:top-8" />

      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center px-6 py-20 text-center md:py-32 lg:py-40">
        <div className="mb-10 inline-flex items-center gap-2.5 text-xs uppercase tracking-widest text-muted-foreground">
          <span className="signal-dot" aria-hidden="true" />
          Operator-led
        </div>
        <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Automate your operations. Reclaim your margins and your time.
        </h1>
        <p className="mt-8 max-w-2xl text-base text-muted-foreground md:text-lg lg:text-xl">
          I spent two decades running high-volume restaurants, hospitality, real
          estate, and property management. Now I build AI automations, CRM
          systems, chatbots, and practical AI agents that solve the operational
          bottlenecks I fought daily.
        </p>
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <a
            href="#cta"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "h-14 px-8 text-base md:text-lg",
            )}
          >
            Audit Your Workflows
          </a>
          <a
            href="#services"
            className="rounded text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:text-foreground focus-visible:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-base"
          >
            How it works ↓
          </a>
        </div>
        <IndustryPills
          className="mt-10"
          pills={[
            "Hospitality",
            "Property Management",
            "Real Estate",
            "Service Operations",
          ]}
        />
      </div>
    </section>
  );
}
