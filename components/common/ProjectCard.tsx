"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink, View } from "lucide-react";
import { ProjectModal, ProjectItem } from "@/components/common/ProjectModal";

type ProjectCardProps = {
  project: ProjectItem;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const imageSrc =
    project.image.startsWith("http://") ||
    project.image.startsWith("https://") ||
    project.image.startsWith("/")
      ? project.image
      : `/${project.image}`;

  return (
    <>
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/30">
        <div
          className="relative aspect-video overflow-hidden bg-muted cursor-pointer"
          onClick={() => setIsModalOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsModalOpen(true);
            }
          }}
          aria-label={`View details for ${project.title}`}
        >
          <Image
            src={imageSrc}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="px-3.5 py-1.5 rounded-full bg-background/90 text-foreground font-semibold text-xs shadow-md border border-border/70 flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <View className="h-3.5 w-3.5 text-emerald-500" />
              Quick View
            </span>
          </div>
          {project.category && (
            <span className="absolute top-3 right-3 rounded-full bg-background/80 backdrop-blur-sm px-2.5 py-1 text-xs font-medium border border-border/60">
              {project.category}
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col p-5 space-y-4">
          <div className="space-y-2">
            <h3
              className="font-bold text-lg leading-tight group-hover:text-primary transition-colors cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
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
            <Button
              size="sm"
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-medium cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <View className="h-4 w-4 mr-2 shrink-0" />
              View
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

      {/* Project Modal Dialog */}
      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
