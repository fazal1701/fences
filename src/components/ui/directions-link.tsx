"use client";

import { track } from "@/lib/analytics";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { ExternalLink, MapPin } from "lucide-react";

export function DirectionsLink({
  placement = "general",
  href = siteConfig.googleMapsWaterlooUrl,
  className,
  children = "Get Directions",
}: {
  placement?: string;
  href?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 font-semibold transition-colors hover:text-cedar",
        className,
      )}
      onClick={() => track("directions_click", { placement })}
    >
      <MapPin className="h-4 w-4" aria-hidden />
      {children}
      <ExternalLink className="h-3.5 w-3.5 opacity-60" aria-hidden />
    </a>
  );
}
