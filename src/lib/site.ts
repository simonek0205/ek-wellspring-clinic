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
