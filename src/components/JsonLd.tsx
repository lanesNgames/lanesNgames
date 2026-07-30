import { siteConfig } from "@/data/siteConfig";

function buildOpeningHoursSpecification() {
  const mapDay: Record<string, string> = {
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday"
  };

  return Object.entries(siteConfig.business.hours).flatMap(([weekday, hours]) => {
    if (hours.closed) return [];
    return [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: mapDay[weekday] ?? weekday,
        opens: hours.open,
        closes: hours.close
      }
    ];
  });
}

export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: siteConfig.business.name,
    url: siteConfig.siteUrl,
    telephone: siteConfig.business.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.business.address.street,
      addressLocality: siteConfig.business.address.city,
      addressRegion: siteConfig.business.address.region,
      postalCode: siteConfig.business.address.postalCode,
      addressCountry: siteConfig.business.address.country
    },
    openingHoursSpecification: buildOpeningHoursSpecification(),
    sameAs: Object.values(siteConfig.socials),
    servesCuisine: ["Coffee", "Bakery", "Breakfast"]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

