import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PullQuoteProps = {
  children: ReactNode;
  eyebrow?: string;
  className?: string;
};

export function PullQuote({ children, eyebrow, className }: PullQuoteProps) {
  return (
    <figure className={cn("my-12 md:my-16", className)}>
      {eyebrow ? (
        <figcaption className="mb-3 text-xs uppercase tracking-widest text-accent">
          {eyebrow}
        </figcaption>
      ) : null}
      <blockquote className="font-display italic text-3xl leading-tight text-foreground md:text-5xl">
        {children}
      </blockquote>
    </figure>
  );
}
