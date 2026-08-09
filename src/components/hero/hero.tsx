"use client";

import { GoogleBusinessLink } from "@/components/ui/google-business-link";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { PhoneLink } from "@/components/ui/phone-link";
import { siteConfig } from "@/lib/site-config";
import { Check, Phone, Star } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[72vh] overflow-hidden md:min-h-[82vh] lg:min-h-[88vh]">
      <div className="absolute inset-0">
        <MediaPlaceholder
          src="/images/hero/premier-fence-hero.jpg"
          title="Residential fencing & outdoor living"
          aspect="h-full min-h-[72vh] md:min-h-[82vh] lg:min-h-[88vh]"
          className="h-full w-full"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25" />
      </div>

      <div className="container-site relative flex min-h-[72vh] items-end pb-14 pt-28 md:min-h-[82vh] md:pb-20 lg:min-h-[88vh] lg:items-center lg:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-3xl text-white"
        >
          <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-white/75">
            Fencing · Decks · Outdoor Living
          </p>
          <h1 className="mt-4 text-[40px] font-bold leading-[1.0] tracking-tight sm:text-[48px] lg:text-[68px]">
            Better boundaries.
            <br />
            Better backyards.
          </h1>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-white/85 md:text-[18px]">
            Custom fences, decks, gates and outdoor spaces professionally
            installed throughout {siteConfig.serviceRegion}.
          </p>

          <div className="mt-8">
            <PhoneLink
              placement="hero"
              className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-[12px] bg-white px-8 text-base font-semibold text-foreground hover:bg-[#f7f5ef] hover:text-foreground"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {siteConfig.phoneDisplay}
            </PhoneLink>
          </div>

          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/85">
            {[
              "Residential & Commercial",
              "Free Project Consultation",
              "Toronto Service",
            ].map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-[#c8d5c4]" aria-hidden />
                {item}
              </li>
            ))}
          </ul>

          <GoogleBusinessLink
            placement="hero"
            className="mt-8 inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white hover:bg-white/15 hover:text-white"
          >
            <span className="inline-flex items-center gap-1 text-amber-300" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </span>
            <span>
              {siteConfig.googleRating && siteConfig.googleReviewCount
                ? `${siteConfig.googleRating} from ${siteConfig.googleReviewCount} Google reviews`
                : "See what homeowners are saying — Read our reviews on Google"}
            </span>
          </GoogleBusinessLink>
        </motion.div>
      </div>
    </section>
  );
}
