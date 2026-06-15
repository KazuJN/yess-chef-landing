const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0790137603635!2d77.5875467749434!3d12.966795687348112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c776937ec1%3A0x12d9af54f7d5c4be!2sYess%20Chef!5e0!3m2!1sen!2sin!4v1781508702258!5m2!1sen!2sin";

export function MapSection() {
  return (
    <section className="w-full self-stretch" aria-label="Location map">
      <div className="relative aspect-[310/180] w-full shrink-0 overflow-hidden xl:aspect-[546/180]">
        <iframe
          src={MAP_EMBED_URL}
          title="Yess Chef on Google Maps"
          className="absolute inset-0 h-full w-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
