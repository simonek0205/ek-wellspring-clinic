import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-clinic.jpg";
import logoAsset from "@/assets/logo.asset.json";
import chiroHands from "@/assets/chiro-hands.jpg";
import massageRoom from "@/assets/massage-hands.jpg";
import spineIllustration from "@/assets/spine-illustration.jpg";
import { services, priceList } from "@/lib/services";
import { ArrowRight, Leaf, Activity, ShieldCheck, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ek Kiropraktik – Kiropraktor i Skara" },
      { name: "description", content: "Personlig kiropraktorklinik i Skara. Kiropraktik, massage, medicinsk laser och rehab." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy text-cream overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-25" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/90 to-navy-deep" />
        </div>
        {/* Decorative shapes */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 right-0 w-[28rem] h-[28rem] rounded-full bg-cream/5 blur-3xl" />
        <svg className="pointer-events-none absolute top-10 right-10 w-32 h-32 text-gold/30" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          {Array.from({ length: 10 }).map((_, i) => (
            <circle key={i} cx="50" cy="50" r={5 + i * 4.5} />
          ))}
        </svg>

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-36 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-cream/60 mb-5">Kiropraktor i Skara</p>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-cream">
              Bättre funktion.<br/>Mindre smärta.<br/><em className="text-gold not-italic">Ökad livskvalitet.</em>
            </h1>
            <p className="mt-6 text-cream/75 text-lg max-w-lg leading-relaxed">
              Hos Ek Kiropraktik möts du av personligt engagemang och en behandling som är anpassad efter just dina behov.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/kontakt" className="inline-flex items-center gap-2 bg-cream text-navy px-7 py-3.5 rounded-sm font-medium hover:bg-gold transition-colors">
                Boka tid <ArrowRight size={18} />
              </Link>
              <Link to="/tjanster" className="inline-flex items-center gap-2 border border-cream/30 text-cream px-7 py-3.5 rounded-sm hover:bg-cream/10 transition-colors">
                Våra tjänster
              </Link>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <img src={logoAsset.url} alt="Ek Kiropraktik logotyp" className="w-80 h-80 object-contain opacity-95" />
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="relative py-24 bg-background overflow-hidden">
        <svg className="pointer-events-none absolute -right-20 top-20 w-72 h-72 text-navy/5" viewBox="0 0 200 200" fill="currentColor">
          <path d="M40,-65C52,-58,62,-47,69,-34C76,-21,80,-7,77,7C74,21,64,34,53,46C42,58,30,67,16,71C2,75,-13,73,-26,67C-39,61,-50,50,-58,37C-66,24,-71,9,-69,-6C-67,-21,-58,-35,-47,-46C-36,-57,-23,-65,-7,-67C9,-69,28,-72,40,-65Z" transform="translate(100 100)" />
        </svg>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-14">
            <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">Våra tjänster</p>
            <h2 className="font-display text-4xl md:text-5xl text-navy">Behandling anpassad efter dig</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link
                key={s.slug}
                to="/tjanster/$slug"
                params={{ slug: s.slug }}
                className="group bg-card p-8 border border-border hover:border-navy hover:-translate-y-1 transition-all flex flex-col"
              >
                <h3 className="font-display text-2xl text-navy mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{s.short}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm text-navy group-hover:gap-3 transition-all">
                  Läs mer <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative py-24 bg-navy text-cream overflow-hidden">
        <svg className="pointer-events-none absolute -left-16 -top-16 w-80 h-80 text-cream/5" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.4">
          {Array.from({ length: 14 }).map((_, i) => (
            <circle key={i} cx="50" cy="50" r={3 + i * 3.4} />
          ))}
        </svg>
        <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="text-gold" size={18} />
            <p className="uppercase tracking-[0.3em] text-xs text-gold">Prislista</p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl mb-12">Tydliga priser, ingen överraskning</h2>

          <ul className="divide-y divide-cream/15 border-y border-cream/15">
            {priceList.map((p) => (
              <li key={p.label} className="flex items-baseline justify-between gap-6 py-5">
                <span className="font-display text-2xl md:text-3xl text-cream">{p.label}</span>
                <span className="flex-1 mx-4 border-b border-dotted border-cream/25 translate-y-[-4px]" />
                <span className="font-display text-2xl md:text-3xl text-gold whitespace-nowrap">{p.price}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-cream/60 text-sm">
            Medicinsk laser ingår som komplement vid kiropraktik nybesök/återbesök vid behov. Rehab ingår i samtliga av våra tjänster och är alltid individanpassad för just dina behov.
          </p>


          {/* Decorative spine illustration */}
          <img
            src={spineIllustration}
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={1024}
            height={1280}
            className="pointer-events-none absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-40 md:w-56 opacity-30 mix-blend-screen hidden sm:block"
          />
        </div>
      </section>

      {/* Image feature band */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-gold/40 hidden md:block" />
            <img
              src={chiroHands}
              alt="Kiropraktor utför en behandling"
              loading="lazy"
              width={1280}
              height={896}
              className="relative w-full h-[28rem] object-cover"
            />
          </div>
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">Hantverket</p>
            <h2 className="font-display text-4xl md:text-5xl text-navy mb-8">Så går ett besök till</h2>
            <ol className="space-y-6">
              {[
                { t: "Kontakt & tidsbokning", d: "Du hör av dig via telefon eller mail så hittar vi en tid som passar." },
                { t: "Anamnes", d: "Vi tar din berättelse – sjukhistoria, besvär, vardag och målbild." },
                { t: "Behandlingsplan", d: "Tillsammans skapar vi en plan som är anpassad efter just dina behov." },
                { t: "Behandling", d: "Vi behandlar med de metoder som är lämpliga – kiropraktik, massage, laser eller rehab." },
              ].map((step, i) => (
                <li key={step.t} className="flex gap-5">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-navy text-cream font-display flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div className="pt-1">
                    <h3 className="font-display text-xl text-navy">{step.t}</h3>
                    <p className="text-muted-foreground mt-1 leading-relaxed">{step.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

        </div>
      </section>

      {/* Treatment focus */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-14">
            <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">Behandling</p>
            <h2 className="font-display text-4xl md:text-5xl text-navy">Vi hjälper dig vidare</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: "Vanliga besvär", text: "Rygg, nacke, huvudvärk och ischias – vi hjälper dig identifiera orsaken.", to: "/behandling" as const, hash: "vanliga-besvar" },
              { icon: Activity, title: "Idrottare", text: "Maximera prestationen och minimera skaderisken med riktad behandling.", to: "/behandling" as const, hash: "idrottare" },
              { icon: ShieldCheck, title: "Förebyggande", text: "Regelbunden vård som håller kroppen i balans över tid.", to: "/behandling" as const, hash: "forebyggande" },
            ].map((b) => (
              <Link key={b.title} to={b.to} hash={b.hash} className="bg-card p-8 border-l-2 border-gold hover:shadow-lg transition-shadow">
                <b.icon className="text-navy mb-4" size={28} />
                <h3 className="font-display text-2xl text-navy mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <img
          src={massageRoom}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1280}
          height={896}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/80 to-navy/70" />
        <div className="relative mx-auto max-w-3xl px-6 text-center text-cream">
          <h2 className="font-display text-4xl md:text-5xl">Redo att ta steget?</h2>
          <p className="mt-5 text-cream/75 leading-relaxed">
            Boka tid via telefon eller mail – vi hjälper dig hitta en tid som passar.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a href="tel:0793103546" className="bg-cream text-navy px-7 py-3.5 rounded-sm font-medium hover:bg-gold transition-colors">
              0793-10 35 46
            </a>
            <a href="mailto:info@ekkiropraktik.se" className="border border-cream/30 text-cream px-7 py-3.5 rounded-sm hover:bg-cream/10 transition-colors">
              info@ekkiropraktik.se
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
