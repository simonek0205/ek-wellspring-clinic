import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-clinic.jpg";
import logoAsset from "@/assets/logo.asset.json";
import { services } from "@/lib/services";
import { ArrowRight, Leaf, Activity, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ek Kiropraktik – Kiropraktor i Skara" },
      { name: "description", content: "Personlig kiropraktorklinik i Skara. Kiropraktik, massage och medicinsk laser." },
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
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-14">
            <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">Våra tjänster</p>
            <h2 className="font-display text-4xl md:text-5xl text-navy">Behandling anpassad efter dig</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.slug}
                to="/tjanster/$slug"
                params={{ slug: s.slug }}
                className="group bg-card p-8 border border-border hover:border-navy transition-colors flex flex-col"
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

      {/* Treatment focus */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-14">
            <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">Behandling</p>
            <h2 className="font-display text-4xl md:text-5xl text-navy">Vi hjälper dig vidare</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: "Vanliga besvär", text: "Rygg, nacke, huvudvärk och ischias – vi hjälper dig identifiera orsaken.", to: "/behandling#vanliga-besvar" },
              { icon: Activity, title: "Idrottare", text: "Maximera prestationen och minimera skaderisken med riktad behandling.", to: "/behandling#idrottare" },
              { icon: ShieldCheck, title: "Förebyggande", text: "Regelbunden vård som håller kroppen i balans över tid.", to: "/behandling#forebyggande" },
            ].map((b) => (
              <Link key={b.title} to={b.to} className="bg-card p-8 border-l-2 border-gold hover:shadow-lg transition-shadow">
                <b.icon className="text-navy mb-4" size={28} />
                <h3 className="font-display text-2xl text-navy mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy text-cream">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl">Redo att ta steget?</h2>
          <p className="mt-5 text-cream/70 leading-relaxed">
            Boka tid via telefon eller mail – vi hjälper dig hitta en tid som passar.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a href="tel:0793103546" className="bg-cream text-navy px-7 py-3.5 rounded-sm font-medium hover:bg-gold transition-colors">
              0793-10 35 46
            </a>
            <a href="mailto:info@ekkiropraktik.se" className="border border-cream/30 px-7 py-3.5 rounded-sm hover:bg-cream/10 transition-colors">
              info@ekkiropraktik.se
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
