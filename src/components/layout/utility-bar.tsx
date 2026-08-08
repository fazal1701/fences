"use client";

import { GoogleBusinessLink } from "@/components/ui/google-business-link";
import { DirectionsLink } from "@/components/ui/directions-link";
import { PhoneLink } from "@/components/ui/phone-link";
import { siteConfig } from "@/lib/site-config";

export function UtilityBar() {
  return (
    <div className="hidden border-b border-border/70 bg-[#efebe3] lg:block">
      <div className="container-site flex h-9 items-center justify-between text-[12px] font-medium text-foreground/80">
        <p>Serving {siteConfig.serviceRegion}</p>
        <div className="flex items-center gap-5">
          <GoogleBusinessLink placement="utility_bar" className="text-[12px] font-medium">
            Google Reviews
          </GoogleBusinessLink>
          <DirectionsLink placement="utility_bar" className="text-[12px] font-medium">
            Directions
          </DirectionsLink>
          <PhoneLink placement="utility_bar" className="text-[12px]" />
        </div>
      </div>
    </div>
  );
}
