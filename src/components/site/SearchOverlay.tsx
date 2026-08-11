import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Search, X } from "lucide-react";
import { PRODUCTS } from "@/data/catalogue";
import { useShop, money } from "@/lib/shop-store";

export function SearchOverlay() {
  const { searchOpen, setSearchOpen, add } = useShop();
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return PRODUCTS.slice(0, 4);
    return PRODUCTS.filter((p) =>
      `${p.brand} ${p.name} ${p.family} ${p.category}`.toLowerCase().includes(term),
    );
  }, [q]);

  return (
    <AnimatePresence>
      {searchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[80] overflow-y-auto bg-obsidian/97 backdrop-blur-xl"
        >
          <div className="mx-auto max-w-4xl px-5 py-10 sm:px-8 sm:py-16">
            <div className="flex items-center justify-between">
              <span className="eyebrow">Search the house</span>
              <button onClick={() => setSearchOpen(false)} aria-label="Close search" className="p-2">
                <X className="h-5 w-5" strokeWidth={1.2} />
              </button>
            </div>

            <div className="mt-8 flex items-center gap-4 border-b border-border/70 pb-5">
              <Search className="h-5 w-5 text-gold" strokeWidth={1.2} />
              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search by name, house or family…"
                aria-label="Search fragrances"
                className="w-full bg-transparent font-display text-2xl font-light placeholder:text-muted-foreground/60 focus:outline-none sm:text-4xl"
              />
            </div>

            <p className="mt-6 text-[10px] tracking-[0.26em] text-muted-foreground uppercase">
              {results.length} {results.length === 1 ? "result" : "results"}
            </p>

            <ul className="mt-4 divide-y divide-border/60">
              {results.map((p) => (
                <motion.li
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="group flex items-center gap-5 py-5"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-20 w-16 border border-border/70 object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-[9px] tracking-[0.26em] text-muted-foreground uppercase">
                      {p.brand} · {p.family}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-light">{p.name}</h3>
                  </div>
                  <span className="hidden font-display text-lg sm:block">{money(p.price)}</span>
                  <button
                    onClick={() => {
                      add(p.id);
                      setSearchOpen(false);
                    }}
                    className="border border-border/70 px-5 py-2.5 text-[10px] tracking-[0.24em] uppercase transition-colors hover:border-gold/60 hover:text-gold"
                  >
                    Add
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
