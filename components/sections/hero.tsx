import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="bg-background">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center px-6 py-20 text-center md:py-32 lg:py-40">
        <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Automate your operations. Reclaim your margins and your time.
        </h1>
        <p className="mt-8 max-w-2xl text-base text-muted-foreground md:text-lg lg:text-xl">
          I spent two decades running high-volume restaurants, hospitality, real
          estate, and property management businesses. Now, I build the AI
          automations, CRM architectures, and agents that solve the exact
          operational bottlenecks I used to fight daily.
        </p>
        <a
          href="#cta"
          className={cn(
            buttonVariants({ variant: "default", size: "lg" }),
            "mt-12 h-14 px-8 text-base md:text-lg",
          )}
        >
          Audit Your Workflows
        </a>
      </div>
    </section>
  );
}
