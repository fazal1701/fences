"use client";

import { ButtonLink } from "@/components/ui/button-link";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { fenceSelectorMap, getServiceBySlug } from "@/lib/services";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

const choices = Object.keys(fenceSelectorMap);

export function FenceSelector() {
  const [selected, setSelected] = useState<string | null>(null);

  const recommendations = useMemo(() => {
    if (!selected) return [];
    return (fenceSelectorMap[selected] || [])
      .map((slug) => getServiceBySlug(slug))
      .filter(Boolean);
  }, [selected]);

  return (
    <section className="section-y bg-surface">
      <div className="container-site">
        <div className="max-w-2xl">
          <h2 className="text-[32px] font-bold tracking-tight md:text-[48px]">
            Not sure which fence is right for you?
          </h2>
          <p className="mt-4 text-[17px] text-muted md:text-[18px]">
            Start with what matters most.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {choices.map((choice) => (
            <button
              key={choice}
              type="button"
              onClick={() => setSelected(choice)}
              className={cn(
                "min-h-[48px] rounded-full border px-5 text-sm font-semibold transition-colors",
                selected === choice
                  ? "border-foreground bg-foreground text-white"
                  : "border-border bg-background text-foreground hover:border-foreground/30",
              )}
            >
              {choice}
            </button>
          ))}
        </div>

        {selected ? (
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {recommendations.map((service) =>
              service ? (
                <Link
                  key={service.slug}
                  href={service.href}
                  className="group overflow-hidden rounded-[16px] border border-border bg-background"
                >
                  <MediaPlaceholder
                    src={service.image}
                    title={service.name}
                    tone={service.imageTone}
                    aspect="aspect-[16/10]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="p-5">
                    <h3 className="text-lg font-semibold">{service.name}</h3>
                    <p className="mt-1 text-sm text-muted">{service.benefit}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold">
                      Explore
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ) : null,
            )}
          </div>
        ) : null}

        <div className="mt-8">
          <ButtonLink href="/quote" variant="forest">
            Get a recommendation from our team
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
