import { siteConfig } from "./site-config";

export const defaultOgImage = "/images/hero/premier-fence-hero.webp";

export function buildMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}) {
  const url = `${siteConfig.websiteUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.shortName,
      type: "website" as const,
      locale: "en_CA",
      images: [{ url: defaultOgImage }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [defaultOgImage],
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.businessName,
    url: siteConfig.websiteUrl,
    telephone: siteConfig.phoneHref.replace("tel:", ""),
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.waterlooAddress.street,
      addressLocality: siteConfig.waterlooAddress.city,
      addressRegion: siteConfig.waterlooAddress.region,
      postalCode: siteConfig.waterlooAddress.postal,
      addressCountry: "CA",
    },
    areaServed: [
      "Kitchener",
      "Waterloo",
      "Cambridge",
      "Guelph",
      "London",
      "Southern Ontario",
    ],
    description: siteConfig.tagline,
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.websiteUrl}${item.path}`,
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
