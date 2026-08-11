import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/catalogue";
import { Reveal } from "./Reveal";

export function Testimonials() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const t = TESTIMONIALS[i]!;

  const go = (d: number) => {
    setDir(d);
    setI((prev) => (prev + d + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="relative overflow-hidden border-t border-border/60 bg-charcoal/40 py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <Reveal>
          <span className="eyebrow">Testimonials</span>
        </Reveal>

        <div className="relative mt-10 min-h-[300px] sm:min-h-[280px]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.blockquote
              key={i}
              custom={dir}
              initial={{ opacity: 0, x: dir * 40, filter: "blur(6px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -dir * 40, filter: "blur(6px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-display text-[clamp(1.7rem,4.2vw,3.4rem)] leading-[1.15] font-light">
                <span className="text-gold-soft">“</span>
                {t.quote}
                <span className="text-gold-soft">”</span>
              </p>
              <footer className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2">
                <span className="text-sm tracking-[0.16em] uppercase">{t.name}</span>
                <span className="h-px w-8 bg-gold/60" />
                <span className="text-xs text-muted-foreground">{t.place}</span>
                <span className="text-[10px] tracking-[0.24em] text-gold/80 uppercase">
                  Purchased: {t.purchased}
                </span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-border/60 pt-8">
          <div className="flex items-center gap-3">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDir(idx > i ? 1 : -1);
                  setI(idx);
                }}
                aria-label={`Testimonial ${idx + 1}`}
                className={`h-px transition-all duration-500 ${
                  idx === i ? "w-14 bg-gold" : "w-7 bg-border hover:bg-foreground/40"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center border border-border/70 transition-colors hover:border-gold/60 hover:text-gold"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={1.2} />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center border border-border/70 transition-colors hover:border-gold/60 hover:text-gold"
            >
              <ArrowRight className="h-4 w-4" strokeWidth={1.2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
