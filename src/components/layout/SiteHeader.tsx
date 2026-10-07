"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { isCurrent, primaryNav, primaryPhone, routes, telHref, type NavItem } from "@/lib/site";

const HOVER_DELAY_MS = 150;

/**
 * Sticky header: 80px desktop header (≥1024px) and 64px mobile header with a
 * full-screen menu below that.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      {/* Desktop */}
      <div className="container-page hidden h-20 items-center justify-between gap-6 lg:flex">
        <Logo />
        <nav aria-label="Primary">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) => (
              <li key={item.label}>
                <DesktopNavItem item={item} current={isCurrent(pathname, item.href)} />
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href={telHref(primaryPhone)}
            className="flex min-h-11 items-center gap-2 rounded-md text-body-sm font-medium text-ink hover:text-brand focus-ring"
          >
            <Phone aria-hidden className="size-5 text-brand" strokeWidth={2} />
            {primaryPhone}
          </a>
          <ButtonLink href={routes.contact}>Request a Quote</ButtonLink>
        </div>
      </div>

      {/* Mobile and tablet */}
      <div className="flex h-16 items-center justify-between pr-3 pl-5 md:pr-8 md:pl-10 lg:hidden">
        <Logo />
        <div className="flex items-center gap-1">
          <a
            href={telHref(primaryPhone)}
            aria-label="Call GVT"
            className="flex size-11 items-center justify-center rounded-md text-brand hover:bg-mint-subtle focus-ring"
          >
            <Phone aria-hidden className="size-6" strokeWidth={2} />
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen(true)}
            className="flex size-11 items-center justify-center rounded-md text-ink hover:bg-mint-subtle focus-ring"
          >
            <Menu aria-hidden className="size-6" strokeWidth={2} />
          </button>
        </div>
      </div>
      {mobileOpen && <MobileMenu pathname={pathname} onClose={closeMobile} />}
    </header>
  );
}

const navLinkBase =
  "relative flex h-11 items-center gap-1 rounded-md px-3 text-nav transition-colors focus-ring";

function DesktopNavItem({ item, current }: { item: NavItem; current: boolean }) {
  if (!("menu" in item)) {
    return (
      <Link
        href={item.href}
        aria-current={current ? "page" : undefined}
        className={`${navLinkBase} ${current ? "text-brand" : "text-ink hover:bg-mint-subtle hover:text-brand"}`}
      >
        {item.label}
        {current && <CurrentIndicator />}
      </Link>
    );
  }
  return <DesktopDropdown item={item} current={current} />;
}

function CurrentIndicator() {
  return (
    <span aria-hidden className="absolute right-3 bottom-0 left-3 h-[3px] rounded-full bg-brand" />
  );
}

function DesktopDropdown({
  item,
  current,
}: {
  item: Extract<NavItem, { menu: unknown }>;
  current: boolean;
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const menuId = `menu-${item.label.toLowerCase().replace(/\s+/g, "-")}`;

  const schedule = (next: boolean) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(next), HOVER_DELAY_MS);
  };

  const focusItem = (index: number) => {
    const links = wrapperRef.current?.querySelectorAll<HTMLAnchorElement>("[data-menu-link]");
    if (!links?.length) return;
    links[(index + links.length) % links.length].focus();
  };

  useEffect(() => () => clearTimeout(timer.current), []);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const links = Array.from(
      wrapperRef.current?.querySelectorAll<HTMLAnchorElement>("[data-menu-link]") ?? [],
    );
    const index = links.indexOf(document.activeElement as HTMLAnchorElement);
    if (e.key === "Escape" && open) {
      e.preventDefault();
      setOpen(false);
      triggerRef.current?.focus();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!open) setOpen(true);
      requestAnimationFrame(() => focusItem(index + 1));
    } else if (e.key === "ArrowUp" && open) {
      e.preventDefault();
      focusItem(index === -1 ? -1 : index - 1);
    }
  };

  const active = open || current;

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={() => schedule(true)}
      onMouseLeave={() => schedule(false)}
      onKeyDown={onKeyDown}
      onBlur={(e) => {
        if (!wrapperRef.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => {
          clearTimeout(timer.current);
          setOpen((v) => !v);
        }}
        className={`${navLinkBase} ${
          open ? "bg-mint-subtle text-brand" : active ? "text-brand" : "text-ink hover:bg-mint-subtle hover:text-brand"
        }`}
      >
        {item.label}
        <ChevronDown
          aria-hidden
          className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
          strokeWidth={2}
        />
        {current && <CurrentIndicator />}
      </button>
      <div
        id={menuId}
        hidden={!open}
        className="absolute top-[calc(100%+26px)] left-1/2 z-50 w-[560px] -translate-x-1/2 rounded-lg border border-line bg-white p-2 shadow-lg"
      >
        {/* Hover bridge so the pointer can cross the gap without closing the menu. */}
        <span aria-hidden className="absolute -top-[26px] right-0 left-0 h-[26px]" />
        <ul>
          {item.menu.items.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                data-menu-link
                onClick={() => setOpen(false)}
                className="flex items-start gap-4 rounded-md p-4 hover:bg-mint-subtle focus:bg-mint-subtle focus-ring"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-mint">
                  <link.icon aria-hidden className="size-5 text-brand" strokeWidth={2} />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="text-body font-medium text-ink">{link.label}</span>
                  <span className="text-body-sm text-ink-muted">{link.description}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="h-px bg-line" />
        <div className="px-4 py-2">
          <ButtonLink
            href={item.href}
            variant="tertiary"
            arrow
            data-menu-link
            onClick={() => setOpen(false)}
          >
            {item.menu.allLabel}
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
