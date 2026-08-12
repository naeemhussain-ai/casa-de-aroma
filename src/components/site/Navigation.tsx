import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { useShop } from "@/lib/shop-store";
import logoSrc from "@/assets/casa-de-aroma-logo.png";

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
    "100% authentic - vetted at source",
    "Welcome code WELCOME10 for 10% off your first order",
    "Lacquered gift packaging on every order",
  ];

  return (
    <div className="relative z-50 overflow-hidden border-b border-gold/10 bg-[linear-gradient(90deg,oklch(0.18_0.018_80),oklch(0.22_0.03_82),oklch(0.18_0.018_80))]">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0">
            {items.map((text) => (
              <span
                key={text}
                className="flex items-center gap-6 px-8 py-2.5 text-[10px] tracking-[0.28em] whitespace-nowrap text-gold-soft/75 uppercase"
              >
                {text}
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

  useMotionValueEvent(scrollY, "change", (value) => setScrolled(value > 40));

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={`sticky top-0 z-40 w-full transition-all duration-700 ${
          scrolled
            ? "border-b border-gold/10 bg-obsidian/82 shadow-[0_18px_60px_-30px_oklch(0_0_0_/_0.9)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div
          className="mx-auto flex h-32 max-w-[1500px] items-center justify-between px-5 transition-all duration-700 sm:px-8"
        >
          <button
            onClick={() => setMenu(true)}
            aria-label="Open menu"
            className="-ml-2 p-2 text-ivory transition-colors hover:text-gold lg:hidden"
          >
            <Menu className="h-5 w-5" strokeWidth={1.2} />
          </button>

          <a href="#top" className="group flex items-center">
            <img
              src={logoSrc}
              alt="Casa De Aroma"
              className="h-20 object-contain transition-all duration-700 sm:h-24"
            />
          </a>

          <nav className="hidden items-center gap-10 lg:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-[11px] tracking-[0.22em] text-ivory uppercase transition-colors hover:text-gold-soft"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search fragrances"
              className="p-2 text-ivory transition-colors hover:text-gold"
            >
              <Search className="h-[18px] w-[18px]" strokeWidth={1.2} />
            </button>
            <button
              aria-label="Wishlist"
              className="relative hidden p-2 text-ivory transition-colors hover:text-gold sm:block"
            >
              <Heart className="h-[18px] w-[18px]" strokeWidth={1.2} />
              {wishlist.length > 0 && (
                <span className="absolute top-0.5 right-0 h-1.5 w-1.5 rounded-full bg-gold" />
              )}
            </button>
            <button
              onClick={() => setCartOpen(true)}
              aria-label="Open cart"
              className="relative p-2 text-ivory transition-colors hover:text-gold"
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
            className="fixed inset-0 z-[60] bg-[radial-gradient(circle_at_top,oklch(0.32_0.06_80_/_0.16),transparent_30%),linear-gradient(180deg,oklch(0.16_0.02_80),oklch(0.1_0.006_80))] lg:hidden"
          >
            <div className="flex h-20 items-center justify-between border-b border-gold/10 px-6">
              <span className="font-display text-lg tracking-[0.22em] text-ivory">MENU</span>
              <button onClick={() => setMenu(false)} aria-label="Close menu" className="p-2">
                <X className="h-5 w-5" strokeWidth={1.2} />
              </button>
            </div>
            <nav className="mt-8 flex flex-col px-6">
              {LINKS.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenu(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.08 * index + 0.1,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="border-b border-gold/10 py-6 font-display text-3xl font-light text-ivory"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="absolute right-6 bottom-10 left-6">
              <a
                href="#bestsellers"
                onClick={() => setMenu(false)}
                className="block border border-gold/50 bg-gold/8 py-4 text-center text-[11px] tracking-[0.28em] text-gold uppercase backdrop-blur-sm"
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
