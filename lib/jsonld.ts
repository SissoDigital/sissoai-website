type ProfessionalServiceLd = {
  "@context": "https://schema.org";
  "@type": "ProfessionalService";
  name: string;
  alternateName: string;
  description: string;
  url?: string;
  founder: {
    "@type": "Person";
    name: string;
    description: string;
  };
  knowsAbout: string[];
  areaServed: string[];
  serviceType: string[];
  audience: {
    "@type": "BusinessAudience";
    audienceType: string;
  };
};

export function professionalServiceJsonLd(siteUrl?: string): ProfessionalServiceLd {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Sisso AI",
    alternateName: "Sisso AI Studio",
    description:
      "Stop buying software. Start building leverage. AI automations, CRM architectures, and agents built by an operator with 25 years of physical business experience.",
    ...(siteUrl ? { url: siteUrl } : {}),
    founder: {
      "@type": "Person",
      name: "Sisso",
      description:
        "Founder and operator. 25+ years scaling physical businesses across hospitality, real estate, and property management. Builds operator-led AI automation and CRM systems.",
    },
    knowsAbout: [
      "Operational Bottlenecks",
      "Process Automation",
      "AI Workflow Design",
      "CRM Architecture",
      "Lead Routing and Triage",
    ],
    areaServed: [
      "High-Volume Hospitality",
      "Vacation Rental Management",
      "Multi-Unit Property Management",
      "International Real Estate Operations",
    ],
    serviceType: [
      "Make.com Workflow Automation",
      "AI Automation",
      "CRM Architecture",
      "AI Agents",
      "Chatbots and Triage",
    ],
    audience: {
      "@type": "BusinessAudience",
      audienceType:
        "Founders and operators of 1-50 person companies in hospitality, property management, and real estate.",
    },
  };
}
