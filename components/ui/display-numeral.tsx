"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type DisplayNumeralProps = {
  value: string | number;
  unit?: string;
  className?: string;
};

/**
 * Display numeral with an IntersectionObserver-driven counter animation.
 * On enter (once), the number animates from 0 → final over 1400 ms via
 * requestAnimationFrame, ease-out curve. Honors prefers-reduced-motion:
 * if reduced-motion is preferred, the final value renders instantly.
 *
 * Parses leading digits from `value` (so "70", 70, or "15hrs" → 70 / 70 / 15).
 * If the value contains no digit prefix, it renders statically.
 */
export function DisplayNumeral({
  value,
  unit,
  className,
}: DisplayNumeralProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const hasAnimatedRef = useRef(false);

  // Parse target. If the value isn't numeric, fall back to static rendering.
  const valueString = String(value);
  const target = Number.parseFloat(valueString);
  const isAnimatable = Number.isFinite(target);

  const [display, setDisplay] = useState<string>(() =>
    isAnimatable ? "0" : valueString,
  );

  useEffect(() => {
    if (!isAnimatable) return;

    const el = ref.current;
    if (!el) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) {
      setDisplay(valueString);
      hasAnimatedRef.current = true;
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || hasAnimatedRef.current) continue;
          hasAnimatedRef.current = true;
          obs.unobserve(entry.target);

          const duration = 1400;
          const start = performance.now();

          const tick = (now: number) => {
            const elapsed = now - start;
            const t = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - t, 3);
            const current = target * eased;
            // Render rounded; final tick shows exact target value
            setDisplay(t === 1 ? valueString : String(Math.round(current)));
            if (t < 1) {
              rafRef.current = requestAnimationFrame(tick);
            }
          };

          rafRef.current = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );

    obs.observe(el);
    return () => {
      obs.disconnect();
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isAnimatable, target, valueString]);

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-baseline gap-2 font-display tabular-nums text-foreground",
        className,
      )}
    >
      <span className="text-6xl font-semibold leading-none tracking-tight md:text-7xl lg:text-8xl">
        {display}
      </span>
      {unit ? (
        <span className="text-xl text-muted-foreground md:text-2xl">{unit}</span>
      ) : null}
    </div>
  );
}
