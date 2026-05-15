import { cn } from "@/lib/utils";

type AmbientFieldProps = {
  className?: string;
};

/**
 * Decorative node-network SVG used in the Hero. 7 pulsing terracotta dots
 * connected by faint hairlines — reads as an abstract "system" signature,
 * not a robot or sparkle. Pure SVG + CSS; no JS, no library.
 *
 * Pulse animations are defined in app/globals.css and gated by
 * prefers-reduced-motion: no-preference. Users who prefer reduced motion
 * see a static composition.
 */
export function AmbientField({ className }: AmbientFieldProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none select-none", className)}
    >
      <svg
        viewBox="0 0 280 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <g
          stroke="hsl(var(--foreground))"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.2"
        >
          <line x1="30" y1="40" x2="100" y2="60" />
          <line x1="100" y1="60" x2="180" y2="40" />
          <line x1="180" y1="40" x2="250" y2="60" />
          <line x1="100" y1="60" x2="140" y2="95" />
          <line x1="180" y1="40" x2="140" y2="95" />
          <line x1="60" y1="95" x2="140" y2="95" />
          <line x1="140" y1="95" x2="220" y2="95" />
        </g>
        <circle cx="30" cy="40" r="3" className="signal-dot-svg signal-dot-svg-1" />
        <circle cx="100" cy="60" r="3.5" className="signal-dot-svg signal-dot-svg-2" />
        <circle cx="180" cy="40" r="3" className="signal-dot-svg signal-dot-svg-3" />
        <circle cx="250" cy="60" r="3" className="signal-dot-svg signal-dot-svg-4" />
        <circle cx="60" cy="95" r="3" className="signal-dot-svg signal-dot-svg-5" />
        <circle cx="140" cy="95" r="3.5" className="signal-dot-svg signal-dot-svg-6" />
        <circle cx="220" cy="95" r="3" className="signal-dot-svg signal-dot-svg-7" />
      </svg>
    </div>
  );
}
