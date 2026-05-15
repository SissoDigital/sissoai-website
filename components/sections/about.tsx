import { FounderPortrait } from "@/components/founder-portrait";

export function About() {
  return (
    <section className="atmosphere-warm bg-background">
      <div className="mx-auto max-w-[1200px] px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex justify-center md:justify-start">
            <FounderPortrait />
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Built by an Entrepreneur, for Entrepreneurs.
            </h2>
            <div className="mt-8 space-y-6 text-base text-foreground md:text-lg">
              <p>
                My name is Sisso. Over the last 25 years, I have built, scaled,
                and operated physical businesses across restaurants,
                international real estate, and property management.
              </p>
              <p>
                I didn&apos;t learn business operations in a coding bootcamp. I
                learned it in the trenches. Sisso AI is the direct translation
                of that experience into technology. I build the systems I wish
                I had ten years ago. I understand your business model first,
                and write the automations second.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
