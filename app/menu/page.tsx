import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { asset } from "@/lib/asset";
import { MenuExperience } from "@/components/menu/MenuExperience";
import { HalalPromise } from "@/components/sections/HalalPromise";

export const metadata: Metadata = {
  title: `Menu — ${SITE.name}`,
  description:
    "Smashed to order, strictly Halal, never frozen. Burgers, loaded dogs, dynamite fries, thick shakes and more.",
};

export default function MenuPage() {
  return (
    // Light paper frame — the food photography and the orange accents carry
    // the colour; every surface above it stays white.
    <div className="min-h-dvh bg-paper text-ink [color-scheme:light]">
      {/* Hero */}
      <header className="relative overflow-hidden px-6 pb-8 pt-32 text-center sm:pt-36">
        {/* Signature diagonal-stripe corner accents (the brand "frame"). */}
        <div
          aria-hidden
          className="brim-stripes pointer-events-none absolute -left-16 -top-10 h-48 w-48 -rotate-12 opacity-[0.10] [mask-image:radial-gradient(circle_at_top_left,black,transparent_72%)]"
        />
        <div
          aria-hidden
          className="brim-stripes pointer-events-none absolute -right-16 -top-10 h-48 w-48 rotate-12 opacity-[0.10] [mask-image:radial-gradient(circle_at_top_right,black,transparent_72%)]"
        />
        <p className="relative text-xs font-bold uppercase tracking-[0.4em] text-brim-deep">
          Smashed · Halal · Never frozen
        </p>
        <h1 className="relative mt-4 font-display text-6xl uppercase leading-[0.82] text-ink sm:text-8xl">
          The Menu
        </h1>
        <p className="relative mx-auto mt-5 max-w-xl text-balance text-ink/60">
          Beef pressed thin, seared crisp, and built to your liking. Stack it
          high, spice it bold, and let the loaded fries do the rest.
        </p>
        <div className="relative mt-7 flex flex-col items-center gap-3">
          <a
            href={asset("/BRIM-Allergen-Menu.pdf")}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="rounded-full border border-ink/20 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:border-brim hover:bg-brim hover:text-ink"
          >
            Download the allergen menu
          </a>
          <p className="text-xs uppercase tracking-wider text-ink/45">
            Some locations may have a limited menu
          </p>
        </div>
      </header>

      <MenuExperience />

      <HalalPromise variant="menu" />
    </div>
  );
}
