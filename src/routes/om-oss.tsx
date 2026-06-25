import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import simonPortrait from "@/assets/simon-ek.jpg.asset.json";

export const Route = createFileRoute("/om-oss")({
  head: () => ({
    meta: [
      { title: "Om oss – Ek Kiropraktik" },
      { name: "description", content: "Ek Kiropraktik drivs av kiropraktor utbildad vid Skandinaviska Kiropraktorhögskolan. Personligt engagemang och professionellt bemötande." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="Om oss" title="Personlig vård med bred kompetens" />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <div className="overflow-hidden">
            <img src={simonPortrait.url} alt="Simon Ek, kiropraktor" className="w-full h-auto object-cover" />
          </div>
          <div className="space-y-6 text-foreground/85 leading-relaxed text-lg">
            <p>
              Hos oss är målet att hjälpa dig till en vardag med bättre funktion, minskad smärta och ökad livskvalitet. Vi tror på att varje patient är unik och därför anpassas undersökning, behandling och rådgivning efter dina individuella behov och målsättningar.
            </p>
            <p>
              Kliniken drivs av en kiropraktor utbildad vid Skandinaviska Kiropraktorhögskolan. Efter fem års heltidsstudier inom anatomi, fysiologi, neurologi, sjukdomslära och diagnostik har vi byggt upp en bred kompetens inom utredning och behandling av besvär från rörelseapparaten, såsom muskler, leder och nervsystem.
            </p>
            <p>
              Vi har särskild kompetens inom det muskuloskeletala systemet och arbetar dagligen med besvär som påverkar muskler, leder, nerver och andra mjukdelsstrukturer. Genom en noggrann klinisk bedömning strävar vi efter att förstå orsaken bakom dina besvär och skapa en behandlingsplan som är anpassad just för dig.
            </p>
            <p>
              På Ek Kiropraktik möts du av ett personligt engagemang, ett professionellt bemötande och en ambition att ge dig de bästa förutsättningarna för en aktiv och hållbar hälsa.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
