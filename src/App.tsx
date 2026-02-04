import { Navbar } from "./components/layout/NavBar";
import { Footer } from "./sections/Footer";

import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { Services } from "./sections/Services";


export default function App() {
  return (
      <div className="min-h-dvh bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">

        <Navbar />
        <main className="w-full">
          <Hero />
          <About />
          <Services />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
  );
}
