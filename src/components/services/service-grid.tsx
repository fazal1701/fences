"use client";

import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { homepageServiceCards } from "@/lib/services";
import { track } from "@/lib/analytics";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function ServiceGrid() {
  return (
    <section className="section-y">
      <div className="container-site">
        <div className="max-w-2xl">
          <h2 className="text-[32px] font-bold tracking-tight md:text-[48px]">
            What are you building?
          </h2>
          <p className="mt-4 text-[17px] text-muted md:text-[18px]">
            Explore fencing and outdoor solutions designed around privacy,
            security, style and the way you use your property.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {homepageServiceCards.map((service, i) => (
            <Link
              key={service.slug}
              href={service.href}
              onClick={() =>
                track("service_view", { service: service.slug, placement: "home_grid" })
              }
              className={cn(
                "group relative overflow-hidden rounded-[16px] bg-surface",
                i === 0 && "sm:col-span-2 lg:row-span-2",
                i === 5 && "lg:col-span-2",
              )}
            >
              <div
                className={cn(
                  "overflow-hidden",
                  i === 0 ? "aspect-[4/5] sm:aspect-[5/4] lg:aspect-auto lg:h-full lg:min-h-[520px]" : "aspect-[4/3]",
                )}
              >
                <div className="h-full transition-transform duration-500 ease-out group-hover:scale-[1.03]">
                  <MediaPlaceholder
                    title={service.name}
                    tone={service.imageTone}
                    aspect="h-full min-h-[220px]"
                    className="h-full w-full"
                  />
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent p-5 pt-16">
                <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                <p className="mt-1 text-sm text-white/80">{service.benefit}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-white">
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
