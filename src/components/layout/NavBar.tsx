import { useEffect, useRef, useState } from "react";
import { Container } from "../ui/Container";
import { profile } from "../../data/profile";

const links = [
  { label: "Sobre mí", href: "#about" },
  { label: "Servicios", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Cerrar al hacer click afuera o al apretar Esc
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!open) return;
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) setOpen(false);
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-14 items-center justify-between gap-3">
          {/* Brand */}
          <a href="#" className="font-semibold tracking-tight whitespace-nowrap">
            {profile.name}
          </a>

          {/* Links desktop (se esconden si no entra) */}
          <nav className="hidden lg:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-neutral-600 hover:text-neutral-900 transition whitespace-nowrap"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2" ref={menuRef}>
            {/* Botón menú para pantallas chicas/medias */}
            <button
  type="button"
  onClick={() => setOpen((v) => !v)}
  aria-expanded={open}
  aria-label="Abrir menú"
  className="
    lg:hidden
    rounded-xl
    border border-neutral-300
    bg-white
    px-3 py-2
    text-sm font-medium text-neutral-900
    hover:bg-neutral-100
    focus:outline-none focus:ring-2 focus:ring-neutral-300
    active:bg-neutral-200
    transition
    whitespace-nowrap
  "
>
  Menú
</button>



            {/* Dropdown */}
            {open && (
              <div className="absolute right-4 top-14 mt-2 w-48 rounded-2xl border border-neutral-200 bg-white p-2 shadow-sm">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            )}

            {/* CTA siempre visible */}
            <a
              className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition whitespace-nowrap"
              href={`mailto:${profile.email}`}
            >
              Contactar
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
