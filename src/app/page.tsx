import { Hero } from "@/components/home/Hero";
import { BusinessLines } from "@/components/home/BusinessLines";
import { SoftwareHighlight } from "@/components/home/SoftwareHighlight";
import { WhyGvt } from "@/components/home/WhyGvt";
import { TrustedBy } from "@/components/home/TrustedBy";
import { ContactCta } from "@/components/home/ContactCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BusinessLines />
      <SoftwareHighlight />
      <WhyGvt />
      <TrustedBy />
      <ContactCta />
    </>
  );
}
