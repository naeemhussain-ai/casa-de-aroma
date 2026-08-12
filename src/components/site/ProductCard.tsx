import { motion } from "motion/react";
import { Heart, Plus, Star } from "lucide-react";
import { useShop, money } from "@/lib/shop-store";
import type { Product } from "@/data/catalogue";

export function ProductCard({
  product,
  dimmed = false,
  index = 0,
}: {
  product: Product;
  dimmed?: boolean;
  index?: number;
}) {
  const { add, toggleWish, wishlist } = useShop();
  const wished = wishlist.includes(product.id);
  const off = product.compareAt
    ? Math.round((1 - product.price / product.compareAt) * 100)
    : 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      animate={{ opacity: dimmed ? 0.25 : 1, filter: dimmed ? "grayscale(1)" : "grayscale(0)" }}
      className="group relative flex flex-col"
    >
      <div className="luxe-panel relative aspect-[4/5] overflow-hidden">
        <img
          src={product.image}
          alt={`${product.brand} ${product.name}`}
          loading="lazy"
          width={900}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:opacity-0"
        />
        <img
          src={product.hoverImage}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-100 group-hover:opacity-100"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,oklch(0.72_0.08_82_/_0.16),transparent_26%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.tag && (
            <span className="bg-obsidian/75 px-3 py-1 text-[9px] tracking-[0.24em] text-gold uppercase backdrop-blur-sm">
              {product.tag}
            </span>
          )}
          {off > 0 && (
            <span className="bg-gold px-3 py-1 text-[9px] tracking-[0.24em] text-obsidian uppercase">
              -{off}%
            </span>
          )}
        </div>

        <button
          onClick={() => toggleWish(product.id)}
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center border border-gold/14 bg-obsidian/65 backdrop-blur-sm transition-colors hover:border-gold/60"
        >
          <Heart
            className={`h-4 w-4 transition-colors ${wished ? "fill-gold text-gold" : "text-foreground/70"}`}
            strokeWidth={1.2}
          />
        </button>

        <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
          <button
            onClick={() => add(product.id)}
            className="flex w-full items-center justify-center gap-2 border border-gold/70 bg-obsidian/80 py-3.5 text-[10px] tracking-[0.28em] text-gold uppercase backdrop-blur-md transition-colors hover:bg-gold hover:text-obsidian"
          >
            <Plus className="h-3.5 w-3.5" strokeWidth={1.4} />
            Quick add
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col pt-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] tracking-[0.26em] text-muted-foreground uppercase">
              {product.brand}
            </p>
            <h3 className="mt-1.5 font-display text-xl leading-tight font-light">
              {product.name}
            </h3>
          </div>
          <div className="flex shrink-0 items-center gap-1 pt-1">
            <Star className="h-3 w-3 fill-gold text-gold" strokeWidth={1} />
            <span className="text-xs text-foreground/80">{product.rating}</span>
            <span className="text-[10px] text-muted-foreground">({product.reviews})</span>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2 text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
          <span className="text-gold/80">{product.family}</span>
          <span className="h-px w-4 bg-border" />
          <span>{product.size}</span>
        </div>

        <div className="mt-auto flex items-baseline gap-3 pt-4">
          <span className="font-display text-lg text-gold-soft">{money(product.price)}</span>
          {product.compareAt && (
            <span className="text-xs text-muted-foreground line-through">
              {money(product.compareAt)}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
