import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, Search, ShoppingBag, X, Heart } from "lucide-react";
import { useState } from "react";
import { useShop } from "@/lib/shop-store";

const LINKS = [
  { label: "Collections", href: "#collections" },
  { label: "Best Sellers", href: "#bestsellers" },
  { label: "Discovery", href: "#discovery" },
  { label: "Maison", href: "#story" },
  { label: "FAQ", href: "#faq" },
];

export function AnnouncementBar() {
  const items = [
    "Complimentary tracked delivery on orders over $50",
    "100% authentic — vetted at source",
    "Welcome code WELCOME10 for 10% off your first order",
    "Lacquered gift packaging on every order",
  ];
  return (
    <div className="relative z-50 overflow-hidden border-b border-border/60 bg-charcoal">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0">
            {items.map((t) => (
              <span
                key={t}
                className="flex items-center gap-6 px-8 py-2.5 text-[10px] tracking-[0.28em] whitespace-nowrap text-muted-foreground uppercase"
              >
                {t}
                <span className="h-1 w-1 rotate-45 bg-gold/70" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Navigation() {
  const { count, wishlist, setCartOpen, setSearchOpen } = useShop();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={`sticky top-0 z-40 w-full transition-all duration-700 ${
          scrolled
            ? "border-b border-border/70 bg-obsidian/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1500px] items-center justify-between px-5 transition-all duration-700 sm:px-8 ${
            scrolled ? "h-16" : "h-24"
          }`}
        >
          <button
            onClick={() => setMenu(true)}
            aria-label="Open menu"
            className="-ml-2 p-2 text-foreground/80 transition-colors hover:text-gold lg:hidden"
          >
            <Menu className="h-5 w-5" strokeWidth={1.2} />
          </button>

          <a href="#top" className="group flex flex-col items-center lg:items-start">
            <span
              className={`font-display leading-none font-light tracking-[0.22em] transition-all duration-700 ${
                scrolled ? "text-lg" : "text-xl sm:text-2xl"
              }`}
            >
              CASA DE AROMA
            </span>
            <span className="mt-1 hidden text-[9px] tracking-[0.4em] text-gold/80 uppercase sm:block">
              Authentic Luxury
            </span>
          </a>

          <nav className="hidden items-center gap-10 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-[11px] tracking-[0.22em] text-foreground/70 uppercase transition-colors hover:text-foreground"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search fragrances"
              className="p-2 text-foreground/80 transition-colors hover:text-gold"
            >
              <Search className="h-[18px] w-[18px]" strokeWidth={1.2} />
            </button>
            <button
              aria-label="Wishlist"
              className="relative hidden p-2 text-foreground/80 transition-colors hover:text-gold sm:block"
            >
              <Heart className="h-[18px] w-[18px]" strokeWidth={1.2} />
              {wishlist.length > 0 && (
                <span className="absolute top-0.5 right-0 h-1.5 w-1.5 rounded-full bg-gold" />
              )}
            </button>
            <button
              onClick={() => setCartOpen(true)}
              aria-label="Open cart"
              className="relative p-2 text-foreground/80 transition-colors hover:text-gold"
            >
              <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.2} />
              <AnimatePresence>
                {count > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[9px] font-medium text-obsidian"
                  >
                    {count}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-obsidian lg:hidden"
          >
            <div className="flex h-20 items-center justify-between px-6">
              <span className="font-display text-lg tracking-[0.22em]">MENU</span>
              <button onClick={() => setMenu(false)} aria-label="Close menu" className="p-2">
                <X className="h-5 w-5" strokeWidth={1.2} />
              </button>
            </div>
            <nav className="mt-8 flex flex-col px-6">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenu(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i + 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-border/60 py-6 font-display text-3xl font-light"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="absolute right-6 bottom-10 left-6">
              <a
                href="#bestsellers"
                onClick={() => setMenu(false)}
                className="block border border-gold/50 py-4 text-center text-[11px] tracking-[0.28em] text-gold uppercase"
              >
                Shop the collection
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
