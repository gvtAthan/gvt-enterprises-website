import { Mail } from "lucide-react";
import { ButtonAnchor, ButtonLink } from "@/components/ui/Button";
import { contact, primaryPhone, routes, telHref } from "@/lib/site";

export function ContactCta() {
  return (
    <section aria-labelledby="cta-heading" className="bg-white pb-16 lg:pb-24">
      <div className="container-page">
        <div className="flex flex-col gap-6 rounded-xl border border-mint bg-mint-subtle px-6 py-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:p-16">
          <div className="flex max-w-[628px] flex-col gap-6 lg:gap-4">
            <h2 id="cta-heading" className="text-h2-mobile text-ink md:text-h2-tablet lg:text-h2">
              Tell us what you need. We’ll prepare a quote.
            </h2>
            <p className="text-body text-ink-secondary md:hidden">
              Our sales team replies within 1 business day.
            </p>
            <p className="hidden text-body-lg text-ink-secondary md:block">
              Lubricants, IT equipment or appliances: send your requirements and our sales team
              replies within 1 business day.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 md:flex-row">
              <ButtonLink href={routes.contact} arrow className="w-full md:w-auto">
                Request a Quote
              </ButtonLink>
              <ButtonAnchor
                href={telHref(primaryPhone)}
                variant="secondary"
                className="w-full md:w-auto"
              >
                Call {primaryPhone}
              </ButtonAnchor>
            </div>
            <p className="hidden items-center gap-2 text-body-sm text-ink-secondary md:flex">
              <Mail aria-hidden className="size-[18px] text-brand" strokeWidth={2} />
              <span>
                or email{" "}
                <a
                  href={`mailto:${contact.email}`}
                  className="rounded-sm hover:text-brand hover:underline focus-ring"
                >
                  {contact.email}
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
