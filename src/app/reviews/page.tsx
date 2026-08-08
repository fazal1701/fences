import { ReviewGrid } from "@/components/reviews/review-grid";
import { CTASection } from "@/components/cta/cta-section";
import { GoogleBusinessLink } from "@/components/ui/google-business-link";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Reviews | Premier Fencing",
  description:
    "See what homeowners say about Premier Fencing projects, then read more on Google.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <section className="section-y-tight">
        <div className="container-site">
          <h1 className="text-[40px] font-bold tracking-tight md:text-[56px]">
            Reviews
          </h1>
          <p className="mt-4 max-w-2xl text-[17px] text-muted">
            Recommended after the work is finished. Browse a few featured comments,
            then read more on Google.
          </p>
          <GoogleBusinessLink placement="reviews_page" className="mt-4" showIcon>
            View Premier on Google
          </GoogleBusinessLink>
        </div>
      </section>
      <ReviewGrid />
      <CTASection />
    </>
  );
}
