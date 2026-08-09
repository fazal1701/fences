import { siteConfig } from "@/lib/site-config";

export function CTASection({
  heading = "Your new backyard starts with one conversation.",
  subheading = siteConfig.phoneDisplay,
}: {
  heading?: string;
  subheading?: string;
}) {
  return (
    <section className="bg-foreground text-white">
      <div className="container-site section-y">
        <div className="max-w-2xl">
          <h2 className="text-[32px] font-bold tracking-tight text-white md:text-[48px]">
            {heading}
          </h2>
          <p className="mt-4 text-[17px] text-white md:text-[18px]">{subheading}</p>
        </div>
      </div>
    </section>
  );
}
