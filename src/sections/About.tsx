import { Container } from "../components/ui/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { profile } from "../data/profile";

export function About() {
  return (
    <section id="about" className="py-16">
      <Container>
        <SectionTitle
          title="Sobre mí"
          
        />
        <p className="max-w-3xl text-neutral-700 leading-relaxed">
          {profile.about}
        </p>
      </Container>
    </section>
  );
}
