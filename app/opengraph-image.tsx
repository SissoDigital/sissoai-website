import { ImageResponse } from "next/og";

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
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#0F4C5C",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 200,
            fontWeight: 600,
            fontFamily: "ui-serif, Georgia, serif",
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          <span style={{ color: "#FAF6F1" }}>S</span>
          <span style={{ color: "#C2410C" }}>.</span>
          <span style={{ color: "#FAF6F1" }}>AI</span>
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 38,
            fontWeight: 400,
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
            color: "#FAF6F1",
            opacity: 0.85,
            letterSpacing: "0.01em",
            textAlign: "center",
            maxWidth: 1040,
            lineHeight: 1.3,
          }}
        >
          Operator-Led Automation &amp; CRM Studio
        </div>
      </div>
    ),
    size,
  );
}
