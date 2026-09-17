import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/ek-kiropraktik-logo.jpg";
import { clinic } from "@/lib/site";

const links = [
  { to: "/", label: "Hem" },
  { to: "/tjanster", label: "Våra tjänster" },
  { to: "/behandling", label: "Behandling" },
  { to: "/om-oss", label: "Om oss" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

const MOBILE_MENU_ID = "mobile-menu";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Escape closes the menu. Without it the only way out on a keyboard is to
  // tab through every link in it.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-navy text-cream/90 border-b border-cream/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logoAsset} alt="" className="h-12 w-12 object-contain" />
          <span className="font-display text-xl tracking-wide text-cream">{clinic.name}</span>
        </Link>
        <nav
          aria-label="Huvudmeny"
          className="hidden md:flex items-center gap-8 text-sm uppercase tracking-[0.15em]"
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-cream", "aria-current": "page" }}
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
          aria-label={open ? "Stäng meny" : "Öppna meny"}
          aria-expanded={open}
          aria-controls={MOBILE_MENU_ID}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <nav
          id={MOBILE_MENU_ID}
          aria-label="Huvudmeny"
          className="md:hidden border-t border-cream/10 px-6 py-4 flex flex-col gap-4"
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeProps={{ "aria-current": "page" }}
              activeOptions={{ exact: l.to === "/" }}
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
