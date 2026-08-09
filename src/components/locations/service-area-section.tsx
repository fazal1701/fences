import { ButtonLink } from "@/components/ui/button-link";
import { DirectionsLink } from "@/components/ui/directions-link";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { serviceAreas } from "@/lib/locations";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";

export function ServiceAreaSection() {
  return (
    <section className="section-y">
      <div className="container-site">
        <div className="max-w-2xl">
          <h2 className="text-[32px] font-bold tracking-tight md:text-[48px]">
            Building across Toronto.
          </h2>
          <p className="mt-4 text-[17px] text-muted md:text-[18px]">
            Residential and commercial projects throughout {siteConfig.serviceRegion}.
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
          <MediaPlaceholder
            src="/images/hero/premier-fence-hero.jpg"
            title="Toronto fencing projects"
            aspect="aspect-[16/11]"
            className="rounded-[16px]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="flex flex-col justify-center rounded-[16px] border border-border bg-surface p-6 md:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cedar">
              Service area
            </p>
            <h3 className="mt-2 text-2xl font-bold">{siteConfig.shortName}</h3>
            <p className="mt-2 text-muted">{siteConfig.serviceRegion}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <DirectionsLink placement="service_area_section" />
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
