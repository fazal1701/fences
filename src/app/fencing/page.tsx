import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { homepageServiceCards } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";
import { PhoneLink } from "@/components/ui/phone-link";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export const metadata = buildMetadata({
  title: "Residential & Commercial Fencing | Premier Fencing",
  description:
    "Explore wood, vinyl, ornamental, chain link, pool and commercial fencing from Premier Fencing across Toronto.",
  path: "/fencing",
});

export default function FencingIndexPage() {
  const fencing = homepageServiceCards.filter((s) =>
    ["wood", "vinyl", "ornamental", "chain-link", "commercial", "automated-gates"].includes(
      s.slug,
    ),
  );

  return (
    <section className="section-y">
      <div className="container-site">
        <h1 className="text-[40px] font-bold tracking-tight md:text-[56px]">
          Fencing
        </h1>
        <p className="mt-4 max-w-2xl text-[17px] text-muted md:text-[18px]">
          Choose the material, privacy level and style that works for your
          property. We&apos;ll help with layout, project planning and
          installation.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {fencing.map((s) => (
            <Link
              key={s.slug}
              href={s.href}
              className="group overflow-hidden rounded-[16px] border border-border bg-surface"
            >
              <MediaPlaceholder
                src={s.image}
                title={s.name}
                tone={s.imageTone}
                aspect="aspect-[4/3]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold">{s.name}</h2>
                <p className="mt-1 text-sm text-muted">{s.benefit}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold">
                  Explore{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <PhoneLink
          placement="fencing_index"
          className="mt-10 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-[12px] bg-primary px-6 font-semibold text-white hover:text-white"
        >
          <Phone className="h-4 w-4" />
          {siteConfig.phoneDisplay}
        </PhoneLink>
      </div>
    </section>
  );
}
