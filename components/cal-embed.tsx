"use client";

import dynamic from "next/dynamic";

import { CalEmbedBoundary } from "@/components/cal-embed-boundary";
import { CalFallbackButton } from "@/components/cal-fallback-button";
import { env } from "@/lib/env";

const Cal = dynamic(
  () => import("@calcom/embed-react").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="rounded-lg border border-border bg-muted/30 px-6 py-10 text-center text-sm text-muted-foreground">
        Loading scheduler…
      </div>
    ),
  },
);

function calSlug(raw: string): string {
  return raw.replace(/^https?:\/\//, "").replace(/^cal\.com\//, "");
}

function calExternalHref(raw: string): string {
  if (/^https?:\/\//.test(raw)) return raw;
  return `https://${raw}`;
}

export function CalEmbed() {
  const link = env.NEXT_PUBLIC_CAL_LINK;

  if (!link) {
    return <CalFallbackButton href={null} />;
  }

  const slug = calSlug(link);
  const href = calExternalHref(link);

  return (
    <CalEmbedBoundary fallback={<CalFallbackButton href={href} />}>
      <div className="overflow-hidden rounded-lg border border-border bg-background">
        <Cal
          calLink={slug}
          style={{ width: "100%", height: "100%", minHeight: "600px" }}
          config={{ layout: "month_view" }}
        />
      </div>
    </CalEmbedBoundary>
  );
}
