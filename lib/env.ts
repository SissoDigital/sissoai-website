function read(value: string | undefined): string | undefined {
  if (value === undefined) return undefined;
  const trimmed = value.trim();
  return trimmed === "" ? undefined : trimmed;
}

export const env = {
  MAKE_WEBHOOK_URL: read(process.env.MAKE_WEBHOOK_URL),
  NEXT_PUBLIC_WHATSAPP_NUMBER: read(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER),
  NEXT_PUBLIC_CAL_LINK: read(process.env.NEXT_PUBLIC_CAL_LINK),
  NEXT_PUBLIC_SITE_URL: read(process.env.NEXT_PUBLIC_SITE_URL),
  NEXT_PUBLIC_FOUNDER_IMAGE: read(process.env.NEXT_PUBLIC_FOUNDER_IMAGE),
};
