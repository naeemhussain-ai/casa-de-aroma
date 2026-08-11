import { useState } from "react";
import { PRODUCTS } from "@/data/catalogue";
import { ProductCard } from "./ProductCard";
import { Reveal, SectionHeading } from "./Reveal";

const TABS = ["All", "Men's Fragrances", "Women's Fragrances", "Oud & Oriental", "Gift Sets"];

export function BestSellers() {
  const [tab, setTab] = useState("All");
  const list = tab === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === tab);

  return (
    <section id="bestsellers" className="relative border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="The edit"
            title={
              <>
                Best sellers,
                <span className="block italic text-gold-soft">quietly earned.</span>
              </>
            }
          />
          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-x-7 gap-y-3">
              {TABS.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`relative pb-1.5 text-[10px] tracking-[0.24em] uppercase transition-colors ${
                    tab === t ? "text-gold" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t}
                  <span
                    className={`absolute inset-x-0 bottom-0 h-px bg-gold transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      tab === t ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
