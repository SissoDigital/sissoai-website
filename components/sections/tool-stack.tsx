import { cn } from "@/lib/utils";

const TOOLS = [
  "Make",
  "Airtable",
  "ManyChat",
  "Green API",
  "WhatsApp",
  "OpenAI",
  "Claude",
  "Google AI",
  "Anthropic",
  "Vercel",
  "Cursor",
  "GitHub",
  "Google Workspace",
  "Perplexity",
  "WordPress",
  "Fillout",
];

function Chip({ name, className }: { name: string; className?: string }) {
  return (
    <span
      className={cn(
        "shrink-0 px-6 font-mono text-sm text-muted-foreground",
        className,
      )}
    >
      {name}
    </span>
  );
}

function Separator() {
  return (
    <span aria-hidden="true" className="shrink-0 text-border">
      ·
    </span>
  );
}

/**
 * Slow horizontal marquee of tool wordmark chips — "BUILT WITH" eyebrow.
 * Pure CSS animation (no JS). The chip list is rendered twice so the loop
 * is seamless. Honors prefers-reduced-motion via a fallback class that
 * freezes the strip and centers the first 8 chips.
 *
 * Section padding intentionally smaller than other sections — this reads
 * as a connective strip between Hero and Problem.
 */
export function ToolStack() {
  return (
    <section
      aria-label="Tool stack"
      className="bg-background py-10 md:py-14"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="text-center text-sm uppercase tracking-widest text-accent">
          We Build With
        </p>
      </div>

      {/* Motion-on: marquee. Hidden when prefers-reduced-motion: reduce. */}
      <div
        className="mt-6 overflow-hidden motion-reduce:hidden [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]"
      >
        <div className="flex w-max items-center gap-0 animate-[marquee_55s_linear_infinite]">
          {/* First copy */}
          {TOOLS.map((name, i) => (
            <span key={`a-${name}`} className="inline-flex items-center">
              <Chip name={name} />
              {i < TOOLS.length - 1 ? <Separator /> : null}
            </span>
          ))}
          <Separator />
          {/* Second copy — seamless loop via translateX(-50%) */}
          {TOOLS.map((name, i) => (
            <span key={`b-${name}`} className="inline-flex items-center">
              <Chip name={name} />
              {i < TOOLS.length - 1 ? <Separator /> : null}
            </span>
          ))}
        </div>
      </div>

      {/* Reduced-motion fallback: static row, first 8 chips centered */}
      <div className="mx-auto mt-6 hidden max-w-[1200px] flex-wrap items-center justify-center gap-x-0 gap-y-2 px-6 motion-reduce:flex">
        {TOOLS.slice(0, 8).map((name, i) => (
          <span key={`s-${name}`} className="inline-flex items-center">
            <Chip name={name} />
            {i < 7 ? <Separator /> : null}
          </span>
        ))}
      </div>
    </section>
  );
}
