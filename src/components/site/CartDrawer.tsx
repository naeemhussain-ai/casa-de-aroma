import { AnimatePresence, motion } from "motion/react";
import { Minus, Plus, X, Lock } from "lucide-react";
import { useShop, money } from "@/lib/shop-store";

export function CartDrawer() {
  const { cart, cartOpen, setCartOpen, setQty, remove, subtotal, savings, count } = useShop();
  const shipping = subtotal > 50 || subtotal === 0 ? 0 : 9;

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 z-[70] bg-obsidian/80 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-[71] flex w-full max-w-md flex-col border-l border-border/70 bg-obsidian"
          >
            <div className="flex items-center justify-between border-b border-border/70 px-6 py-5">
              <div>
                <h2 className="font-display text-xl font-light">Your selection</h2>
                <p className="mt-1 text-[10px] tracking-[0.26em] text-muted-foreground uppercase">
                  {count} {count === 1 ? "item" : "items"}
                </p>
              </div>
              <button onClick={() => setCartOpen(false)} aria-label="Close cart" className="p-2">
                <X className="h-5 w-5" strokeWidth={1.2} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6">
              {cart.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <p className="font-display text-2xl font-light">Your cart is empty</p>
                  <p className="mt-3 max-w-xs text-sm text-muted-foreground">
                    Begin with the Discovery set — six vials, redeemable against your first bottle.
                  </p>
                  <button
                    onClick={() => setCartOpen(false)}
                    className="mt-8 border border-gold/60 px-8 py-3.5 text-[10px] tracking-[0.28em] text-gold uppercase"
                  >
                    Browse fragrances
                  </button>
                </div>
              ) : (
                <ul className="divide-y divide-border/60">
                  <AnimatePresence initial={false}>
                    {cart.map((line) => (
                      <motion.li
                        key={line.product.id}
                        layout
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="flex gap-4 overflow-hidden py-6"
                      >
                        <img
                          src={line.product.image}
                          alt={line.product.name}
                          loading="lazy"
                          className="h-28 w-22 shrink-0 border border-border/70 object-cover"
                        />
                        <div className="flex flex-1 flex-col">
                          <p className="text-[9px] tracking-[0.26em] text-muted-foreground uppercase">
                            {line.product.brand}
                          </p>
                          <h3 className="mt-1 font-display text-lg leading-tight font-light">
                            {line.product.name}
                          </h3>
                          <p className="mt-1 text-[10px] tracking-[0.2em] text-gold/80 uppercase">
                            {line.product.size}
                          </p>
                          <div className="mt-auto flex items-center justify-between pt-3">
                            <div className="flex items-center border border-border/70">
                              <button
                                onClick={() => setQty(line.product.id, line.qty - 1)}
                                aria-label="Decrease quantity"
                                className="px-2.5 py-2 text-foreground/70 hover:text-gold"
                              >
                                <Minus className="h-3 w-3" strokeWidth={1.4} />
                              </button>
                              <span className="w-7 text-center text-xs">{line.qty}</span>
                              <button
                                onClick={() => setQty(line.product.id, line.qty + 1)}
                                aria-label="Increase quantity"
                                className="px-2.5 py-2 text-foreground/70 hover:text-gold"
                              >
                                <Plus className="h-3 w-3" strokeWidth={1.4} />
                              </button>
                            </div>
                            <span className="font-display text-base">
                              {money(line.product.price * line.qty)}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => remove(line.product.id)}
                          aria-label="Remove item"
                          className="self-start p-1 text-muted-foreground hover:text-foreground"
                        >
                          <X className="h-3.5 w-3.5" strokeWidth={1.2} />
                        </button>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-border/70 px-6 py-6">
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <dt>Subtotal</dt>
                    <dd className="text-foreground">{money(subtotal)}</dd>
                  </div>
                  {savings > 0 && (
                    <div className="flex justify-between text-muted-foreground">
                      <dt>You save</dt>
                      <dd className="text-gold">−{money(savings)}</dd>
                    </div>
                  )}
                  <div className="flex justify-between text-muted-foreground">
                    <dt>Shipping</dt>
                    <dd className="text-foreground">
                      {shipping === 0 ? "Complimentary" : money(shipping)}
                    </dd>
                  </div>
                  <div className="flex justify-between border-t border-border/60 pt-3 font-display text-xl">
                    <dt>Total</dt>
                    <dd>{money(subtotal + shipping)}</dd>
                  </div>
                </dl>
                <button className="group relative mt-6 w-full overflow-hidden border border-gold/60 py-4 text-[11px] tracking-[0.28em] text-gold uppercase transition-colors duration-500 hover:text-obsidian">
                  <span className="relative z-10">Proceed to checkout</span>
                  <span className="absolute inset-0 -translate-y-full bg-gold transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
                </button>
                <p className="mt-4 flex items-center justify-center gap-2 text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  <Lock className="h-3 w-3" strokeWidth={1.4} /> Secure 256-bit checkout
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
