// ─────────────────────────────────────────────────────────────────────────
//  BRIM BUILD — the "anatomy of a Brim burger" infographics.
//  Two supplied reference images shown on a solid-black frame with padding so
//  their dark backgrounds blend seamlessly into the page. Server component.
// ─────────────────────────────────────────────────────────────────────────
import { asset } from "@/lib/asset";

export function BrimBuild() {
  return (
    <section id="brim-build" className="bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-12 sm:gap-16 sm:px-6 sm:py-16 lg:px-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/detailed.jpeg")}
          alt="How a Brim burger is made: premium grass-fed British beef, formed into a ball, pressed to perfection into a smash burger, patties piled up with bold flavours, never frozen."
          className="block h-auto w-full"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/hero2.png")}
          alt="The Brim burger deconstructed: brioche bun, signature Brim sauce, fresh lettuce, vine-ripened tomatoes, red onions, double American cheese, double smashed Angus beef, crunchy pickles, house burger sauce and a toasted brioche base."
          className="block h-auto w-full"
        />
      </div>
    </section>
  );
}
