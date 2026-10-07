import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { routes } from "@/lib/site";

const products = [
  {
    name: "GISO",
    platform: "Mobile app",
    description:
      "IAMS mobile application for recording and checking assets in the field. [Description to be confirmed by GVT]",
  },
  {
    name: "Tasset.ia",
    platform: "Web app",
    description:
      "IAMS web application for managing your asset register from the office. [Description to be confirmed by GVT]",
  },
  {
    name: "Vektor Fleet",
    platform: "Web + Mobile",
    description:
      "Fleet management system: vehicle status, alerts, odometer readings and upcoming maintenance in one dashboard.",
  },
];

export function SoftwareHighlight() {
  return (
    <section aria-labelledby="software-heading" className="bg-white py-16 lg:py-24">
      <div className="container-page flex flex-col gap-8 lg:gap-12">
        <div className="flex items-end justify-between gap-6">
          <div className="flex max-w-[800px] min-w-0 flex-1 flex-col gap-4">
            <SectionLabel>Software solutions</SectionLabel>
            <h2
              id="software-heading"
              className="text-h2-mobile text-ink md:text-h2-tablet lg:text-h2"
            >
              Systems for your assets and your fleet
            </h2>
            <p className="hidden max-w-[640px] text-body-lg text-ink-secondary md:block">
              GVT’s own software helps teams track assets in the field and on the web, and keep
              every vehicle on schedule.
            </p>
          </div>
          <div className="hidden shrink-0 md:block">
            <ButtonLink href={routes.software} variant="secondary" arrow>
              See all software
            </ButtonLink>
          </div>
        </div>

        <ul className="grid items-start gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <li key={product.name} className="md:last:col-span-2 lg:last:col-span-1">
              <Link
                href={`${routes.contact}?inquiry=${encodeURIComponent(`${product.name} demo`)}`}
                aria-label={`Book a demo of ${product.name}`}
                className="group flex flex-col gap-4 rounded-lg border border-line bg-white px-6 py-8 transition-[border-color,box-shadow] hover:border-brand hover:shadow-md focus-ring"
              >
                <span className="flex items-center justify-between gap-4">
                  {/* Product logo placeholder until GVT supplies the logo files. */}
                  <span className="flex h-12 min-w-24 items-center justify-center rounded-md bg-forest px-4 text-h4 text-white">
                    {product.name}
                  </span>
                  <span className="rounded-sm bg-mint-subtle px-2 py-1 text-caption font-medium text-brand">
                    {product.platform}
                  </span>
                </span>
                <span className="text-h4 text-ink">{product.name}</span>
                <span className="text-body text-ink-secondary">{product.description}</span>
                <span className="mt-4 flex h-11 items-center gap-2 text-button text-brand group-hover:text-brand-hover">
                  Book a demo
                  <ArrowRight aria-hidden className="size-5" strokeWidth={2} />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <ButtonLink href={routes.software} variant="secondary" arrow className="w-full">
            See all software
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
