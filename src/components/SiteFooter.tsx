import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/logo.asset.json";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-cream/80 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <img src={logoAsset.url} alt="Ek Kiropraktik" className="h-20 w-20 object-contain mb-4" />
          <p className="text-sm leading-relaxed text-cream/60 max-w-xs">
            En personlig kiropraktorklinik i Skara för bättre funktion, mindre smärta och ökad livskvalitet.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg text-cream mb-4">Kontakt</h4>
          <ul className="space-y-2 text-sm">
            <li>S:ta Annagatan 3, 532 32 Skara</li>
            <li><a href="tel:0793103546" className="hover:text-cream">0793-10 35 46</a></li>
            <li><a href="mailto:info@ekkiropraktik.se" className="hover:text-cream">info@ekkiropraktik.se</a></li>
            <li className="pt-2 text-cream/60">Mån–Fre 08:00–16:00</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg text-cream mb-4">Navigera</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/tjanster" className="hover:text-cream">Våra tjänster</Link></li>
            <li><Link to="/behandling" className="hover:text-cream">Behandling</Link></li>
            <li><Link to="/om-oss" className="hover:text-cream">Om oss</Link></li>
            <li><Link to="/kontakt" className="hover:text-cream">Kontakt</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 py-6 text-center text-xs text-cream/40">
        © {new Date().getFullYear()} Ek Kiropraktik. Alla rättigheter förbehållna.
      </div>
    </footer>
  );
}
