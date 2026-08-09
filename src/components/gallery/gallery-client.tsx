"use client";

import { ProjectCard } from "@/components/gallery/project-gallery";
import {
  cityFilters,
  filterProjects,
  galleryFilters,
  projects,
  type Project,
} from "@/lib/projects";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

export function GalleryClient() {
  const [category, setCategory] = useState<string>("All");
  const [city, setCity] = useState<string>("All");
  const [active, setActive] = useState<Project | null>(null);

  const filtered = useMemo(
    () => filterProjects(category, city, projects),
    [category, city],
  );

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {galleryFilters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setCategory(f)}
            className={cn(
              "min-h-[44px] rounded-full border px-4 text-sm font-semibold",
              category === f
                ? "border-foreground bg-foreground text-white"
                : "border-border bg-surface",
            )}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {cityFilters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setCity(f)}
            className={cn(
              "min-h-[40px] rounded-full border px-3 text-xs font-semibold",
              city === f
                ? "border-cedar bg-cedar text-white"
                : "border-border bg-background",
            )}
          >
            {f === "All" ? "All cities" : f}
          </button>
        ))}
      </div>

      <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((project) => (
          <div key={project.id} className="mb-4 break-inside-avoid">
            <ProjectCard
              project={project}
              onOpen={() => {
                setActive(project);
                track("gallery_project_open", { project: project.id, page: "/gallery" });
              }}
            />
          </div>
        ))}
      </div>

      {!filtered.length ? (
        <p className="mt-10 text-muted">No projects match these filters yet.</p>
      ) : null}

      {active ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-[16px] bg-surface"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <MediaPlaceholder
              src={active.image}
              title={active.title}
              tone={active.imageTone}
              aspect="aspect-[16/10]"
              sizes="100vw"
            />
            <div className="p-6 md:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cedar">
                {active.type} · {active.city}, Ontario
              </p>
              <h3 className="mt-2 text-2xl font-bold">{active.title}</h3>
              <p className="mt-2 text-muted">{active.description}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
