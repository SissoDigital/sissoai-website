import { cn } from "@/lib/utils";

type ConnectionDiagramProps = {
  className?: string;
};

/**
 * Small horizontal diagram visualizing OPERATIONS → AUTOMATION → INTELLIGENCE.
 * Three node groups connected by hairlines, with a small packet that flows
 * left → right along the central path via stroke-dashoffset animation.
 * Server Component, pure SVG + CSS. Decorative; labels rendered as text
 * captions next to the diagram, not inside SVG, for accessibility.
 */
export function ConnectionDiagram({ className }: ConnectionDiagramProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none select-none", className)}
    >
      <svg
        viewBox="0 0 600 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        {/* Static spine — faint hairline from left cluster center → right cluster center */}
        <g
          stroke="hsl(var(--foreground))"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.2"
        >
          {/* Left cluster lines into the path */}
          <line x1="40" y1="30" x2="100" y2="40" />
          <line x1="40" y1="50" x2="100" y2="40" />
          <line x1="60" y1="40" x2="100" y2="40" />
          {/* Center spine */}
          <line x1="100" y1="40" x2="300" y2="40" />
          <line x1="300" y1="40" x2="500" y2="40" />
          {/* Right cluster lines off the path */}
          <line x1="500" y1="40" x2="560" y2="30" />
          <line x1="500" y1="40" x2="560" y2="50" />
          <line x1="500" y1="40" x2="540" y2="40" />
        </g>

        {/* Traveling pulse — packet flowing left → right along the spine */}
        <line
          x1="100"
          y1="40"
          x2="500"
          y2="40"
          stroke="hsl(var(--accent))"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="data-pulse-line data-pulse-1"
          pathLength="100"
          strokeDasharray="4 96"
          opacity="0.9"
        />

        {/* Nodes — left cluster (OPERATIONS) */}
        <circle cx="40" cy="30" r="2.5" className="signal-dot-svg signal-dot-svg-1" />
        <circle cx="40" cy="50" r="2.5" className="signal-dot-svg signal-dot-svg-2" />
        <circle cx="60" cy="40" r="2" className="signal-dot-svg signal-dot-svg-3" />

        {/* Center node (AUTOMATION) — larger */}
        <circle cx="300" cy="40" r="5" className="signal-dot-svg signal-dot-svg-4" />
        <circle cx="300" cy="40" r="8" fill="none" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.25" />

        {/* Right cluster (INTELLIGENCE) */}
        <circle cx="540" cy="40" r="2" className="signal-dot-svg signal-dot-svg-5" />
        <circle cx="560" cy="30" r="2.5" className="signal-dot-svg signal-dot-svg-6" />
        <circle cx="560" cy="50" r="2.5" className="signal-dot-svg signal-dot-svg-7" />
      </svg>
    </div>
  );
}
