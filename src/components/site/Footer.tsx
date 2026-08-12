import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import logoSrc from "@/assets/casa-de-aroma-logo.png";

const COLUMNS = [
  { title: "Shop", links: ["All Products", "New Arrivals", "Trending Now", "Gift Sets"] },
  { title: "Collections", links: ["Signature", "Eau de Parfum", "Private Collection", "Discovery"] },
  { title: "House", links: ["About", "Contact", "FAQ", "Journal"] },
  { title: "Care", links: ["Shipping", "Returns", "Privacy", "Terms"] },
];

const SOCIALS = [
  { Icon: Instagram, label: "Instagram" },
  { Icon: Facebook, label: "Facebook" },
  { Icon: Twitter, label: "Twitter" },
  { Icon: Youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-charcoal/30 pt-20 pb-10">
      <div className="pointer-events-none absolute inset-6 border border-gold/8" />
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        <div className="luxe-panel grid grid-cols-2 gap-10 border-b border-border/60 p-8 pb-10 lg:grid-cols-6 lg:p-10">
          <div className="col-span-2">
            <a href="#top" className="inline-flex items-center">
              <img src={logoSrc} alt="Casa De Aroma" className="h-18 w-auto object-contain sm:h-20" />
            </a>
            <p className="mt-2 text-[9px] tracking-[0.4em] text-gold/80 uppercase">
              Authentic Luxury Delivered
            </p>
            <p className="mt-7 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Authentic luxury fragrances, delivered worldwide - oud, oriental, floral and niche,
              in one house you can trust.
            </p>
            <div className="mt-7 space-y-1 text-sm text-foreground/70">
              <p>support@casadearoma.com</p>
              <p>+1 (713) 555-0198</p>
              <p className="text-muted-foreground">Houston, TX</p>
            </div>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.title}>
              <h3 className="text-[10px] tracking-[0.28em] text-gold uppercase">{column.title}</h3>
              <ul className="mt-6 space-y-3.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-6 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">© 2026 Casa De Aroma. All rights reserved.</p>
          <div className="flex gap-3">
            {SOCIALS.map(({ Icon, label }) => (
              <a
                key={label}
                href="#top"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center border border-gold/12 bg-obsidian/40 text-foreground/60 transition-colors hover:border-gold/60 hover:text-gold"
              >
                <Icon className="h-4 w-4" strokeWidth={1.2} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
