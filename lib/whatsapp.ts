export function normalizeWhatsAppNumber(raw?: string): string | null {
  if (!raw) return null;
  const digits = raw.replace(/\D/g, "");
  return digits.length >= 7 ? digits : null;
}

export function whatsAppHref(raw?: string): string | null {
  const n = normalizeWhatsAppNumber(raw);
  return n ? `https://wa.me/${n}` : null;
}
