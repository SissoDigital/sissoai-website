import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";

import { Toaster } from "@/components/ui/sonner";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { env } from "@/lib/env";
import { professionalServiceJsonLd } from "@/lib/jsonld";

import { fraunces, inter } from "./fonts";
import "./globals.css";

const SITE_NAME = "Sisso AI";
const SITE_TITLE = "Sisso AI | Operator-Led Automation & CRM Studio";
const SITE_DESCRIPTION =
  "Stop buying software. Start building leverage. AI automations, CRM architectures, and agents built by an operator with 25 years of physical business experience.";

export const metadata: Metadata = {
  ...(env.NEXT_PUBLIC_SITE_URL
    ? { metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL) }
    : {}),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    locale: "en_US",
    ...(env.NEXT_PUBLIC_SITE_URL ? { url: env.NEXT_PUBLIC_SITE_URL } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAF6F1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = professionalServiceJsonLd(env.NEXT_PUBLIC_SITE_URL);

  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <WhatsAppFloat />
        <Toaster position="top-right" richColors />
        <Analytics />
      </body>
    </html>
  );
}
