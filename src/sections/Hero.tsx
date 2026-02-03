import { Container } from "../components/ui/Container";
import { profile } from "../data/profile";

export function Hero() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          
          {/* ===== Columna izquierda: texto ===== */}
          <div>
            <p className="text-sm text-neutral-500">{profile.location}</p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              {profile.name}
              <span className="block mt-3 text-2xl text-neutral-500 sm:text-3xl">
                {profile.role}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-neutral-600">
              {profile.headline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="
                  rounded-xl
                  bg-neutral-900
                  px-5 py-3
                  text-sm font-medium
                  text-white
                  shadow-sm
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:shadow-md
                  hover:bg-neutral-800
                "
              >
                Contactarme
              </a>

              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-xl
                  border border-neutral-300
                  bg-white
                  px-5 py-3
                  text-sm font-medium
                  text-neutral-700
                  transition-all
                  duration-200
                  hover:border-neutral-400
                  hover:bg-neutral-50
                  hover:-translate-y-0.5
                  hover:shadow-sm
                "
              >
                GitHub
              </a>

              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-xl
                  border border-neutral-300
                  bg-white
                  px-5 py-3
                  text-sm font-medium
                  text-neutral-700
                  transition-all
                  duration-200
                  hover:border-neutral-400
                  hover:bg-neutral-50
                  hover:-translate-y-0.5
                  hover:shadow-sm
                "
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* ===== Columna derecha: imagen ===== */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/images/fotocarnet.jpeg"
              alt={`Foto de ${profile.name}`}
              className="
                w-64 h-64
                sm:w-72 sm:h-72
                rounded-3xl
                object-cover
                border border-neutral-200
                shadow-sm
              "
              loading="lazy"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}
