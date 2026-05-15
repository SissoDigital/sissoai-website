import { MessageCircle } from "lucide-react";

import { env } from "@/lib/env";
import { whatsAppHref } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  const href = whatsAppHref(env.NEXT_PUBLIC_WHATSAPP_NUMBER);
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Sisso on WhatsApp"
      className="fixed bottom-[max(1.5rem,calc(env(safe-area-inset-bottom)+0.5rem))] right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-[transform,box-shadow] hover:scale-105 hover:shadow-xl hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
