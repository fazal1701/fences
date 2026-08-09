import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { PhoneLink } from "@/components/ui/phone-link";
import { siteConfig } from "@/lib/site-config";
import { Phone } from "lucide-react";

export function CTASection({
  heading = "Your new backyard starts with one conversation.",
  subheading = "Call Premier and tell us what you're planning.",
}: {
  heading?: string;
  subheading?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-foreground text-white">
      <div className="absolute inset-0 opacity-40">
        <MediaPlaceholder
          src="/images/hero/premier-fence-hero.jpg"
          title="Premier backyard project"
          aspect="h-full min-h-[420px]"
          className="h-full w-full"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/55" />
      <div className="container-site relative section-y">
        <div className="max-w-2xl">
          <h2 className="text-[32px] font-bold tracking-tight md:text-[48px]">
            {heading}
          </h2>
          <p className="mt-4 text-[17px] text-white/75 md:text-[18px]">
            {subheading}
          </p>
          <div className="mt-8">
            <PhoneLink
              placement="final_cta"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-[12px] bg-white px-6 font-semibold text-foreground hover:bg-[#f7f5ef] hover:text-foreground"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {siteConfig.phoneDisplay}
            </PhoneLink>
          </div>
        </div>
      </div>
    </section>
  );
}
