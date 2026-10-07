import Image from "next/image";
import { Building, Factory, Store, Truck } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { routes } from "@/lib/site";

const reasons = [
  "Quality and reliable products",
  "Technical expertise and support",
  "Customer-centered service",
  "Scalable business solutions",
  "Commitment to innovation and efficiency",
];

const industries = [
  {
    name: "Manufacturing",
    description: "Lubricants and IT infrastructure that keep production lines running.",
    icon: Factory,
  },
  {
    name: "Transportation",
    description: "Engine oils, fleet maintenance supplies and Vektor Fleet tracking.",
    icon: Truck,
  },
  {
    name: "Commercial establishments",
    description: "CCTV, networking and appliances for stores and service centers.",
    icon: Store,
  },
  {
    name: "Corporate offices",
    description: "Laptops, printers, servers and secure office networks.",
    icon: Building,
  },
];

function AboutButton({ className = "" }: { className?: string }) {
  return (
    <ButtonLink href={routes.about} variant="inverse" arrow className={className}>
      About GVT
    </ButtonLink>
  );
}

export function WhyGvt() {
  return (
    <section aria-labelledby="why-heading" className="bg-forest py-16 lg:py-24">
      <div className="container-page grid gap-8 lg:grid-cols-12 lg:gap-6">
        <div className="flex flex-col gap-8 lg:col-span-5">
          <div className="flex flex-col gap-4">
            <SectionLabel onDark>Why choose us</SectionLabel>
            <h2 id="why-heading" className="text-h2-mobile text-white md:text-h2-tablet lg:text-h2">
              Why businesses choose GVT
            </h2>
          </div>
          <ul className="flex flex-col gap-2">
            {reasons.map((reason, i) => (
              <li key={reason} className="flex items-center gap-4 py-2">
                <Image
                  src={i % 2 === 0 ? "/brand/bullet-bar-green.svg" : "/brand/bullet-bar-slate.svg"}
                  alt=""
                  width={32}
                  height={10}
                  unoptimized
                  className="shrink-0"
                />
                <span className="text-body font-medium text-white lg:text-body-lg">{reason}</span>
              </li>
            ))}
          </ul>
          <div className="hidden lg:block">
            <AboutButton />
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:col-span-6 lg:col-start-7 lg:gap-6">
          <h3 className="text-h4 text-white">Industries we serve</h3>
          <ul className="grid grid-cols-2 gap-4 md:gap-6">
            {industries.map(({ name, description, icon: Icon }) => (
              <li
                key={name}
                className="flex min-h-[140px] flex-col gap-4 rounded-lg bg-forest-raised p-4 md:min-h-[278px] md:px-6 md:py-8"
              >
                <span className="flex size-10 items-center justify-center rounded-md bg-brand md:size-12">
                  <Icon aria-hidden className="size-5 text-white md:size-6" strokeWidth={2} />
                </span>
                <span className="text-body font-medium text-white md:text-h4">{name}</span>
                <span className="hidden text-body text-mint md:block">{description}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:hidden">
          <AboutButton className="w-full" />
        </div>
      </div>
    </section>
  );
}
