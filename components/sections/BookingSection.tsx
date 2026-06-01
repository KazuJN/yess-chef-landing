import Image from "next/image";
import { Divider } from "@/components/ui/Divider";

export function BookingSection() {
  return (
    <section
      id="reserve"
      className="flex flex-1 flex-col gap-4 self-stretch sm:flex-row sm:items-start"
      aria-labelledby="hours-heading"
    >
      <div className="relative mx-auto h-[124px] w-[157px] shrink-0 sm:mx-0">
        <Image
          src="/images/booking-cat.png"
          alt="Illustration of a cat wearing sunglasses and holding a wine glass"
          fill
          sizes="157px"
          className="object-contain object-center sm:object-left"
        />
      </div>
      <Divider className="sm:hidden" />
      <DividerVertical />
      <div className="flex min-w-0 flex-1 flex-col items-start gap-4">
        <h2 id="hours-heading" className="text-[32px] font-bold leading-10 text-accent">
          We&apos;re Open!
        </h2>
        <dl className="flex flex-col items-start gap-2">
          <div>
            <dt className="sr-only">Days</dt>
            <dd className="text-base font-medium leading-5 text-accent">Wed - Sun</dd>
          </div>
          <div>
            <dt className="sr-only">Hours</dt>
            <dd className="text-base font-medium leading-5 text-accent">
              7:00 PM - 9:00 PM &amp; 9:30 PM - 11:30 PM
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function DividerVertical() {
  return (
    <div
      className="hidden h-[124px] w-px shrink-0 bg-accent-muted sm:block"
      aria-hidden="true"
    />
  );
}
