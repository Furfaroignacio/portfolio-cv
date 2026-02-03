import { Container } from "../components/ui/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { profile } from "../data/profile";

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-neutral-50">
      <Container>
        <SectionTitle
          title="Contacto"
          
        />

        <div className="rounded-2xl border border-neutral-200 bg-white p-6">
          <p className="text-neutral-700">
            ¿Querés que armemos algo juntos? Escribime a:
          </p>

          <a
            className="mt-3 inline-block text-neutral-900 font-semibold underline underline-offset-4"
            href={`mailto:${profile.email}`}
          >
            {profile.email}
          </a>
        </div>
      </Container>
    </section>
  );
}
