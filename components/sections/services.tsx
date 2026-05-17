type Service = {
  number: string;
  title: string;
  body: string;
};

const services: Service[] = [
  {
    number: "01",
    title: "Automation with Make.com",
    body: "Orchestrating workflows across disparate software. We eliminate manual data entry and connect your operational tools to run on autopilot.",
  },
  {
    number: "02",
    title: "AI Automation",
    body: "Integrating AI into daily workflows to handle repetitive cognitive tasks, allowing your business to scale output without scaling headcount.",
  },
  {
    number: "03",
    title: "CRM Architecture",
    body: "Custom Airtable builds designed for physical operations. We create a single, unbreakable source of truth for your leads, guests, and daily management.",
  },
  {
    number: "04",
    title: "AI Agents",
    body: "Deploying autonomous digital workers capable of executing multi-step processes, research, and operational tasks 24/7.",
  },
  {
    number: "05",
    title: "Chatbots & Triage",
    body: "Chatbots for WhatsApp, Instagram, Facebook Messenger, and website conversations — built to answer, qualify, route, and follow up without adding manual work to your team.",
  },
  {
    number: "06",
    title: "AI Audit & Enablement",
    body: "AI audits, implementation planning, and team enablement to help companies identify the right tools, map the right workflows, and turn adoption into working business systems.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-12 bg-grid bg-background"
    >
      <div className="mx-auto max-w-[1200px] px-6 py-12 md:py-20">
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
          How We Build Leverage
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 md:gap-x-14">
          {services.map(({ number, title, body }, idx) => (
            <article
              key={number}
              className="group relative border-t border-border py-8 transition-colors duration-300 hover:bg-foreground/[0.025] md:py-10"
            >
              <div className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="signal-dot"
                  style={{ animationDelay: `${idx * 0.3}s` }}
                />
                <span className="font-display text-2xl font-semibold tabular-nums text-accent md:text-3xl">
                  {number}
                </span>
                <span
                  aria-hidden="true"
                  className="h-px flex-1 bg-border transition-colors duration-500 group-hover:bg-accent/60"
                />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                {title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
