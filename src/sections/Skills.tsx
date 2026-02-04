import { Container } from "../components/ui/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { profile } from "../data/profile";

export function Skills() {
  return (
    <section
      id="skills"
      className="
        py-16
        bg-neutral-50
        dark:bg-neutral-950
      "
    >
      <Container>
        <SectionTitle
          title="Skills"
          subtitle="Tecnologías con las que trabajo (y que puedo usar en proyectos reales)."
        />

        <div className="flex flex-wrap gap-2">
          {profile.skills.map((s) => (
            <span
              key={s}
              className="
                rounded-full
                border border-neutral-200
                bg-white
                px-4 py-2
                text-sm
                text-neutral-700
                transition

                hover:bg-neutral-100

                dark:border-white/10
                dark:bg-neutral-900
                dark:text-neutral-200
                dark:hover:bg-neutral-800
              "
            >
              {s}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
