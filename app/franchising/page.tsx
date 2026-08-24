import type { Metadata } from "next";
import Image from "next/image";
import { FranchiseForm } from "@/components/franchising/FranchiseForm";
import { asset } from "@/lib/asset";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Franchise Journey — ${SITE.name}`,
  description: "Explore the BRIM Burgers franchise journey, store formats, support package and investment pathway.",
};

const ROI_NOTE = "Return on investment is based upon location and net sales.";
const COST_NOTE = "All cost figures are indicative, confirmed after site inspection.";

const PROOF = [
  { value: "2021", label: "Franchise journey began" },
  { value: "9+", label: "Stores opened" },
  { value: "4.7", label: "Average store rating" },
  { value: "25M+", label: "Social impressions" },
];

const FORMATS = [
  { name: "Grab & Go", investment: "£165K", footprint: "600–650 sq ft", image: "/franchising/grab-go.jpg", breakdown: [["Fit-out", "£78.7K"], ["Equipment", "£40K"], ["Licence", "£18K"], ["CAPEX", "£11K"], ["Agent / legal", "£6K"], ["Launch", "£5K"], ["Signage", "£2.5K"], ["POS", "£2K"], ["Architect", "£1.8K"]] },
  { name: "Classic", investment: "£229.9K", footprint: "1,000 sq ft", image: "/franchising/classic.jpg", breakdown: [["Fit-out", "£123K"], ["Equipment", "£40K"], ["CAPEX", "£21.6K"], ["Licence", "£18K"], ["Agent / legal", "£11K"], ["Launch", "£9K"], ["Signage", "£3.5K"], ["POS", "£2K"], ["Architect", "£1.8K"]] },
  { name: "Signature", investment: "£272.6K", footprint: "1,350 sq ft", image: "/franchising/signature.jpg", breakdown: [["Fit-out", "£165K"], ["Equipment", "£40K"], ["CAPEX", "£21.6K"], ["Licence", "£18K"], ["Agent / legal", "£11K"], ["Launch", "£10K"], ["Signage", "£3K"], ["POS", "£2K"], ["Architect", "£2K"]] },
  { name: "Flagship", investment: "£348.6K", footprint: "2,000 sq ft", image: "/franchising/flagship.jpg", breakdown: [["Fit-out", "£241K"], ["Equipment", "£40K"], ["CAPEX", "£21.6K"], ["Licence", "£18K"], ["Agent / legal", "£11K"], ["Launch", "£10K"], ["Signage", "£3K"], ["POS", "£2K"], ["Architect", "£2K"]] },
];

const SUPPORT = [
  { title: "Territory planning", copy: "Demand mapping and protected-market assessment.", span: "lg:col-span-5" },
  { title: "Property search", copy: "A focused brief for agents and landlords.", span: "lg:col-span-3" },
  { title: "Lease and site review", copy: "Commercial and operational checks before commitment.", span: "lg:col-span-4" },
  { title: "Store design", copy: "A BRIM layout built around flow and throughput.", span: "lg:col-span-3" },
  { title: "Kitchen specification", copy: "Equipment, stations and service-line planning.", span: "lg:col-span-3" },
  { title: "Supply chain access", copy: "Approved products and consistent specifications.", span: "lg:col-span-3" },
  { title: "Recruitment guidance", copy: "Role planning and practical hiring support.", span: "lg:col-span-3" },
  { title: "Team training", copy: "Food, service and operating-standard training.", span: "lg:col-span-4" },
  { title: "Launch marketing", copy: "A local opening plan designed to build demand.", span: "lg:col-span-5" },
  { title: "Ongoing operations", copy: "Reviews, reporting and hands-on support after launch.", span: "lg:col-span-3" },
];

const CEILINGS = [
  { value: "32% max", label: "Food cost" },
  { value: "30% max", label: "Payroll" },
  { value: "10% max", label: "Rent" },
  { value: "12% max", label: "Operating expenses" },
];

const PATHWAY = [
  ["01", "Enquire", "Tell us about you, your preferred territory and investment position."],
  ["02", "Discovery", "Meet the team, explore the model and review the franchise pack."],
  ["03", "Vetting", "We assess fit, funding, experience and alignment with the BRIM standard."],
  ["04", "Territory", "Together we identify and approve the right market and site."],
  ["05", "Build & train", "Your store is designed, fitted and your team trained for launch."],
  ["06", "Open", "Launch with hands-on support, then grow with our operations team."],
] as const;

const FAQS = [
  { q: "How much does a BRIM franchise cost?", a: "Indicative investment starts at £165,000 for a Grab & Go store and varies by format, property and site requirements. All cost figures are indicative, confirmed after site inspection." },
  { q: "What royalty fee does BRIM charge?", a: "The BRIM franchise fee model shown here is 6% of net sales. Full commercial terms are confirmed during the application and disclosure process." },
  { q: "How long could it take to recover my investment?", a: `The worked example indicates approximately three years. ${ROI_NOTE}` },
  { q: "Do I need restaurant experience?", a: "Restaurant or multi-site operating experience is valuable, but not the only factor. We look for leadership, commercial discipline, local knowledge and commitment to the brand." },
  { q: "Does BRIM help find and approve a site?", a: "Yes. We support territory planning, property search and site review. No site should be committed to before BRIM approval." },
  { q: "What support will I receive?", a: "Support covers site and store planning, kitchen specification, supply chain, recruitment guidance, training, launch marketing and ongoing operations." },
  { q: "Is bank financing available?", a: "Bank financing may be available to approved applicants, subject to status, lender criteria and an independent credit assessment." },
  { q: "What happens after I enquire?", a: "Our franchise team reviews your information and, where there is a potential fit, arranges a discovery conversation before progressing to vetting and territory review." },
];

export default function FranchisingPage() {
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: FAQS.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };

  return (
    <div className="bg-ink text-paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />

      <section className="bg-ink px-6 pb-20 pt-32 sm:pt-36">
        <div className="mx-auto max-w-6xl">
          <div className="animate-rise mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-paper/55">Franchise journey · UK &amp; Pakistan</p>
              <h1 className="mt-4 font-display text-5xl uppercase leading-[0.85] sm:text-7xl">Restaurant owner<br />opportunities.</h1>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-paper/50 sm:text-right">Join the team building BRIM, one committed operator and one carefully chosen market at a time.</p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-soft lg:min-h-[43rem]">
            <div className="relative h-[28rem] sm:h-[36rem] lg:absolute lg:inset-0 lg:h-auto">
              <Image
                src="/hero/franchise-team-hero.png"
                alt="The BRIM restaurant team"
                fill
                priority
                sizes="(min-width: 1024px) 1152px, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10 lg:bg-gradient-to-r lg:from-black/15 lg:via-transparent lg:to-black/20" aria-hidden />
            </div>

            <div className="relative grid gap-3 p-4 sm:p-6 lg:min-h-[43rem] lg:grid-cols-12 lg:items-end">
              <div className="rounded-3xl bg-paper p-7 text-ink shadow-2xl shadow-black/35 sm:p-9 lg:col-span-5">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-ink/45">Own a BRIM</p>
                <h2 className="mt-4 font-display text-4xl uppercase leading-[0.9] sm:text-5xl">Build what’s next.</h2>
                <p className="mt-5 text-sm leading-relaxed text-ink/60">A hands-on restaurant business backed by BRIM’s brand, operating system and end-to-end support.</p>
                <a href="#enquire" className="mt-7 inline-flex items-center gap-4 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-paper transition-transform duration-300 hover:scale-[1.03]">Start your journey <span aria-hidden>↗</span></a>
              </div>

              <aside className="glass-dark overflow-hidden rounded-3xl text-paper lg:col-span-7" aria-label="Illustrative franchise payback example">
                <div className="grid sm:grid-cols-3 sm:divide-x sm:divide-white/10">
                  <div className="p-5 sm:p-6"><p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-paper/45">Illustrative payback</p><p className="mt-2 font-display text-3xl leading-none">~3 years</p></div>
                  <div className="border-t border-white/10 p-5 sm:border-t-0 sm:p-6"><p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-paper/45">Worked investment</p><p className="mt-2 font-display text-3xl leading-none">£221K</p></div>
                  <div className="border-t border-white/10 p-5 sm:border-t-0 sm:p-6"><p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-paper/45">Monthly return</p><p className="mt-2 font-display text-3xl leading-none">£6K</p></div>
                </div>
                <div className="border-t border-white/10 px-5 py-4 text-[0.65rem] leading-relaxed text-paper/45 sm:px-6">
                  <p>{ROI_NOTE}</p><p className="mt-1">{COST_NOTE}</p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="BRIM franchise proof" className="bg-ink px-6 pb-20">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 lg:grid-cols-4">
          {PROOF.map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-ink-soft px-4 py-7 text-center transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-white/25">
              <strong className="block font-display text-4xl leading-none text-paper sm:text-5xl">{item.value}</strong>
              <span className="mt-2 block text-xs uppercase tracking-wider text-paper/45">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper px-6 py-20 text-ink sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-ink/45">The idea behind the brand</p>
              <h2 className="mt-4 font-display text-5xl uppercase leading-[0.86] sm:text-6xl">Built before it was obvious.</h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-ink/60 lg:col-span-7 lg:justify-self-end">
              In 2021, founder Amadul Hassan saw a clear gap in the UK Halal market: premium smash burgers without compromise. BRIM was built to fill it—and the response proved the demand.
            </p>
          </div>

          <div className="mt-10 grid overflow-hidden rounded-3xl bg-ink text-paper ring-1 ring-ink/10 lg:grid-cols-12">
            <div className="relative min-h-[24rem] overflow-hidden lg:col-span-7 lg:min-h-[38rem]">
              <video
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="metadata"
                poster={asset("/hero/poster.jpg")}
                className="absolute inset-0 h-full w-full object-cover"
                aria-label="The BRIM story film"
              >
                <source src={asset("/hero.mp4")} type="video/mp4" />
              </video>
              <p className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/60 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-paper backdrop-blur-md">Story film · Temporary footage</p>
            </div>

            <div className="flex flex-col justify-between border-t border-white/10 p-7 sm:p-9 lg:col-span-5 lg:border-l lg:border-t-0">
              <div>
                <div className="flex items-center gap-4 border-b border-white/10 pb-7">
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-paper">
                    <Image src="/halal.svg" alt="Halal" width={42} height={42} />
                  </span>
                  <div>
                    <p className="font-display text-2xl uppercase">Fully Halal</p>
                    <p className="mt-1 text-xs leading-relaxed text-paper/50">Hand-slaughtered certification · no alcohol</p>
                  </div>
                </div>

                <ul className="divide-y divide-white/10">
                  <StoryPoint number="01" title="Grass-fed beef" copy="Premium ingredients support a premium position." />
                  <StoryPoint number="02" title="Fresh every day" copy="Fresh meat, artisan UK buns and signature sauces." />
                  <StoryPoint number="03" title="Built to stand apart" copy="A distinct menu, identity and operating standard." />
                </ul>
              </div>

              <blockquote className="mt-8 border-l-2 border-paper/30 pl-5">
                <p className="font-display text-2xl uppercase leading-tight">“We build win-win partnerships with operators who share our ambition.”</p>
                <footer className="mt-3 text-xs uppercase tracking-wider text-paper/40">Amadul Hassan · Founder</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="A leaner model" title="More stays in your business">
        <div className="grid overflow-hidden rounded-3xl ring-1 ring-white/10 md:grid-cols-2">
          <div className="bg-paper p-8 text-ink transition-transform duration-300 hover:-translate-y-1 sm:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em]">BRIM royalty</p>
            <p className="mt-5 font-display text-8xl leading-none">6%</p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-wide">of net sales</p>
          </div>
          <div className="bg-ink-soft p-8 transition-transform duration-300 hover:-translate-y-1 sm:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-paper/45">Typical UK burger franchise</p>
            <p className="mt-5 font-display text-8xl leading-none text-paper">7–9%</p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-paper/55">indicative royalty range</p>
          </div>
        </div>
        <p className="mt-4 text-xs text-paper/45">Comparison is indicative. Full BRIM commercial terms are confirmed during the franchise process.</p>
      </Section>

      <Section eyebrow="Four ways to open" title="Choose your format" light>
        <div className="relative mb-4 min-h-[20rem] overflow-hidden rounded-3xl ring-1 ring-ink/10 sm:min-h-[28rem]">
          <Image
            src="/franchising/brim-storefront.jpg"
            alt="BRIM restaurant storefront"
            fill
            sizes="(min-width: 1024px) 1152px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" aria-hidden />
          <p className="absolute bottom-6 left-6 max-w-md font-display text-3xl uppercase leading-none text-paper sm:bottom-8 sm:left-8 sm:text-5xl">One brand.<br />Four footprints.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {FORMATS.map((format, index) => (
            <article key={format.name} className="group overflow-hidden rounded-3xl bg-paper ring-1 ring-ink/10 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-ink/10">
              <div className="relative h-64 overflow-hidden bg-ink sm:h-72">
                <Image
                  src={format.image}
                  alt={`${format.name} BRIM store format`}
                  fill
                  sizes="(min-width: 768px) 576px, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" aria-hidden />
                <p className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-black/55 px-4 py-2 text-xs font-bold uppercase tracking-wider text-paper backdrop-blur-md">{format.footprint}</p>
              </div>
              <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-ink/35">0{index + 1}</p>
                  <h3 className="mt-3 font-display text-3xl uppercase leading-none text-ink">{format.name}</h3>
                </div>
                <p className="font-display text-3xl leading-none text-ink">{format.investment}</p>
              </div>
              <ul className="mt-6 grid grid-cols-2 gap-x-5 gap-y-3 border-t border-ink/10 pt-5 sm:grid-cols-3">
                {format.breakdown.map(([label, value]) => (
                  <li key={label} className="border-l border-ink/15 pl-3">
                    <span className="block text-[0.6rem] font-bold uppercase tracking-wider text-ink/40">{label}</span>
                    <strong className="mt-1 block text-sm text-ink/75">{value}</strong>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[0.7rem] text-ink/45">{COST_NOTE}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Backed end to end" title="What BRIM does for you">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-12">
          {SUPPORT.map((item, index) => (
            <article
              key={item.title}
              className={`${item.span} franchise-blueprint-card group relative min-h-52 overflow-hidden rounded-3xl border border-white/10 bg-ink-soft p-6 transition-[transform,border-color,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:border-white/25 hover:shadow-2xl hover:shadow-black/40 sm:p-7`}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-5 -right-1 font-display text-8xl leading-none text-white/[0.035] transition-[transform,color] duration-500 ease-out group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:text-white/[0.07] sm:text-9xl"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="relative flex h-full flex-col justify-between gap-10">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-xs font-bold text-paper/55 transition-colors duration-500 group-hover:bg-paper group-hover:text-ink">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 origin-left scale-x-50 bg-white/10 transition-transform duration-500 ease-out group-hover:scale-x-100" aria-hidden />
                </div>
                <div>
                  <h3 className="font-display text-2xl uppercase leading-none sm:text-3xl">{item.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/45">{item.copy}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="franchise-blueprint-card mt-3 grid overflow-hidden rounded-3xl bg-paper text-ink transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30 lg:grid-cols-5">
          <div className="p-7 sm:p-9 lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-ink/45">Connected tech stack</p>
            <h3 className="mt-3 max-w-xl font-display text-4xl uppercase leading-[0.9] sm:text-5xl">Your operation.<br />One clear view.</h3>
          </div>
          <div className="border-t border-ink/10 p-7 sm:p-9 lg:col-span-2 lg:border-l lg:border-t-0">
            <p className="text-sm leading-relaxed text-ink/60">Integrated systems give operators the information needed to run every shift and make better decisions.</p>
            <ul className="mt-6 grid grid-cols-2 gap-x-5 gap-y-3 text-xs font-bold uppercase tracking-wide text-ink/65">
              <li>EPOS</li><li>Delivery</li><li>Labour</li><li>Inventory</li><li>Reporting</li><li>Customer</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section eyebrow="Commercial discipline" title="Independent cost ceilings" light>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CEILINGS.map((cost) => (
            <article key={cost.label} className="rounded-3xl bg-ink p-6 text-paper transition-transform duration-300 hover:-translate-y-1 sm:p-8">
              <p className="font-display text-4xl leading-none text-paper">{cost.value}</p>
              <h3 className="mt-4 text-xs font-bold uppercase tracking-[0.25em] text-paper/65">{cost.label}</h3>
            </article>
          ))}
        </div>
        <div className="mt-6 border-l-4 border-ink pl-5 text-sm leading-relaxed text-ink/60">
          <p className="font-semibold text-ink">These percentages are independent maximums and are not additive.</p>
          <p className="mt-1">They must not be summed or interpreted as a combined operating-cost total.</p>
        </div>
      </Section>

      <Section eyebrow="From first hello to first serve" title="The pathway">
        <ol className="relative grid gap-4 before:absolute before:bottom-10 before:left-6 before:top-10 before:w-px before:bg-white/15 before:content-[''] lg:grid-cols-6 lg:items-start lg:gap-4 lg:before:bottom-auto lg:before:left-[8.33%] lg:before:right-[8.33%] lg:before:top-8 lg:before:h-px lg:before:w-auto">
          {PATHWAY.map(([number, title, copy], index) => (
            <li
              key={number}
              className="franchise-blueprint-card group relative flex items-start gap-5 lg:block"
            >
              <div className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/20 bg-ink font-display text-lg text-paper transition-[background-color,color,transform] duration-500 group-hover:scale-110 group-hover:bg-paper group-hover:text-ink lg:mx-auto lg:h-16 lg:w-16 lg:text-xl">
                {number}
              </div>
              {index < PATHWAY.length - 1 && (
                <span className="absolute left-[1.15rem] top-14 z-10 bg-ink py-1 text-sm text-paper/45 lg:-right-4 lg:left-auto lg:top-8 lg:-translate-y-1/2 lg:px-1" aria-hidden>
                  <span className="lg:hidden">↓</span><span className="hidden lg:inline">›</span>
                </span>
              )}
              <div className={`min-h-40 flex-1 rounded-3xl border border-white/10 bg-ink-soft p-5 transition-[transform,border-color,box-shadow] duration-500 ease-out group-hover:-translate-y-1 group-hover:border-white/25 group-hover:shadow-xl group-hover:shadow-black/30 lg:mt-8 lg:flex-none lg:p-5 ${index % 2 === 0 ? "lg:min-h-64" : "lg:min-h-52"}`}>
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-paper/35">Stage {number}</p>
                <h3 className="mt-5 font-display text-xl uppercase leading-none sm:text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/50">{copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Protecting the brand" title="We don’t accept everyone" light>
        <div className="grid gap-8 rounded-3xl bg-ink p-8 text-paper transition-transform duration-300 hover:-translate-y-1 sm:p-12 lg:grid-cols-2">
          <h3 className="font-display text-4xl uppercase leading-[0.9] sm:text-5xl">We’re looking for committed operators, not passive investors.</h3>
          <div className="border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <p className="leading-relaxed text-paper/60">Every applicant is vetted for operational ability, leadership, financial readiness and cultural fit. Growth matters, but never at the expense of food, hospitality or the BRIM standard.</p>
            <ul className="mt-6 grid gap-3 text-sm font-semibold uppercase tracking-wide sm:grid-cols-2">
              <li>Hands-on leadership</li><li>Local market knowledge</li><li>Commercial discipline</li><li>Long-term ambition</li>
            </ul>
          </div>
        </div>
      </Section>

      <section className="border-y border-ink/10 bg-paper px-6 py-8 text-ink">
        <p className="mx-auto max-w-6xl text-center font-display text-2xl uppercase sm:text-3xl">Bank financing may be available to approved applicants, subject to status and lender criteria.</p>
      </section>

      <Section eyebrow="Before you enquire" title="Frequently asked questions">
        <div className="divide-y divide-white/10 border-y border-white/10">
          {FAQS.map((faq) => (
            <details key={faq.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl uppercase transition-opacity duration-300 hover:opacity-70 sm:text-2xl">
                {faq.q}<span className="text-paper/55 transition-transform duration-300 group-open:rotate-45" aria-hidden>+</span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-paper/55">{faq.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <section id="enquire" className="scroll-mt-28 bg-paper px-6 py-20 text-ink sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-ink/45">Your next move</p>
            <h2 className="mt-4 font-display text-5xl uppercase leading-[0.88] sm:text-6xl">Start your journey</h2>
            <p className="mt-5 max-w-sm leading-relaxed text-ink/55">Complete the three short steps. We’ll review your fit and unlock the introductory franchise pack after submission.</p>
            <p className="mt-8 text-sm font-semibold">{SITE.contact.franchiseEmail}</p>
            <p className="mt-2 text-xs text-ink/45">{COST_NOTE}</p>
          </div>
          <div className="lg:col-span-3"><FranchiseForm /></div>
        </div>
      </section>
    </div>
  );
}

function Section({ eyebrow, title, light = false, children }: { eyebrow: string; title: string; light?: boolean; children: React.ReactNode }) {
  return (
    <section className={`${light ? "bg-paper text-ink" : "bg-ink text-paper"} px-6 py-20 sm:py-24`}>
      <div className="mx-auto max-w-6xl">
        <p className={`text-xs font-bold uppercase tracking-[0.4em] ${light ? "text-ink/45" : "text-paper/45"}`}>{eyebrow}</p>
        <h2 className="mb-10 mt-4 max-w-4xl font-display text-5xl uppercase leading-[0.88] sm:text-6xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function StoryPoint({ number, title, copy }: { number: string; title: string; copy: string }) {
  return (
    <li className="flex gap-4 py-6">
      <span className="text-xs font-bold text-paper/30">{number}</span>
      <div>
        <h3 className="font-display text-xl uppercase leading-none">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-paper/45">{copy}</p>
      </div>
    </li>
  );
}
