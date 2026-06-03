import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Check } from "lucide-react";

export const Route = createFileRoute("/behandling")({
  head: () => ({
    meta: [
      { title: "Behandling – Ek Kiropraktik" },
      { name: "description", content: "Behandling vid vanliga besvär, för idrottare och förebyggande hos Ek Kiropraktik i Skara." },
    ],
  }),
  component: BehandlingPage,
});

const vanligaBesvar = [
  { title: "Ländryggssmärta", text: "En av de vanligaste anledningarna att söka kiropraktor. Vi utreder orsaken – diskbesvär, facettledssmärta eller muskulära obalanser – och anpassar behandling med justering, mobilisering och övningar." },
  { title: "Nackont och stelhet", text: "Ofta kopplat till stillasittande, stress eller dåliga sovställningar. Behandling kombinerar manuell terapi med rådgivning kring ergonomi och rörelse." },
  { title: "Huvudvärk & spänningshuvudvärk", text: "Många huvudvärksformer har sitt ursprung i nacken. Genom att behandla underliggande spänningar och ledrörlighet kan vi minska både intensitet och frekvens." },
  { title: "Ischias och utstrålande smärta", text: "Smärta som strålar ner i benet kan ha flera orsaker. Vi gör en noggrann neurologisk bedömning och behandlar både nerv och omkringliggande strukturer." },
  { title: "Axel- och skulderbesvär", text: "Impingement, frusen skuldra eller överbelastning – vi utreder och behandlar tillsammans med riktad rehabträning." },
  { title: "Höft- och knäbesvär", text: "Belastningsskador, artros och felställningar. Behandling som kombinerar mjukdelsarbete, ledjustering och stärkande övningar." },
];

export default function BehandlingPage() {
  return (
    <>
      <PageHeader eyebrow="Behandling" title="Vi möter dig där du är" lead="Oavsett om du har akuta besvär, presterar på elitnivå eller vill arbeta förebyggande." />

      <section id="vanliga-besvar" className="py-20 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">01</p>
          <h2 className="font-display text-4xl md:text-5xl text-navy mb-4">Vanliga besvär</h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed mb-12">
            De flesta som besöker oss söker hjälp för besvär från muskler, leder eller nervsystem. Här är några av de vanligaste tillstånden vi behandlar dagligen.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {vanligaBesvar.map((b) => (
              <div key={b.title} className="bg-card p-7 border border-border">
                <h3 className="font-display text-xl text-navy mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="idrottare" className="py-20 bg-secondary scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">02</p>
            <h2 className="font-display text-4xl md:text-5xl text-navy mb-4">Idrottare</h2>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Som aktiv idrottare ställs höga krav på kroppen. Kiropraktik och massage kan hjälpa dig att prestera optimalt, återhämta dig snabbare och minska risken för skador.
            </p>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              Genom att hålla rörelseapparaten i balans skapar vi förutsättningar för bättre rörelsemönster, kraftöverföring och kroppskontroll – oavsett om du tränar på elitnivå eller motionerar regelbundet.
            </p>
          </div>
          <ul className="space-y-4">
            {[
              "Bättre ledrörlighet och kraftöverföring",
              "Snabbare återhämtning mellan pass och tävlingar",
              "Minskad risk för överbelastningsskador",
              "Behandling av muskelspänningar och triggerpunkter",
              "Rådgivning kring träningsbelastning och rörlighet",
              "Rehabilitering efter idrottsskador",
            ].map((p) => (
              <li key={p} className="flex gap-3 items-start bg-card p-5 border-l-2 border-gold">
                <Check className="text-gold mt-0.5 flex-shrink-0" size={20} />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="forebyggande" className="py-20 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-start">
          <ul className="space-y-4 md:order-2">
            {[
              "Behåller god rörlighet och funktion över tid",
              "Minskar risken för återkommande besvär",
              "Motverkar stelhet från stillasittande arbete",
              "Hanterar stress och muskulär spänning",
              "Stödjer en aktiv och hållbar livsstil",
              "Tidig upptäckt av begynnande obalanser",
            ].map((p) => (
              <li key={p} className="flex gap-3 items-start bg-card p-5 border-l-2 border-gold">
                <Check className="text-gold mt-0.5 flex-shrink-0" size={20} />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">03</p>
            <h2 className="font-display text-4xl md:text-5xl text-navy mb-4">Förebyggande</h2>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Att vänta tills smärtan blir påtaglig är inte alltid det bästa. Regelbunden kiropraktik och massage kan fungera förebyggande genom att hålla kroppen i balans, motverka stelhet och fånga upp obalanser i tid.
            </p>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              Tillsammans lägger vi upp en plan som passar din vardag, ditt arbete och dina mål – så att kroppen får förutsättningar att fungera bra över tid.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

// route component export
BehandlingPage;
