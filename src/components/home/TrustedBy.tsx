import { SectionLabel } from "@/components/ui/SectionLabel";

// Client names stand in for logos until GVT confirms permission to use them.
const clients = [
  "Metalcrest Inc.",
  "Yunyi Transport",
  "Fastock",
  "J&T Express",
  "Anytime Fitness",
  "Mr. D.I.Y.",
  "PDTC",
  "GEC",
  "MNE Blast & Coating",
  "Tinapay Powder Coating",
  "Paps Ian Garage",
  "South Boyz Customs",
];

/** Mobile shows the first 9 logos to keep the page short. */
const MOBILE_LIMIT = 9;

export function TrustedBy() {
  return (
    <section aria-labelledby="clients-heading" className="bg-white py-16 lg:py-20">
      <div className="container-page flex flex-col gap-8">
        <div className="flex flex-col gap-2 md:items-center md:text-center">
          <SectionLabel>Our clients</SectionLabel>
          <h2
            id="clients-heading"
            className="max-w-[846px] text-h3-mobile text-ink md:text-h3"
          >
            Trusted by manufacturers, logistics companies and retailers
          </h2>
        </div>
        <ul className="grid grid-cols-3 gap-4 md:grid-cols-4 md:gap-6 lg:grid-cols-6">
          {clients.map((client, i) => (
            <li
              key={client}
              className={`h-16 items-center justify-center rounded-md bg-subtle px-2 text-center text-caption font-medium text-ink-muted md:h-20 md:px-4 md:text-body-sm ${
                i >= MOBILE_LIMIT ? "hidden md:flex" : "flex"
              }`}
            >
              {client}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
