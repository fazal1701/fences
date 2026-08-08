import { ButtonLink } from "@/components/ui/button-link";
import { DirectionsLink } from "@/components/ui/directions-link";
import { GoogleBusinessLink } from "@/components/ui/google-business-link";
import { PhoneLink } from "@/components/ui/phone-link";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";
import { Phone, Mail } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata = buildMetadata({
  title: "Contact Premier Fencing | Request a Quote or Call",
  description:
    "Contact Premier Fencing in Waterloo for fencing, decks, gates and outdoor living across Southern Ontario.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="section-y">
      <div className="container-site">
        <h1 className="text-[40px] font-bold tracking-tight md:text-[56px]">
          Let&apos;s talk about your property.
        </h1>
        <p className="mt-4 max-w-2xl text-[17px] text-muted">
          Get a free quote or call Premier directly. We&apos;ll help you understand materials,
          layout and next steps.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/quote">Get a Free Quote</ButtonLink>
          <PhoneLink
            placement="contact"
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-[12px] border border-border bg-surface px-6 font-semibold"
          >
            <Phone className="h-4 w-4" />
            Call {siteConfig.phoneDisplay}
          </PhoneLink>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6 rounded-[16px] border border-border bg-surface p-6 md:p-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cedar">
                Phone
              </p>
              <PhoneLink placement="contact" className="mt-2 text-xl" />
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
                Waterloo
              </p>
              <p className="mt-2 text-muted">{siteConfig.waterlooAddress.full}</p>
              <div className="mt-3 flex flex-wrap gap-4">
                <DirectionsLink placement="contact" />
                <GoogleBusinessLink placement="contact">
                  View on Google
                </GoogleBusinessLink>
              </div>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cedar">
                London
              </p>
              <p className="mt-2 text-muted">
                London, Ontario service available
                {siteConfig.londonAddress.verified
                  ? ` — ${siteConfig.londonAddress.full}`
                  : ""}
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cedar">
                Service areas
              </p>
              <p className="mt-2 text-muted">{siteConfig.serviceRegion}</p>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
