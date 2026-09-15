// ─────────────────────────────────────────────────────────────────────────
//  Demo pricing — the menu data carries no prices, so we synthesise sensible,
//  STABLE ones to display on the menu. Price = a per-category base + a
//  deterministic jitter derived from the slug hash. Deterministic is the whole
//  point: the same slug always yields the same price on the server and the
//  client, so prices never trigger a hydration mismatch (no Math.random).
//
//  Not real menu pricing — swap priceOf() for a data-driven lookup when actual
//  prices land in data/menu.json.
// ─────────────────────────────────────────────────────────────────────────
import { MENU } from "@/lib/menu";

// Per-category base price (£). Anything not listed falls back to DEFAULT_BASE.
const CATEGORY_BASE: Record<string, number> = {
  burgers: 8.5,
  sandos: 7.5,
  "brim-box": 11,
  "hot-dogs": 6.5,
  "brim-tots": 4.5,
  fries: 4,
  sides: 4,
  dips: 1,
  "jr-brim": 5,
  shakes: 4.5,
  desserts: 4,
  drinks: 2.5,
};

const OFFICIAL_PRICES: Record<string, number> = {
  "brim-burger": 7.75, "the-meltdown": 7.95, "fiery-brimstone": 7.95,
  "smashed-shrooms": 8.25, "oklahoma-onion-smash": 8.25, "bbq-rasher": 8.95,
  "brim-maniac": 19.95, "the-chicken-run": 7.95, "chicken-meltdown": 7.95,
  "chipotle-chicken": 7.95, "veggie-burger": 8.75, "big-juicy-sando": 10.95,
  "hot-smoke-sando": 10.95, "brim-sando": 10.95, "classic-hot-dog": 6.75,
  "smokin-dog": 7.25, "street-dog": 7.25, "loaded-dog": 8.95,
  "skin-on-fries": 3.25, "curly-fries": 3.95, "sweet-potato-fries": 4.75,
  "cheesy-fries": 4.5, "commando-fries": 4.95, "dynamite-fries": 5.5,
  "loaded-box": 8.95, "cheesy-tots": 4.5, "hot-tots": 5.5,
  "loaded-tots": 8.95, "chicken-tenders": 4.45, "onion-rings": 3.45,
  "mac-cheese-bites": 4.45, "mozzarella-dippers": 4.45,
  "volcanic-cheese-bites": 4.45, "classic-shakes": 4.95, "brim-shakes": 5.95,
  "brim-brownie-special": 4.95, drinks: 1.5, "ice-tea": 1.5,
};
const DEFAULT_BASE = 6;

/** Tiny deterministic string hash (djb2). Stable across server + client. */
function hash(str: string): number {
  let h = 5381;
  for (let i = 0; i < str.length; i++) h = (h * 33) ^ str.charCodeAt(i);
  return h >>> 0; // unsigned
}

// Build slug → price once. Jitter adds 0–£2 in 25p steps, then a .95 ending so
// the numbers read like real menu prices (£8.95, £4.45 …).
const PRICE_BY_SLUG: Record<string, number> = Object.fromEntries(
  MENU.flatMap((category) => {
    const base = CATEGORY_BASE[category.id] ?? DEFAULT_BASE;
    return category.items.map((item) => {
      const steps = hash(item.slug) % 9; // 0..8
      const price = base + steps * 0.25 - 0.05; // .x5 / .x0 → minus 5p = .95/.45…
      return [item.slug, Math.round(price * 100) / 100] as const;
    });
  })
);

/** Demo price (£) for an item slug. Falls back to DEFAULT_BASE for unknowns. */
export function priceOf(slug: string): number {
  return OFFICIAL_PRICES[slug] ?? PRICE_BY_SLUG[slug] ?? DEFAULT_BASE;
}

/** Format a number of pounds as "£8.95". */
export function formatGBP(pounds: number): string {
  return `£${pounds.toFixed(2)}`;
}
