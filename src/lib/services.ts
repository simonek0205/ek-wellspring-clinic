export type Service = {
  slug: string;
  title: string;
  short: string;
  what: string;
  how: string;
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "kiropraktik",
    title: "Kiropraktik – Nybesök & återbesök",
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
];
