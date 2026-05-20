import { cn } from "@/lib/utils";

type SystemStatusProps = {
  className?: string;
};

/**
 * Small "SYSTEM OPERATIONAL" pill with a pulsing CTA-Green dot. Positioned
 * top-right of the Hero. Server Component — pure SVG/CSS, no JS, no state.
 * Pulse animation gated by prefers-reduced-motion in app/globals.css.
 */
export function SystemStatus({ className }: SystemStatusProps) {
  return (
    <div
      role="status"
      aria-label="System operational"
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground backdrop-blur-sm md:text-xs",
        className,
      )}
    >
      <span className="status-dot" aria-hidden="true" />
      <span>System Operational</span>
    </div>
  );
}
