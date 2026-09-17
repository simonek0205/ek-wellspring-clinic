import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Phone, Mail, MapPin, Clock, User } from "lucide-react";
import { addressLine, clinic, emailHref, mapsEmbedUrl } from "@/lib/site";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt – Ek Kiropraktik" },
      {
        name: "description",
        content: `Kontakta ${clinic.name} i ${clinic.address.city}. Telefon ${clinic.phone.display}, ${clinic.email}, ${clinic.address.street}.`,
      },
    ],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  const items = [
    { icon: User, label: "Terapeut", value: clinic.therapist },
    { icon: Phone, label: "Telefon", value: clinic.phone.display, href: clinic.phone.href },
    { icon: Mail, label: "E-post", value: clinic.email, href: emailHref },
    { icon: MapPin, label: "Adress", value: addressLine },
    { icon: Clock, label: "Öppettider", value: clinic.hours.long },
  ];
  return (
    <>
      <PageHeader title="Kontakt" lead="Vi hjälper dig gärna att hitta en tid som passar." />
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-10">
          <ul className="space-y-5">
            {items.map((it) => (
              <li
                key={it.label}
                className="bg-card p-6 border border-border flex gap-4 items-start"
              >
                <div className="bg-navy text-cream p-3 rounded-sm flex-shrink-0">
                  <it.icon size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
                    {it.label}
                  </p>
                  {it.href ? (
                    <a
                      href={it.href}
                      className="font-display text-xl text-navy hover:text-gold transition-colors"
                    >
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
              <p className="text-muted-foreground text-sm">
                Vi delar lokal med {clinic.sharesPremisesWith}
              </p>
            </div>
            <div className="bg-secondary p-2 min-h-[400px]">
              <iframe
                title={`Karta över ${clinic.name}`}
                src={mapsEmbedUrl}
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
