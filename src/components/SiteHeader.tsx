import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from  "@/assets/ek-kiropraktik-logo.jpg";

const links = [
  { to: "/", label: "Hem" },
  { to: "/tjanster", label: "Våra tjänster" },
  { to: "/behandling", label: "Behandling" },
  { to: "/om-oss", label: "Om oss" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-navy text-cream/90 border-b border-cream/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logoAsset} alt="Ek Kiropraktik" className="h-12 w-12 object-contain" />
          <span className="font-display text-xl tracking-wide text-cream">Ek Kiropraktik</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-[0.15em]">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-cream" }}
              inactiveProps={{ className: "text-cream/60 hover:text-cream transition-colors" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden text-cream"
          onClick={() => setOpen(!open)}
          aria-label="Meny"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-cream/10 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-cream/80 uppercase tracking-[0.15em] text-sm"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
