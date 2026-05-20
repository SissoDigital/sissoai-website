import { ConnectionDiagram } from "@/components/visual/connection-diagram";

type StatItem = {
  eyebrow: string;
  text: string;
};

const items: StatItem[] = [
  { eyebrow: "Operations", text: "Built for real workflows" },
  { eyebrow: "Automation", text: "30-minute audit" },
  { eyebrow: "Intelligence", text: "AI only where it helps" },
];

export function StatStrip() {
  return (
    <section data-reveal className="bg-muted">
      <div className="mx-auto max-w-[1200px] px-6 py-10 md:py-14">
        {/* Connection diagram — packet flows OPERATIONS → AUTOMATION → INTELLIGENCE */}
        <ConnectionDiagram className="mx-auto h-16 w-full max-w-[640px] md:h-20" />

        {/* Captions aligned with the three node groups */}
        <div className="mx-auto mt-6 grid max-w-[640px] grid-cols-1 gap-y-6 border-y border-border md:grid-cols-3 md:gap-x-6 md:divide-x md:divide-y-0 md:divide-border">
          {items.map(({ eyebrow, text }) => (
            <div key={eyebrow} className="px-4 py-4 text-center md:py-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                {eyebrow}
              </p>
              <p className="mt-2 font-display text-base leading-snug text-foreground md:text-lg">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
