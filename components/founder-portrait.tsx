import Image from "next/image";

import { env } from "@/lib/env";
import { cn } from "@/lib/utils";

type FounderPortraitProps = {
  className?: string;
};

/**
 * Founder portrait — when `NEXT_PUBLIC_FOUNDER_IMAGE` is set, renders that
 * image. Otherwise renders a designed founder card with monogram, live
 * status indicator, and short ops captions — a "founder trading card",
 * not a placeholder.
 */
export function FounderPortrait({ className }: FounderPortraitProps) {
  const imagePath = env.NEXT_PUBLIC_FOUNDER_IMAGE;
  const year = new Date().getFullYear();

  return (
    <div
      className={cn(
        "relative aspect-square w-full max-w-md overflow-hidden rounded-lg border border-border bg-muted ring-1 ring-secondary/30",
        className,
      )}
      aria-hidden={imagePath ? undefined : true}
    >
      {imagePath ? (
        <Image
          src={imagePath}
          alt="Portrait of Sisso, founder of Sisso AI."
          fill
          sizes="(min-width: 768px) 28rem, 100vw"
          className="object-cover"
          priority
        />
      ) : (
        <div className="relative flex h-full w-full items-center justify-center">
          {/* Background layer — soft warm radial from top-left */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--secondary)/0.18),transparent_55%)]"
          />

          {/* Top-right: LIVE indicator */}
          <div className="absolute right-4 top-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:text-xs">
            <span className="signal-dot" aria-hidden="true" />
            <span>Live</span>
          </div>

          {/* Center: S.AI monogram */}
          <span className="relative font-display text-7xl font-semibold leading-none tracking-tight text-foreground md:text-8xl">
            S<span className="text-accent">.</span>AI
          </span>

          {/* Bottom-left: ops captions */}
          <div className="absolute bottom-4 left-4 space-y-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:text-xs">
            <p>Operator · 25 Years</p>
            <p>Physical × Digital</p>
          </div>

          {/* Bottom-right: year + status */}
          <div className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:text-xs">
            {year} · Building
          </div>
        </div>
      )}
    </div>
  );
}
