type StatItem = {
  eyebrow: string;
  text: string;
};

const items: StatItem[] = [
  { eyebrow: "Operator-led", text: "Built for real workflows" },
  { eyebrow: "30-minute audit", text: "No pitch. Direct answer." },
  { eyebrow: "Systems-first", text: "AI only where it helps" },
];

export function StatStrip() {
  return (
    <section data-reveal className="bg-muted">
      <div className="mx-auto max-w-[1200px] px-6 py-10 md:py-14">
        <div className="grid grid-cols-1 divide-y divide-border border-y border-border md:grid-cols-3 md:divide-x md:divide-y-0">
          {items.map(({ eyebrow, text }) => (
            <div key={eyebrow} className="py-5 md:px-8 md:py-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                {eyebrow}
              </p>
              <p className="mt-2 font-display text-lg leading-snug text-foreground md:text-xl">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
