import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/ek-kiropraktik-logo.jpg";
import { addressLine, clinic, emailHref } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-cream/80 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <img src={logoAsset} alt={clinic.name} className="h-20 w-20 object-contain mb-4" />
          <p className="text-sm leading-relaxed text-cream/60 max-w-xs">
            En personlig kiropraktorklinik i Skara för bättre funktion, mindre smärta och ökad
            livskvalitet.
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg text-cream mb-4">Kontakt</h2>
          <ul className="space-y-2 text-sm">
            <li>{addressLine}</li>
            <li>
              <a href={clinic.phone.href} className="hover:text-cream">
                {clinic.phone.display}
              </a>
            </li>
            <li>
              <a href={emailHref} className="hover:text-cream">
                {clinic.email}
              </a>
            </li>
            <li className="pt-2 text-cream/60">{clinic.hours.short}</li>
          </ul>
        </div>
        <div>
          <h2 className="font-display text-lg text-cream mb-4" id="footer-nav-heading">
            Navigera
          </h2>
          <ul className="space-y-2 text-sm" aria-labelledby="footer-nav-heading">
            <li>
              <Link to="/" className="hover:text-cream">
                Hem
              </Link>
            </li>
            <li>
              <Link to="/tjanster" className="hover:text-cream">
                Våra tjänster
              </Link>
            </li>
            <li>
              <Link to="/behandling" className="hover:text-cream">
                Behandling
              </Link>
            </li>
            <li>
              <Link to="/om-oss" className="hover:text-cream">
                Om oss
              </Link>
            </li>
            <li>
              <Link to="/kontakt" className="hover:text-cream">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 py-6 text-center text-xs text-cream/60">
        © {new Date().getFullYear()} {clinic.name}. Alla rättigheter förbehållna.
      </div>
    </footer>
  );
}
