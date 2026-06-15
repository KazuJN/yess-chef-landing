import { assets } from "@/lib/assets";
import Image from "next/image";

export function Hero() {
  return (
    <section className="flex flex-col items-start gap-4 self-stretch" aria-labelledby="hero-heading">
      <div className="relative aspect-[310/158] w-full shrink-0 overflow-hidden md:aspect-[546/241]">
        <Image
          src={assets.images.hero}
          alt="Gourmet dish with layered terrine, sauce, and floral garnish"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 546px"
          className="object-cover object-center"
        />
      </div>
      <div className="flex flex-col items-start gap-2">
        <h1 id="hero-heading" className="text-display text-accent">
          An experience like never before
        </h1>
        <p className="text-body text-white">
          Yess Chef is a chef-led dining experience around an open kitchen with a seasonal 6-course
          menu served course by course and the technique we&apos;re following is bistronomique. The
          vibe is very slow dining / home-style hospitality with old-school R&amp;B playing through
          the night.
        </p>
      </div>
    </section>
  );
}
