import { notFound } from "next/navigation";
import { getServiceArea, serviceAreas } from "@/lib/locations";
import { buildMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { FAQ } from "@/components/ui/faq";
import { ButtonLink } from "@/components/ui/button-link";
import { CTASection } from "@/components/cta/cta-section";
import { homepageServiceCards } from "@/lib/services";
import Link from "next/link";

export function generateStaticParams() {
  return serviceAreas.map((a) => ({ city: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const area = getServiceArea(city);
  if (!area) return {};
  return buildMetadata({
    title: `Fence Installation ${area.name}, ON | Premier Fencing`,
    description: area.intro,
    path: `/service-areas/${area.slug}`,
  });
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const area = getServiceArea(city);
  if (!area) notFound();

  return (
    <>
      <section className="section-y">
        <div className="container-site">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-cedar">
            {area.region}
          </p>
          <h1 className="mt-3 text-[40px] font-bold tracking-tight md:text-[56px]">
            Fence installation in {area.name}
          </h1>
          <p className="mt-4 max-w-2xl text-[17px] text-muted md:text-[18px]">
            {area.intro}
          </p>
          <ButtonLink href="/quote" className="mt-8">
            Get a Free Quote
          </ButtonLink>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-site">
          <h2 className="text-[32px] font-bold md:text-[40px]">
            Available fence types
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {homepageServiceCards.slice(0, 6).map((s) => (
              <Link
                key={s.slug}
                href={s.href}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold"
              >
                {s.name}
              </Link>
            ))}
          </div>
          {area.localNotes.length ? (
            <div className="mt-10 max-w-3xl space-y-3">
              <h3 className="text-xl font-semibold">Local considerations</h3>
              {area.localNotes.map((note) => (
                <p key={note} className="text-muted">
                  {note}
                </p>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {area.faqs.length ? (
        <section className="section-y">
          <div className="container-site grid gap-8 lg:grid-cols-2">
            <h2 className="text-[32px] font-bold md:text-[40px]">FAQ</h2>
            <FAQ items={area.faqs} />
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(faqJsonLd(area.faqs)),
            }}
          />
        </section>
      ) : null}

      <CTASection
        heading={`Planning a project in ${area.name}?`}
        subheading="Tell us what you're building and we'll help with the next step."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Service Areas", path: "/service-areas" },
              { name: area.name, path: `/service-areas/${area.slug}` },
            ]),
          ),
        }}
      />
    </>
  );
}
