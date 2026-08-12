import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import editorial from "@/assets/editorial-story.jpg";
import { Reveal } from "./Reveal";

export function Editorial() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="story" ref={ref} className="relative border-t border-border/60 bg-charcoal/35">
      <div className="pointer-events-none absolute inset-6 border border-gold/8" />
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-stretch lg:grid-cols-2">
        <div className="relative min-h-[70vh] overflow-hidden lg:min-h-[92vh]">
          <motion.img
            style={{ y }}
            src={editorial}
            alt="A perfumer holding an amber flacon beside oud wood and rose petals"
            loading="lazy"
            width={1200}
            height={1504}
            className="absolute inset-0 h-[116%] w-full object-cover"
          />
          <div className="absolute inset-0 bg-obsidian/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,oklch(0.1_0.006_80_/_0.5)_100%)]" />
        </div>

        <div className="flex flex-col justify-center px-5 py-20 sm:px-12 lg:px-20 lg:py-0">
          <div className="luxe-panel max-w-2xl p-8 sm:p-10">
            <Reveal>
              <span className="eyebrow">Our story</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-display text-[clamp(2.6rem,6vw,5rem)] leading-[0.92] font-light">
                MORE THAN
                <span className="block italic text-gold-soft">a fragrance.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-8 h-px w-24 rule-gold" />
            </Reveal>
            <Reveal delay={0.22}>
              <p className="mt-8 max-w-lg text-sm leading-[1.9] text-foreground/74 sm:text-base">
                Casa De Aroma began with a frustration: finding a genuine luxury perfume online
                meant wading through grey-market bottles and outright imitations. So we built the
                house we wished existed - every fragrance personally vetted before it earns a
                place on the shelf.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-6 max-w-lg text-sm leading-[1.9] text-foreground/56 sm:text-base">
                A scent is memory made portable. It is the first thing recognised and the last
                thing forgotten - craftsmanship you wear, identity you carry, confidence you
                never have to announce.
              </p>
            </Reveal>

            <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                ["8,000+", "Clients"],
                ["200+", "Fragrances"],
                ["40+", "Countries"],
                ["4.8", "Avg. rating"],
              ].map(([n, l], i) => (
                <Reveal key={l} delay={0.36 + i * 0.06}>
                  <div className="border border-gold/10 bg-obsidian/20 px-4 py-5">
                    <div className="font-display text-3xl font-light text-gold-soft">{n}</div>
                    <div className="mt-2 text-[10px] tracking-[0.26em] text-muted-foreground uppercase">
                      {l}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
