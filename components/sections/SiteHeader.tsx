import { Button } from "@/components/ui/Button";

export function SiteHeader() {
  return (
    <header className="flex flex-wrap items-center gap-4 self-stretch">
      <div className="min-w-0 flex-1 py-2">
        <a href="#" className="text-2xl font-black leading-[30px] text-white hover:opacity-90">
          Yess Chef
        </a>
      </div>
      <nav className="flex flex-wrap items-center gap-4" aria-label="Primary">
        <Button href="#reserve">Reserve a Table</Button>
        <Button href="tel:+15551234567">Call Us</Button>
      </nav>
    </header>
  );
}
