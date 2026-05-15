import { cn } from "@/lib/utils";

type IndustryPillsProps = {
  pills: string[];
  className?: string;
};

export function IndustryPills({ pills, className }: IndustryPillsProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-muted-foreground",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="hidden h-px w-8 bg-border sm:block"
      />
      <ul className="flex list-none flex-wrap items-center justify-center gap-x-3 gap-y-2 p-0">
        {pills.map((pill, idx) => (
          <li key={pill} className="flex items-center gap-3">
            <span>{pill}</span>
            {idx < pills.length - 1 ? (
              <span aria-hidden="true" className="text-border">
                ·
              </span>
            ) : null}
          </li>
        ))}
      </ul>
      <span
        aria-hidden="true"
        className="hidden h-px w-8 bg-border sm:block"
      />
    </div>
  );
}
