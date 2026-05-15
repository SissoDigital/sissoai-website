import { cn } from "@/lib/utils";

type BadgeStampProps = {
  lines: string[];
  className?: string;
};

export function BadgeStamp({ lines, className }: BadgeStampProps) {
  return (
    <div
      className={cn(
        "inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-1 border-y border-border px-4 py-3 text-xs uppercase tracking-widest text-accent",
        className,
      )}
    >
      {lines.map((line, idx) => (
        <span key={line} className="inline-flex items-center gap-4">
          {line}
          {idx < lines.length - 1 ? (
            <span aria-hidden="true" className="text-border">
              ·
            </span>
          ) : null}
        </span>
      ))}
    </div>
  );
}
