import Image from "next/image";

export function Hero() {
  return (
    <section className="flex flex-col items-start gap-4 self-stretch" aria-labelledby="hero-heading">
      <div className="relative aspect-[592/367] w-full shrink-0 overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Warmly lit restaurant interior with a long dining table and sculptural pendant lighting"
          fill
          priority
          sizes="(max-width: 640px) 100vw, 640px"
          className="object-cover object-center"
        />
      </div>
      <div className="flex flex-col items-start gap-2">
        <h1
          id="hero-heading"
          className="text-[32px] font-bold leading-10 text-accent"
        >
          An experience like never before
        </h1>
        <p className="text-base font-medium leading-5 text-accent">Come dine with us</p>
      </div>
    </section>
  );
}
