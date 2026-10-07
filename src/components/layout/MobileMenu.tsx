"use client";

import Link from "next/link";
import { ChevronDown, Mail, MapPin, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { ButtonAnchor, ButtonLink } from "@/components/ui/Button";
import { contact, isCurrent, primaryNav, primaryPhone, routes, telHref } from "@/lib/site";

/**
 * Full-screen mobile menu. Accordion rows for sections with children; focus is
 * trapped inside while open; Esc / X closes and returns focus to the menu button.
 */
export function MobileMenu({ pathname, onClose }: { pathname: string; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("[data-autofocus]")?.focus();
    return () => {
      document.body.style.overflow = overflow;
    };
  }, []);

  // Close if the viewport grows into the desktop header.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && onClose();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [onClose]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
      return;
    }
    if (e.key !== "Tab") return;
    const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    if (!focusable?.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <div
      id="mobile-menu"
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      onKeyDown={onKeyDown}
      className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-white lg:hidden"
    >
      <div className="flex h-16 shrink-0 items-center justify-between border-b border-line pr-3 pl-5 md:pr-8 md:pl-10">
        <Logo />
        <button
          type="button"
          aria-label="Close menu"
          data-autofocus
          onClick={onClose}
          className="flex size-11 items-center justify-center rounded-md bg-muted text-ink focus-ring"
        >
          <X aria-hidden className="size-6" strokeWidth={2} />
        </button>
      </div>

      <nav aria-label="Primary" className="px-5 py-2 md:px-10">
        <ul>
          {primaryNav.map((item) => {
            const current = isCurrent(pathname, item.href);
            const rowText = `text-body-lg font-medium ${current ? "text-brand" : "text-ink"}`;
            if (!("menu" in item)) {
              return (
                <li key={item.label} className="border-b border-line">
                  <Link
                    href={item.href}
                    onClick={onClose}
                    aria-current={current ? "page" : undefined}
                    className={`flex h-14 items-center rounded-sm focus-ring ${rowText}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }
            const isOpen = expanded === item.label;
            const subId = `mobile-sub-${item.label.toLowerCase().replace(/\s+/g, "-")}`;
            return (
              <li key={item.label} className="border-b border-line">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={subId}
                  onClick={() => setExpanded(isOpen ? null : item.label)}
                  className={`flex h-14 w-full items-center justify-between rounded-sm text-left focus-ring ${rowText}`}
                >
                  {item.label}
                  <ChevronDown
                    aria-hidden
                    className={`size-5 text-ink-secondary transition-transform ${isOpen ? "rotate-180" : ""}`}
                    strokeWidth={2}
                  />
                </button>
                <ul id={subId} hidden={!isOpen} className="pb-2 pl-4">
                  {[{ label: item.menu.mobileAllLabel, href: item.href }, ...item.menu.items].map(
                    (link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={onClose}
                          className="flex h-11 items-center rounded-sm text-body text-ink-secondary hover:text-brand focus-ring"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="flex flex-col gap-4 px-5 py-6 md:px-10">
        <ButtonLink href={routes.contact} arrow onClick={onClose} className="w-full">
          Request a Quote
        </ButtonLink>
        <ButtonAnchor href={telHref(primaryPhone)} variant="secondary" className="w-full">
          Call {primaryPhone}
        </ButtonAnchor>
        <div className="flex flex-col gap-2 text-body-sm text-ink-muted">
          <a
            href={`mailto:${contact.email}`}
            className="flex w-fit items-center gap-2 rounded-sm hover:text-brand focus-ring"
          >
            <Mail aria-hidden className="size-4" strokeWidth={2} />
            {contact.email}
          </a>
          <p className="flex items-center gap-2">
            <MapPin aria-hidden className="size-4" strokeWidth={2} />
            {contact.addressLocality}
          </p>
        </div>
      </div>
    </div>
  );
}
