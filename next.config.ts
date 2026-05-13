import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve the brand monogram from /favicon.ico for legacy browsers and
  // crawlers that hit the conventional path directly. Modern clients still
  // pick up <link rel="icon" href="/icon"> from app/icon.tsx via metadata.
  async rewrites() {
    return [
      {
        source: "/favicon.ico",
        destination: "/icon",
      },
    ];
  },
};

export default nextConfig;
