import type { LucideIcon } from "lucide-react";
import {
  Code,
  Droplet,
  Factory,
  Laptop,
  Server,
  Truck,
  Video,
  Wifi,
} from "lucide-react";

export const contact = {
  email: "sales@gvt.com.ph",
  website: "www.gvt.com.ph",
  phones: ["0917 168 3206", "0917 168 3207", "0917 168 3161"],
  addressShort:
    "4th Floor, W.S.A Commercial Building, RSBS Blvd, Brgy. Balibago, Santa Rosa, Laguna",
  addressFull:
    "4th Floor, W.S.A Commercial Building, Villa Esmeralda Subdivision, BLK24 LOT28, RSBS Blvd, Brgy. Balibago, City of Santa Rosa, Laguna, Philippines 4026",
  addressLocality: "Brgy. Balibago, Santa Rosa, Laguna",
} as const;

export const primaryPhone = contact.phones[0];

/** "0917 168 3206" → "tel:+639171683206" */
export function telHref(phone: string) {
  return `tel:+63${phone.replace(/\s/g, "").replace(/^0/, "")}`;
}

/** True when `href` is the current page or one of its sub-pages. */
export function isCurrent(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export const routes = {
  home: "/",
  about: "/about",
  lubricants: "/lubricants",
  industrialLubricants: "/lubricants/industrial",
  automotiveLubricants: "/lubricants/automotive",
  greaseLubricants: "/lubricants/grease",
  itSolutions: "/it-solutions",
  software: "/it-solutions/software",
  hardware: "/it-solutions/hardware",
  networking: "/it-solutions/networking",
  cctv: "/it-solutions/cctv",
  server: "/it-solutions/server",
  appliances: "/appliances",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
} as const;

export type MenuItem = {
  label: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export type NavItem =
  | { label: string; href: string }
  | {
      label: string;
      href: string;
      menu: { items: MenuItem[]; allLabel: string; mobileAllLabel: string };
    };

export const primaryNav: NavItem[] = [
  { label: "Home", href: routes.home },
  { label: "About", href: routes.about },
  {
    label: "Lubricants",
    href: routes.lubricants,
    menu: {
      allLabel: "View all Vektor lubricants",
      mobileAllLabel: "All Vektor lubricants",
      items: [
        {
          label: "Industrial Lubricants",
          description: "Hydraulic, gear, compressor and slideway oils",
          href: routes.industrialLubricants,
          icon: Factory,
        },
        {
          label: "Automotive Lubricants",
          description: "Engine oils, transmission fluid, brake fluid, coolant",
          href: routes.automotiveLubricants,
          icon: Truck,
        },
        {
          label: "Grease & Specialty",
          description: "Extreme pressure, multipurpose and lithium grease",
          href: routes.greaseLubricants,
          icon: Droplet,
        },
      ],
    },
  },
  {
    label: "IT Solutions",
    href: routes.itSolutions,
    menu: {
      allLabel: "View all IT solutions",
      mobileAllLabel: "All IT solutions",
      items: [
        {
          label: "Software Solutions",
          description: "GISO, Tasset.ia and Vektor Fleet",
          href: routes.software,
          icon: Code,
        },
        {
          label: "IT Hardware",
          description: "PCs, laptops, printers and peripherals",
          href: routes.hardware,
          icon: Laptop,
        },
        {
          label: "Networking & Connectivity",
          description: "Switches, access points and UTP cabling",
          href: routes.networking,
          icon: Wifi,
        },
        {
          label: "CCTV & Security",
          description: "CCTV supply and installation, access control",
          href: routes.cctv,
          icon: Video,
        },
        {
          label: "Server & Data Center",
          description: "Servers, storage and support infrastructure",
          href: routes.server,
          icon: Server,
        },
      ],
    },
  },
  { label: "Appliances", href: routes.appliances },
  { label: "Contact", href: routes.contact },
];
