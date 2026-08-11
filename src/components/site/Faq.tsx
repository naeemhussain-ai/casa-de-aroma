import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { FAQS } from "@/data/catalogue";
import { Reveal, SectionHeading } from "./Reveal";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div>
          <SectionHeading
            eyebrow="Support"
            title={
              <>
                Questions,
                <span className="block italic text-gold-soft">answered.</span>
              </>
            }
          />
          <Reveal delay={0.2}>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              Still unsure? Our curators reply within the hour.
              <br />
              <a href="#newsletter" className="mt-3 inline-block text-gold hover:underline">
                support@casadearoma.com
              </a>
            </p>
          </Reveal>
        </div>

        <div className="border-t border-border/70">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className="border-b border-border/70">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-start justify-between gap-6 py-7 text-left"
                  >
                    <span
                      className={`font-display text-xl font-light transition-colors duration-500 sm:text-2xl ${
                        isOpen ? "text-gold-soft" : "group-hover:text-foreground/80"
                      }`}
                    >
                      {f.q}
                    </span>
                    <Plus
                      className={`mt-1 h-5 w-5 shrink-0 text-gold transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isOpen ? "rotate-135" : "rotate-0"
                      }`}
                      strokeWidth={1}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pr-10 pb-8 text-sm leading-[1.9] text-muted-foreground">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
