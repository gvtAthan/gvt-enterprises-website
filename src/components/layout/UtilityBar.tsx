import { Mail, MapPin, Phone } from "lucide-react";
import { contact, telHref } from "@/lib/site";

/** 40px bar above the desktop header with the address and every number. Hidden below 1024px. */
export function UtilityBar() {
  return (
    <div className="hidden bg-forest lg:block">
      <div className="container-page flex h-10 items-center justify-between gap-6">
        <p className="flex min-w-0 items-center gap-2 text-caption text-mint">
          <MapPin aria-hidden className="size-4 shrink-0" strokeWidth={2} />
          <span className="truncate">{contact.addressShort}</span>
        </p>
        <ul className="flex shrink-0 items-center gap-6 text-caption font-medium text-white">
          {contact.phones.map((phone) => (
            <li key={phone}>
              <a
                href={telHref(phone)}
                className="flex items-center gap-2 rounded-sm hover:text-mint focus-ring-dark"
              >
                <Phone aria-hidden className="size-4 text-mint" strokeWidth={2} />
                {phone}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 rounded-sm hover:text-mint focus-ring-dark"
            >
              <Mail aria-hidden className="size-4 text-mint" strokeWidth={2} />
              {contact.email}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
