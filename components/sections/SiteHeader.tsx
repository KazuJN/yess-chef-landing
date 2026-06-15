import { assets } from "@/lib/assets";
import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="flex w-full items-center justify-center self-stretch py-0">
      <a href="#" className="relative block h-[106px] w-[147px] shrink-0 hover:opacity-90">
        <Image
          src={assets.illustrations.logo}
          alt="Yess Chef"
          fill
          priority
          sizes="147px"
          className="object-contain object-center"
        />
      </a>
    </header>
  );
}
