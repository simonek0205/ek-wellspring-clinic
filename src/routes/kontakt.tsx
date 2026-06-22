import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Phone, Mail, MapPin, Clock, User } from "lucide-react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt – Ek Kiropraktik" },
      { name: "description", content: "Kontakta Ek Kiropraktik i Skara. Telefon 0793-10 35 46, info@ekkiropraktik.se, S:ta Annagatan 3." },
    ],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  const items = [
    { icon: User, label: "Terapeut", value: "Simon Ek" },
    { icon: Phone, label: "Telefon", value: "0793-10 35 46", href: "tel:0793103546" },
    { icon: Mail, label: "E-post", value: "info@ekkiropraktik.se", href: "mailto:info@ekkiropraktik.se" },
    { icon: MapPin, label: "Adress", value: "S:ta Annagatan 3, 532 32 Skara" },
    { icon: Clock, label: "Öppettider", value: "Måndag–Fredag 08:00–17:00" },
  ];
  return (
    <>
      <PageHeader eyebrow="Kontakt" title="Hör av dig" lead="Vi hjälper dig gärna att hitta en tid som passar." />
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-10">
          <ul className="space-y-5">
            {items.map((it) => (
              <li key={it.label} className="bg-card p-6 border border-border flex gap-4 items-start">
                <div className="bg-navy text-cream p-3 rounded-sm flex-shrink-0">
                  <it.icon size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">{it.label}</p>
                  {it.href ? (
                    <a href={it.href} className="font-display text-xl text-navy hover:text-gold transition-colors">
                      {it.value}
                    </a>
                  ) : (
                    <p className="font-display text-xl text-navy">{it.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div className="space-y-4">
            <div>
              <h3 className="font-display text-2xl text-navy mb-1">Vi finns här</h3>
              <p className="text-muted-foreground text-sm">Vi delar lokal med Kiropraktor Jonas Svensson</p>
            </div>
            <div className="bg-secondary p-2 min-h-[400px]">
              <iframe
                title="Karta över Ek Kiropraktik"
                src="https://www.google.com/maps?q=S:ta+Annagatan+3,+532+32+Skara&output=embed"
                className="w-full h-full min-h-[400px] border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
