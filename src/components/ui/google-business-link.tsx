"use client";

import { track } from "@/lib/analytics";
import { hasGoogleBusinessUrl, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
  showIcon?: boolean;
  placement?: string;
};

export function GoogleBusinessLink({
  children,
  className,
  showIcon = false,
  placement = "general",
}: Props) {
  const href = hasGoogleBusinessUrl()
    ? siteConfig.googleBusinessUrl
    : siteConfig.googleMapsUrl;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 font-semibold transition-colors hover:text-cedar",
        className,
      )}
      onClick={() => track("google_reviews_click", { placement })}
    >
      {children ?? "Read Our Google Reviews"}
      {showIcon ? <ExternalLink className="h-3.5 w-3.5" aria-hidden /> : null}
    </a>
  );
}
