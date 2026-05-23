import type { MetadataRoute } from "next";

import { env } from "@/lib/env";

export default function sitemap(): MetadataRoute.Sitemap {
  // Fall back to the canonical production origin when the env var is unset
  // so production never emits an empty <urlset>. Strip any trailing slash so
  // joined paths like `${baseUrl}/privacy` never produce a double slash.
  const rawBase = env.NEXT_PUBLIC_SITE_URL ?? "https://sissoai.com";
  const baseUrl = rawBase.replace(/\/$/, "");
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
