import { assets } from "@/lib/assets";
import Image from "next/image";

export function CatDecoration() {
  return (
    <div
      className="pointer-events-none z-5 -mb-[76px] ml-[16px] flex h-fit w-full items-end justify-end text-right"
      aria-hidden
    >
      <Image
        src={assets.illustrations.catWithWine}
        alt=""
        width={175}
        height={175}
        className="h-[175px] w-[175px] object-contain object-center"
        priority
      />
    </div>
  );
}
