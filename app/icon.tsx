import { ImageResponse } from "next/og";

// Favicon. Brand monogram "S" (#1C1A17) on the PRD cream background (#FAF6F1).
// Rendered at 32×32 — favicons display down to 16×16, so we keep it bold and centered.

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#FAF6F1",
          color: "#1C1A17",
          fontSize: 26,
          fontWeight: 700,
          fontFamily: "ui-serif, Georgia, 'Times New Roman', serif",
          lineHeight: 1,
          letterSpacing: "-0.02em",
        }}
      >
        S
      </div>
    ),
    size,
  );
}
