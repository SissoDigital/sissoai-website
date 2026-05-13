export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-foreground text-background">
      <div className="mx-auto max-w-[1200px] px-6 py-10 text-center text-sm md:py-12">
        © {year} Sisso AI. All rights reserved. Operator-led automation.
      </div>
    </footer>
  );
}
