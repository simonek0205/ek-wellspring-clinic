// Google Analytics, loaded only after the visitor has said yes.
//
// The site promises this on purpose: nothing — no script, no request, no cookie —
// reaches Google until a visitor accepts. That is why this module does not use
// Google's "consent mode", which pings Google even when consent is denied. The
// measurement script is simply not on the page until consent exists. It is the
// same standard the fonts and the map already follow.

export const GA_MEASUREMENT_ID = "G-7PCFGP9WHR";

// Remembered in the visitor's own browser. The value is either "granted" or
// "denied"; no entry means the visitor has not answered yet.
export const CONSENT_KEY = "ek-consent-analytics";

// Fired on `window` when the visitor asks to answer the consent question again.
export const CONSENT_REOPEN_EVENT = "ek-consent-reopen";

declare global {
  interface Window {
    dataLayer: unknown[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- the real gtag signature is a variadic mystery on purpose
    gtag: (...args: any[]) => void;
  }
}

export type ConsentChoice = "granted" | "denied";

// Google's own cookies all begin with one of these prefixes. Matched by name so
// a withdrawal removes everything Google set, never anything the site did.
const GOOGLE_COOKIE_RE = /^(_ga|_gid|_gat|_gcl)/;

/** Reads the stored answer. Never throws: a blocked or unavailable localStorage (private mode, strict settings) reads as "not answered". */
export function readConsent(): ConsentChoice | null {
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    if (value === "granted" || value === "denied") return value;
    return null;
  } catch {
    return null;
  }
}

/**
 * Stores the visitor's answer. On "yes" the measurement script is added to the
 * page; on "no" any cookies Google may have set during an earlier "yes" are
 * removed, so withdrawing consent actually withdraws it.
 */
export function writeConsent(choice: ConsentChoice) {
  try {
    localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    // Storage unavailable: the choice cannot be remembered. The banner will ask
    // again on the next visit, which is the safe failure — never measuring.
  }
  if (choice === "granted") {
    loadGtag();
  } else {
    removeGoogleCookies();
  }
}

function loadGtag() {
  if (document.getElementById("gtag-script")) return;

  // The queue must exist before the script tag lands, so the config call below
  // is never lost even if the script itself is blocked (adblockers, offline).
  window.dataLayer = window.dataLayer || [];
  // gtag.js only acts on entries that are an `arguments` object. A rest-args
  // array looks identical in the queue and is silently ignored, so this must
  // stay a plain function using `arguments`.
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params -- see above
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    // No advertising features. The page view is left to Google: config sends
    // one for the page the visitor is on, and its history tracking sends one
    // for every navigation after that on this site that never reloads. Sending
    // our own as well counted every navigation twice.
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });

  const script = document.createElement("script");
  script.id = "gtag-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

// The classic epoch date, built from parts, tells the browser to drop the cookie.
// (A literal here trips the lint rule that guards the clinic's opening hours.)
const EXPIRED = new Date(0).toUTCString();

function removeGoogleCookies() {
  const domains = ["", `.${location.hostname}`];
  // A leading dot here covers the bare host too.
  const parentDomain = location.hostname.split(".").slice(-2).join(".");
  if (parentDomain !== location.hostname) domains.push(`.${parentDomain}`);
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0]?.trim();
    if (!name || !GOOGLE_COOKIE_RE.test(name)) continue;
    for (const domain of domains) {
      document.cookie = `${name}=; expires=${EXPIRED}; path=/; domain=${domain || location.hostname}`;
    }
  }
}

/** Loads the measurement script if — and only if — consent exists. Called from the root route on every visit. */
export function initAnalytics() {
  if (readConsent() === "granted") loadGtag();
}

/**
 * Re-opens the banner so the visitor can change their mind. Clears the stored
 * choice first, so the answer is made from scratch. The banner listens for the
 * `ek-consent-reopen` event; this module knows nothing about the banner itself.
 */
export function reopenConsent() {
  try {
    localStorage.removeItem(CONSENT_KEY);
  } catch {
    // Storage unavailable: the banner asks again anyway on the next visit.
  }
  window.dispatchEvent(new Event(CONSENT_REOPEN_EVENT));
}
