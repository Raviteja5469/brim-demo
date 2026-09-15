import { ALL_ITEMS, type MenuCategory, type MenuItem } from "@/lib/menu";

const IMAGE_BY_SLUG: Record<string, string> = {
  "brim-burger": "/menu/deliveroo/Brim-Burger.png",
  "the-meltdown": "/menu/deliveroo/THE-MELTDOWN.png",
  "fiery-brimstone": "/menu/deliveroo/FIERY-BRIMSTONE-BEEF.png",
  "smashed-shrooms": "/menu/deliveroo/SMASHED-SHROOMS.png",
  "oklahoma-onion-smash": "/menu/deliveroo/OKLAHOMA-ONION-SMASH.png",
  "bbq-rasher": "/menu/deliveroo/BBQ-Rasher.png",
  "brim-maniac": "/menu/deliveroo/BRIM-MANIAC.png",
  "hawaiian-heaven": "/menu/deliveroo/Hawaiian-Heaven.png",
  "the-chicken-run": "/menu/deliveroo/THE-CHICKEN-RUN.png",
  "chicken-meltdown": "/menu/deliveroo/CHICKEN-MELTDOWN.png",
  "chipotle-chicken": "/menu/deliveroo/CHILLI-CHIPOTLE-CHICKEN.png",
  "veggie-burger": "/menu/deliveroo/VEGGIE-BURGER.png",
  "big-juicy-sando": "/menu/deliveroo/big-&-juicy-sando.png",
  "hot-smoke-sando": "/menu/deliveroo/hot-smoke-sando.png",
  "brim-sando": "/menu/deliveroo/brim-chicken-sando.png",
  "classic-hot-dog": "/menu/deliveroo/brim-classic-hotdog.png",
  "loaded-dog": "/menu/deliveroo/brim-loaded-dog.png",
  "smokin-dog": "/menu/deliveroo/brim-smoking-dog.png",
  "street-dog": "/menu/deliveroo/brim-street-dog.png",
  "skin-on-fries": "/menu/deliveroo/skin-on-fries.png",
  "curly-fries": "/menu/deliveroo/curly-fries.png",
  "sweet-potato-fries": "/menu/deliveroo/SweetPotatoFries.png",
  "cheesy-fries": "/menu/deliveroo/CHEESY-FRIES.png",
  "commando-fries": "/menu/deliveroo/commando-fries.png",
  "dynamite-fries": "/menu/deliveroo/DYNAMITE-FRIES.png",
  "loaded-box": "/menu/deliveroo/LOADED-BOX-FRIES.png",
  "cheesy-tots": "/menu/deliveroo/CHEESY-TOTS.png",
  "hot-tots": "/menu/deliveroo/HOT-TOTS.png",
  "loaded-tots": "/menu/deliveroo/LOADED-BOX-TOTS.png",
  "chicken-tenders": "/menu/deliveroo/ChickenTenders.png",
  "onion-rings": "/menu/deliveroo/OnionRings.png",
  "mac-cheese-bites": "/menu/deliveroo/MacAndCheeseBites.png",
  "mozzarella-dippers": "/menu/deliveroo/mozzarella.png",
  "volcanic-cheese-bites": "/menu/deliveroo/VolcanicCheeseBites.png",
  "classic-shakes": "/menu/deliveroo/CLASSIC-SHAKES.png",
  "brim-shakes": "/menu/deliveroo/brimshakes.png",
  "brim-brownie-special": "/menu/deliveroo/BROWNIE-SPECIAL.png",
  drinks: "/menu/deliveroo/cocacola.png",
  "ice-tea": "/menu/deliveroo/rio.png",
};

const bySlug = new Map(ALL_ITEMS.map((item) => [item.slug, item]));
const pick = (slug: string) => bySlug.get(slug);
const items = (slugs: readonly string[]) =>
  slugs.map(pick).filter((item): item is MenuItem => Boolean(item));

const wings: MenuItem = {
  slug: "wings",
  name: "Wings",
  description: "Choose your favourite BRIM flavour.",
  variants: ["3 pieces £3.50", "6 pieces £6.50"],
  tags: ["chicken"],
  image: "/menu/deliveroo/wings.png",
  detailLink: false,
  price: 3.5,
};

const drink = (slug: string, name: string, image: string): MenuItem => ({
  slug,
  name,
  description: "330ml can.",
  tags: [],
  image,
  detailLink: false,
  price: 1.5,
});

const photoItem = (slug: string, name: string, description: string, image: string): MenuItem => ({
  slug,
  name,
  description,
  tags: ["sweet"],
  image,
  detailLink: false,
});

