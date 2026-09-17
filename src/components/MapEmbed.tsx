import { useState } from "react";
import { ExternalLink, MapPin } from "lucide-react";
import { addressLine, clinic, mapsEmbedUrl, mapsLinkUrl } from "@/lib/site";

/**
 * The Google Maps embed used to load for every visitor on page load, which
 * hands their IP and Google's cookies to a third party before they have asked
 * for a map. On a healthcare site that is not a reasonable default, so the map
 * loads only once someone clicks — and the address is readable either way.
 */
export function MapEmbed() {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        title={`Karta över ${clinic.name}`}
        src={mapsEmbedUrl}
        className="h-full min-h-[400px] w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <div className="flex h-full min-h-[400px] flex-col items-center justify-center gap-5 bg-secondary px-6 py-10 text-center">
      <MapPin className="text-navy" size={32} aria-hidden="true" />
      <div>
        <p className="font-display text-2xl text-navy">{clinic.name}</p>
        <p className="mt-1 text-muted-foreground">{addressLine}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="rounded-sm bg-navy px-6 py-3 text-cream transition-colors hover:bg-navy-deep"
        >
          Visa karta
        </button>
        <a
          href={mapsLinkUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-sm border border-navy/20 px-6 py-3 text-navy transition-colors hover:bg-navy/5"
        >
          Öppna i Google Maps <ExternalLink size={16} aria-hidden="true" />
        </a>
      </div>
      <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
        Kartan laddas från Google först när du väljer att visa den. Då kan Google komma att sätta
        kakor och behandla din IP-adress.
      </p>
    </div>
  );
}
