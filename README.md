# Ek Kiropraktik

Webbplatsen för **Ek Kiropraktik**, en kiropraktorklinik i Skara som drivs av
Simon Ek.

**Publik adress:** <https://ekkiropraktik.se> · **Språk:** svenska (`lang="sv"`)

Fem sidor — start, tjänster (med en sida per behandling), behandling, om oss och
kontakt. Ingen databas, ingen inloggning, inga formulär: allt på webbplatsen är
innehåll som ligger i det här kodförrådet.

## Teknik

|            |                                                                                                 |
| ---------- | ----------------------------------------------------------------------------------------------- |
| Ramverk    | [TanStack Start](https://tanstack.com/start) — React med serverrendering och filbaserad routing |
| Gränssnitt | React 19, Tailwind CSS 4                                                                        |
| Bygge      | Vite 7                                                                                          |
| Språk      | TypeScript                                                                                      |
| Drift      | Netlify, driftsätts från `main`                                                                 |

Projektet skapades ursprungligen med [Lovable](https://lovable.dev), och Simon
redigerar det fortfarande där — se [Redigering via Lovable](#redigering-via-lovable).

## Kom igång

Kräver **Node 20.19+ eller 22.12+** (minimum för Vite 7). Låsfilen är `bun.lock`,
så [Bun](https://bun.sh) är den avsedda pakethanteraren, men npm fungerar lika
bra.

```sh
bun install          # eller: npm install
bun run dev          # http://localhost:8080
```

### Kommandon

| Kommando    | Vad det gör                                                    |
| ----------- | -------------------------------------------------------------- |
| `dev`       | Utvecklingsserver med direktuppdatering                        |
| `build`     | Produktionsbygge till `.output/`                               |
| `typecheck` | `tsc --noEmit` — Vite typkontrollerar **inte**, så kör det här |
| `lint`      | ESLint, med Prettier som en regel                              |
| `format`    | Formaterar om källkoden med Prettier                           |

Kör `typecheck`, `lint` och `build` innan du pushar. Alla tre ska vara rena;
`lint` visar i dag sex varningar, samtliga inne i `src/components/ui/`.

> **`bun run preview` fungerar inte.** Det letar efter `dist/server/server.js`
> medan bygget skriver till `.output/`. Använd `dev` för att titta på
> webbplatsen lokalt.

## Så ligger projektet

```
public/            Serveras som det är från roten (favicon, robots.txt, sitemap.xml, og-image, typsnitt)
src/
  routes/          En fil per adress — se src/routes/README.md
    __root.tsx     Skalet varje sida ritas i: <head>, sidhuvud, sidfot
  components/      SiteHeader, SiteFooter, PageHeader, MapEmbed
    ui/            Ett oanvänt komponentbibliotek som följde med mallen
  lib/
    site.ts        Klinikens uppgifter — telefon, e-post, adress, öppettider
    services.ts    De fyra behandlingarna och prislistan
  assets/          Bilder, importeras av sidorna som använder dem
  styles.css       Tailwind-temat: paletten i marinblått, gräddvitt och guld
  fonts.css        Egna typsnitt, se Integritet nedan
```

`src/routeTree.gen.ts` genereras av routern. Redigera den aldrig för hand — men
committa den när ett bygge har skrivit om den, eftersom den bär typerna för
sidornas laddade data.

## Ändra innehållet

Nästan allt löpande arbete är något av det här.

### Telefonnummer, e-post, adress eller öppettider

Ändra i **`src/lib/site.ts`**. Varje sida läser därifrån, även den strukturerade
datan som sökmotorerna använder, så en ändring slår igenom överallt på samma
gång.

De här uppgifterna stod tidigare inskrivna för hand i fyra olika filer, och de
gled isär: sidfoten uppgav stängning 16:00 medan kontaktsidan sa 17:00. För att
det inte ska hända igen stoppar ESLint bygget om ett telefonnummer, en
e-postadress, en gatuadress eller en tid på formen `HH:MM` skrivs som text någon
annanstans än i `site.ts`. Får du det felet: importera värdet i stället för att
skriva det igen.

### Priserna

Ändra `priceList` i **`src/lib/services.ts`**. Startsidan visar listan.

### En behandling

Varje behandling är en post i `services` i **`src/lib/services.ts`** — dess
`slug` blir adressen, och sidan `/tjanster/<slug>` byggs av `what`, `how` och
`benefits`.

Lägger du till en behandling: lägg även in adressen i `public/sitemap.xml`.

### En bild

Importera den i sidan som använder den, eller i `services.ts` för en
behandlingsbild.

**Ändra storlek innan du committar.** Sikta på ungefär dubbelt så många bildpunkter
som den största storlek bilden visas i, och spara fotografier som JPEG, inte PNG.
Webbplatsen skickade en gång 7,6 MB bilder — bland annat ett mobilfoto på
3024×4032 som visades i en smal spalt, och en PNG på 2,3 MB som visades i 320
bildpunkters bredd — vilket är en långsam sida för någon som sitter på mobilnätet.
Samma bilder väger i dag 637 kB.

Ange alltid `width` och `height` på `<img>` så att sidan inte hoppar medan den
laddar.

### Texten på en sida

Den ligger direkt i sidans fil under `src/routes/`.

## Sökmotorer

`src/lib/site.ts` genererar också den strukturerade datan
([schema.org](https://schema.org)) som beskriver kliniken för Google: adress,
telefon, prisnivå och öppettider, plus en post per behandling och brödsmulor.
Eftersom den byggs av samma värden som sidorna visar kan de inte bli osams.

Vidare finns kanonisk adress och `og:`-taggar på varje sida, `public/robots.txt`,
`public/sitemap.xml` och en favicon — eklövet ur logotypen, eftersom _ek_ är ek.

**[SEO.md](SEO.md)** beskriver det som inte går att lösa i koden: Google
Företagsprofil, Search Console, statistik och recensioner. Det mesta av det
kräver att Simon loggar in någonstans.

## Integritet

Webbplatsen skickar ingenting till tredje part innan besökaren ber om det. Det
är ett medvetet val — det här är en vårdgivare, och vilken behandlingssida någon
läser säger något om personens hälsa.

- **Typsnitten** ligger på vår egen server (`public/fonts`, inlagda i
  `src/fonts.css`) i stället för hos Google. Cormorant Garamond och Inter är
  variabla typsnitt, så en fil per familj räcker för hela viktomfånget.
- **Kartan** på kontaktsidan laddas först när besökaren klickar på "Visa karta".
  Adressen står läsbar oavsett.

Lägger någon till statistik eller inbäddat innehåll försvinner den egenskapen,
och då krävs en samtyckesruta. Se SEO.md innan du gör det.

## Driftsättning

Netlify bygger från `main`. Pusha, så uppdateras webbplatsen på ungefär en minut.

Det finns inga Netlify-inställningar i kodförrådet — ingen `netlify.toml` — så
byggkommando och publiceringskatalog är konfigurerade i Netlifys gränssnitt.

Två saker värda att känna till:

- **Privata kodförråd tillåter bara en bidragsgivare** på Netlifys gratisplan.
  När en andra person committar misslyckas driftsättningen med _"unrecognized
  Git contributor"_. Det här kodförrådet är publikt, vilket tar bort gränsen.
- En misslyckad driftsättning förblir ibland misslyckad när man försöker igen.
  En ny commit tvingar fram en ny bedömning.

`vite.config.ts` är inställd på Cloudflare Workers via nitro, vilket inte
stämmer med Netlify. Det fungerar, men är en rest från mallen snarare än ett
beslut — värt att reda ut om någon ändå rör byggkedjan.

## Redigering via Lovable

Simon underhåller webbplatsen via Lovable, så betrakta Lovable som en andra
författare med skrivrättigheter.

Filerna `*.asset.json` bredvid bilderna är Lovables bildregister och pekar ut
originalet för varje bild. **Ta inte bort dem när du optimerar en bild** — det är
så Lovable hittar originalet.

En känd följd: registret pekar fortfarande på originalen i full storlek medan
kodförrådet innehåller förminskade kopior. Om bilderna någon gång växer tillbaka
är en omsynkning från Lovable den troliga orsaken.

## Konventioner

- **Prettier** med 100 teckens bredd, dubbla citattecken och semikolon. ESLint
  kör den som en regel, så `lint` misslyckas på oformaterad kod.
- **TypeScript i strikt läge**, där oanvända variabler och parametrar är fel.
  Sätt ett understreck först på en parameter som verkligen inte ska användas.
- Svenska i allt en besökare läser och i dokumentationen. Engelska i kod,
  kodkommentarer och commit-meddelanden.
