import {
  Building2,
  Home,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

import { DisplayNumeral } from "@/components/ui/display-numeral";
import { cn } from "@/lib/utils";

type Metric = {
  value: string;
  unit: string;
};

type UseCase = {
  icon: LucideIcon;
  industry: string;
  metric: Metric;
  problem: string;
  build: string;
  result: string;
};

const useCases: UseCase[] = [
  {
    icon: UtensilsCrossed,
    industry: "High-Volume Restaurant & Hospitality",
    metric: { value: "70", unit: "%" },
    problem:
      "Front-of-house staff were overwhelmed by repetitive booking inquiries and phone calls during peak service hours.",
    build:
      "A chatbot with an AI workflow layer, trained on operational SOPs and connected to the reservation flow.",
    result:
      "70% reduction in manual ticket handling and zero missed inquiries during off-hours.",
  },
  {
    icon: Building2,
    industry: "Vacation Rental Management",
    metric: { value: "22", unit: "%" },
    problem:
      "Severe lead leakage across multiple fragmented booking channels.",
    build:
      "A Make.com workflow routing all cross-platform inquiries into a centralized Airtable CRM with automated follow-up sequences.",
    result:
      "Response times dropped from hours to seconds, increasing booking conversions by 22%.",
  },
  {
    icon: Home,
    industry: "Real Estate Firm",
    metric: { value: "15", unit: "hrs" },
    problem:
      "Agents were spending 15 hours a week on manual data entry instead of selling.",
    build:
      "An automated lead qualification system that scores prospects and routes them directly to the right agent's CRM dashboard.",
    result:
      "15 hours saved per agent, per week. 100% focus returned to closing deals.",
  },
];

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-accent">
        {label}
      </p>
      <p className="mt-1 text-base text-foreground">{value}</p>
    </div>
  );
}

export function UseCases() {
  return (
    <section data-reveal className="bg-muted">
      <div className="mx-auto max-w-[1200px] px-6 py-12 md:py-20">
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Systems Built for the Trenches
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
          Real operational problems. Concrete technical solutions.
        </p>
        <div className="mt-12 md:mt-16">
          {useCases.map(
            ({ icon: Icon, industry, metric, problem, build, result }, idx) => (
              <article
                key={industry}
                className={cn(
                  "group py-12 md:py-16",
                  idx > 0 && "border-t border-border",
                )}
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                    {industry}
                  </p>
                  <Icon
                    className="size-5 shrink-0 text-muted-foreground transition-colors duration-300 group-hover:text-accent"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-8 grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-12 md:gap-12">
                  <div className="md:col-span-4">
                    <DisplayNumeral value={metric.value} unit={metric.unit} />
                  </div>
                  <div className="space-y-5 md:col-span-8">
                    <Row label="The Problem" value={problem} />
                    <Row label="The Build" value={build} />
                    <Row label="The Result" value={result} />
                  </div>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
