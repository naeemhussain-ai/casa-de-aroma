import acqua from "@/assets/p-acqua.jpg";
import si from "@/assets/p-si.jpg";
import roseArabie from "@/assets/p-rose-arabie.jpg";
import bloom from "@/assets/p-bloom.jpg";
import duo from "@/assets/p-duo.jpg";
import giftbox from "@/assets/p-giftbox.jpg";
import flora from "@/assets/p-flora.jpg";
import gucci from "@/assets/p-gucci.jpg";
import cSignature from "@/assets/c-signature.jpg";
import cEdp from "@/assets/c-edp.jpg";
import cPrivate from "@/assets/c-private.jpg";
import cDiscovery from "@/assets/c-discovery.jpg";

export type Family =
  | "Woody"
  | "Oriental"
  | "Floral"
  | "Fresh"
  | "Citrus"
  | "Amber"
  | "Musk";

export const FAMILIES: Family[] = [
  "Woody",
  "Oriental",
  "Floral",
  "Fresh",
  "Citrus",
  "Amber",
  "Musk",
];

export type Product = {
  id: string;
  brand: string;
  name: string;
  category: string;
  family: Family;
  rating: number;
  reviews: number;
  price: number;
  compareAt?: number;
  size: string;
  image: string;
  hoverImage: string;
  tag?: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "acqua-di-gio-profumo",
    brand: "Giorgio Armani",
    name: "Acqua di Giò Profumo",
    category: "Men's Fragrances",
    family: "Fresh",
    rating: 4.9,
    reviews: 412,
    price: 119.99,
    compareAt: 149.99,
    size: "75 ml",
    image: acqua,
    hoverImage: cSignature,
    tag: "Trending",
  },
  {
    id: "armani-si",
    brand: "Giorgio Armani",
    name: "Sì Eau de Parfum",
    category: "Women's Fragrances",
    family: "Floral",
    rating: 4.9,
    reviews: 356,
    price: 99.99,
    compareAt: 129.99,
    size: "100 ml",
    image: si,
    hoverImage: cEdp,
    tag: "New",
  },
  {
    id: "rose-darabie",
    brand: "Armani Privé",
    name: "Rose d'Arabie",
    category: "Oud & Oriental",
    family: "Oriental",
    rating: 4.9,
    reviews: 187,
    price: 219.99,
    compareAt: 259.99,
    size: "100 ml",
    image: roseArabie,
    hoverImage: cPrivate,
    tag: "Rare",
  },
  {
    id: "gucci-bloom",
    brand: "Gucci",
    name: "Bloom Eau de Parfum",
    category: "Women's Fragrances",
    family: "Floral",
    rating: 4.8,
    reviews: 389,
    price: 89.0,
    size: "100 ml",
    image: bloom,
    hoverImage: cEdp,
  },
  {
    id: "si-intense-duo",
    brand: "Giorgio Armani",
    name: "Sì & Sì Intense Duo",
    category: "Gift Sets",
    family: "Amber",
    rating: 4.9,
    reviews: 96,
    price: 179.0,
    compareAt: 229.0,
    size: "2 × 50 ml",
    image: duo,
    hoverImage: giftbox,
  },
  {
    id: "si-gift-box",
    brand: "Giorgio Armani",
    name: "Sì Eau de Parfum Gift Box",
    category: "Gift Sets",
    family: "Musk",
    rating: 4.8,
    reviews: 143,
    price: 139.0,
    compareAt: 169.0,
    size: "50 ml + mist",
    image: giftbox,
    hoverImage: duo,
  },
  {
    id: "gucci-flora",
    brand: "Gucci",
    name: "Flora Eau de Toilette",
    category: "Women's Fragrances",
    family: "Citrus",
    rating: 4.7,
    reviews: 231,
    price: 79.0,
    size: "75 ml",
    image: flora,
    hoverImage: cDiscovery,
  },
  {
    id: "gucci-by-gucci",
    brand: "Gucci",
    name: "Gucci by Gucci Eau de Parfum",
    category: "Unisex & Niche",
    family: "Woody",
    rating: 4.6,
    reviews: 164,
    price: 82.0,
    size: "75 ml",
    image: gucci,
    hoverImage: cSignature,
  },
];

