// Shared placeholder for not-yet-built routes (Menu / Locations / Franchising).
// Keeps the four-page routing real today; each page swaps this out for its own
// content later.
import Link from "next/link";

export function ComingSoon({
  eyebrow,
  title,
  blurb,
}: {
  eyebrow: string;
  title: string;
  blurb: string;
}) {
  return (
    <section className="mx-auto flex min-h-dvh max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-brim">
        {eyebrow}
      </p>
      <h1 className="font-display text-6xl uppercase leading-none tracking-tight text-paper sm:text-8xl">
        {title}
      </h1>
      <p className="mt-6 max-w-md text-balance text-ash">{blurb}</p>
      <Link
        href="/"
        className="mt-10 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-brim hover:text-brim"
      >
        ← Back to home
      </Link>
    </section>
  );
}
