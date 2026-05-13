\`\`\`markdown  
\# Sisso AI \- Project Brain (CLAUDE.md)

\#\# 1\. Project Overview & Positioning  
\- \*\*Project:\*\* Sisso AI Website (AI Automations, CRM Studio, Chatbots).  
\- \*\*Target Audience:\*\* 1-50 person operations in HoReCa, Property Management, and Real Estate.  
\- \*\*Persona:\*\* Sisso is a seasoned operator (25+ years scaling physical businesses), not a generic coder.   
\- \*\*Tone:\*\* Direct, authoritative, fluff-free, systems-thinking (Sinek \+ Martell \+ Hormozi). Zero AI hype. Focus on hours saved and margins increased.  
\- \*\*Core Services:\*\* Make.com Automations, AI Automation, CRM (Airtable), AI Agents, Chatbots (Text-only triage & booking).

\#\# 2\. STRICT PRIVACY RULES (CRITICAL)  
\- \*\*NO LOCATIONS:\*\* Never mention specific geographical locations, cities, or regions.  
\- \*\*NO BUSINESS NAMES:\*\* Never use the real names of Sisso's physical businesses.  
\- \*\*ABSTRACTION ONLY:\*\* Use abstract terms (e.g., "high-volume hospitality", "international real estate").

\#\# 3\. Security & Environment Variables (CRITICAL)  
\- \*\*NO HARDCODING:\*\* NEVER write API Keys, Tokens, or Webhook URLs (e.g., Make.com, Green API) in the chat or hardcode them in the codebase.  
\- \*\*.env ONLY:\*\* All sensitive data must be stored in \`.env.local\` (for local dev) or Vercel Environment Variables (for production).  
\- \*\*GITHUB:\*\* \`.env\` files MUST be in \`.gitignore\` and NEVER pushed to GitHub. If a key is leaked in chat, it must be revoked immediately.

\#\# 4\. Tech Stack & Architecture  
\- \*\*Framework:\*\* Next.js (App Router). Use React Server Components (RSC) by default.  
\- \*\*Client Components:\*\* Use \`"use client"\` strictly at leaf nodes (e.g., forms, toggles).  
\- \*\*Language:\*\* TypeScript (Strict mode).  
\- \*\*Styling:\*\* Tailwind CSS.  
\- \*\*UI Components:\*\* shadcn/ui. No unauthorized external libraries.  
\- \*\*Hosting & Repo:\*\* Vercel, GitHub.  
\- \*\*Data:\*\* Hardcoded / Local Markdown (No CMS).  
\- \*\*Lead Capture:\*\* Client Form \-\> Next.js Server Action \-\> Make.com Webhook (URL via \`.env\`) \+ Direct WhatsApp link.

\#\# 5\. Design System (Anthropic Aesthetic)  
\- \*\*Colors (Tailwind):\*\*   
  \- Backgrounds: Primary \`\#FAF6F1\`, Secondary Alt \`\#F2EBDF\`  
  \- Text: Primary \`\#1C1A17\`, Secondary \`\#5C5750\`  
  \- Accents: Terracotta \`\#C2410C\`, CTA Green \`\#0F4C5C\`, Gold Rare \`\#D4A574\`  
\- \*\*Typography (next/font/google):\*\*   
  \- Body & H3+: \`Inter\` (Body: 18px/16px, Line-height: 1.6)  
  \- Headings H1-H2: \`Fraunces\` (Line-height: 1.2)  
  \- Quotes: \`Fraunces Italic\`  
\- \*\*Layout:\*\* Max-width 1200px. Section padding: Desktop 80px, Mobile 48px.

\#\# 6\. Claude Workspace Structure (.claude)  
To optimize context window and token usage, detailed instructions are modularized. Claude should refer to the \`.claude/\` directory for specific tasks:  
\- \`.claude/agents/\` \- Personas (e.g., \`copywriter.md\`, \`ui-developer.md\`).  
\- \`.claude/skills/\` \- Deep-dive technical guides (e.g., \`make-webhook-integration.md\`, \`shadcn-customization.md\`).  
\- \`.claude/commands/\` \- Custom scripts and workflow commands.  
\`\`\`

