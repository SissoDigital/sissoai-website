"use server";

import { env } from "@/lib/env";
import { leadSchema, type LeadInput } from "@/lib/schema";

export type SubmitLeadResult =
  | { ok: true }
  | { ok: false; error: "validation" | "not_configured" | "delivery" };

export async function submitLead(input: LeadInput): Promise<SubmitLeadResult> {
  const parsed = leadSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "validation" };
  }

  const webhookUrl = env.MAKE_WEBHOOK_URL;
  if (!webhookUrl) {
    if (process.env.NODE_ENV !== "production") {
      // Text-only diagnostic. Never includes any field values.
      console.warn(
        "[contact-form] MAKE_WEBHOOK_URL is not set; form submission skipped.",
      );
    }
    return { ok: false, error: "not_configured" };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: parsed.data.name,
        email: parsed.data.email,
        businessType: parsed.data.businessType,
        bottleneck: parsed.data.bottleneck,
        source: "SissoAI_Website",
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      // Only the status code is logged — no payload, no PII.
      console.error("[contact-form] delivery failed", {
        status: response.status,
      });
      return { ok: false, error: "delivery" };
    }

    return { ok: true };
  } catch {
    console.error("[contact-form] delivery failed", { status: "exception" });
    return { ok: false, error: "delivery" };
  }
}
