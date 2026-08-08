"use client";

import { track } from "@/lib/analytics";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  placement: string;
  className?: string;
  showIcon?: boolean;
  children?: ReactNode;
  label?: string;
};

export function PhoneLink({
  placement,
  className,
  showIcon = true,
  children,
  label,
}: Props) {
  return (
    <a
      href={siteConfig.phoneHref}
      className={cn(
        "inline-flex items-center gap-2 font-semibold transition-colors hover:text-cedar",
        className,
      )}
      onClick={() =>
        track("phone_click", {
          placement,
          page: typeof window !== "undefined" ? window.location.pathname : "",
        })
      }
      aria-label={label ?? `Call Premier at ${siteConfig.phoneDisplay}`}
    >
      {showIcon ? <Phone className="h-4 w-4 shrink-0" aria-hidden /> : null}
      {children ?? siteConfig.phoneDisplay}
    </a>
  );
}
