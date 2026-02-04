import { Container } from "../components/ui/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { projects } from "../data/profile";

export function Projects() {
  return (
    <section id="projects" className="py-16 bg-white dark:bg-neutral-950">
      <Container>
        <SectionTitle
          title="Proyectos"
          subtitle="Los proyectos en los que he trabajado recientemente."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                rounded-2xl
                border border-neutral-200
                bg-white
                p-6
                transition
                hover:-translate-y-0.5
                hover:shadow-sm

                dark:border-white/10
                dark:bg-neutral-900
                dark:hover:shadow-black/40
              "
            >
              {p.image && (
                <div className="mb-4 overflow-hidden rounded-xl border border-neutral-200 dark:border-white/10">
                  <img
                    src={p.image}
                    alt={`Preview del proyecto ${p.title}`}
                    className="
                      h-40 w-full
                      object-cover object-top
                      transition-transform duration-300
                      group-hover:scale-[1.03]
                    "
                    loading="lazy"
                  />
                </div>
              )}

              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                {p.title}
                <span className="ml-1 text-sm opacity-0 transition group-hover:opacity-60 dark:group-hover:opacity-70">
                  ↗
                </span>
              </h3>

              <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                {p.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="
                      rounded-full
                      bg-neutral-100
                      px-3 py-1
                      text-xs
                      text-neutral-700

                      dark:bg-white/10
                      dark:text-neutral-200
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
