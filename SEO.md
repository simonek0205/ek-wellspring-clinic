# SEO-plan för ekkiropraktik.se

Den tekniska SEO:n på webbplatsen är gjord — se [Vad som redan är på plats](#vad-som-redan-är-på-plats)
längst ner. Det här dokumentet handlar om resten: det som inte går att lösa i
koden utan kräver att någon loggar in någonstans, oftast Simon.

Varje avsnitt säger **vem som gör vad**, i vilken ordning, och vad som behöver
komma tillbaka till utvecklingen efteråt.

---

## 1. Google Företagsprofil — börja här

För en klinik med en mottagning är detta den enskilt viktigaste åtgärden, större
än allt annat i det här dokumentet tillsammans. Det är företagsprofilen som
avgör om Ek Kiropraktik syns i kartrutan när någon i Skara söker "kiropraktor
nära mig". Webbplatsen stödjer profilen — den ersätter den inte.

**Simon gör:**

1. Gå till [business.google.com](https://business.google.com) och sök på
   "Ek Kiropraktik". Finns profilen redan (Google skapar ibland en automatiskt),
   gör anspråk på den. Annars skapa en ny.
2. Verifiera. Google skickar oftast ett vykort med kod till S:ta Annagatan 3,
   vilket tar ungefär en vecka. Ibland erbjuds telefon eller video i stället.
   Inget publiceras skarpt förrän verifieringen är klar.
3. Fyll i, **exakt likadant som på webbplatsen** — se avsnitt 2 om varför:
   - Namn: `Ek Kiropraktik`
   - Adress: `S:ta Annagatan 3, 532 32 Skara`
   - Telefon: `0793-10 35 46`
   - Webbplats: `https://ekkiropraktik.se`
   - Öppettider: måndag–fredag 08:00–17:00
4. Kategorier. Huvudkategori `Kiropraktor`. Lägg till `Massageterapeut` och
   `Rehabilitering` som sekundära — de motsvarar tjänster som faktiskt erbjuds.
5. Tjänster: lägg in kiropraktik, massage, medicinsk laser och rehab med samma
   namn och priser som prislistan på webbplatsen.
6. Bilder. Minst mottagningen, entrén utifrån (så att folk hittar dörren) och en
   bild på Simon. Profiler med bilder får mätbart fler klick.
7. Beskrivning på svenska, 500–750 tecken. Skriv om patienten och besväret, inte
   om kliniken.

**Vi gör efteråt:** inget i koden. Den strukturerade datan på webbplatsen anger
redan samma uppgifter, så profilen och webbplatsen bekräftar varandra.

**Underhåll:** avvikande öppettider vid röda dagar och semester läggs in i
profilen. Det är den vanligaste orsaken till att någon står vid en låst dörr.

---

## 2. Samma uppgifter överallt (NAP)

NAP står för Name, Address, Phone. Google väger samman uppgifterna om ett
företag från alla ställen de förekommer, och när de inte stämmer överens sjunker
förtroendet för alla källor. "S:ta Annagatan" på ett ställe och "Sankta
Annagatan" på ett annat räknas som två olika adresser.

Den kanoniska formen är den som står på webbplatsen:

```
Ek Kiropraktik
S:ta Annagatan 3
532 32 Skara
0793-10 35 46
info@ekkiropraktik.se
```

**Simon gör:** använd exakt den formen i företagsprofilen, på Facebook, på
Instagram, i kataloger och i mejlsignaturen. Kopiera hellre än att skriva om.

**Vi gör:** uppgifterna finns på ett enda ställe i koden (`src/lib/site.ts`) och
bygget stoppas om någon skriver in ett telefonnummer eller en adress någon
annanstans. Webbplatsen kan alltså inte börja säga emot sig själv.

---

## 3. Google Search Console

Search Console visar vad folk faktiskt söker på innan de klickar sig in, vilka
sidor Google har indexerat, och varnar när något går sönder. Utan den gissar vi.

**Simon gör:**

1. [search.google.com/search-console](https://search.google.com/search-console),
   välj **Domän** (inte URL-prefix) och skriv `ekkiropraktik.se`.
2. Google ger en TXT-post som ska läggas i domänens DNS. Den ligger hos den som
   hanterar domänen — hör av dig till oss om du är osäker på var.
3. När verifieringen är klar: lägg till `https://ekkiropraktik.se/sitemap.xml`
   under **Webbplatskartor**.
4. Ge oss läsbehörighet (Inställningar → Användare → lägg till, rollen
   **Fullständig** eller **Begränsad**), så kan vi följa upp utan att fråga dig
   varje gång.

**Vi gör efteråt:** läser av vilka sökord som faktiskt ger besök och justerar
sidornas rubriker och texter efter det, i stället för efter vad vi tror att folk
söker på. Bevakar indexeringsfel.

**Rimlig förväntan:** det tar ofta ett par veckor innan datan blir meningsfull.

---

## 4. Statistik — och varför vi inte bara sätter dit Google Analytics

Webbplatsen skickar i dag ingenting till tredje part. Typsnitten ligger på vår
egen server och kartan laddas först när besökaren själv klickar. Det var ett
medvetet val: det här är en vårdgivare, och ett besök på
`/tjanster/medicinsk-laser` säger något om en persons hälsa.

Lägger vi in Google Analytics faller det valet. Då krävs en
samtyckesruta som besökaren måste klicka bort innan mätningen får starta, och
statistiken blir ändå ofullständig eftersom många tackar nej.

**Rekommendation:** använd ett statistikverktyg som inte sätter kakor och inte
identifierar enskilda besökare — [Plausible](https://plausible.io) eller
[Umami](https://umami.is). Båda är EU-baserade, kostar ungefär en tia om dagen
eller ingenting alls om vi kör det själva, och kräver **ingen** samtyckesruta.
För en klinik med nio sidor ger de allt som är värt att veta: antal besök, vilka
sidor som läses, vad folk kom ifrån.

**Simon beslutar:** integritetsvänlig statistik utan samtyckesruta, eller Google
Analytics med samtyckesruta. Det är ett verkligt val — Google Analytics ger mer
data och kopplar ihop med annonsering, men kostar i form av en ruta som varje
besökare måste klicka bort.

**Vi gör efteråt:** lägger in det valda verktyget. Blir det Google Analytics
bygger vi också samtyckeshanteringen, vilket är mer arbete än själva mätningen.

---

## 5. Recensioner

Recensioner i företagsprofilen påverkar både placeringen i kartrutan och om
någon väljer att ringa. För en ny profil är de första fem viktigast.

**Simon gör:** fråga nöjda patienter vid återbesök, och skicka länken till
profilen i ett sms efteråt — att be i stunden ger sällan något, länken gör det.
Svara på alla recensioner, även de korta positiva. Svara sakligt och kortfattat
på en dålig recension, och **aldrig med något som rör patientens vård** —
tystnadsplikten gäller även i ett kommentarsfält.

**Vi gör efteråt:** när det finns en handfull recensioner kan vi visa dem på
webbplatsen och märka upp dem i den strukturerade datan, så att betyget kan synas
direkt i sökresultatet.

---

## 6. Kataloger och lokala länkar

Svenska kataloger väger fortfarande något för lokala sökningar, och de är
gratis.

**Simon gör:**

- [hitta.se](https://www.hitta.se) och [eniro.se](https://www.eniro.se) — gör
  anspråk på företaget och rätta uppgifterna. Sannolikt finns redan poster.
- Yrkesförbundets medlemsregister, om Ek Kiropraktik är medlem. En länk från
  ett förbund väger mer än tio kataloglänkar.
- Jonas Svensson delar lokal med kliniken. Om han har en egen webbplats är en
  länk åt vardera hållet naturlig och nyttig för båda.
- Idrottsföreningar i Skaraborg som kliniken samarbetar med. Lokala,
  ämnesnära länkar är precis vad Google vill se för en verksamhet som denna.

**Undvik:** allt som säljer länkpaket. Det skadar.

---

## 7. Innehåll, när grunden står

Webbplatsen svarar i dag på "vad erbjuder ni". Den svarar inte på det folk
faktiskt skriver i sökrutan, som är formulerat efter besväret: "ont i ländryggen
Skara", "kiropraktor eller naprapat", "hur går ett kiropraktorbesök till".

**Förslag, i prioritetsordning:**

1. En sida om vad som händer vid ett **nybesök** — den frågan ställer alla som
   aldrig varit hos en kiropraktor, och osäkerheten är det som hindrar bokningen.
2. Vanliga frågor och svar. Gör ont? Hur många besök behövs? Behövs remiss?
   Frågor och svar kan dessutom märkas upp så att de syns direkt i sökresultatet.
3. En sida per större besvär — ländryggssmärta, nacke, huvudvärk, ischias — som
   fördjupar det som i dag är ett stycke på `/behandling`.

Det här är skrivarbete, inte utvecklingsarbete. Texten kan komma från Simon och
vi lägger in den.

---

## 8. Uppföljning

| När              | Vad                                           | Vem                         |
| ---------------- | --------------------------------------------- | --------------------------- |
| Varje månad      | Sökord och klick i Search Console             | Vi                          |
| Varje månad      | Nya recensioner besvarade                     | Simon                       |
| Varje kvartal    | Lighthouse-mätning, teknisk kontroll          | Vi                          |
| Vid förändring   | Öppettider i företagsprofilen **och** i koden | Simon säger till, vi ändrar |
| Var sjätte månad | Stämmer uppgifterna i kataloger fortfarande   | Vi                          |

---

## Vad som redan är på plats

Gjort i koden, inget mer behövs:

- **Strukturerad data** (schema.org) som beskriver kliniken för Google: adress,
  telefon, prisnivå och öppettider, plus en post per behandling och
  brödsmulor. Allt genereras ur samma uppgifter som sidorna visar, så de kan
  inte säga emot varandra.
- **Kanonisk adress** och `og:`-taggar på varje sida, så att delade länkar visas
  med rubrik, text och bild.
- **robots.txt** och **sitemap.xml** med alla nio sidorna.
- **Favicon** och ikoner för mobilens hemskärm.
- Egna rubriker och beskrivningar per sida, med ortsnamnet där det hör hemma.
- **Mätt med Lighthouse** (dator, mot den publika adressen, 2026-09-17):
  100 för prestanda, 100 för tillgänglighet, 100 för god praxis och 100 för SEO,
  både på startsidan och på en behandlingssida. Inga underkända kontroller kvar.
  Största innehållsvisning 0,6 sekunder, ingen layoutförskjutning, blockerande
  tid 20 ms. Bildmängden på startsidan gick från 3,0 MB till 287 kB.
- **Tillgänglighet:** kontrasterna klarar 4,5:1 i text, rubriknivåerna följer på
  varandra och menyknappen berättar för en skärmläsare om menyn är öppen. Det
  påverkar sökresultatet indirekt men användbarheten direkt.
- **Inget skickas till tredje part** innan besökaren ber om det. Typsnitten är
  egna, kartan laddas vid klick.
- Riktiga 404-svar för sidor som inte finns, och permanenta omdirigeringar från
  `www` och från `http`.

### Kvar att göra i koden

Små saker, ingen brådska:

- Bilderna kan bli ytterligare omkring 100 kB mindre i formatet WebP. De ligger
  i JPEG i dag för att Lovables bildregister ska fortsätta hitta originalen.
- Omdirigeringen från adresser som slutar med snedstreck är tillfällig (307) i
  stället för permanent (308). Påverkar knappast något, men är inte städat.
