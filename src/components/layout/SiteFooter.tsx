import Link from "next/link";
import { ExternalLink, Globe, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { contact, routes, telHref } from "@/lib/site";

const solutions = [
  { label: "Vektor Lubricants", href: routes.lubricants },
  { label: "IT Solutions", href: routes.itSolutions },
  { label: "Software Solutions", href: routes.software },
  { label: "Premium Appliances", href: routes.appliances },
];

const company = [
  { label: "About GVT", href: routes.about },
  { label: "Why choose us", href: `${routes.about}#why-choose-us` },
  { label: "Our clients", href: `${routes.about}#clients` },
];

const linkClass = "rounded-sm text-body-sm text-white hover:text-mint focus-ring-dark";
const headingClass = "text-overline uppercase text-accent";

/** Footer on bg/inverse: repeats the address, all three numbers and the email. */
export function SiteFooter() {
  return (
    <footer className="bg-forest pt-12 pb-8 lg:pt-20">
      <div className="container-page flex flex-col gap-8 lg:gap-12">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3 lg:grid-cols-12">
          <div className="col-span-2 flex flex-col gap-4 md:col-span-3 lg:col-span-4">
            <Logo onDark className="w-fit" />
            <p className="text-body-lg font-medium text-white">Solutions, Driven by Passion.</p>
            <p className="max-w-[410px] text-body-sm text-mint">
              Industrial lubricants, IT solutions and premium appliances for businesses across the
              Philippines.
            </p>
          </div>

          <FooterColumn title="Solutions" className="lg:col-span-2">
            {solutions.map((l) => (
              <li key={l.label} className="flex min-h-8 items-center">
                <Link href={l.href} className={linkClass}>
                  {l.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Company" className="lg:col-span-2">
            {company.map((l) => (
              <li key={l.label} className="flex min-h-8 items-center">
                <Link href={l.href} className={linkClass}>
                  {l.label}
                </Link>
              </li>
            ))}
            {/* Sister company. No URL supplied yet, so it is not a link. */}
            <li className="flex min-h-8 items-center gap-1 text-body-sm text-white">
              C&amp;V Dynamics
              <ExternalLink aria-hidden className="size-3.5 text-mint" strokeWidth={2} />
            </li>
            <li className="flex min-h-8 items-center">
              <Link href={routes.contact} className={linkClass}>
                Contact
              </Link>
            </li>
          </FooterColumn>

          <div className="col-span-2 flex flex-col gap-4 md:col-span-1 lg:col-span-4">
            <Link href={routes.contact} className={`${headingClass} w-fit rounded-sm focus-ring-dark`}>
              Contact us
            </Link>
            <ul className="flex flex-col gap-4 text-body-sm text-white">
              <li className="flex items-start gap-2">
                <MapPin aria-hidden className="mt-0.5 size-[18px] shrink-0 text-accent" strokeWidth={2} />
                <address className="not-italic">{contact.addressFull}</address>
              </li>
              <li className="flex items-start gap-2">
                <Phone aria-hidden className="mt-0.5 size-[18px] shrink-0 text-accent" strokeWidth={2} />
                <span className="flex flex-col">
                  {contact.phones.map((phone) => (
                    <a key={phone} href={telHref(phone)} className={`${linkClass} w-fit`}>
                      {phone}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail aria-hidden className="mt-0.5 size-[18px] shrink-0 text-accent" strokeWidth={2} />
                <a href={`mailto:${contact.email}`} className={linkClass}>
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Globe aria-hidden className="mt-0.5 size-[18px] shrink-0 text-accent" strokeWidth={2} />
                <span>{contact.website}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-white" />

        <div className="flex flex-col gap-2 text-caption md:flex-row md:items-start md:justify-between md:gap-6">
          <p className="text-mint">© 2026 GVT Enterprises Inc. All rights reserved.</p>
          <ul className="flex gap-6 font-medium text-white">
            <li>
              <Link href={routes.privacy} className="rounded-sm hover:text-mint focus-ring-dark">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href={routes.terms} className="rounded-sm hover:text-mint focus-ring-dark">
                Terms of use
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  className = "",
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <h2 className={headingClass}>{title}</h2>
      <ul className="flex flex-col gap-2">{children}</ul>
    </div>
  );
}
