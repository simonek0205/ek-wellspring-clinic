// Every fact about the clinic that appears in more than one place lives here.
// Before this existed the phone number, address and opening hours were typed
// out by hand in four files, and the hours had already drifted apart — the
// footer said 16:00 while the contact page said 17:00.

export const clinic = {
  name: "Ek Kiropraktik",
  therapist: "Simon Ek",
  url: "https://ekkiropraktik.se",

  phone: {
    // Displayed in Swedish national format, dialled in E.164 so the link
    // still works from a phone abroad or on a foreign SIM.
    display: "0793-10 35 46",
    href: "tel:+46793103546",
  },

  email: "info@ekkiropraktik.se",

  address: {
    street: "S:ta Annagatan 3",
    postalCode: "532 32",
    city: "Skara",
    country: "SE",
  },

  hours: {
    // Confirmed by Simon via Mikael, 2026-09-17.
    long: "Måndag–Fredag 08:00–17:00",
    short: "Mån–Fre 08:00–17:00",
    opens: "08:00",
    closes: "17:00",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  },

  sharesPremisesWith: "Kiropraktor Jonas Svensson",
} as const;

export const addressLine = `${clinic.address.street}, ${clinic.address.postalCode} ${clinic.address.city}`;

export const emailHref = `mailto:${clinic.email}`;

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(addressLine)}&output=embed`;

export const mapsLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressLine)}`;

/** Absolute URL for a site path — canonical tags and og:url must not be relative. */
export function absoluteUrl(path: string): string {
  return new URL(path, clinic.url).href;
}

export const ogImageUrl = absoluteUrl("/og-image.jpg");

/**
 * Head tags every page needs: the canonical URL, and the og:url that goes with
 * it. Relative values are silently ignored by crawlers and by the scrapers that
 * build link previews, so both are absolute.
 */
export function pageHead(path: string) {
  const url = absoluteUrl(path);
  return {
    meta: [{ property: "og:url", content: url }],
    links: [{ rel: "canonical", href: url }],
  };
}

/**
 * Schema.org description of the clinic. This is what puts a one-location
 * business into Google's map results and knowledge panel, and it is the highest
 * -leverage SEO item the site has — everything in it is read from the values
 * above, so it cannot disagree with what the pages render.
 */
export function clinicJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Chiropractic",
    "@id": absoluteUrl("/#clinic"),
    name: clinic.name,
    url: clinic.url,
    image: ogImageUrl,
    telephone: clinic.phone.href.replace("tel:", ""),
    email: clinic.email,
    priceRange: "400–900 SEK",
    currenciesAccepted: "SEK",
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address.street,
      postalCode: clinic.address.postalCode,
      addressLocality: clinic.address.city,
      addressCountry: clinic.address.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...clinic.hours.days],
        opens: clinic.hours.opens,
        closes: clinic.hours.closes,
      },
    ],
    founder: { "@type": "Person", name: clinic.therapist, jobTitle: "Kiropraktor" },
    areaServed: { "@type": "City", name: clinic.address.city },
  };
}

/**
 * Schema.org description of one treatment, for the service detail pages. The
 * clinic itself is referenced by @id rather than repeated, so a crawler ties
 * the two together instead of seeing two unrelated businesses.
 */
export function serviceJsonLd(service: { slug: string; title: string; short: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    name: service.title,
    description: service.short,
    url: absoluteUrl(`/tjanster/${service.slug}`),
    provider: { "@id": absoluteUrl("/#clinic") },
  };
}
