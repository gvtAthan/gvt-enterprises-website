import Image from "next/image";
import Link from "next/link";

/**
 * PLACEHOLDER lockup from the mockup (slanted green/slate bars + wordmark).
 * Swap the mark for the official GVT monogram SVG once supplied.
 */
export function Logo({ onDark = false, className = "" }: { onDark?: boolean; className?: string }) {
  return (
    <Link
      href="/"
      aria-label="GVT Enterprises Inc. home"
      className={`flex items-center gap-2 rounded-md ${onDark ? "focus-ring-dark" : "focus-ring"} ${className}`}
    >
      <Image
        src={onDark ? "/brand/logo-mark-on-dark.svg" : "/brand/logo-mark.svg"}
        alt=""
        width={40}
        height={32}
        unoptimized
        loading="eager"
        className="shrink-0"
      />
      <span className="flex flex-col whitespace-nowrap">
        <span
          className={`text-[20px] leading-[22px] font-bold tracking-[0.04em] ${onDark ? "text-white" : "text-ink"}`}
        >
          GVT
        </span>
        <span
          className={`text-[10px] leading-3 font-medium tracking-[0.1em] ${onDark ? "text-mint" : "text-ink-muted"}`}
        >
          ENTERPRISES INC.
        </span>
      </span>
    </Link>
  );
}
