import { ButtonLink } from "@/components/ui/button-link";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { PhoneLink } from "@/components/ui/phone-link";
import { siteConfig } from "@/lib/site-config";
import { Phone } from "lucide-react";

export function CTASection({
  heading = "Your new backyard starts with one conversation.",
  subheading = "Tell us what you're planning and our team can help you understand the next step.",
}: {
  heading?: string;
  subheading?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-foreground text-white">
      <div className="absolute inset-0 opacity-40">
        <MediaPlaceholder
          title="Premier backyard project"
          tone="from-[#1a1f1b] via-[#2c3a30] to-[#171a18]"
          aspect="h-full min-h-[420px]"
          className="h-full w-full"
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
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href="/quote"
              className="bg-white text-foreground hover:bg-[#f7f5ef]"
            >
              Get a Free Quote
            </ButtonLink>
            <PhoneLink
              placement="final_cta"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-[12px] border border-white/25 px-6 font-semibold text-white hover:bg-white/10 hover:text-white"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call {siteConfig.phoneDisplay}
            </PhoneLink>
          </div>
        </div>
      </div>
    </section>
  );
}
