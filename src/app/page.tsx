import { BeforeAfter } from "@/components/gallery/before-after";
import { ProjectGallery } from "@/components/gallery/project-gallery";
import { Hero } from "@/components/hero/hero";
import { TrustBar } from "@/components/hero/trust-bar";
import { CTASection } from "@/components/cta/cta-section";
import { ProcessTimeline } from "@/components/cta/process-timeline";
import { WhyPremier } from "@/components/cta/why-premier";
import { ServiceAreaSection } from "@/components/locations/service-area-section";
import { ReviewGrid } from "@/components/reviews/review-grid";
import { HomeFAQ } from "@/components/seo/home-faq";
import { FenceSelector } from "@/components/services/fence-selector";
import { ServiceGrid } from "@/components/services/service-grid";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServiceGrid />
      <FenceSelector />
      <ProjectGallery />
      <WhyPremier />
      <ProcessTimeline />
      <ReviewGrid />
      <BeforeAfter />
      <ServiceAreaSection />
      <HomeFAQ />
      <CTASection
        heading="Ready to improve your property?"
        subheading="Tell us what you're planning."
      />
    </>
  );
}
