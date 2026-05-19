import { cn } from "@/lib/utils";

type AmbientFieldProps = {
  className?: string;
};

/**
 * Decorative node-network SVG layered behind the Hero headline. 16 dots in
 * an organic constellation connected by 16 hairlines, with 4 traveling data
 * pulses (CSS stroke-dashoffset animation — works in all modern browsers,
 * no SMIL). Pure SVG + CSS; no JS, no library.
 *
 * All motion is gated by `prefers-reduced-motion: no-preference` in
 * app/globals.css. Decorative, marked aria-hidden.
 */
export function AmbientField({ className }: AmbientFieldProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none select-none", className)}
    >
      <svg
        viewBox="0 30 800 300"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        {/* Static hairline connections */}
        <g
          stroke="hsl(var(--foreground))"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.12"
        >
          <line x1="60" y1="70" x2="180" y2="120" />
          <line x1="180" y1="120" x2="320" y2="60" />
          <line x1="320" y1="60" x2="460" y2="110" />
          <line x1="460" y1="110" x2="600" y2="70" />
          <line x1="600" y1="70" x2="740" y2="130" />
          <line x1="180" y1="120" x2="240" y2="210" />
          <line x1="240" y1="210" x2="380" y2="230" />
          <line x1="380" y1="230" x2="520" y2="200" />
          <line x1="520" y1="200" x2="660" y2="230" />
          <line x1="460" y1="110" x2="520" y2="200" />
          <line x1="320" y1="60" x2="380" y2="230" />
          <line x1="80" y1="230" x2="240" y2="210" />
        </g>

        {/* Traveling data pulses — 4 lines with stroke-dashoffset animation.
            stroke-dasharray creates a tiny visible segment that travels via
            animated dashoffset, simulating a packet flowing along the path. */}
        <g
          stroke="hsl(var(--accent))"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.85"
        >
          <line
            x1="60"
            y1="70"
            x2="320"
            y2="60"
            className="data-pulse-line data-pulse-1"
            pathLength="100"
            strokeDasharray="3 97"
          />
          <line
            x1="320"
            y1="60"
            x2="600"
            y2="70"
            className="data-pulse-line data-pulse-2"
            pathLength="100"
            strokeDasharray="3 97"
          />
          <line
            x1="240"
            y1="210"
            x2="520"
            y2="200"
            className="data-pulse-line data-pulse-3"
            pathLength="100"
            strokeDasharray="3 97"
          />
          <line
            x1="180"
            y1="120"
            x2="380"
            y2="230"
            className="data-pulse-line data-pulse-4"
            pathLength="100"
            strokeDasharray="3 97"
          />
        </g>

        {/* Nodes — 16 dots in organic constellation */}
        <circle cx="60" cy="70" r="3" className="signal-dot-svg signal-dot-svg-ambient signal-dot-svg-1" />
        <circle cx="180" cy="120" r="3.5" className="signal-dot-svg signal-dot-svg-ambient signal-dot-svg-2" />
        <circle cx="320" cy="60" r="3.5" className="signal-dot-svg signal-dot-svg-ambient signal-dot-svg-3" />
        <circle cx="460" cy="110" r="3" className="signal-dot-svg signal-dot-svg-ambient signal-dot-svg-4" />
        <circle cx="600" cy="70" r="3.5" className="signal-dot-svg signal-dot-svg-ambient signal-dot-svg-5" />
        <circle cx="740" cy="130" r="3" className="signal-dot-svg signal-dot-svg-ambient signal-dot-svg-6" />
        <circle cx="80" cy="230" r="2.5" className="signal-dot-svg signal-dot-svg-ambient signal-dot-svg-7" />
        <circle cx="240" cy="210" r="4" className="signal-dot-svg signal-dot-svg-ambient signal-dot-svg-1" />
        <circle cx="380" cy="230" r="3.5" className="signal-dot-svg signal-dot-svg-ambient signal-dot-svg-2" />
        <circle cx="520" cy="200" r="3" className="signal-dot-svg signal-dot-svg-ambient signal-dot-svg-3" />
        <circle cx="660" cy="230" r="3" className="signal-dot-svg signal-dot-svg-ambient signal-dot-svg-4" />
        <circle cx="140" cy="40" r="2" className="signal-dot-svg signal-dot-svg-ambient signal-dot-svg-5" />
        <circle cx="420" cy="40" r="2" className="signal-dot-svg signal-dot-svg-ambient signal-dot-svg-6" />
        <circle cx="700" cy="40" r="2" className="signal-dot-svg signal-dot-svg-ambient signal-dot-svg-7" />
        <circle cx="160" cy="270" r="2" className="signal-dot-svg signal-dot-svg-ambient signal-dot-svg-2" />
        <circle cx="580" cy="260" r="2.5" className="signal-dot-svg signal-dot-svg-ambient signal-dot-svg-4" />
      </svg>
    </div>
  );
}
