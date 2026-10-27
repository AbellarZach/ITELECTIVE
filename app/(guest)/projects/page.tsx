import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProjectCard } from "@/components/common/ProjectCard";
import { PROJECTS } from "@/constants/project";

export default function ProjectsPage() {
  return (
    <Section>
      <div className="space-y-12">
        <SectionHeading
          title="Projects"
          description="A collection of projects I've worked on recently."
          eyebrow="Portfolio"
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
}
