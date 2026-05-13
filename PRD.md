\# Product Requirements Document (PRD): Sisso AI One-Pager  
\*\*Optimized for Claude Code & Vibe Coding\*\*

\#\# 1\. Executive Summary  
\*\*Project:\*\* Sisso AI Website (One-Pager)  
\*\*Objective:\*\* Build a high-authority, high-conversion landing page for an AI Automation and CRM Studio.   
\*\*Target Audience:\*\* Founders and operators of 1-50 person companies in HoReCa (Hotel/Restaurant/Café), Property Management, and Real Estate.  
\*\*Core Differentiator:\*\* "Founder and Operator, not coder." Sisso brings 25+ years of physical business experience to AI automation. He understands the operational bleeding first, then applies the technical tourniquet.  
\*\*Tech Stack:\*\* Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui, Vercel, Make.com Webhook (for form). No CMS.  
\*   \*\*IN SCOPE:\*\* Single long-scroll landing page, static hardcoded content, \*\*Direct WhatsApp integration (Floating button \+ CTA links)\*\*, Cal.com widget integration, functional contact form connected to Make.com webhook, basic SEO metadata, Vercel Analytics.t form connected to Make.com webhook, basic SEO metadata, Vercel Analytics.  
Semantic HTML5 structure and JSON-LD Schema Markup (ProfessionalService) optimized for AEO (Answer Engine Optimization) so LLMs can easily crawl and index the business offering.  
\*   \*\*OUT OF SCOPE (Do not build):\*\* Content Management System (CMS), Blog, User Authentication/Login, Multi-page routing, Complex scroll animations (keep it fast and static), Database setup (e.g., Prisma/Supabase).

\---

