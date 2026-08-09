import { Suspense } from "react";
import { QuoteWizard } from "@/components/forms/quote-wizard";
import { PhoneLink } from "@/components/ui/phone-link";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Get a Free Quote | Premier Fencing",
  description:
    "Request a free fencing, deck, gate or outdoor living quote from Premier Fencing across Toronto.",
  path: "/quote",
});

export default function QuotePage() {
  return (
    <section className="section-y">
      <div className="container-site max-w-3xl">
        <h1 className="text-[40px] font-bold tracking-tight md:text-[52px]">
          Get a free quote
        </h1>
        <p className="mt-4 text-[17px] text-muted">
          A few quick questions help us understand your project. Prefer to talk now?{" "}
          <PhoneLink placement="quote_page" className="underline">
            Call {siteConfig.phoneDisplay}
          </PhoneLink>
          .
        </p>
        <div className="mt-8">
          <Suspense fallback={<div className="rounded-[16px] border border-border bg-surface p-8">Loading quote form…</div>}>
            <QuoteWizard />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
