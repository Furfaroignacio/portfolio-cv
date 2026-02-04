import { Container } from "../components/ui/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { profile } from "../data/profile";

export function About() {
  return (
    <section
      id="about"
      className="
        py-16
        bg-white
        dark:bg-neutral-950
      "
    >
      <Container>
        <SectionTitle title="Sobre mí" />

        <p className="max-w-3xl leading-relaxed text-neutral-700 dark:bg-neutral-950">
          {profile.about}
        </p>
      </Container>
    </section>
  );
}
