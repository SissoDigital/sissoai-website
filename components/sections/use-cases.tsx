import {
  Building2,
  Home,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type UseCase = {
  icon: LucideIcon;
  industry: string;
  problem: string;
  build: string;
  result: string;
};

const useCases: UseCase[] = [
  {
    icon: UtensilsCrossed,
    industry: "High-Volume Restaurant & Hospitality",
    problem:
      "Front-of-house staff were overwhelmed by repetitive booking inquiries and phone calls during peak service hours.",
    build:
      "An AI voice and text agent trained strictly on property SOPs and integrated directly with the reservation system.",
    result:
      "70% reduction in manual ticket handling and zero missed inquiries during off-hours.",
  },
  {
    icon: Building2,
    industry: "Vacation Rental Management",
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
    <section className="bg-muted">
      <div className="mx-auto max-w-[1200px] px-6 py-12 md:py-20">
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Systems Built for the Trenches
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
          Real operational problems. Concrete technical solutions.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map(({ icon: Icon, industry, problem, build, result }) => (
            <Card key={industry} className="border-border bg-background">
              <CardHeader>
                <Icon
                  className="size-7 text-accent"
                  aria-hidden="true"
                  strokeWidth={1.5}
                />
                <CardTitle className="mt-4 font-display text-xl font-semibold leading-tight text-foreground md:text-2xl">
                  {industry}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <Row label="The Problem" value={problem} />
                <Row label="The Build" value={build} />
                <Row label="The Result" value={result} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
