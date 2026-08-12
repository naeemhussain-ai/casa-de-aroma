import { createFileRoute } from "@tanstack/react-router";
import { ShopProvider } from "@/lib/shop-store";
import { AnnouncementBar, Navigation } from "@/components/site/Navigation";
import { Hero } from "@/components/site/Hero";
import { Collections } from "@/components/site/Collections";
import { BestSellers } from "@/components/site/BestSellers";
import { Editorial } from "@/components/site/Editorial";
import { Discovery } from "@/components/site/Discovery";
import { SignatureProduct } from "@/components/site/SignatureProduct";
import { Trust } from "@/components/site/Trust";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { Newsletter } from "@/components/site/Newsletter";
import { Footer } from "@/components/site/Footer";
import { CartDrawer } from "@/components/site/CartDrawer";
import { SearchOverlay } from "@/components/site/SearchOverlay";

const TITLE = "Casa De Aroma - Authentic Luxury Fragrances";
const DESCRIPTION =
  "Curated oud, oriental, floral and niche perfumes, vetted at source and delivered worldwide. Discover your signature scent at Casa De Aroma.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ShopProvider>
      <Navigation />
      <main>
        <Hero />
        <Collections />
        <BestSellers />
        <Editorial />
        <Discovery />
        <SignatureProduct />
        <Trust />
        <Testimonials />
        <Faq />
        <Newsletter />
      </main>
      <Footer />
      <CartDrawer />
      <SearchOverlay />
    </ShopProvider>
  );
}
