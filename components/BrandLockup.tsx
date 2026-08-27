import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function BrandLockup({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      href="/"
      className={footer ? "brandLockup brandLockupFooter" : "brandLockup"}
      aria-label={`${site.name} home`}
    >
      <span className="brandMark" aria-hidden="true">
        <Image
          src="/brand/natural-state-logo.png"
          alt=""
          width={920}
          height={514}
          priority={!footer}
        />
      </span>
      <span className="brandLocation">Hot Springs, Arkansas</span>
      <span className="srOnly">{site.name}</span>
    </Link>
  );
}
