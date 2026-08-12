import { useState } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Reveal } from "./Reveal";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section
      id="newsletter"
      className="section-shell relative overflow-hidden border-t border-border/60 py-28 sm:py-36"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px rule-gold opacity-40" />
      <div className="pointer-events-none absolute bottom-[-30%] left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-gold/7 blur-[160px]" />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <div className="luxe-panel gold-glow px-6 py-12 sm:px-12 sm:py-14">
          <Reveal>
            <span className="eyebrow">VIP list</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-[clamp(2.3rem,6vw,4.6rem)] leading-[0.98] font-light">
              Enter the world of
              <span className="block italic text-gold-soft">fine fragrance.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Early access to new launches, member-only allocations of rare bottles, and 10% off
              your first order. No noise - four letters a year at most.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email.includes("@")) setDone(true);
              }}
              className="mx-auto mt-12 flex max-w-xl flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                aria-label="Email address"
                className="w-full border border-gold/14 bg-obsidian/45 px-6 py-4 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-gold/70 focus:outline-none"
              />
              <button
                type="submit"
                className="group gold-glow relative overflow-hidden border border-gold/60 bg-gold/8 px-10 py-4 text-[11px] tracking-[0.28em] whitespace-nowrap text-gold uppercase transition-colors duration-500 hover:text-obsidian"
              >
                <span className="relative z-10">{done ? "Welcome" : "Join the list"}</span>
                <span
                  className={`absolute inset-0 bg-gold transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    done ? "translate-y-0" : "-translate-y-full group-hover:translate-y-0"
                  }`}
                />
              </button>
            </form>
          </Reveal>

          {done && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 flex items-center justify-center gap-2 text-xs tracking-[0.2em] text-gold uppercase"
            >
              <Check className="h-3.5 w-3.5" strokeWidth={1.4} /> Your welcome code is on its way
            </motion.p>
          )}

          <Reveal delay={0.32}>
            <div className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-3 text-[10px] tracking-[0.26em] text-muted-foreground uppercase">
              {["Secure & encrypted", "Free shipping $50+", "30-day returns", "Tracked delivery"].map(
                (text) => (
                  <span key={text}>{text}</span>
                ),
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
