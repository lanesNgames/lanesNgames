import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Ticket, Wifi } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { getHoursRows, formatHours } from "@/lib/hours";
import { Button } from "@/components/ui/button";

export function Footer() {
  const address = `${siteConfig.business.address.street}, ${siteConfig.business.address.city}, ${siteConfig.business.address.region} ${siteConfig.business.address.postalCode}`;
  const hoursRows = getHoursRows(siteConfig.business.hours);

  return (
    <footer className="border-t border-border bg-muted/30" aria-label="Site footer">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <section aria-label="Contact details" className="space-y-3">
          <div className="text-base font-semibold">{siteConfig.business.name}</div>
          <p className="text-sm text-muted-foreground">{address}</p>
          <div className="flex flex-col gap-2">
            <a
              className="inline-flex min-h-11 items-center gap-2 rounded-md px-2 text-sm hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
              href={`tel:${siteConfig.business.phone.replace(/[^\d+]/g, "")}`}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>{siteConfig.business.phone}</span>
            </a>
            <a
              className="inline-flex min-h-11 items-center gap-2 rounded-md px-2 text-sm hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
              href={siteConfig.maps.directionsUrl}
              target="_blank"
              rel="noreferrer"
            >
              <MapPin className="h-4 w-4" aria-hidden="true" />
              <span>Get Directions</span>
            </a>
          </div>

          <div className="flex gap-2 pt-2">
            <Button asChild variant="secondary" size="sm" className="min-h-11">
              <a href={siteConfig.ordering.primaryUrl} target="_blank" rel="noreferrer">
                <Ticket className="h-4 w-4" aria-hidden="true" />
                Order Online
              </a>
            </Button>
          </div>
        </section>

        <section aria-label="Map">
          <div className="text-sm font-semibold">Find us</div>
          <div className="mt-3 overflow-hidden rounded-xl border border-border bg-background">
            <div className="aspect-[16/12] w-full">
              <iframe
                title={`${siteConfig.business.name} map`}
                src={siteConfig.maps.embedUrl}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Google map embed"
              />
            </div>
          </div>
        </section>

        <section aria-label="Opening hours">
          <div className="text-sm font-semibold">Hours</div>
          <div className="mt-3 overflow-hidden rounded-xl border border-border bg-background">
            <table className="w-full text-sm">
              <tbody>
                {hoursRows.map((r) => (
                  <tr key={r.day} className="border-b border-border last:border-b-0">
                    <th scope="row" className="px-3 py-2 text-left font-medium">
                      {r.label}
                    </th>
                    <td className="px-3 py-2 text-right text-muted-foreground">
                      {formatHours(r.hours)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
            <Wifi className="h-4 w-4" aria-hidden="true" />
            <span>Wi‑Fi + outlets friendly</span>
          </div>
        </section>

        <section aria-label="Social links" className="space-y-3">
          <div className="text-sm font-semibold">Social</div>
          <div className="flex flex-col gap-2">
            <a
              className="inline-flex min-h-11 items-center gap-2 rounded-md px-2 text-sm hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
              Instagram
            </a>
            <a
              className="inline-flex min-h-11 items-center gap-2 rounded-md px-2 text-sm hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noreferrer"
            >
              <Facebook className="h-4 w-4" aria-hidden="true" />
              Facebook
            </a>
          </div>
          <div className="text-xs text-muted-foreground">
            Formerly {siteConfig.business.legacyName}.
          </div>
        </section>
      </div>

      <div className="border-t border-border py-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} {siteConfig.business.name}. All rights reserved.
          </div>
          <div className="flex gap-3">
            <Link href="#menu" className="min-h-11 py-2 hover:text-foreground">
              View Menu
            </Link>
            <Link href="#visit" className="min-h-11 py-2 hover:text-foreground">
              Visit Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