// These are the individual photos supplied for the current UK drinks menu.
// Keep cups and cans as separate items: a BRIM cooler is not interchangeable
// with a canned soft drink.
const photographedShakes: MenuItem[] = [
  photoItem("mango-shake", "Mango Shake", "Creamy mango shake.", "/menu/drinks/WhatsApp Image 2026-09-15 at 17.06.02 (1).jpeg"),
  photoItem("oreo-vanilla-shake", "Oreo Vanilla Shake", "Vanilla shake finished with Oreo.", "/menu/drinks/WhatsApp Image 2026-09-15 at 17.06.03.jpeg"),
  photoItem("strawberry-shake", "Strawberry Shake", "Creamy strawberry shake.", "/menu/drinks/WhatsApp Image 2026-09-15 at 17.06.04 (1).jpeg"),
  photoItem("chocolate-shake", "Chocolate Shake", "Creamy chocolate shake.", "/menu/drinks/WhatsApp Image 2026-09-15 at 17.06.04 (3).jpeg"),
  photoItem("galaxy-caramel-shake", "Galaxy Caramel Shake", "Caramel shake topped with Galaxy chocolate.", "/menu/drinks/WhatsApp Image 2026-09-15 at 17.06.05.jpeg"),
];

const photographedCoolers: MenuItem[] = [
  photoItem("mango-cooler", "Mango Cooler", "An ice-cold BRIM mango cooler.", "/menu/drinks/WhatsApp Image 2026-09-15 at 17.06.02.jpeg"),
  photoItem("pomegranate-cooler", "Pomegranate Cooler", "An ice-cold BRIM pomegranate cooler.", "/menu/drinks/WhatsApp Image 2026-09-15 at 17.06.03 (1).jpeg"),
  photoItem("sour-apple-cooler", "Sour Apple Cooler", "An ice-cold BRIM sour apple cooler.", "/menu/drinks/WhatsApp Image 2026-09-15 at 17.06.04.jpeg"),
  photoItem("bubble-gum-cooler", "Bubble Gum Cooler", "An ice-cold BRIM bubble gum cooler.", "/menu/drinks/WhatsApp Image 2026-09-15 at 17.06.04 (2).jpeg"),
  drink("rio-tropical", "Rio Tropical", "/menu/drinks/WhatsApp Image 2026-09-15 at 17.06.03 (2).jpeg"),
];

export const DISPLAY_MENU: MenuCategory[] = [
  { id: "beef-burgers", name: "Beef Burgers", tagline: "Smashed beef, big flavour.", items: items(["brim-burger", "the-meltdown", "fiery-brimstone", "smashed-shrooms", "oklahoma-onion-smash", "bbq-rasher", "brim-maniac", "hawaiian-heaven"]) },
  { id: "chicken-burgers", name: "Chicken Burgers", tagline: "Crispy, juicy and full of flavour.", items: items(["the-chicken-run", "chicken-meltdown", "chipotle-chicken", "veggie-burger"]) },
  { id: "wings-tenders", name: "Wings and Tenders", tagline: "Pick a flavour and get stuck in.", items: [wings, ...items(["chicken-tenders"])] },
  { id: "sandos", name: "Sandos", tagline: "Stacked, toasted and seriously satisfying.", items: items(["big-juicy-sando", "hot-smoke-sando", "brim-sando"]) },
  { id: "hot-dogs", name: "Hot Dogs", tagline: "Classic dogs, taken properly over the top.", items: items(["classic-hot-dog", "smokin-dog", "street-dog", "loaded-dog"]) },
  { id: "brim-fries", name: "Brim Fries", tagline: "Skin-on, curly or piled high with toppings.", items: items(["skin-on-fries", "curly-fries", "sweet-potato-fries", "cheesy-fries", "commando-fries", "dynamite-fries", "loaded-box"]) },
  { id: "brim-tots", name: "BRIM Tots", tagline: "Crispy tots with plenty on top.", items: items(["cheesy-tots", "hot-tots", "loaded-tots"]) },
  { id: "brim-sides", name: "Brim Sides", tagline: "Extra crunch for every meal.", items: items(["volcanic-cheese-bites", "onion-rings", "mac-cheese-bites", "mozzarella-dippers"]) },
  { id: "shakes-desserts", name: "Brim Shakes and Desserts", tagline: "Thick shakes and sweet finishes.", items: [...photographedShakes, ...items(["brim-brownie-special"])] },
  { id: "coolers-drinks", name: "Coolers and Drinks", tagline: "Iced BRIM coolers and cold cans.", items: [...photographedCoolers, drink("coca-cola-original", "Coca-Cola", "/menu/deliveroo/cocacola.png"), drink("coca-cola-zero", "Coca-Cola Zero", "/menu/deliveroo/cokezero.png"), drink("sprite", "Sprite", "/menu/deliveroo/sprite.png"), drink("fanta-lemon", "Fanta Lemon", "/menu/deliveroo/fanta-lemon.png"), drink("fanta-orange", "Fanta Orange", "/menu/deliveroo/fanta-orange.png")] },
];

export function menuImage(item: MenuItem): string | undefined {
  return IMAGE_BY_SLUG[item.slug] ?? item.image;
}
