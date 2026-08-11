import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { COLLECTIONS } from "@/data/catalogue";
import { Reveal, SectionHeading } from "./Reveal";

function Tile({
  item,
  className,
  large = false,
  index,
}: {
  item: (typeof COLLECTIONS)[number];
  className?: string;
  large?: boolean;
  index: number;
}) {
  return (
    <motion.a
      href="#bestsellers"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative block overflow-hidden border border-border/70 bg-charcoal ${className ?? ""}`}
    >
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
      />
      <div className="absolute inset-0 bg-obsidian/35 transition-colors duration-700 group-hover:bg-obsidian/20" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 veil" />
      <div className="relative flex h-full flex-col justify-end p-6 sm:p-8">
        <span className="text-[10px] tracking-[0.28em] text-gold uppercase">{item.count}</span>
        <h3
          className={`mt-3 font-display font-light leading-none ${large ? "text-4xl sm:text-6xl" : "text-3xl sm:text-4xl"}`}
        >
          {item.title}
        </h3>
        <p className="mt-3 max-w-sm text-xs leading-relaxed text-foreground/65 sm:text-sm">
          {item.copy}
        </p>
        <span className="mt-6 flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase">
          <span className="transition-colors group-hover:text-gold">View collection</span>
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
            strokeWidth={1.2}
          />
        </span>
      </div>
    </motion.a>
  );
}

export function Collections() {
  return (
    <section id="collections" className="relative border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Curated houses"
            title={
              <>
                Four ways
                <span className="block italic text-gold-soft">to begin.</span>
              </>
            }
          />
          <Reveal delay={0.2}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground lg:text-right">
              Two hundred fragrances, narrowed to the ones worth your skin. Each collection
              is vetted bottle by bottle before it reaches the shelf.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-2 md:gap-5 lg:h-[720px]">
          <Tile
            index={0}
            item={COLLECTIONS[0]}
            large
            className="min-h-[440px] md:col-span-7 md:row-span-2"
          />
          <Tile index={1} item={COLLECTIONS[1]} className="min-h-[280px] md:col-span-5" />
          <div className="grid gap-4 md:col-span-5 md:grid-cols-2 md:gap-5">
            <Tile index={2} item={COLLECTIONS[2]} className="min-h-[280px]" />
            <Tile index={3} item={COLLECTIONS[3]} className="min-h-[280px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
