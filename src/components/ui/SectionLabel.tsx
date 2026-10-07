import Image from "next/image";

type SectionLabelProps = {
  children: React.ReactNode;
  onDark?: boolean;
  className?: string;
};

/** Eyebrow above a section heading, with the slanted GVT brand bar. */
export function SectionLabel({ children, onDark = false, className = "" }: SectionLabelProps) {
  return (
    <p className={`flex items-center gap-2 ${className}`}>
      <Image
        src={onDark ? "/brand/brand-bar-on-dark.svg" : "/brand/brand-bar.svg"}
        alt=""
        width={24}
        height={8}
        unoptimized
        className="shrink-0"
      />
      <span className={`text-overline uppercase ${onDark ? "text-accent" : "text-brand"}`}>
        {children}
      </span>
    </p>
  );
}
