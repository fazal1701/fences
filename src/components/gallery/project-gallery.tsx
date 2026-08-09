"use client";

import { ButtonLink } from "@/components/ui/button-link";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { track } from "@/lib/analytics";
import { projects, type Project } from "@/lib/projects";
import { cn } from "@/lib/utils";
import { ArrowRight, X } from "lucide-react";
import { useEffect, useState } from "react";

export function ProjectGallery({
  items = projects.slice(0, 6),
  showViewAll = true,
  heading = "Built around real homes.",
  subheading = "Explore fencing, decking and outdoor spaces installed throughout Toronto.",
}: {
  items?: Project[];
  showViewAll?: boolean;
  heading?: string;
  subheading?: string;
}) {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section className="section-y">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="text-[32px] font-bold tracking-tight md:text-[48px]">
              {heading}
            </h2>
            <p className="mt-4 text-[17px] text-muted md:text-[18px]">
              {subheading}
            </p>
          </div>
          {showViewAll ? (
            <ButtonLink href="/gallery" variant="secondary">
              View All Projects
            </ButtonLink>
          ) : null}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={() => {
                setActive(project);
                track("gallery_project_open", { project: project.id });
              }}
            />
          ))}
        </div>
      </div>

      {active ? (
        <ProjectLightbox project={active} onClose={() => setActive(null)} />
      ) : null}
    </section>
  );
}

export function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={cn(
        "group relative overflow-hidden rounded-[16px] text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest",
        project.orientation === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]",
      )}
    >
      <div className="h-full transition-transform duration-500 group-hover:scale-[1.03] group-focus-visible:scale-[1.03]">
        <MediaPlaceholder
          src={project.image}
          title={project.title}
          tone={project.imageTone}
          aspect="h-full"
          className="h-full w-full"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
          {project.type} · {project.city}, ON
        </p>
        <p className="mt-1 text-lg font-semibold">{project.material}</p>
        <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100 group-focus-visible:translate-x-1 group-focus-visible:opacity-100">
          View Project <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </button>
  );
}

function ProjectLightbox({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-[16px] bg-surface"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        <MediaPlaceholder
          src={project.image}
          title={project.title}
          tone={project.imageTone}
          aspect="aspect-[16/10]"
          sizes="100vw"
        />
        <div className="p-6 md:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cedar">
            {project.type} · {project.city}, Ontario
          </p>
          <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>
          <p className="mt-2 text-muted">{project.description}</p>
          <p className="mt-2 text-sm font-medium">{project.material}</p>
        </div>
      </div>
    </div>
  );
}
