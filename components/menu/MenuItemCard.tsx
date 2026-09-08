import Link from "next/link";
import type { MenuItem } from "@/lib/menu";
import { asset } from "@/lib/asset";
import { priceOf, formatGBP } from "@/lib/pricing";
import { isHalal } from "@/lib/menu-extras";
import { SpiceMeter } from "./SpiceMeter";
import { HalalBadge } from "./HalalBadge";

// Placeholder shown until a real product shot exists. To use a photo, set
// `image: "/menu/<slug>.jpg"` on the item (drop the file in /public/menu).
function Placeholder({ name }: { name: string }) {
  return (
    <div className="relative grid h-full w-full place-items-center overflow-hidden bg-black">
      <div className="brim-stripes-fine absolute inset-0 opacity-[0.08]" aria-hidden />
      <span className="font-display text-7xl uppercase text-white/15">
        {name.charAt(0)}
      </span>
      <span className="absolute bottom-2 right-3 text-[0.6rem] uppercase tracking-[0.3em] text-white/30">
        Brim
      </span>
    </div>
  );
}

export function MenuItemCard({ item }: { item: MenuItem }) {
  const halal = isHalal(item);
  const isVeggie = item.tags.includes("veggie");

  return (
    // White tile on the paper page — the base is #f6f5f3 and the card is pure
    // white, so the hairline ring + soft shadow keep each card clearly readable
    // as its own object. `group` so the photo scales on hover. The whole card is
    // a single <Link> to the item's page — the menu is display-only, there is
    // nothing to order from here.
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg shadow-ink/5 ring-1 ring-ink/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-ink/10 hover:ring-ink/20">
      <Link
        href={`/menu/${item.slug}`}
        aria-label={`View ${item.name}`}
        className="flex flex-1 flex-col"
      >
        {/* Image / placeholder — a FIXED height on every card, featured ones
            included. It used to be the slack-absorber (flex-1), which meant a
            card with less copy grew its photo and pushed its white block lower
            than its neighbour's. Pinning the height puts the top edge of every
            white block on one line across the row; the body below takes the
            slack instead. */}
        <div className="relative h-52 shrink-0 overflow-hidden">
          {item.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={asset(item.image)}
              alt={item.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <Placeholder name={item.name} />
          )}

          {/* Badges over the shot: brand label (left), Halal mark (right). */}
          {item.badge && (
            <span className="absolute left-3 top-3 rounded-full bg-brim px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-ink shadow-lg shadow-black/30">
              {item.badge}
            </span>
          )}
          {halal && <HalalBadge className="absolute right-3 top-3" />}
        </div>

        {/* Body — content height (the image above takes the row's slack). */}
        <div className="flex flex-1 flex-col gap-2.5 p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-2xl uppercase leading-[0.95] text-ink sm:text-3xl">
              {item.name}
            </h3>
            <span className="shrink-0 font-display text-xl leading-none text-brim-deep">
              {formatGBP(priceOf(item.slug))}
            </span>
          </div>

          {item.spice ? <SpiceMeter level={item.spice} onLight /> : null}

          {item.description && (
            <p className="text-sm leading-relaxed text-ink/60">
              {item.description}
            </p>
          )}

          {item.variants && item.variants.length > 0 && (
            <ul className="mt-1 flex flex-wrap gap-1.5">
              {item.variants.map((v) => (
                <li
                  key={v}
                  className="rounded-full bg-ink/[0.05] px-2.5 py-1 text-xs font-medium text-ink/70 ring-1 ring-ink/10"
                >
                  {v}
                </li>
              ))}
            </ul>
          )}

          {isVeggie && (
            <span className="mt-auto w-fit pt-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-emerald-700">
              🌱 Plant-friendly
            </span>
          )}
        </div>
      </Link>
    </article>
  );
}
