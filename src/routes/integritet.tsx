import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { GA_MEASUREMENT_ID, reopenConsent } from "@/lib/analytics";
import { clinic, emailHref, pageHead } from "@/lib/site";

export const Route = createFileRoute("/integritet")({
  head: () => ({
    meta: [
      { title: "Integritet och cookies – Ek Kiropraktik" },
      {
        name: "description",
        content:
          "Hur Ek Kiropraktik mäter besök på webbplatsen, vilka cookies som används och hur du ändrar ditt val.",
      },
      { name: "robots", content: "noindex, follow" },
      ...pageHead("/integritet").meta,
    ],
    links: pageHead("/integritet").links,
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHeader title="Integritet och cookies" />
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 space-y-10 text-foreground/85 leading-relaxed">
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-navy">Besöksstatistik</h2>
            <p>
              Vi använder Google Analytics för att se hur många som besöker webbplatsen och vilka
              sidor som läses. Det hjälper oss att veta vad som är användbart. Mätningen startar
              bara om du svarar ja i rutan som visas vid ditt första besök. Svarar du nej skickas
              ingenting till Google och webbplatsen fungerar precis som vanligt.
            </p>
            <p>
              Säger du ja får Google veta vilka sidor du besöker, ungefär var du befinner dig (stad
              eller region), vilken sorts enhet och webbläsare du använder, och varifrån du kom till
              webbplatsen. Vi ser bara sammanställd statistik, aldrig vem du är. Vi använder inte
              uppgifterna för annonsering.
            </p>
            <p>
              Tjänsten tillhandahålls av Google Ireland Limited. Uppgifterna kan föras över till
              Google LLC i USA, som omfattas av EU:s och USA:s ramverk för dataskydd (EU–US Data
              Privacy Framework).
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl text-navy">Cookies och lagring</h2>
            <p>Om du säger ja sätter Google två cookies i din webbläsare:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>_ga</strong> – skiljer en besökare från en annan. Sparas i upp till 2 år.
              </li>
              <li>
                <strong>_ga_{GA_MEASUREMENT_ID.replace("G-", "")}</strong> – håller ihop ett besök.
                Sparas i upp till 2 år.
              </li>
            </ul>
            <p>
              Ditt svar, ja eller nej, sparas i din egen webbläsare så att vi inte frågar igen. Det
              skickas inte till oss eller till någon annan.
            </p>
            <p>
              Kartan på kontaktsidan kommer också från Google. Den laddas först när du klickar på
              "Visa karta".
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl text-navy">Ändra ditt val</h2>
            <p>
              Du kan ändra dig när som helst. Klicka på "Statistik" längst ner på varje sida, eller
              här:{" "}
              <button
                type="button"
                onClick={reopenConsent}
                className="text-navy underline underline-offset-2 hover:text-navy-deep"
              >
                ändra mitt val
              </button>
              . Säger du nej tar vi bort Googles cookies från din webbläsare.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl text-navy">Dina rättigheter</h2>
            <p>
              {clinic.name} ansvarar för behandlingen. Den grundar sig på ditt samtycke. Har du
              frågor, eller vill du veta vad vi har om dig, skriv till{" "}
              <a href={emailHref} className="text-navy underline underline-offset-2">
                {clinic.email}
              </a>
              . Är du inte nöjd med hur vi hanterar dina uppgifter kan du vända dig till
              Integritetsskyddsmyndigheten (IMY).
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