export const COLLECTIONS = [
  {
    id: "signature",
    title: "Signature",
    count: "12 fragrances",
    copy: "The house edit — scents our curators wear themselves.",
    image: cSignature,
  },
  {
    id: "eau-de-parfum",
    title: "Eau de Parfum",
    count: "6 fragrances",
    copy: "Higher concentration, longer wear, quieter confidence.",
    image: cEdp,
  },
  {
    id: "private-collection",
    title: "Private Collection",
    count: "3 fragrances",
    copy: "Oud, amber and resin. Middle Eastern opulence, vetted at source.",
    image: cPrivate,
  },
  {
    id: "discovery",
    title: "Discovery",
    count: "Sample sets",
    copy: "Six vials. One decision. Redeemable against your first bottle.",
    image: cDiscovery,
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Rose d'Arabie is simply breathtaking. The longevity, the sillage — worth every penny. I receive compliments every single time I wear it.",
    name: "Layla A.",
    place: "Dubai, UAE",
    purchased: "Armani Privé Rose d'Arabie",
  },
  {
    quote:
      "Sì is my forever scent. I have tried designer fragrances costing three times as much and nothing compares. The presentation box is stunning.",
    name: "Sophie M.",
    place: "Paris, FR",
    purchased: "Sì Eau de Parfum Gift Box",
  },
  {
    quote:
      "Ordered the Sì Intense Duo for my wife's birthday — she was blown away. Fast delivery, beautiful presentation, genuinely world-class.",
    name: "James R.",
    place: "Sydney, AU",
    purchased: "Sì & Sì Intense Duo",
  },
];

export const FAQS = [
  {
    q: "How do you guarantee authenticity?",
    a: "Every bottle is sourced directly from trusted fragrance houses across the Middle East, Europe and Asia — never the grey market. Each batch is verified against house codes before it enters our vault, and every order ships with a certificate of authenticity.",
  },
  {
    q: "How long does delivery take?",
    a: "Orders are dispatched within 24 hours and arrive in 3–7 business days, fully tracked, to more than 40 countries. Shipping is complimentary on orders above $50.",
  },
  {
    q: "Which payment methods do you accept?",
    a: "All major cards, Apple Pay, Google Pay and PayPal. Every transaction is protected by 256-bit encryption and we never store your card details.",
  },
  {
    q: "What is your returns and exchange policy?",
    a: "Unopened bottles can be returned within 30 days for a full refund. If a fragrance arrives damaged, send us a photograph and a replacement leaves the same day.",
  },
  {
    q: "How do I choose the right fragrance?",
    a: "Start with Find Your Signature above, or order the Discovery set — six vials across our families, with the cost redeemable against your first full bottle. Our curators also answer scent-matching questions within the hour.",
  },
  {
    q: "Do you offer gift packaging?",
    a: "Yes. Every order arrives in our lacquered presentation box with ivory satin lining, and you can add a handwritten card at checkout at no cost.",
  },
];

export const SIGNATURE = {
  brand: "Armani Privé",
  name: "Rose d'Arabie",
  price: 219.99,
  compareAt: 259.99,
  availability: "In stock — 12 bottles remaining",
  description:
    "A Taif rose laid over Laotian oud and vanilla absolute. Dense, resinous and unmistakably Middle Eastern, it opens sharp and dries down to warm skin — the fragrance our curators reach for when the evening matters.",
  notes: {
    top: ["Taif Rose", "Saffron", "Bergamot"],
    heart: ["Laotian Oud", "Damask Rose", "Patchouli"],
    base: ["Vanilla Absolute", "Amber", "Sandalwood"],
  },
};
