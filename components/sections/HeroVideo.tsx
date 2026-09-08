import Image from "next/image";
import Link from "next/link";

// Landing hero. Two layouts from one DOM order:
//   • below xl — a vertical stack: eyebrows, headline, CTA, badges, then the
//     burger in normal flow underneath. Nothing overlaps, nothing is clipped.
//   • xl and up — the burger goes absolute bottom-right at its original
//     geometry (88% tall, 56% wide, nudged 3% off the bottom) and the headline
//     runs behind it, which is the intended poster composition. Do not give
//     that box a full height: the image is object-contain, so a taller box
//     scales the burger up and swallows "Juicy one."
//
// "Juicy one." is filled with `text-paper`, not `text-transparent`. Against the
// paper background the fill is invisible so it still reads as outline type, but
// where the line crosses the burger the letters stay solid and legible instead
// of dissolving into the photo.
//
// The section is min-height, never a fixed height: the old `h-dvh` +
// `overflow-hidden` clipped the second headline line and let the middle block
// overlap the rows above and below it on any short viewport.
export function HeroVideo() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-paper text-ink"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[100rem] flex-1 flex-col px-6 pb-8 pt-24 sm:px-10 sm:pt-28 xl:px-[8vw] xl:pb-10">
        <div className="flex items-start justify-between gap-6">
          <p className="text-[0.6rem] font-bold uppercase tracking-[0.35em] text-ink/50 sm:text-[0.65rem] sm:tracking-[0.42em]">
            British born · Fully Halal
          </p>
          <p className="hidden shrink-0 text-[0.6rem] font-bold uppercase tracking-[0.3em] text-ink/40 sm:block sm:tracking-[0.35em]">
            Hemel Hempstead · Since 2021
          </p>
        </div>

        <div className="flex flex-1 flex-col justify-center py-8 sm:py-10">
          {/* Fluid from 3rem to 12.5rem — the old fixed 20vw overflowed the
              viewport horizontally on small screens. */}
          <h1 className="font-display uppercase leading-[0.73] tracking-[-0.07em]">
            <span className="block whitespace-nowrap text-[clamp(3rem,13vw,9rem)] xl:text-[clamp(8rem,12.5vw,12.5rem)]">The big</span>
            <span className="block whitespace-nowrap text-[clamp(3rem,13vw,9rem)] text-paper [-webkit-text-stroke:1px_rgba(10,10,10,0.85)] sm:[-webkit-text-stroke:1.5px_rgba(10,10,10,0.85)] xl:text-[clamp(8rem,12.5vw,12.5rem)]">
              Juicy one.
            </span>
          </h1>

          {/* Capped at xl so the copy never slides under the burger. */}
          <div className="mt-7 flex max-w-2xl flex-col gap-5 sm:mt-9 sm:flex-row sm:items-center sm:gap-9 xl:max-w-[42%] xl:flex-col xl:items-start xl:gap-4">
            <Link
              href="/menu"
              className="group inline-flex w-fit items-center gap-6 rounded-full bg-ink px-6 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-paper transition-transform duration-300 hover:scale-[1.03] sm:gap-8 sm:px-7 sm:py-4"
            >
              Taste the difference
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-ink/55">
              Grass-fed beef. Smashed to order. Stacked with no interest in being ordinary.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-ink/45 sm:gap-x-6 sm:text-[0.62rem] sm:tracking-[0.24em]">
          <span>100% Halal</span><span aria-hidden>•</span>
          <span>Freshly smashed</span><span aria-hidden>•</span>
          <span>UK &amp; Pakistan</span>
        </div>
      </div>

      {/* In flow on small screens, absolute on the right from xl up. */}
      <div className="pointer-events-none relative z-0 h-[34vh] min-h-[11rem] w-full shrink-0 sm:h-[40vh] xl:absolute xl:-bottom-[3%] xl:right-[1%] xl:top-auto xl:h-[88%] xl:min-h-0 xl:w-[56%]">
        <Image
          src="/hero/brim-burger-cutout-v2.png"
          alt="BRIM signature smash burger"
          fill
          priority
          sizes="(min-width: 1024px) 56vw, 100vw"
          className="object-contain object-bottom"
        />
      </div>
    </section>
  );
}
