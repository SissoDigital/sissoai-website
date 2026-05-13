import { CalendarClock } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  href: string | null;
  label?: string;
};

export function CalFallbackButton({
  href,
  label = "Book a 30-min mapping call",
}: Props) {
  if (!href) {
    return (
      <div className="rounded-lg border border-dashed border-border bg-muted/40 px-6 py-10 text-center">
        <CalendarClock
          aria-hidden="true"
          className="mx-auto size-8 text-accent"
          strokeWidth={1.5}
        />
        <p className="mt-4 font-display text-lg font-semibold text-foreground">
          Scheduling will open soon.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Use WhatsApp or the form in the meantime.
        </p>
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        buttonVariants({ variant: "outline", size: "lg" }),
        "h-14 w-full px-6 text-base md:text-lg",
      )}
    >
      <CalendarClock aria-hidden="true" className="size-5" />
      {label}
    </a>
  );
}
