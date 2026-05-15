import { About } from "@/components/sections/about";
import { CTA } from "@/components/sections/cta";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Services } from "@/components/sections/services";
import { SiteFooter } from "@/components/sections/site-footer";
import { StatStrip } from "@/components/sections/stat-strip";
import { UseCases } from "@/components/sections/use-cases";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <Problem />
        <StatStrip />
        <Services />
        <UseCases />
        <About />
        <CTA />
      </main>
      <SiteFooter />
    </>
  );
}
