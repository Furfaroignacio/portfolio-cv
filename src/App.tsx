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
      <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50 text-neutral-900 antialiased">

        <Navbar />
        <main>
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
