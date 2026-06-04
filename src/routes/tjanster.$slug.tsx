import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { services, type Service } from "@/lib/services";
import { PageHeader } from "@/components/PageHeader";
import { ArrowLeft, Check } from "lucide-react";

export const Route = createFileRoute("/tjanster/$slug")({
  loader: ({ params }): { service: Service } => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.title} – Ek Kiropraktik` },
          { name: "description", content: loaderData.service.short },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="py-32 text-center">
      <h1 className="font-display text-3xl text-navy">Tjänsten kunde inte hittas</h1>
      <Link to="/tjanster" className="mt-6 inline-block text-navy underline">Tillbaka till tjänster</Link>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData() as { service: Service };
  return (
    <>
      <PageHeader eyebrow="Tjänst" title={service.title} lead={service.short} />
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Link to="/tjanster" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-navy mb-10">
            <ArrowLeft size={16} /> Alla tjänster
          </Link>

          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            width={1024}
            height={1024}
            className="w-full h-72 md:h-96 object-cover mb-12"
          />

          <article className="space-y-10">
            <div>
              <h2 className="font-display text-3xl text-navy mb-4">Vad är det?</h2>

              <p className="text-foreground/80 leading-relaxed text-lg">{service.what}</p>
            </div>
            <div>
              <h2 className="font-display text-3xl text-navy mb-4">Hur fungerar det?</h2>
              <p className="text-foreground/80 leading-relaxed text-lg">{service.how}</p>
            </div>
            <div>
              <h2 className="font-display text-3xl text-navy mb-4">Vad är det bra för?</h2>
              <ul className="space-y-3">
                {service.benefits.map((b) => (
                  <li key={b} className="flex gap-3 items-start">
                    <Check className="text-gold mt-1 flex-shrink-0" size={20} />
                    <span className="text-foreground/80 text-lg">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <div className="mt-16 p-8 bg-secondary border-l-2 border-gold">
            <h3 className="font-display text-2xl text-navy mb-2">Boka en tid</h3>
            <p className="text-muted-foreground mb-5">Ring eller mejla så hjälper vi dig vidare.</p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:0793103546" className="bg-navy text-cream px-6 py-3 rounded-sm hover:bg-navy-deep transition-colors">0793-10 35 46</a>
              <a href="mailto:info@ekkiropraktik.se" className="border border-navy/20 text-navy px-6 py-3 rounded-sm hover:bg-navy/5 transition-colors">info@ekkiropraktik.se</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
