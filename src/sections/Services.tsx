import { Container } from "../components/ui/Container";
import { SectionTitle } from "../components/ui/SectionTitle";

const services = [
  {
    title: "Landing pages",
    desc: "Páginas de una sola sección enfocadas en conversión, ideales para promocionar servicios, productos o campañas y generar contactos reales.",
  },
  {
    title: "Portfolio / CV online",
    desc: "Sitio personal profesional para mostrar experiencia, proyectos y habilidades, pensado para destacar tu perfil y atraer oportunidades.",
  },
  {
    title: "Web institucional",
    desc: "Sitio claro y ordenado para negocios, con secciones informativas, galería, preguntas frecuentes y contacto.",
  },
  {
    title: "Mantenimiento y mejoras",
    desc: "Actualizaciones, optimización de performance, ajustes visuales, SEO básico y resolución de problemas.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="
        py-16
        bg-neutral-50
        dark:bg-neutral-950
      "
    >
      <Container>
        <SectionTitle title="Servicios" />

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="
                rounded-2xl
                border border-neutral-200
                bg-white
                p-6
                transition-all
                hover:-translate-y-0.5
                hover:shadow-md

                dark:border-white/10
                dark:bg-neutral-900
                dark:hover:shadow-black/40
              "
            >
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                {s.title}
              </h3>

              <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-neutral-600 dark:text-neutral-400">
          ¿Tenés un proyecto en mente?{" "}
          <a
            href="#contact"
            className="
              font-medium
              text-neutral-900
              underline underline-offset-4
              hover:text-neutral-700

              dark:text-neutral-100
              dark:hover:text-white
            "
          >
            Hablemos
          </a>
        </p>
      </Container>
    </section>
  );
}
