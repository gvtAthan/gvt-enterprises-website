import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "tertiary" | "inverse";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md text-button whitespace-nowrap transition-colors";

const variants: Record<Variant, string> = {
  primary:
    "h-12 px-6 bg-brand text-white hover:bg-brand-hover active:bg-brand-active focus-ring",
  secondary:
    "h-12 px-6 bg-white border-[1.5px] border-brand text-brand hover:bg-mint-subtle active:bg-mint active:text-brand-active focus-ring",
  tertiary:
    "h-11 text-brand hover:text-brand-hover active:text-brand-active focus-ring",
  inverse:
    "h-12 px-6 border-[1.5px] border-white text-white hover:bg-white/10 active:bg-white/18 focus-ring-dark",
};

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  /** Trailing arrow icon, as on the Figma Button component. */
  arrow?: boolean;
  className?: string;
};

export function buttonClasses(variant: Variant = "primary", className = "") {
  return `${base} ${variants[variant]} ${className}`;
}

export function ButtonLink({
  variant = "primary",
  arrow = false,
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={buttonClasses(variant, className)} {...props}>
      {children}
      {arrow && <ArrowRight aria-hidden className="size-5 shrink-0" strokeWidth={2} />}
    </Link>
  );
}

/** Same look as ButtonLink for tel:/mailto: and other non-route hrefs. */
export function ButtonAnchor({
  variant = "primary",
  arrow = false,
  className = "",
  children,
  ...props
}: ComponentProps<"a"> & { variant?: Variant; arrow?: boolean }) {
  return (
    <a className={buttonClasses(variant, className)} {...props}>
      {children}
      {arrow && <ArrowRight aria-hidden className="size-5 shrink-0" strokeWidth={2} />}
    </a>
  );
}
