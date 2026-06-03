import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { services } from "@/lib/services";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/tjanster/")({
  head: () => ({
    meta: [
      { title: "Våra tjänster – Ek Kiropraktik" },
      { name: "description", content: "Kiropraktik, massage och medicinsk laser hos Ek Kiropraktik i Skara." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="Tjänster" title="Våra tjänster" lead="En personlig behandling, anpassad efter dina individuella behov och målsättningar." />
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 grid gap-6">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/tjanster/$slug"
              params={{ slug: s.slug }}
              className="group bg-card border border-border p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 hover:border-navy transition-colors"
            >
              <div className="flex-1">
                <h2 className="font-display text-3xl text-navy mb-2">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{s.short}</p>
              </div>
              <span className="inline-flex items-center gap-2 text-navy font-medium group-hover:gap-3 transition-all whitespace-nowrap">
                Läs mer <ArrowRight size={18} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