\#\# 2\. Strategic Positioning & Voice Guide  
\*   \*\*Tone:\*\* Calm conviction, absolute authority, zero fluff. (Simon Sinek's clarity \+ Dan Martell's operator authority \+ Alex Hormozi's direct offer).  
\*   \*\*Perspective:\*\* First-person ("I", "my") when speaking about experience; direct address ("you", "your") when speaking to the client's problem.  
\*   \*\*Vocabulary:\*\* Use specific business verbs (map, audit, scale, eliminate, route). Zero technical jargon. Zero AI hype. Speak in terms of hours saved, errors eliminated, and revenue captured.  
\*   \*\*STRICT PRIVACY RULES (CRITICAL):\*\*  
    \*   \*\*NO LOCATIONS:\*\* Never mention specific geographical locations, cities, or regions.  
    \*   \*\*NO BUSINESS NAMES:\*\* Never use the real names of Sisso's physical businesses.  
    \*   \*\*ABSTRACTION ONLY:\*\* All references to physical businesses or real estate must remain completely abstract (e.g., "high-volume hospitality," "international real estate portfolio," "multi-unit property management").

\---

\#\# 3\. Visual Design System & Typography  
\*This section overrides default shadcn/ui styling. Implement these exact values in \`tailwind.config.ts\` and \`globals.css\`.\*

\#\#\# 3.1. Typography (\`next/font/google\`)  
\*   \*\*Primary (Body & H3+):\*\* \`Inter\`  
    \*   Body: Weight 400\. Desktop 18px (\`text-lg\`), Mobile 16px (\`text-base\`). Line-height 1.6 (\`leading-relaxed\`).  
    \*   H3/H4: Weight 600\. Line-height 1.2 (\`leading-tight\`).  
\*   \*\*Secondary (Headings H1-H2):\*\* \`Fraunces\`  
    \*   Weight 600\. Line-height 1.2 (\`leading-tight\`).  
    \*   H1: Desktop 56px (\`text-5xl\`/\`text-6xl\`), Mobile 36px (\`text-4xl\`).  
    \*   H2: Desktop 42px (\`text-4xl\`/\`text-5xl\`), Mobile 28px (\`text-2xl\`/\`text-3xl\`).  
\*   \*\*Accent (Quotes):\*\* \`Fraunces\` (Italic)  
    \*   Weight 400\. Desktop 22px (\`text-xl\`), Mobile 18px (\`text-lg\`).

\#\#\# 3.2. Color Palette  
\*   \*\*Primary Background:\*\* \`\#FAF6F1\`  
\*   \*\*Secondary Section Alt:\*\* \`\#F2EBDF\`  
\*   \*\*Text Primary:\*\* \`\#1C1A17\`  
\*   \*\*Text Secondary:\*\* \`\#5C5750\`  
\*   \*\*Terracotta Accent:\*\* \`\#C2410C\`  
\*   \*\*CTA Green (Primary Buttons):\*\* \`\#0F4C5C\`  
\*   \*\*Gold Rare:\*\* \`\#D4A574\`

\#\#\# 3.3. Spacing, Layout & Mobile Responsiveness  
\*   \*\*Container Max-Width:\*\* 1200px (\`max-w-screen-xl\`).  
\*   \*\*Section Padding:\*\* Desktop 80px (\`py-20\`), Mobile 48px (\`py-12\`).  
\*   \*\*Mobile Grids (Strict Rule):\*\* All multi-column layouts (Services, Use Cases) MUST default to 1 column on mobile (\`grid-cols-1\`), expanding to 2 or 3 columns only on \`md\` and \`lg\` breakpoints.

\---

\#\# 4\. Full Copy Deck & Page Structure  
\*Instruct Claude Code to use this exact copy. Do not use Lorem Ipsum.\*

\#\#\# Section 1: Hero  
\*\*Layout:\*\* Centered, massive whitespace, highly focused. Background: \`\#FAF6F1\`.  
\*\*Headline (Fraunces):\*\* Automate your operations. Reclaim your margins and your time.  
\*\*Sub-headline (Inter):\*\* I spent two decades running high-volume restaurants, hospitality, real estate, and property management businesses. Now, I build the AI automations, CRM architectures, and agents that solve the exact operational bottlenecks I used to fight daily.  
\*\*Primary CTA Button (CTA Green):\*\* Audit Your Workflows  
\*(Button smooth-scrolls to the CTA section at the bottom)\*

\#\#\# Section 2: The Problem  
\*\*Layout:\*\* Left-aligned text block, stark and readable. Background: \`\#F2EBDF\`.  
\*\*Headline (Fraunces):\*\* Most AI agencies are run by coders. I am an operator.  
\*\*Body Copy (Inter):\*\*   
They sell you shiny toys. They don't know what it costs when a front-desk agent misses a booking, when a restaurant is bleeding margin on manual inventory, or when a real estate lead goes cold after five minutes. I do. 

You don't need more technology. You need fewer bottlenecks. You need systems that connect your fragmented tools so data moves without human hands. You need your time back.

\#\#\# Section 3: Services Overview  
\*\*Layout:\*\* Responsive grid (\`grid-cols-1 md:grid-cols-2 lg:grid-cols-3\`).  
\*\*Section Headline (Fraunces):\*\* How We Build Leverage

\*\*Card 1:\*\*  
\*Title:\* Automation with Make.com  
\*Body:\* Orchestrating workflows across disparate software. We eliminate manual data entry and connect your operational tools to run on autopilot.

\*\*Card 2:\*\*  
\*Title:\* AI Automation  
\*Body:\* Integrating AI into daily workflows to handle repetitive cognitive tasks, allowing your business to scale output without scaling headcount.

\*\*Card 3:\*\*  
\*Title:\* CRM Architecture  
\*Body:\* Custom Airtable builds designed for physical operations. We create a single, unbreakable source of truth for your leads, guests, and daily management.

\*\*Card 4:\*\*  
\*Title:\* AI Agents  
\*Body:\* Deploying autonomous digital workers capable of executing multi-step processes, research, and operational tasks 24/7.

\*\*Card 5:\*\*  
\*Title:\* Chatbots & Triage  
\*Body:\* Intelligent front-line triage. Qualifying leads, answering customer FAQs, and booking appointments instantly via text and messaging platforms.

\#\#\# Section 4: Trust & Use Cases  
\*\*Layout:\*\* 3 horizontal cards or a clean list format. Background: \`\#F2EBDF\`.  
\*\*Section Headline (Fraunces):\*\* Systems Built for the Trenches  
\*\*Sub-headline (Inter):\*\* Real operational problems. Concrete technical solutions.

\*\*Use Case 1:\*\*  
\*Industry:\* High-Volume Restaurant & Hospitality  
\*The Problem:\* Front-of-house staff were overwhelmed by repetitive booking inquiries and phone calls during peak service hours.  
\*The Build:\* An AI voice and text agent trained strictly on property SOPs and integrated directly with the reservation system.  
\*The Result:\* 70% reduction in manual ticket handling and zero missed inquiries during off-hours.

\*\*Use Case 2:\*\*  
\*Industry:\* Vacation Rental Management  
\*The Problem:\* Severe lead leakage across multiple fragmented booking channels.  
\*The Build:\* A Make.com workflow routing all cross-platform inquiries into a centralized Airtable CRM with automated follow-up sequences.  
\*The Result:\* Response times dropped from hours to seconds, increasing booking conversions by 22%.

\*\*Use Case 3:\*\*  
\*Industry:\* Real Estate Firm  
\*The Problem:\* Agents were spending 15 hours a week on manual data entry instead of selling.  
\*The Build:\* An automated lead qualification system that scores prospects and routes them directly to the right agent's CRM dashboard.  
\*The Result:\* 15 hours saved per agent, per week. 100% focus returned to closing deals.

\#\#\# Section 5: Credibility (About Sisso)  
\*\*Layout:\*\* Two columns (\`grid-cols-1 md:grid-cols-2\`). Left: Clean, professional headshot (or abstract geometric placeholder). Right: Text.  
\*\*Headline (Fraunces):\*\* Built by an Entrepreneur, for Entrepreneurs.  
\*\*Body Copy (Inter):\*\*  
My name is Sisso. Over the last 25 years, I have built, scaled, and operated physical businesses across restaurants, international real estate, and property management. 

I didn't learn business operations in a coding bootcamp. I learned it in the trenches. Sisso AI is the direct translation of that experience into technology. I build the systems I wish I had ten years ago. I understand your business model first, and write the automations second.

\#\#\# Section 6: Primary CTA, Contact Form & WhatsApp  
\*\*Layout:\*\* Two columns (\`grid-cols-1 lg:grid-cols-2\`). Left: Cal.com embed \+ WhatsApp Link. Right: Direct Contact Form.  
\*\*Section Headline (Fraunces):\*\* Let's map your bottlenecks.  
\*\*Section Sub-headline (Inter):\*\* In 30 minutes, I will map your highest-leverage automation opportunity. No pitch. If there is no fit, I will tell you immediately.

\*\*\*\*Left Column (Direct Contact & Book a Call):\*\*  
\*Action 1 (Primary):\* A massive, highly visible WhatsApp button: "Message me directly on WhatsApp." (Link to \`https://wa.me/YOUR\_NUMBER\`). This is for immediate, frictionless communication.  
\*Action 2 (Secondary):\* \*\[Embed Cal.com widget here\]\* for those who prefer to schedule a formal meeting.

\*\*Right Column (Send a Message):\*\*  
\*Headline:\* Not ready for a call? Tell me what's broken.  
\*Form Fields:\*  
\- Name (Input)  
\- Email (Input)  
\- Business Type (Input \- e.g., Restaurant, Real Estate)  
\- What is your biggest operational bottleneck right now? (Textarea)  
\*Submit Button (CTA Green):\* Send to Sisso

\#\#\# Footer  
\*\*Copy:\*\* © \[Current Year\] Sisso AI. All rights reserved. Operator-led automation.

\---

\#\# 5\. Technical Architecture & Development Rules

\#\#\# 5.1. Core Stack & Rules  
\*   \*\*Framework:\*\* Next.js 14+ (App Router), TypeScript (Strict Mode).  
\*   \*\*Component Strategy:\*\* Use \*\*React Server Components (RSC) by default\*\*.   
\*   \*\*Client Components:\*\* Use \`"use client"\` strictly at the leaf nodes of the component tree, and only when interactivity or state management (e.g., forms, toggles) is explicitly required.  
\*   \*\*Dependencies:\*\* Do not install external libraries or packages without explicit permission. Rely entirely on Tailwind CSS, \`lucide-react\`, and \`shadcn/ui\`.  
\*   \*\*Global Elements:\*\* Implement a floating WhatsApp button in the bottom-right corner of the screen (\`layout.tsx\`) so it is accessible from anywhere on the page.

\#\#\# 5.2. SEO & Analytics Configuration  
\*   \*\*Metadata (\`layout.tsx\`):\*\*  
    \*   Title: \`Sisso AI | Operator-Led Automation & CRM Studio\`  
    \*   Description: \`Stop buying software. Start building leverage. AI automations, CRM architectures, and agents built by an operator with 25 years of physical business experience.\`  
\*   \*\*Analytics:\*\* Install \`@vercel/analytics\` and include the \`\<Analytics /\>\` component in the root \`layout.tsx\`.  
\* \*\*AEO & Schema:\*\* Implement JSON-LD structured data in the root layout containing the business name, founder name, core services, and target audience to ensure LLM discoverability.

\#\#\# 5.3. Tailwind Configuration (\`tailwind.config.ts\`)  
Map the design system colors to CSS variables in \`globals.css\`:  
\`\`\`css  
@layer base {  
  :root {  
    \--background: 34 43% 96%; /\* \#FAF6F1 \*/  
    \--foreground: 36 8% 10%; /\* \#1C1A17 \*/  
    \--card: 34 43% 96%;  
    \--card-foreground: 36 8% 10%;  
    \--popover: 34 43% 96%;  
    \--popover-foreground: 36 8% 10%;  
    \--primary: 193 72% 21%; /\* \#0F4C5C (CTA Green) \*/  
    \--primary-foreground: 34 43% 96%; /\* \#FAF6F1 \*/  
    \--secondary: 30 53% 64%; /\* \#D4A574 (Gold Rare) \*/  
    \--secondary-foreground: 36 8% 10%;  
    \--muted: 38 38% 91%; /\* \#F2EBDF (Secondary Section Alt) \*/  
    \--muted-foreground: 34 7% 34%; /\* \#5C5750 \*/  
    \--accent: 20 92% 40%; /\* \#C2410C (Terracotta) \*/  
    \--accent-foreground: 34 43% 96%;  
    \--destructive: 0 84.2% 60.2%;  
    \--destructive-foreground: 0 0% 98%;  
    \--border: 38 38% 85%;   
    \--input: 38 38% 85%;  
    \--ring: 193 72% 21%;  
    \--radius: 0.3rem;  
  }  
}  
\`\`\`

\#\#\# 5.4. Fully Functional Contact Form Specs  
\*   \*\*Component Type:\*\* Client Component (\`"use client"\`).  
\*   \*\*Method:\*\* Next.js Server Action (\`"use server"\`).  
\*   \*\*Endpoint:\*\* Make.com Webhook URL (Store as \`MAKE\_WEBHOOK\_URL\` in \`.env.local\`).  
\*   \*\*Payload Structure (JSON sent to Make.com):\*\*  
    \`\`\`json  
    {  
      "name": "string",  
      "email": "string",  
      "businessType": "string",  
      "bottleneck": "string",  
      "source": "SissoAI\_Website"  
    }  
    \`\`\`  
\*   \*\*UI Behavior:\*\*   
    \*   Use \`shadcn/ui\` Form components with \`react-hook-form\` and \`zod\` for client-side validation.  
    \*   On submit: Show loading state on button.  
    \*   On success: Clear form and trigger \`shadcn/ui\` Toast: \*"Received. I will review this and be in touch within 24 hours."\*  
    \*   On error: Trigger Toast: \*"Something went wrong. Please try again or reach out on WhatsApp."\*

\---

\#\# 6\. Instructions for Claude Code  
1\.  \*\*Initialization:\*\* Read this PRD carefully. Initialize the Next.js project, install \`shadcn/ui\`, \`@vercel/analytics\`, and configure \`tailwind.config.ts\`, \`globals.css\`, and \`layout.tsx\` (with \`next/font/google\` for Inter and Fraunces, plus SEO metadata) exactly as specified.  
2\.  \*\*Build Sections (RSC Default):\*\* Build the Hero, Problem, Services, Trust, and Credibility sections as React Server Components. Apply the exact copy from Section 4\. Use the background colors (\`\#FAF6F1\` and \`\#F2EBDF\`) to alternate section contrast. Ensure mobile responsiveness (\`grid-cols-1\` default).  
3\.  \*\*Build Interactive Elements:\*\* Create the Contact Form as a separate Client Component. Implement the Zod validation and the Server Action to post to the Make.com webhook.   
4\.  \*\*Integrations:\*\* Add the Cal.com embed (\`@calcom/embed-react\`) and ensure the mandatory WhatsApp link is highly visible in the CTA section.  
5\.  \*\*Final Review:\*\* Ensure strict adherence to the Privacy Rules (Section 2), the MVP Scope (Section 1.1), and the Component Strategy (Section 5.1). No generic marketing fluff.  
