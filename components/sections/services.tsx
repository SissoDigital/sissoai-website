import {
  Bot,
  BrainCircuit,
  Database,
  MessageSquare,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Service = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const services: Service[] = [
  {
    icon: Workflow,
    title: "Automation with Make.com",
    body: "Orchestrating workflows across disparate software. We eliminate manual data entry and connect your operational tools to run on autopilot.",
  },
  {
    icon: BrainCircuit,
    title: "AI Automation",
    body: "Integrating AI into daily workflows to handle repetitive cognitive tasks, allowing your business to scale output without scaling headcount.",
  },
  {
    icon: Database,
    title: "CRM Architecture",
    body: "Custom Airtable builds designed for physical operations. We create a single, unbreakable source of truth for your leads, guests, and daily management.",
  },
  {
    icon: Bot,
    title: "AI Agents",
    body: "Deploying autonomous digital workers capable of executing multi-step processes, research, and operational tasks 24/7.",
  },
  {
    icon: MessageSquare,
    title: "Chatbots & Triage",
    body: "Intelligent front-line triage. Qualifying leads, answering customer FAQs, and booking appointments instantly via text and messaging platforms.",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-12 bg-background">
      <div className="mx-auto max-w-[1200px] px-6 py-12 md:py-20">
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
          How We Build Leverage
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, body }) => (
            <Card
              key={title}
              className="border-border bg-background transition-colors hover:bg-muted/30"
            >
              <CardHeader>
                <Icon
                  className="size-7 text-accent"
                  aria-hidden="true"
                  strokeWidth={1.5}
                />
                <CardTitle className="mt-4 font-display text-xl font-semibold leading-tight text-foreground md:text-2xl">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
