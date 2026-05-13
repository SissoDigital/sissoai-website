import Image from "next/image";

import { env } from "@/lib/env";
import { cn } from "@/lib/utils";

type FounderPortraitProps = {
  className?: string;
};

export function FounderPortrait({ className }: FounderPortraitProps) {
  const imagePath = env.NEXT_PUBLIC_FOUNDER_IMAGE;

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
        <div className="flex h-full w-full items-center justify-center">
          <span
            className="font-display text-[40vw] leading-none text-foreground md:text-[12rem]"
            style={{ letterSpacing: "-0.04em" }}
          >
            S
          </span>
        </div>
      )}
    </div>
  );
}
