"use client";

import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { PhoneLink } from "@/components/ui/phone-link";
import { siteConfig } from "@/lib/site-config";
import { Phone } from "lucide-react";

const benefits = [
  {
    title: "Built for Ontario conditions",
    body: "Installation methods should account for local weather and ground conditions.",
  },
  {
    title: "Designed around your property",
    body: "Every site has different grades, layouts, access requirements and priorities.",
  },
  {
    title: "Residential & commercial experience",
    body: "Solutions for homeowners, businesses, institutions and larger properties.",
  },
  {
    title: "Clear project planning",
    body: "Understand materials, layout and installation considerations before construction begins.",
  },
];

export function WhyPremier() {
  return (
    <section className="section-y bg-surface">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <MediaPlaceholder
          src="/images/projects/craftsmanship.jpg"
          title="Craftsmanship detail"
          aspect="aspect-[4/5] lg:aspect-[5/6]"
          className="rounded-[16px]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div>
          <h2 className="text-[32px] font-bold tracking-tight md:text-[48px]">
            Details matter when you&apos;re building something for years.
          </h2>
          <div className="mt-8 space-y-6">
            {benefits.map((b) => (
              <div key={b.title} className="border-l-2 border-cedar/70 pl-4">
                <h3 className="text-lg font-semibold">{b.title}</h3>
                <p className="mt-1 text-[16px] text-muted md:text-[17px]">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
          <PhoneLink
            placement="why_premier"
            className="mt-8 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-[12px] bg-forest px-6 font-semibold text-white hover:text-white"
          >
            <Phone className="h-4 w-4" />
            Call {siteConfig.phoneDisplay}
          </PhoneLink>
        </div>
      </div>
    </section>
  );
}
