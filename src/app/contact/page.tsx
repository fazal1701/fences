import { DirectionsLink } from "@/components/ui/directions-link";
import { GoogleBusinessLink } from "@/components/ui/google-business-link";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";
import { Mail } from "lucide-react";

export const metadata = buildMetadata({
  title: "Contact Premier Fencing | Toronto",
  description:
    "Contact Premier Fencing in Toronto for fencing, decks, gates and outdoor living.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="section-y">
      <div className="container-site max-w-3xl">
        <h1 className="text-[40px] font-bold tracking-tight md:text-[56px]">
          Let&apos;s talk about your property.
        </h1>
        <p className="mt-4 text-[17px] text-muted">
          Use the call button in the header to reach us at {siteConfig.phoneDisplay}.
          Serving {siteConfig.serviceRegion}.
        </p>

        <div className="mt-12 space-y-6 rounded-[16px] border border-border bg-surface p-6 md:p-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cedar">
              Phone
            </p>
            <p className="mt-2 text-xl font-semibold">{siteConfig.phoneDisplay}</p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cedar">
              Email
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-2 inline-flex items-center gap-2 text-lg font-semibold hover:text-cedar"
            >
              <Mail className="h-4 w-4" />
              {siteConfig.email}
            </a>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cedar">
              Service area
            </p>
            <p className="mt-2 text-muted">{siteConfig.serviceRegion}</p>
            <div className="mt-3 flex flex-wrap gap-4">
              <DirectionsLink placement="contact" />
              <GoogleBusinessLink placement="contact">
                View on Google
              </GoogleBusinessLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
