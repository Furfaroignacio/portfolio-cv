import { Container } from "../components/ui/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { profile } from "../data/profile";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-16 bg-neutral-50 dark:bg-neutral-950"
    >
      <Container>
        <SectionTitle title="Contacto" />

        <div className="
          rounded-2xl
          border border-neutral-200
          bg-white
          p-6

          dark:bg-neutral-900
          dark:border-white/10
        ">
          <p className="text-neutral-700 dark:text-neutral-300">
            ¿Querés que armemos algo juntos? Escribime a:
          </p>

          <a
            className="
              mt-3
              inline-block
              font-semibold
              underline underline-offset-4
              text-neutral-900
              hover:text-neutral-700

              dark:text-neutral-100
              dark:hover:text-white
            "
            href={`mailto:${profile.email}`}
          >
            {profile.email}
          </a>
        </div>
      </Container>
    </section>
  );
}
