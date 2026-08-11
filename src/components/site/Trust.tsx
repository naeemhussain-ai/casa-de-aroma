import { BadgeCheck, Gem, ShieldCheck, Truck, Package, Headphones } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const ITEMS = [
  { icon: BadgeCheck, title: "100% Authentic", copy: "Sourced from vetted houses. Never grey market, never imitation." },
  { icon: Gem, title: "Carefully Curated", copy: "Two hundred fragrances, each personally tested before listing." },
  { icon: ShieldCheck, title: "Secure Checkout", copy: "256-bit encryption. Card details never touch our servers." },
  { icon: Truck, title: "Fast Delivery", copy: "Dispatched in 24 hours, tracked to 40+ countries in 3–7 days." },
  { icon: Package, title: "Premium Packaging", copy: "Lacquered presentation box, ivory satin, handwritten card." },
  { icon: Headphones, title: "Dedicated Support", copy: "Real people, 24/7, typically replying within the hour." },
];

export function Trust() {
  return (
    <section className="relative border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Casa De Aroma"
          title={
            <>
              Luxury without
              <span className="italic text-gold-soft"> compromise.</span>
            </>
          }
          align="center"
        />
        <div className="mt-16 grid grid-cols-1 gap-px border border-border/70 bg-border/70 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 0.08}>
              <div className="group h-full bg-obsidian p-8 transition-colors duration-700 hover:bg-charcoal sm:p-10">
                <it.icon
                  className="h-6 w-6 text-foreground/60 transition-colors duration-500 group-hover:text-gold"
                  strokeWidth={1}
                />
                <h3 className="mt-8 font-display text-2xl font-light">{it.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
