import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import heroImage from "@/assets/hero-fragrance.jpg";

const rise = {
  hidden: { opacity: 0, y: 44 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, delay: 0.25 + i * 0.13, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section ref={ref} id="top" className="relative grain min-h-[100svh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={heroImage}
          alt="Faceted crystal perfume bottle lit dramatically on wet black stone"
          width={1600}
          height={1104}
          className="h-[115%] w-full animate-lux-drift object-cover object-center"
        />
        <div className="absolute inset-0 bg-obsidian/52" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,oklch(0.72_0.09_82_/_0.2),transparent_22%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/76 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/18" />
        <div className="absolute inset-x-0 bottom-0 h-64 veil" />
      </motion.div>

      <div className="pointer-events-none absolute inset-x-5 top-24 bottom-8 border border-gold/10 sm:inset-x-8" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1500px] flex-col justify-start px-5 pt-32 pb-8 sm:px-8 lg:pt-36">
        <div className="max-w-4xl">
          <motion.div custom={0} variants={rise} initial="hidden" animate="show">
            <span className="eyebrow">Maison Casa De Aroma - Est. Houston</span>
          </motion.div>

          <motion.div
            custom={1}
            variants={rise}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-3xl"
          >
            <h1 className="font-display text-[clamp(3.2rem,11vw,9.5rem)] leading-[0.85] font-light tracking-[-0.02em]">
              SCENT,
              <span className="block bg-gradient-to-r from-gold-soft via-gold to-gold-soft bg-clip-text pl-[0.12em] text-transparent italic">
                refined.
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={rise}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between"
          >
            <div className="luxe-panel gold-glow max-w-xl p-6 sm:p-8">
              <p className="max-w-md text-sm leading-relaxed text-foreground/78 sm:text-base">
                Exceptional fragrances curated for those who leave an impression. Built on a
                darker, richer stage so every bottle feels worthy of the spotlight.
              </p>
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4">
                {[
                  ["Rare", "Curated selections"],
                  ["Gold", "Gift-ready finishing"],
                  ["Trusted", "Authenticity guaranteed"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <div className="text-[10px] tracking-[0.28em] text-gold uppercase">
                      {label}
                    </div>
                    <div className="mt-2 text-sm text-foreground/66">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid max-w-sm grid-cols-3 gap-4 text-right">
              {[
                ["8,000+", "Clients"],
                ["200+", "Fragrances"],
                ["4.8", "Rating"],
              ].map(([n, l]) => (
                <div key={l} className="luxe-panel px-4 py-5">
                  <div className="font-display text-2xl font-light text-gold-soft sm:text-3xl">
                    {n}
                  </div>
                  <div className="mt-1 text-[10px] tracking-[0.28em] text-muted-foreground uppercase">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            custom={3}
            variants={rise}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <a
              href="#collections"
              className="group gold-glow relative overflow-hidden border border-gold/60 bg-gold/8 px-9 py-4 text-center text-[11px] tracking-[0.28em] text-gold uppercase transition-colors duration-500 hover:text-obsidian"
            >
              <span className="relative z-10">Explore the collection</span>
              <span className="absolute inset-0 -translate-y-full bg-gold transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
            </a>
            <a
              href="#discovery"
              className="group px-2 py-4 text-center text-[11px] tracking-[0.28em] text-foreground/75 uppercase transition-colors hover:text-foreground"
            >
              Discover your scent
              <span className="mt-1 block h-px w-full origin-left scale-x-100 bg-foreground/30 transition-all duration-500 group-hover:bg-gold" />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute right-6 bottom-8 hidden flex-col items-center gap-4 sm:right-10 md:flex"
      >
        <span className="text-[9px] tracking-[0.35em] [writing-mode:vertical-rl] text-muted-foreground uppercase">
          Scroll
        </span>
        <span className="relative h-16 w-px overflow-hidden bg-border">
          <span className="absolute inset-x-0 top-0 h-4 animate-scroll-dot bg-gold" />
        </span>
      </motion.div>
    </section>
  );
}
