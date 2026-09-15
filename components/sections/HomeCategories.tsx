import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/asset";

const CATEGORIES = [
  { name: "Beef Burgers", image: "/menu/deliveroo/Brim-Burger.png", href: "/menu#cat-beef-burgers" },
  { name: "Chicken Burgers", image: "/menu/deliveroo/THE-CHICKEN-RUN.png", href: "/menu#cat-chicken-burgers" },
  { name: "Wings and Tenders", image: "/menu/deliveroo/wings.png", href: "/menu#cat-wings-tenders" },
  { name: "Sandos", image: "/menu/deliveroo/big-&-juicy-sando.png", href: "/menu#cat-sandos" },
  { name: "Hot Dogs", image: "/menu/deliveroo/brim-classic-hotdog.png", href: "/menu#cat-hot-dogs" },
  { name: "Brim Fries", image: "/menu/deliveroo/DYNAMITE-FRIES.png", href: "/menu#cat-brim-fries" },
  { name: "BRIM Tots", image: "/menu/deliveroo/CHEESY-TOTS.png", href: "/menu#cat-brim-tots" },
  { name: "Brim Sides", image: "/menu/deliveroo/VolcanicCheeseBites.png", href: "/menu#cat-brim-sides" },
  { name: "Brim Shakes and Desserts", image: "/menu/deliveroo/LotusMilk-shake.png", href: "/menu#cat-shakes-desserts" },
  { name: "Coolers and Drinks", image: "/menu/drinks/WhatsApp Image 2026-09-15 at 17.06.02.jpeg", href: "/menu#cat-coolers-drinks" },
] as const;

export function HomeCategories() {
  return (
    <section className="bg-paper px-5 py-16 text-ink sm:px-8 sm:py-24" aria-labelledby="categories-heading">
      <div className="mx-auto max-w-6xl">
        <header className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-ink/45">Best burgers in the UK</p>
          <h2 id="categories-heading" className="mt-3 font-display text-4xl uppercase leading-none sm:text-6xl">Our categories</h2>
        </header>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-3 lg:grid-cols-4">
          {CATEGORIES.map((category) => (
            <Link key={category.name} href={category.href} className="group overflow-hidden rounded-lg border border-ink/15 bg-white transition-transform duration-300 hover:-translate-y-1">
              <div className="relative aspect-[1.08] overflow-hidden bg-ink">
                <Image src={asset(category.image)} alt={category.name} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="object-contain p-2 transition-transform duration-500 group-hover:scale-105" />
              </div>
              <p className="px-3 py-4 text-center font-display text-lg uppercase leading-none sm:text-2xl">{category.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
