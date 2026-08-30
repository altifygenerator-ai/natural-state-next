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
      <span className="brandMark">
        <Image
          src="/brand/natural-state-logo.png"
          alt={`${site.name} logo`}
          width={1302}
          height={735}
          priority={!footer}
        />
      </span>
    </Link>
  );
}
