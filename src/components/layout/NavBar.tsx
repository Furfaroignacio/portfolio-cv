import { useEffect, useRef, useState } from "react";
import { Container } from "../ui/Container";
import { profile } from "../../data/profile";
import { useTheme } from "../../theme/useTheme";

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

  const { isDark, toggle } = useTheme();

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
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-neutral-950/70">
      <Container>
        <div className="flex h-14 items-center justify-between gap-3">
          {/* Brand */}
          <a
            href="#"
            className="font-semibold tracking-tight whitespace-nowrap text-neutral-900 dark:text-neutral-100"
          >
            {profile.name}
          </a>

          {/* Links desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-neutral-600 hover:text-neutral-900 transition whitespace-nowrap dark:text-neutral-300 dark:hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 relative" ref={menuRef}>
            {/* Toggle tema */}
            <button
              type="button"
              onClick={toggle}
              aria-label="Cambiar tema"
              className="
                rounded-xl
                border border-neutral-300
                bg-white
                px-3 py-2
                text-sm font-medium text-neutral-900
                hover:bg-neutral-100
                focus:outline-none focus:ring-2 focus:ring-neutral-300
                transition
                dark:border-white/10
                dark:bg-neutral-900
                dark:text-neutral-100
                dark:hover:bg-neutral-800
                dark:focus:ring-white/20
              "
            >
              {isDark ? "🌙" : "☀️"}
            </button>

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
                dark:border-white/10
                dark:bg-neutral-900
                dark:text-neutral-100
                dark:hover:bg-neutral-800
                dark:active:bg-neutral-700
                dark:focus:ring-white/20
              "
            >
              Menú
            </button>

            {/* Dropdown */}
            {open && (
              <div className="absolute right-0 top-14 mt-2 w-56 rounded-2xl border border-neutral-200 bg-white p-2 shadow-sm dark:border-white/10 dark:bg-neutral-900">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 dark:text-neutral-200 dark:hover:bg-white/10"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            )}

            {/* CTA siempre visible */}
            <a
              className="
                rounded-xl
                bg-neutral-900
                px-4 py-2
                text-sm font-medium
                text-white
                hover:bg-neutral-800
                transition
                whitespace-nowrap
                dark:bg-white
                dark:text-neutral-900
                dark:hover:bg-neutral-200
              "
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
