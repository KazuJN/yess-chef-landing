import { assets } from "@/lib/assets";
import Image from "next/image";

export function GallerySection() {
  return (
    <section
      className="relative flex w-full items-center justify-end self-stretch overflow-visible"
      aria-label="Gallery"
    >
      <div className="absolute top-[70px] bottom-0 left-[-60px] flex w-1/2 flex-col items-center justify-end">
        <Image
          src={assets.illustrations.wineInGlass}
          alt=""
          width={178}
          height={178}
          sizes="50vw"
          className="h-auto w-full object-contain object-left"
          aria-hidden
        />
      </div>
      <div className="relative z-[1] h-[291px] w-[175px] shrink-0 xl:w-[364px]">
        <Image
          src={assets.images.breadRolls}
          alt="Golden brown bread rolls"
          fill
          sizes="(max-width: 1280px) 175px, 364px"
          className="object-cover object-[66%_100%]"
        />
      </div>
    </section>
  );
}
