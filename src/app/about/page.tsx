import { CTASection } from "@/components/cta/cta-section";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { PhoneLink } from "@/components/ui/phone-link";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Premier Fencing | Toronto Fence & Deck Company",
  description:
    "Learn about Premier Fencing & Backyard Solutions — residential and commercial fencing, decks, gates and outdoor living across Toronto.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <MediaPlaceholder
            src="/images/hero/premier-fence-hero.jpg"
            title="Premier craftsmanship"
            aspect="h-full min-h-[50vh]"
            className="h-full w-full"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="container-site relative flex min-h-[50vh] items-end pb-12 pt-24">
          <h1 className="max-w-3xl text-[40px] font-bold tracking-tight text-white md:text-[56px]">
            Built on craftsmanship. Grown through reputation.
          </h1>
        </div>
      </section>

      <section className="section-y">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div className="prose-narrow">
            <h2 className="text-[32px] font-bold md:text-[40px]">The Premier approach</h2>
            <p className="mt-4 text-[17px] text-muted">
              Premier Fencing & Backyard Solutions Ltd. builds residential and commercial
              fencing, decks, gates and outdoor living spaces for properties across
              {" "}{siteConfig.serviceRegion}.
            </p>
            <p className="mt-4 text-[17px] text-muted">
              The focus is practical: understand the property, recommend the right materials,
              plan clearly, and install with care for how the finished work will look and
              perform for years.
            </p>
          </div>
          <ul className="space-y-3">
            {[
              "Residential and commercial capabilities",
              "Fencing, decks, gates and outdoor living",
              siteConfig.familyOwned ? "Family-owned operation" : null,
              siteConfig.bbbAccredited ? "BBB accredited business" : null,
              siteConfig.warrantyYears
                ? `${siteConfig.warrantyYears}-year warranty on materials and workmanship`
                : null,
              "Serving Toronto",
            ]
              .filter(Boolean)
              .map((item) => (
                <li
                  key={item as string}
                  className="rounded-[12px] border border-border bg-surface px-4 py-3 font-medium"
                >
                  {item}
                </li>
              ))}
          </ul>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-site grid gap-8 md:grid-cols-2">
          <MediaPlaceholder
            src="/images/projects/craftsmanship.jpg"
            title="Installation craftsmanship"
            aspect="aspect-[4/3]"
            className="rounded-[16px]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-[32px] font-bold md:text-[40px]">How the team works</h2>
            <p className="mt-4 text-[17px] text-muted">
              Projects start with listening — privacy needs, security priorities, maintenance
              preferences, and how you use the property. Then comes layout, materials, and a
              clear path to installation.
            </p>
            <PhoneLink
              placement="about"
              className="mt-6 inline-flex w-fit min-h-[52px] items-center justify-center gap-2 rounded-[12px] bg-primary px-6 font-semibold text-white hover:text-white"
            >
              Call {siteConfig.phoneDisplay}
            </PhoneLink>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
