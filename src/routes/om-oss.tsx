import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import simonPortrait from "@/assets/simon-ek.jpg";
import { clinic } from "@/lib/site";

export const Route = createFileRoute("/om-oss")({
  head: () => ({
    meta: [
      { title: "Om oss – Ek Kiropraktik" },
      {
        name: "description",
        content:
          "Ek Kiropraktik drivs av kiropraktor utbildad vid Skandinaviska Kiropraktorhögskolan. Personligt engagemang och professionellt bemötande.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader title="Om oss" />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <div className="overflow-hidden">
            <img
              src={simonPortrait}
              alt={`${clinic.therapist}, kiropraktor`}
              width={800}
              height={1067}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-6 text-foreground/85 leading-relaxed text-lg">
            <p>
              Mitt mål är att hjälpa dig till en vardag med bättre funktion, minskad smärta och ökad
              livskvalitet. Jag tror på att varje patient är unik och därför anpassar jag
              undersökning, behandling och rådgivning efter dina individuella behov och
              målsättningar.
            </p>
            <p>
              Kliniken drivs av mig, Simon Ek, kiropraktor utbildad vid Skandinaviska
              Kiropraktorhögskolan i Solna. Efter en femårig utbildning inom anatomi, fysiologi,
              neurologi, sjukdomslära och diagnostik har jag byggt upp en bred kompetens inom
              undersökning och behandling av besvär från rörelseapparaten – muskler, leder och
              nervsystem.
            </p>

            <p>
              Jag har särskild kompetens inom det muskuloskeletala systemet och arbetar dagligen med
              besvär som påverkar muskler, leder, nerver och andra mjukdelsstrukturer. Genom en
              noggrann klinisk bedömning strävar jag efter att förstå orsaken bakom dina besvär och
              skapa en behandlingsplan som är anpassad just för dig.
            </p>
            <p>
              På Ek Kiropraktik möts du av ett personligt engagemang, ett professionellt bemötande
              och min ambition att ge dig de bästa förutsättningarna för en aktiv och hållbar hälsa.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
