import { ButtonLink } from "@/components/ui/button-link";
import { DirectionsLink } from "@/components/ui/directions-link";
import { PhoneLink } from "@/components/ui/phone-link";
import { serviceAreas } from "@/lib/locations";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";

export function ServiceAreaSection() {
  return (
    <section className="section-y">
      <div className="container-site">
        <div className="max-w-2xl">
          <h2 className="text-[32px] font-bold tracking-tight md:text-[48px]">
            Building across Southern Ontario.
          </h2>
          <p className="mt-4 text-[17px] text-muted md:text-[18px]">
            Premier works with homeowners and businesses throughout
            Kitchener-Waterloo, London and surrounding communities.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {serviceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/service-areas/${area.slug}`}
              className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold hover:border-foreground/30"
            >
              {area.name}
            </Link>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[16px] border border-border bg-[#dfe3dc]">
            <div className="relative aspect-[16/11]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_40%,#354a3b_0%,transparent_45%),radial-gradient(circle_at_70%_65%,#a7663b33_0%,transparent_40%),linear-gradient(135deg,#e8ebe4,#cfd6c8)]" />
              <div className="absolute left-[32%] top-[38%] h-3 w-3 rounded-full bg-cedar ring-4 ring-white/70" />
              <p className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.14em] text-foreground/60">
                Southern Ontario service map
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-[16px] border border-border bg-surface p-6 md:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cedar">
              Waterloo Location
            </p>
            <h3 className="mt-2 text-2xl font-bold">{siteConfig.shortName}</h3>
            <p className="mt-2 text-muted">{siteConfig.waterlooAddress.full}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <DirectionsLink placement="service_area_section" />
              <PhoneLink placement="service_area_section">Call Waterloo</PhoneLink>
            </div>
            <ButtonLink href="/service-areas" variant="secondary" className="mt-6 w-fit">
              View Service Areas
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
