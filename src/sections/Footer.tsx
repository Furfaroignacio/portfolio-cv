import { Container } from "../components/ui/Container";
import { profile } from "../data/profile"

export function Footer() {
  return (
    <footer className="py-10">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm text-neutral-600">
          <p>© {new Date().getFullYear()} {profile.name}. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a className="hover:text-neutral-900" href={profile.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="hover:text-neutral-900" href={profile.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
