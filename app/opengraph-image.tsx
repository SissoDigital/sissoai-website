import { ImageResponse } from "next/og";

// PLACEHOLDER OG IMAGE.
// Brand colors (PRD §3.2): background #FAF6F1, text #1C1A17. System serif/sans
// stand in for Fraunces/Inter — replace this file with a hand-designed PNG/JPG
// in /app/ or load real font Buffers via fetch when ready.

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Sisso AI — Operator-Led Automation & CRM Studio";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#FAF6F1",
          padding: "96px",
        }}
      >
        <div
          style={{
            fontSize: 56,
            color: "#1C1A17",
            opacity: 0.55,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
            marginBottom: 32,
          }}
        >
          Sisso AI
        </div>
        <div
          style={{
            fontSize: 124,
            fontWeight: 600,
            color: "#1C1A17",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            fontFamily: "ui-serif, Georgia, 'Times New Roman', serif",
            maxWidth: 1000,
          }}
        >
          Operator-Led Automation &amp; CRM Studio.
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 36,
            color: "#1C1A17",
            opacity: 0.7,
            lineHeight: 1.4,
            maxWidth: 960,
            fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
          }}
        >
          AI automations, CRM architectures, and agents built by an operator
          with 25 years of physical business experience.
        </div>
      </div>
    ),
    size,
  );
}
