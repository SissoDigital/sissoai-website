import { MessageCircle } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { env } from "@/lib/env";
import { cn } from "@/lib/utils";
import { whatsAppHref } from "@/lib/whatsapp";

export function WhatsAppCta() {
  const href = whatsAppHref(env.NEXT_PUBLIC_WHATSAPP_NUMBER);
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        buttonVariants({ variant: "default", size: "lg" }),
        "h-14 w-full px-6 text-base md:text-lg",
      )}
    >
      <MessageCircle aria-hidden="true" className="size-5" />
      Message me directly on WhatsApp.
    </a>
  );
}
