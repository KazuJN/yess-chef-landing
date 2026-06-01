import { BookingSection } from "@/components/sections/BookingSection";
import { Hero } from "@/components/sections/Hero";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";

export default function HomePage() {
  return (
    <div className="page-background min-h-screen px-5 py-16 sm:px-5 sm:py-16">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
      >
        Skip to content
      </a>
      <main id="main-content">
        <Container>
          <SiteHeader />
          <Divider />
          <Hero />
          <Divider />
          <BookingSection />
        </Container>
      </main>
    </div>
  );
}
