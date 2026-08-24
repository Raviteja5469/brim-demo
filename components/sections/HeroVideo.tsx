import Image from "next/image";
import Link from "next/link";

export function HeroVideo() {
  return (
    <section id="hero" className="relative h-dvh overflow-hidden bg-paper text-ink">
      <div className="pointer-events-none absolute -bottom-[3%] -right-[10%] z-0 h-[76%] w-[78%] sm:-right-[4%] sm:h-[82%] sm:w-[62%] lg:right-[1%] lg:h-[88%] lg:w-[56%]">
        <Image
          src="/hero/brim-burger-cutout-v2.png"
          alt="BRIM signature smash burger"
          fill
          priority
          sizes="(min-width: 1024px) 56vw, 78vw"
          className="object-contain object-bottom"
        />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[100rem] flex-col px-6 pb-7 pt-28 sm:px-10 sm:pb-8 sm:pt-32 lg:px-[8vw]">
        <div className="flex items-start justify-between">
          <Image
            src="/hero/brim-official-lockup-cropped.jpg"
            alt="BRIM — Big Juicy Burgers"
            width={230}
            height={112}
            priority
            className="h-auto w-36 sm:w-48"
          />
          <p className="hidden pt-2 text-[0.62rem] font-bold uppercase tracking-[0.35em] text-ink/40 sm:block">
            Hemel Hempstead · Since 2021
          </p>
        </div>

        <div className="flex min-h-0 flex-1 items-center py-5 sm:py-8 lg:py-10">
          <div className="max-w-[62rem]">
            <p className="mb-5 text-[0.65rem] font-bold uppercase tracking-[0.42em] text-ink/50 sm:text-xs">
              British born · Fully Halal
            </p>
            <h1 className="font-display uppercase leading-[0.73] tracking-[-0.07em]">
              <span className="block text-[20vw] sm:text-[9rem] lg:text-[11rem] xl:text-[12.5rem]">The big</span>
              <span className="block text-[20vw] text-transparent [-webkit-text-stroke:1.5px_rgba(10,10,10,0.85)] sm:text-[9rem] lg:text-[11rem] xl:text-[12.5rem]">Juicy one.</span>
            </h1>

            <div className="mt-6 flex max-w-2xl flex-col gap-4 sm:mt-8 sm:flex-row sm:items-center sm:gap-10">
              <Link
                href="/menu"
                className="group inline-flex w-fit items-center gap-8 rounded-full bg-ink px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-paper transition-transform duration-300 hover:scale-[1.03]"
              >
                Taste the difference
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <p className="max-w-xs text-sm leading-relaxed text-ink/55">
                Grass-fed beef. Smashed to order. Stacked with no interest in being ordinary.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.62rem] font-bold uppercase tracking-[0.24em] text-ink/45">
          <span>100% Halal</span><span aria-hidden>•</span>
          <span>Freshly smashed</span><span aria-hidden>•</span>
          <span>UK &amp; Pakistan</span>
        </div>
      </div>
    </section>
  );
}
