import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { routes } from "@/lib/site";

const lines = [
  {
    title: "Vektor Lubricants",
    description:
      "Industrial, automotive and grease lubricants that keep machines, fleets and production lines running.",
    cta: "Explore lubricants",
    href: routes.lubricants,
    image: "Image 16:9: Vektor drums & oil splash",
  },
  {
    title: "IT Solutions",
    description:
      "Software, IT hardware, networking, CCTV and server infrastructure, supplied and supported by one team.",
    cta: "Explore IT solutions",
    href: routes.itSolutions,
    image: "Image 16:9: IT hardware composite",
  },
  {
    title: "Premium Appliances",
    description: "Smart TVs, fans, aircon, water dispensers and microwave ovens from trusted brands.",
    cta: "View appliances",
    href: routes.appliances,
    image: "Image 16:9: Appliance line-up",
  },
];

export function BusinessLines() {
  return (
    <section
      id="solutions"
      aria-labelledby="solutions-heading"
      className="scroll-mt-16 bg-subtle py-16 lg:scroll-mt-20 lg:py-24"
    >
      <div className="container-page flex flex-col gap-8 lg:gap-12">
        <div className="flex max-w-[737px] flex-col gap-4">
          <SectionLabel>What we do</SectionLabel>
          <h2
            id="solutions-heading"
            className="text-h2-mobile text-ink md:text-h2-tablet lg:text-h2"
          >
            Three business lines, one dependable supplier
          </h2>
          <p className="max-w-[640px] text-body text-ink-secondary md:text-body-lg">
            From the oil in your machines to the network in your office, GVT supplies and supports
            the equipment your operation runs on.
          </p>
        </div>
        <ul className="grid items-start gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {lines.map((line) => (
            <li key={line.title} className="md:last:col-span-2 lg:last:col-span-1">
              <Link
                href={line.href}
                aria-label={`${line.cta}: ${line.title}`}
                className="group flex flex-col overflow-hidden rounded-lg border border-line bg-white transition-[border-color,box-shadow] hover:border-brand hover:shadow-md focus-ring"
              >
                <ImagePlaceholder caption={line.image} className="aspect-[408/231] w-full" />
                <span className="flex flex-col gap-2 p-6">
                  <span className="text-h4 text-ink">{line.title}</span>
                  <span className="text-body text-ink-secondary">{line.description}</span>
                  <span className="mt-2 flex h-11 items-center gap-2 text-button text-brand group-hover:text-brand-hover">
                    {line.cta}
                    <ArrowRight aria-hidden className="size-5" strokeWidth={2} />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
