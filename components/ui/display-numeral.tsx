import { cn } from "@/lib/utils";

type DisplayNumeralProps = {
  value: string | number;
  unit?: string;
  className?: string;
};

export function DisplayNumeral({
  value,
  unit,
  className,
}: DisplayNumeralProps) {
  return (
    <div
      className={cn(
        "flex items-baseline gap-2 font-display tabular-nums text-foreground",
        className,
      )}
    >
      <span className="text-6xl font-semibold leading-none tracking-tight md:text-7xl lg:text-8xl">
        {value}
      </span>
      {unit ? (
        <span className="text-xl text-muted-foreground md:text-2xl">{unit}</span>
      ) : null}
    </div>
  );
}
