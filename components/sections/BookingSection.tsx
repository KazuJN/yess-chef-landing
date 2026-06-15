import { Button } from "@/components/ui/Button";
import { assets } from "@/lib/assets";
import { PHONE_URL, RESERVE_URL } from "@/lib/constants";
import Image from "next/image";

export function BookingSection() {
  return (
    <section
      id="reserve"
      className="relative flex flex-col items-start gap-2 self-stretch"
      aria-labelledby="hours-heading"
    >
      <Image
        src={assets.illustrations.handWithFork}
        alt=""
        width={160}
        height={160}
        sizes="(max-width: 1280px) 160px, 192px"
        className="pointer-events-none absolute right-[-40px] bottom-0 h-[160px] w-[160px] object-cover object-center xl:right-[-54px] xl:h-[182px] xl:w-[192px]"
        aria-hidden
      />
      <div className="relative aspect-[310/183] w-full overflow-hidden xl:aspect-[546/248]">
        <Image
          src={assets.images.mushrooms}
          alt="Sautéed mushrooms on a wire rack"
          fill
          sizes="(max-width: 768px) 100vw, 546px"
          className="object-cover object-center"
        />
      </div>
      <h2 id="hours-heading" className="text-display text-accent">
        Reserve a table
      </h2>
      <div className="relative w-full self-stretch overflow-hidden">
        <dl className="flex flex-col items-start gap-2 text-body text-white">
          <div>
            <dt className="sr-only">Days</dt>
            <dd>Wednesday - Sunday</dd>
          </div>
          <div>
            <dt className="sr-only">First seating</dt>
            <dd>7:00 PM - 9:00 PM</dd>
          </div>
          <div>
            <dt className="sr-only">Second seating</dt>
            <dd>9:30 PM - 11:30 PM</dd>
          </div>
        </dl>
      </div>
      <div className="flex flex-wrap items-center gap-2 pt-2">
        <Button href={RESERVE_URL}>Reserve a Table</Button>
        <Button href={PHONE_URL}>Call Us</Button>
      </div>
    </section>
  );
}
