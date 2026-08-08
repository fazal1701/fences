import { ButtonLink } from "@/components/ui/button-link";
import { FAQ } from "@/components/ui/faq";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { PhoneLink } from "@/components/ui/phone-link";
import { ProjectGallery } from "@/components/gallery/project-gallery";
import { CTASection } from "@/components/cta/cta-section";
import { ProcessTimeline } from "@/components/cta/process-timeline";
import { projects } from "@/lib/projects";
import { breadcrumbJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { Phone } from "lucide-react";

export type ServicePageContent = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  tone: string;
  benefits: string[];
  styles?: { title: string; body: string }[];
  faqs: { question: string; answer: string }[];
  ctaLabel?: string;
  relatedCategory?: string;
  path: string;
};

export function ServicePage({ content }: { content: ServicePageContent }) {
  const related = projects.filter(
    (p) =>
      !content.relatedCategory ||
      p.category === content.relatedCategory ||
      p.type.toLowerCase().includes(content.slug),
  );

  return (
    <>
      <section className="relative min-h-[58vh] overflow-hidden md:min-h-[68vh]">
        <div className="absolute inset-0">
          <MediaPlaceholder
            title={content.title}
            tone={content.tone}
            aspect="h-full min-h-[58vh] md:min-h-[68vh]"
            className="h-full w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
        </div>
        <div className="container-site relative flex min-h-[58vh] items-end pb-12 pt-24 md:min-h-[68vh] md:items-center md:pb-0">
          <div className="max-w-3xl text-white">
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/70">
              {siteConfig.shortName}
            </p>
            <h1 className="mt-3 text-[40px] font-bold leading-[1.02] tracking-tight md:text-[56px]">
              {content.headline}
            </h1>
            <p className="mt-5 max-w-xl text-[17px] text-white/85 md:text-[18px]">
              {content.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href="/quote"
                className="bg-white text-foreground hover:bg-[#f7f5ef]"
              >
                {content.ctaLabel ?? "Get a Free Quote"}
              </ButtonLink>
              <PhoneLink
                placement="service_page"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-[12px] border border-white/30 px-6 font-semibold text-white hover:bg-white/10 hover:text-white"
              >
                <Phone className="h-4 w-4" />
                Call {siteConfig.phoneDisplay}
              </PhoneLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-[32px] font-bold md:text-[40px]">Overview</h2>
            <p className="mt-4 text-[17px] text-muted">{content.intro}</p>
          </div>
          <ul className="space-y-3">
            {content.benefits.map((b) => (
              <li
                key={b}
                className="rounded-[12px] border border-border bg-surface px-4 py-3 font-medium"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {content.styles?.length ? (
        <section className="section-y bg-surface">
          <div className="container-site">
            <h2 className="text-[32px] font-bold md:text-[40px]">Styles & options</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {content.styles.map((s) => (
                <div
                  key={s.title}
                  className="rounded-[16px] border border-border bg-background p-6"
                >
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <ProjectGallery
        items={related.length ? related : projects.slice(0, 3)}
        showViewAll
        heading="Related projects"
        subheading="See how similar builds look on Southern Ontario properties."
      />

      <ProcessTimeline />

      <section className="section-y">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <h2 className="text-[32px] font-bold md:text-[40px]">FAQ</h2>
          <FAQ items={content.faqs} />
        </div>
      </section>

      <CTASection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: content.title, path: content.path },
            ]),
          ),
        }}
      />
    </>
  );
}
