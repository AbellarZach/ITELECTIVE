import { Hero } from "@/components/features/home/Hero";
import { AboutHero } from "@/components/features/About/AboutHero";
import { Projects } from "@/components/features/home/Projects";
import { Skills } from "@/components/features/home/Skills";
import { ContactForm } from "@/components/features/contact/ContactForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutHero />
      <Projects />
      <Skills />
      <ContactForm />
    </>
  );
}
