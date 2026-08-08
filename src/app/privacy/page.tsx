import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy | Premier Fencing",
  description: "Privacy policy for Premier Fencing & Backyard Solutions Ltd.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="section-y">
      <div className="container-site prose-narrow">
        <h1 className="text-[40px] font-bold tracking-tight md:text-[48px]">
          Privacy Policy
        </h1>
        <p className="mt-6 text-muted">
          {siteConfig.businessName} (&quot;Premier&quot;) respects your privacy. This page
          explains how contact information submitted through our website is used.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Information we collect</h2>
        <p className="mt-3 text-muted">
          When you request a quote or send a message, we collect details you provide such as
          name, phone number, email address, project location, and project notes.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">How we use information</h2>
        <p className="mt-3 text-muted">
          We use your information to respond to quote requests and project inquiries. We do
          not sell your personal information. Marketing communications are not sent unless
          you separately agree.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Contact</h2>
        <p className="mt-3 text-muted">
          Questions about privacy can be sent to{" "}
          <a href={`mailto:${siteConfig.email}`} className="underline">
            {siteConfig.email}
          </a>{" "}
          or by calling {siteConfig.phoneDisplay}.
        </p>
      </div>
    </section>
  );
}
