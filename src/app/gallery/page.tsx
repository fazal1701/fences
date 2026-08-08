import { GalleryClient } from "@/components/gallery/gallery-client";
import { CTASection } from "@/components/cta/cta-section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Project Gallery | Premier Fencing Southern Ontario",
  description:
    "Browse fencing, decks, gates and outdoor living projects from Premier Fencing across Southern Ontario.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <section className="section-y">
        <div className="container-site">
          <h1 className="text-[40px] font-bold tracking-tight md:text-[56px]">
            See what we&apos;ve built.
          </h1>
          <p className="mt-4 max-w-2xl text-[17px] text-muted md:text-[18px]">
            Filter by material, project type, or city to find examples close to what you&apos;re planning.
          </p>
          <div className="mt-8">
            <GalleryClient />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
