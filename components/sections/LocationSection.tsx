import { ADDRESS, PHONE_NUMBER, PHONE_URL } from "@/lib/constants";

export function LocationSection() {
  return (
    <section className="flex flex-col items-start gap-2 self-stretch" aria-labelledby="location-heading">
      <h2 id="location-heading" className="text-display text-accent">
        Come find us
      </h2>
      <dl className="flex flex-col items-start gap-2 text-body text-white">
        <div>
          <dt className="font-bold">Address</dt>
          <dd>
            <address className="not-italic">{ADDRESS}</address>
          </dd>
        </div>
        <div>
          <dt className="font-bold">Phone Number</dt>
          <dd>
            <a href={PHONE_URL} className="transition-colors hover:text-accent">
              {PHONE_NUMBER}
            </a>
          </dd>
        </div>
      </dl>
    </section>
  );
}
