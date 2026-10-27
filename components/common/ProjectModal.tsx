"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ExternalLink, Globe, Lock, MoveVertical, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type ProjectModalDetails = {
  eyebrow?: string;
  subtitle?: string;
  previewImage?: string;
  liveUrl?: string;
  aboutTitle?: string;
  aboutDescription?: string;
  features?: string[];
  techTags?: string[];
  role?: string;
};

export type ProjectItem = {
  title: string;
  category?: string;
  description: string;
  tags: string[];
  image: string;
  links: {
    demo: string;
    github: string;
  };
  modalDetails?: ProjectModalDetails;
};

type ProjectModalProps = {
  project: ProjectItem;
  isOpen: boolean;
  onClose: () => void;
};

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const details = project.modalDetails;
  const liveUrl = details?.liveUrl || project.links.demo;
  const previewImage = details?.previewImage || project.image;
  const eyebrow = details?.eyebrow || project.category || "Featured Project";
  const subtitle = details?.subtitle || "Website design & development";
  const aboutTitle = details?.aboutTitle || "About the project";
  const aboutDescription = details?.aboutDescription || project.description;
  const role = details?.role || "Website design & development";
  const techTags = details?.techTags || project.tags;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-5xl rounded-3xl border border-border/80 bg-card text-card-foreground shadow-2xl backdrop-blur-2xl overflow-hidden my-auto flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Title & Quick Actions */}
        <div className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-border/70 bg-card/95 px-6 sm:px-8 py-4 backdrop-blur-xl">
          <div className="space-y-0.5 min-w-0">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-emerald-500">
              {eyebrow}
            </span>
            <h2
              id="modal-project-title"
              className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-foreground truncate"
            >
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground truncate">{subtitle}</p>
          </div>

          <div className="flex shrink-0 items-center gap-2.5">
            {liveUrl && (
              <Button
                size="sm"
                className="hidden sm:inline-flex bg-[#00e575] hover:bg-[#00c966] text-black font-bold text-xs px-4 py-2 rounded-lg shadow-sm cursor-pointer"
                asChild
              >
                <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                  Live Website
                </Link>
              </Button>
            )}
            <button
              onClick={onClose}
              className="h-9 w-9 rounded-full bg-secondary/80 hover:bg-secondary border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto">
          {/* Section 1: Browser Showcase Window (Images 1 & 2) */}
          <div className="p-4 sm:p-6 md:p-8 bg-muted/20">
            <div className="rounded-2xl border border-border/80 bg-background shadow-xl overflow-hidden">
              {/* Browser Mockup Chrome Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border/60 bg-muted/40">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>

                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-background/90 border border-border/50 text-xs text-muted-foreground font-mono truncate max-w-[200px] sm:max-w-xs md:max-w-md">
                  <Lock className="h-3 w-3 text-emerald-500 shrink-0" />
                  <span className="truncate">{liveUrl || "https://example.com"}</span>
                </div>

                <div className="w-12 text-right">
                  <Globe className="h-3.5 w-3.5 text-muted-foreground ml-auto" />
                </div>
              </div>

              {/* Scrollable Full-Page Website Preview */}
              <div className="relative w-full h-[360px] sm:h-[440px] md:h-[500px] lg:h-[560px] overflow-y-auto bg-muted/30 scroll-smooth">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={previewImage}
                  alt={`${project.title} full page preview`}
                  className="w-full h-auto block select-none"
                  loading="lazy"
                />

                {/* Sticky Hint Badge */}
                <div className="sticky bottom-3 left-1/2 -translate-x-1/2 mx-auto w-fit px-4 py-1.5 rounded-full bg-background/90 backdrop-blur-md border border-border/80 text-[11px] sm:text-xs font-medium text-foreground/80 shadow-lg pointer-events-none flex items-center gap-2">
                  <MoveVertical className="h-3.5 w-3.5 text-emerald-500 animate-bounce" />
                  <span>Scroll inside window to view full website</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Case Study & Overview (Image 3) */}
          <div className="p-6 sm:p-8 md:p-10 border-t border-border/60 bg-card space-y-8">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Left Column: About the Project Description & Features */}
              <div className="lg:col-span-2 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-500">
                    Project Overview
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                    {aboutTitle}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed pt-2">
                    {aboutDescription}
                  </p>
                </div>

                {/* Highlights / Features List */}
                {details?.features && details.features.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                      Key Highlights & Features
                    </h4>
                    <ul className="space-y-2.5">
                      {details.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Right Column: Project Meta & Tags (Image 3 style) */}
              <div className="space-y-6 lg:border-l lg:border-border/60 lg:pl-8">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Project Type
                  </span>
                  <p className="text-sm font-semibold text-foreground">{role}</p>
                </div>

                {/* Tag Pills */}
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Technologies & Skills
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {techTags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center text-xs font-medium px-3 py-1 rounded-full bg-secondary/80 text-secondary-foreground border border-border/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Call to Action Button */}
                {liveUrl && (
                  <div className="pt-4">
                    <Button
                      size="lg"
                      className="w-full bg-[#00e575] hover:bg-[#00c966] text-black font-extrabold text-sm rounded-xl shadow-[0_0_20px_rgba(0,229,117,0.3)] transition-all hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
                      asChild
                    >
                      <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                        <span>Visit Live Website</span>
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
