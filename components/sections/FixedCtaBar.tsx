import { PHONE_URL, RESERVE_URL } from "@/lib/constants";

const linkClass =
  "flex flex-1 items-center justify-center bg-accent px-3 py-3 text-label text-on-accent transition-colors hover:bg-accent-muted xl:flex-none xl:px-3";

export function FixedCtaBar() {
  return (
    <>
      {/* Mobile: sticky bottom bar */}
      <nav
        className="fixed inset-x-0 bottom-0 z-50 flex w-full border-t border-page bg-nav-bar xl:hidden"
        aria-label="Quick actions"
      >
        <a href={RESERVE_URL} className={`${linkClass} border-r border-page`}>
          Reserve a Table
        </a>
        <a href={PHONE_URL} className={linkClass}>
          Call Us
        </a>
      </nav>

      {/* Desktop: top-right CTAs */}
      <nav
        className="fixed top-0 right-0 z-50 hidden gap-4 bg-nav-bar p-4 xl:flex"
        aria-label="Quick actions"
      >
        <a href={RESERVE_URL} className={linkClass}>
          Reserve a Table
        </a>
        <a href={PHONE_URL} className={linkClass}>
          Call Us
        </a>
      </nav>
    </>
  );
}
