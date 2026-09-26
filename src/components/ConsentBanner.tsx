import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  CONSENT_REOPEN_EVENT,
  readConsent,
  writeConsent,
  type ConsentChoice,
} from "@/lib/analytics";

/**
 * The consent banner. It renders nothing on the server and only asks once the
 * visitor has not already answered — either choice is remembered, so nobody is
 * asked twice. The footer's "Statistik" link re-opens it by dispatching the
 * `ek-consent-reopen` event on `window`, which keeps the footer free of any
 * knowledge of this component.
 */
export function ConsentBanner() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    setVisible(readConsent() === null);

    const reopen = () => setVisible(true);
    window.addEventListener(CONSENT_REOPEN_EVENT, reopen);
    return () => window.removeEventListener(CONSENT_REOPEN_EVENT, reopen);
  }, []);

  if (!mounted || !visible) return null;

  const answer = (choice: ConsentChoice) => {
    writeConsent(choice);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Val om besöksstatistik"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-navy/15 bg-background/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-sm leading-relaxed text-foreground">
          Vi mäter besöken med Google Analytics för att veta vilka sidor som används. Mätningen
          startar först om du säger ja — väljer du nej mäts ingenting och sajten fungerar precis som
          vanligt. Valet sparas som en liten fil i din webbläsare.{" "}
          <Link
            to="/integritet"
            className="text-navy underline underline-offset-2 hover:text-navy-deep"
          >
            Läs mer
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => answer("granted")}
            className="rounded-sm bg-navy px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-navy-deep"
          >
            Ja, mät besöken
          </button>
          <button
            type="button"
            onClick={() => answer("denied")}
            className="rounded-sm border border-navy/20 px-5 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-navy/5"
          >
            Nej tack
          </button>
        </div>
      </div>
    </div>
  );
}
