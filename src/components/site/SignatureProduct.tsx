import { motion } from "motion/react";
import { Check } from "lucide-react";
import signature from "@/assets/signature-product.jpg";
import { SIGNATURE } from "@/data/catalogue";
import { useShop, money } from "@/lib/shop-store";
import { Reveal } from "./Reveal";

const NOTE_GROUPS = [
  { label: "Top notes", key: "top" as const },
  { label: "Heart", key: "heart" as const },
  { label: "Base", key: "base" as const },
];

export function SignatureProduct() {
  const { add } = useShop();

  return (
    <section className="relative overflow-hidden border-t border-border/60 bg-charcoal/50 py-24 sm:py-32">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/8 blur-[140px]" />
      <div className="relative mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-6 border border-border/60" />
          <img
            src={signature}
            alt="Rose d'Arabie flacon lit against a dark background"
            loading="lazy"
            width={1200}
            height={1408}
            className="relative w-full animate-lux-float object-cover"
          />
        </motion.div>

        <div>
          <Reveal>
            <span className="eyebrow">Signature feature</span>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 text-xs tracking-[0.3em] text-muted-foreground uppercase">
              {SIGNATURE.brand}
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <h2 className="mt-3 font-display text-[clamp(2.6rem,6vw,5rem)] leading-[0.95] font-light">
              Rose
              <span className="italic text-gold-soft"> d'Arabie</span>
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-7 max-w-xl text-sm leading-[1.9] text-foreground/70 sm:text-base">
              {SIGNATURE.description}
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-px border border-border/70 bg-border/70 sm:grid-cols-3">
            {NOTE_GROUPS.map((g, i) => (
              <Reveal key={g.key} delay={0.24 + i * 0.08}>
                <div className="h-full bg-obsidian p-6">
                  <span className="text-[9px] tracking-[0.3em] text-gold uppercase">
                    {g.label}
                  </span>
                  <ul className="mt-4 space-y-2">
                    {SIGNATURE.notes[g.key].map((n) => (
                      <li key={n} className="font-display text-lg font-light">
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.42}>
            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-3xl font-light">
                    {money(SIGNATURE.price)}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    {money(SIGNATURE.compareAt)}
                  </span>
                </div>
                <p className="mt-2 flex items-center gap-2 text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                  <Check className="h-3.5 w-3.5 text-gold" strokeWidth={1.4} />
                  {SIGNATURE.availability}
                </p>
              </div>
              <button
                onClick={() => add("rose-darabie")}
                className="group relative overflow-hidden border border-gold/60 px-10 py-4 text-[11px] tracking-[0.28em] text-gold uppercase transition-colors duration-500 hover:text-obsidian"
              >
                <span className="relative z-10">Shop this fragrance</span>
                <span className="absolute inset-0 -translate-y-full bg-gold transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
