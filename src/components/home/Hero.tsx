import { Mail, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { contact, primaryPhone, routes, telHref } from "@/lib/site";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-[radial-gradient(162px_504px_at_33%_50%,#0b3d22,#0a2416)] pt-12 pb-16 md:bg-[radial-gradient(800px_210px_at_80px_50%,#0b3d22,#0a2416)] lg:py-24"
    >
      <div className="container-page grid items-center gap-8 lg:grid-cols-2 lg:gap-6">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <SectionLabel onDark>GVT Enterprises Inc.</SectionLabel>
            <h1
              id="hero-heading"
              className="text-h1-mobile text-white md:text-h1-tablet lg:text-h1"
            >
              Solutions, driven by passion.
            </h1>
            <p className="text-body-lg text-mint md:hidden">
              Vektor lubricants plus reliable IT software, hardware and network solutions for
              businesses across the Philippines.
            </p>
            <p className="hidden max-w-[560px] text-body-lg text-mint md:block">
              Vektor industrial, automotive and grease lubricants, alongside reliable IT software,
              hardware and network solutions for businesses across the Philippines.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <ButtonLink href={routes.contact} arrow className="w-full md:w-auto">
              Request a Quote
            </ButtonLink>
            <ButtonLink href="#solutions" variant="inverse" className="w-full md:w-auto">
              Explore solutions
            </ButtonLink>
          </div>
          <ul className="hidden items-center gap-6 text-body font-medium text-white md:flex">
            <li>
              <a
                href={telHref(primaryPhone)}
                className="flex items-center gap-2 rounded-sm hover:text-mint focus-ring-dark"
              >
                <Phone aria-hidden className="size-5 text-accent" strokeWidth={2} />
                {primaryPhone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 rounded-sm hover:text-mint focus-ring-dark"
              >
                <Mail aria-hidden className="size-5 text-accent" strokeWidth={2} />
                {contact.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile: one 4:3 image. Tablet and desktop: three-tile collage. */}
        <ImagePlaceholder
          caption="Hero 4:3: Vektor drums + IT hardware"
          className="aspect-[4/3] w-full rounded-lg md:hidden"
        />
        <div className="hidden h-[480px] grid-cols-2 gap-6 md:grid">
          <ImagePlaceholder
            caption="Hero 4:3 crop: Vektor 200L drums + 20L pails"
            className="h-full rounded-lg"
          />
          <div className="grid grid-rows-2 gap-6">
            <ImagePlaceholder caption="IT hardware & networking" className="rounded-lg" />
            <ImagePlaceholder caption="Premium appliances line-up" className="rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
