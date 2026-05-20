import { About } from "@/components/sections/about";
import { CTA } from "@/components/sections/cta";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Services } from "@/components/sections/services";
import { SiteFooter } from "@/components/sections/site-footer";
import { StatStrip } from "@/components/sections/stat-strip";
import { ToolStack } from "@/components/sections/tool-stack";
import { UseCases } from "@/components/sections/use-cases";
import { ScrollReveal } from "@/components/visual/scroll-reveal";

export default function Home() {
  return (
    <>
      <main id="main" className="flex-1">
        <Hero />
        <ToolStack />
        <ScrollReveal>
          <Problem />
        </ScrollReveal>
        <ScrollReveal>
          <StatStrip />
        </ScrollReveal>
        <ScrollReveal>
          <Services />
        </ScrollReveal>
        <ScrollReveal>
          <UseCases />
        </ScrollReveal>
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal>
          <CTA />
        </ScrollReveal>
      </main>
      <SiteFooter />
    </>
  );
}
