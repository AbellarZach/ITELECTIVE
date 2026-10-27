import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

type ProjectCardProps = {
  project: {
    title: string;
    category?: string;
    description: string;
    tags: string[];
    image: string;
    links: {
      demo: string;
      github: string;
    };
  };
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/30">
      <div className="relative aspect-video overflow-hidden bg-muted">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {project.category && (
          <span className="absolute top-3 right-3 rounded-full bg-background/80 backdrop-blur-sm px-2.5 py-1 text-xs font-medium border border-border/60">
            {project.category}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 space-y-4">
        <div className="space-y-2">
          <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-2 pt-4 border-t border-border/60">
          <Button size="sm" className="flex-1" asChild>
            <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2 shrink-0" />
              Code
            </Link>
          </Button>
          <Button variant="outline" size="sm" className="flex-1" asChild>
            <Link href={project.links.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2 shrink-0" />
              Demo
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
