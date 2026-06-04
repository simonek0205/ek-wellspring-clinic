import kiropraktikImg from "@/assets/service-kiropraktik.jpg";
import massageImg from "@/assets/service-massage.jpg";
import laserImg from "@/assets/service-laser.jpg";
import rehabImg from "@/assets/service-rehab.jpg";

export type Service = {
  slug: string;
  title: string;
  short: string;
  what: string;
  how: string;
  benefits: string[];
  image: string;
};


export const services: Service[] = [
  {
    slug: "kiropraktik",
    title: "Kiropraktik",
    short: "Specialiserad utredning och behandling av besvär från muskler, leder och nervsystem.",
    what:
      "Kiropraktik är en evidensbaserad form av manuell medicin som fokuserar på diagnostik, behandling och förebyggande av besvär från rörelseapparaten – muskler, leder, nerver och bindväv. Vid ditt nybesök gör vi en grundlig genomgång av din sjukhistoria, en klinisk undersökning samt ortopediska och neurologiska tester för att förstå orsaken till dina besvär.",
    how:
      "Behandlingen anpassas individuellt och kan bestå av specifika ledjusteringar (manipulation), mobilisering, mjukdelsbehandling, traktion samt rådgivning kring träning, ergonomi och vardagliga vanor. Vid återbesök följer vi upp framstegen och justerar planen efter hur kroppen svarar.",
    benefits: [
      "Rygg-, nack- och ländryggssmärta",
      "Huvudvärk och migrän med ursprung i nacken",
      "Ischias och nervrelaterad smärta",
      "Stelhet och nedsatt rörlighet",
      "Idrottsskador och belastningsbesvär",
    ],
  },
  {
    slug: "massage",
    title: "Massage",
    short: "Klassisk och medicinsk massage för spända muskler, återhämtning och välmående.",
    what:
      "Massage är en av de äldsta behandlingsformerna och används för att minska muskelspänningar, öka cirkulationen och främja återhämtning. Vi arbetar med både klassisk svensk massage och mer riktad medicinsk massage beroende på dina behov.",
    how:
      "Behandlingen anpassas efter dina besvär – från lättare avslappnande tekniker till djupare triggerpunktsbehandling och tvärfriktion. Massagen kombineras gärna med rådgivning kring tänjningar och rörlighet för bestående effekt.",
    benefits: [
      "Minskar muskelspänningar och stelhet",
      "Förbättrar cirkulation och återhämtning",
      "Lindrar stressrelaterade besvär",
      "Främjar rörlighet och kroppsmedvetenhet",
      "Bra komplement till kiropraktisk behandling",
    ],
  },
  {
    slug: "medicinsk-laser",
    title: "Medicinsk laser",
    short: "Smärtlindrande och läkningsfrämjande lågnivålaser för senor, leder och muskler.",
    what:
      "Medicinsk laser (LLLT – Low Level Laser Therapy) använder ljus av en specifik våglängd för att stimulera cellernas energiproduktion. Det är en skonsam, smärtfri behandling utan biverkningar som accelererar läkningsprocesser i vävnaden.",
    how:
      "Lasersonden placeras direkt mot huden över det område som ska behandlas. En behandling tar några minuter och kan användas vid akuta såväl som långvariga besvär – ofta som komplement till annan behandling.",
    benefits: [
      "Sen- och muskelinflammationer (t.ex. tennisarmbåge, hälsporre)",
      "Artros och ledbesvär",
      "Whiplash och nackbesvär",
      "Sårläkning och postoperativ återhämtning",
      "Idrottsskador i akut och läkande fas",
    ],
  },
  {
    slug: "rehab",
    title: "Rehab",
    short: "Individuellt anpassad rehabilitering som hjälper dig tillbaka till full funktion.",
    what:
      "Rehab handlar om att återställa styrka, rörlighet och funktion efter skada, operation eller långvariga besvär. Vi kartlägger var du står idag, sätter realistiska mål och bygger en plan som möter dig på rätt nivå – oavsett om målet är att kunna gå smärtfritt, återgå till arbete eller tillbaka till idrott på elitnivå.",
    how:
      "Rehabiliteringen kombinerar manuell behandling med ett strukturerat och progressivt träningsprogram. Du får tydliga övningar att göra mellan besöken och vi följer upp regelbundet för att justera belastning och svårighetsgrad. Fokus ligger på kontrollerad progression, kvalitet i rörelsen och förebyggande av återfall.",
    benefits: [
      "Återhämtning efter idrottsskador",
      "Rehab efter operation",
      "Långvariga rygg- och nackbesvär",
      "Återgång till arbete och vardag",
      "Förebygga att besvären kommer tillbaka",
    ],
  },
];

export type PriceItem = { label: string; price: string };

export const priceList: PriceItem[] = [
  { label: "Kiropraktik – Nybesök", price: "750 kr" },
  { label: "Kiropraktik – Återbesök", price: "700 kr" },
  { label: "Massage 30 min", price: "500 kr" },
  { label: "Massage 60 min", price: "900 kr" },
  { label: "Medicinsk laser", price: "400 kr" },
];
