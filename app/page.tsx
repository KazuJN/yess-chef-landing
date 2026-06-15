import { BookingSection } from "@/components/sections/BookingSection";
import { CatDecoration } from "@/components/sections/CatDecoration";
import { FixedCtaBar } from "@/components/sections/FixedCtaBar";
import { GallerySection } from "@/components/sections/GallerySection";
import { Hero } from "@/components/sections/Hero";
import { LocationSection } from "@/components/sections/LocationSection";
import { MapSection } from "@/components/sections/MapSection";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Container } from "@/components/ui/Container";

export default function HomePage() {
  return (
    <div className="page-background relative min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
      >
        Skip to content
      </a>
      <FixedCtaBar />
      <main
        id="main-content"
        className="relative z-10 mx-auto px-6 pt-[100px] pb-24 xl:pt-[134px] xl:pb-16"
      >
        <div className="relative mx-auto w-fit">
          <CatDecoration />
          <Container>
            <SiteHeader />
            <Hero />
            <GallerySection />
            <BookingSection />
            <MapSection />
            <LocationSection />
          </Container>
        </div>
      </main>
    </div>
  );
}
