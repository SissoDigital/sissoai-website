import Link from "next/link";

import { CONTACT, SOCIAL_LINKS } from "@/lib/social";

// Inline brand glyphs — our installed lucide-react v1 fork does not ship
// trademark brand icons, so we render minimal, accessible SVG marks here
// (no new dependency, no asset files). 24×24 viewBox, single path, current
// color so they inherit text-color hover states.

type IconProps = { className?: string };

function LinkedInIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function TwitterIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YoutubeIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const SOCIAL_ICONS = [
  { href: SOCIAL_LINKS.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: SOCIAL_LINKS.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: SOCIAL_LINKS.twitter, label: "Twitter/X", Icon: TwitterIcon },
  { href: SOCIAL_LINKS.youtube, label: "YouTube", Icon: YoutubeIcon },
] as const;

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#use-cases", label: "Use Cases" },
  { href: "#about", label: "About" },
  { href: "#cta", label: "Contact" },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-foreground text-background/80">
      <div className="mx-auto max-w-[1200px] px-6 py-14 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-10">
          {/* Column 1 — Brand */}
          <div className="space-y-4">
            <div className="font-display text-3xl font-semibold leading-none tracking-tight text-background">
              S<span className="text-accent">.</span>AI
            </div>
            <p className="text-sm leading-relaxed text-background/70">
              Operator-led automation &amp; AI systems.
            </p>
            <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-background/60">
              <span className="status-dot" aria-hidden="true" />
              <span>System Operational</span>
            </div>
          </div>

          {/* Column 2 — Direct */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-accent">
              Direct
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${CONTACT.emailPrimary}`}
                  className="text-background/80 transition-colors hover:text-background"
                >
                  {CONTACT.emailPrimary}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.emailSecondary}`}
                  className="text-background/80 transition-colors hover:text-background"
                >
                  {CONTACT.emailSecondary}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="text-background/80 transition-colors hover:text-background"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/80 transition-colors hover:text-background"
                >
                  Message on WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 — Navigate */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-accent">
              Navigate
            </h3>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-background/80 transition-colors hover:text-background"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Connect */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-accent">
              Connect
            </h3>
            <div className="flex flex-row items-center gap-4">
              {SOCIAL_ICONS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href === "#" ? undefined : "_blank"}
                  rel={href === "#" ? undefined : "noopener noreferrer"}
                  className="text-background/70 transition-colors hover:text-accent"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-background/10 pt-6 text-xs text-background/60 md:flex-row md:items-center">
          <p>© {year} Sisso AI. All rights reserved.</p>
          <p className="flex items-center gap-3">
            <Link
              href="/privacy"
              className="transition-colors hover:text-background"
            >
              Privacy
            </Link>
            <span aria-hidden="true" className="text-background/30">
              ·
            </span>
            <Link
              href="/terms"
              className="transition-colors hover:text-background"
            >
              Terms
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
