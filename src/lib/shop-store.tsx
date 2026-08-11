import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { PRODUCTS, type Product } from "@/data/catalogue";

type CartLine = { product: Product; qty: number };

type ShopContextValue = {
  cart: CartLine[];
  wishlist: string[];
  cartOpen: boolean;
  searchOpen: boolean;
  count: number;
  subtotal: number;
  savings: number;
  add: (id: string, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  toggleWish: (id: string) => void;
  setCartOpen: (v: boolean) => void;
  setSearchOpen: (v: boolean) => void;
};

const ShopContext = createContext<ShopContextValue | null>(null);

export function ShopProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const add = useCallback((id: string, qty = 1) => {
    const product = PRODUCTS.find((p) => p.id === id);
    if (!product) return;
    setCart((prev) => {
      const found = prev.find((l) => l.product.id === id);
      if (found) {
        return prev.map((l) =>
          l.product.id === id ? { ...l, qty: l.qty + qty } : l,
        );
      }
      return [...prev, { product, qty }];
    });
    setCartOpen(true);
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setCart((prev) =>
      qty <= 0
        ? prev.filter((l) => l.product.id !== id)
        : prev.map((l) => (l.product.id === id ? { ...l, qty } : l)),
    );
  }, []);

  const remove = useCallback((id: string) => {
    setCart((prev) => prev.filter((l) => l.product.id !== id));
  }, []);

  const toggleWish = useCallback((id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id],
    );
  }, []);

  const value = useMemo<ShopContextValue>(() => {
    const count = cart.reduce((n, l) => n + l.qty, 0);
    const subtotal = cart.reduce((n, l) => n + l.product.price * l.qty, 0);
    const savings = cart.reduce(
      (n, l) => n + (l.product.compareAt ? (l.product.compareAt - l.product.price) * l.qty : 0),
      0,
    );
    return {
      cart,
      wishlist,
      cartOpen,
      searchOpen,
      count,
      subtotal,
      savings,
      add,
      setQty,
      remove,
      toggleWish,
      setCartOpen,
      setSearchOpen,
    };
  }, [cart, wishlist, cartOpen, searchOpen, add, setQty, remove, toggleWish]);

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used inside ShopProvider");
  return ctx;
}

export const money = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD" });
