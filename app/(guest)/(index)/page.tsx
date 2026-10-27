import { Hero } from "@/components/features/home/Hero";
import { AboutHero } from "@/components/features/About/AboutHero";
import { AboutMe } from "@/components/features/About/AboutMe";
import { Experience } from "@/components/features/About/Experience";
import { Projects } from "@/components/features/home/Projects";
import { Skills } from "@/components/features/home/Skills";
import { ContactForm } from "@/components/features/contact/ContactForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div id="about" className="scroll-mt-20">
        <AboutHero />
        <AboutMe />
        <Experience />
      </div>
      <Projects />
      <Skills />
      <ContactForm />
    </>
  );
}
