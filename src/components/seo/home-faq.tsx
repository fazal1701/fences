import { FAQ } from "@/components/ui/faq";
import { homepageFaqs } from "@/lib/faqs";
import { faqJsonLd } from "@/lib/seo";

export function HomeFAQ() {
  return (
    <section className="section-y">
      <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-[32px] font-bold tracking-tight md:text-[48px]">
            Common questions before you call.
          </h2>
          <p className="mt-4 text-[17px] text-muted">
            Straight answers about materials, process, permits and service areas.
          </p>
        </div>
        <FAQ items={homepageFaqs} />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(homepageFaqs)),
        }}
      />
    </section>
  );
}
