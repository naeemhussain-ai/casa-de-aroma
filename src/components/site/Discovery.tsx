import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FAMILIES, PRODUCTS, type Family } from "@/data/catalogue";
import { ProductCard } from "./ProductCard";
import { SectionHeading } from "./Reveal";

const BLURB: Record<Family, string> = {
  Woody: "Cedar, vetiver and dry sandalwood — structure you can lean on.",
  Oriental: "Oud, resin and spice. Opulent, dense, unmistakably Eastern.",
  Floral: "Rose, jasmine and iris, composed rather than sweet.",
  Fresh: "Marine air and crushed herbs. Clean without being clinical.",
  Citrus: "Bergamot and neroli — bright openings that never shout.",
  Amber: "Vanilla absolute and labdanum, warm against skin.",
  Musk: "Soft, skin-close and intimate. The quietest kind of luxury.",
};

export function Discovery() {
  const [active, setActive] = useState<Family>("Oriental");
  const matches = PRODUCTS.filter((p) => p.family === active);
  const others = PRODUCTS.filter((p) => p.family !== active).slice(0, 4 - matches.length);
  const shown = [...matches, ...(matches.length < 3 ? others : [])].slice(0, 4);

  return (
    <section id="discovery" className="relative border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Fragrance discovery"
          title={
            <>
              Find your
              <span className="italic text-gold-soft"> signature.</span>
            </>
          }
          copy="Seven families, one decision. Choose the note you gravitate toward and we will narrow two hundred fragrances down to the few worth trying."
        />

        <div className="mt-12 flex flex-wrap gap-3">
          {FAMILIES.map((f) => (
            <button
              key={f}
              onMouseEnter={() => setActive(f)}
              onFocus={() => setActive(f)}
              onClick={() => setActive(f)}
              className={`relative overflow-hidden border px-6 py-3 text-[10px] tracking-[0.26em] uppercase transition-all duration-500 ${
                active === f
                  ? "border-gold text-obsidian"
                  : "border-border/70 text-muted-foreground hover:border-gold/50 hover:text-foreground"
              }`}
            >
              <span className="relative z-10">{f}</span>
              <span
                className={`absolute inset-0 bg-gold transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  active === f ? "translate-y-0" : "translate-y-full"
                }`}
              />
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-xl font-display text-xl leading-snug font-light text-foreground/75 italic sm:text-2xl"
          >
            {BLURB[active]}
          </motion.p>
        </AnimatePresence>

        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {shown.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProductCard product={p} index={i} dimmed={p.family !== active} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
