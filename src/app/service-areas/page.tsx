import Link from "next/link";
import { serviceAreas } from "@/lib/locations";
import { buildMetadata } from "@/lib/seo";
import { CTASection } from "@/components/cta/cta-section";
import { ServiceAreaSection } from "@/components/locations/service-area-section";

export const metadata = buildMetadata({
  title: "Service Areas | Premier Fencing Southern Ontario",
  description:
    "Premier Fencing serves Kitchener, Waterloo, Cambridge, Guelph, London and surrounding Southern Ontario communities.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <>
      <section className="section-y">
        <div className="container-site">
          <h1 className="text-[40px] font-bold tracking-tight md:text-[56px]">
            Service areas
          </h1>
          <p className="mt-4 max-w-2xl text-[17px] text-muted md:text-[18px]">
            Local crews. Southern Ontario projects. Choose your community to see
            relevant fencing and outdoor living options.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="rounded-[12px] border border-border bg-surface px-4 py-5 font-semibold hover:border-foreground/25"
              >
                {area.name}
                <span className="mt-1 block text-sm font-normal text-muted">
                  {area.region}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ServiceAreaSection />
      <CTASection />
    </>
  );
}
