import Image from "next/image";
import type { MenuItem } from "@/lib/menu";
import { asset } from "@/lib/asset";
// import { formatGBP, priceOf } from "@/lib/pricing";
import { menuImage } from "@/lib/menuDisplay";

export function MenuItemCard({ item, preload = false }: { item: MenuItem; preload?: boolean }) {
  const image = menuImage(item);
  // const price = item.price ?? priceOf(item.slug);
  const content = (
    <>
      <div className="relative overflow-hidden rounded-xl bg-[#f3f3f1]">
        {image ? <Image src={asset(image)} alt={item.name} fill preload={preload} loading={preload ? "eager" : "lazy"} sizes="176px" className="object-contain p-2 transition-transform duration-500 group-hover:scale-105" /> : <span className="grid h-full place-items-center font-display text-6xl text-ink/20">BRIM</span>}
        {item.badge && <span className="absolute left-2 top-2 rounded-md bg-red-500 px-2 py-1 text-[0.62rem] font-bold uppercase text-white">{item.badge}</span>}
      </div>
      <div className="flex min-w-0 flex-col py-1 pr-1"><h3 className="font-display text-xl uppercase leading-tight [overflow-wrap:anywhere]">{item.name}</h3><p className="mt-2 line-clamp-2 text-sm leading-snug text-ink/55">{item.description}</p>{item.variants && <p className="mt-2 line-clamp-1 text-xs font-semibold text-ink/50">{item.variants.join(" · ")}</p>}<div className="mt-auto border-t border-ink/10 pt-3"><p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-ink/45">Made fresh to order</p>{/* <span className="inline-flex rounded-lg bg-ink px-3 py-1.5 text-sm font-bold text-paper">from {formatGBP(price)}</span> */}<p className="hidden mt-3 text-sm font-bold uppercase tracking-wide">View item <span aria-hidden>→</span></p></div></div>
    </>
  );
  return (
    <article className="group overflow-hidden rounded-2xl bg-white p-3 shadow-sm ring-1 ring-ink/10 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="grid min-h-44 grid-cols-[10rem_minmax(0,1fr)] gap-3 sm:grid-cols-[11rem_minmax(0,1fr)]">{content}</div>
    </article>
  );
}
