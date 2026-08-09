import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { siteConfig } from "@/lib/site-config";

export function CTASection({
  heading = "Your new backyard starts with one conversation.",
  subheading = `Call Premier at ${siteConfig.phoneDisplay}.`,
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
        </div>
      </div>
    </section>
  );
}
