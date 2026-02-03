import { Container } from "../components/ui/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { projects } from "../data/profile";

export function Projects() {
  return (
    <section id="projects" className="py-16">
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
              className="rounded-2xl border border-neutral-200 p-6 hover:shadow-sm transition bg-white"
>
  {p.image && (
  <div className="mb-4 overflow-hidden rounded-xl border border-neutral-200">
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



              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-neutral-600">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700"
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
