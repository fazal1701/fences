export const siteConfig = {
  businessName: "Premier Fencing & Backyard Solutions Ltd.",
  shortName: "Premier Fencing",
  tagline: "Fencing, decks, gates and outdoor living across Toronto.",
  phoneDisplay: "(647) 564-7656",
  phoneHref: "tel:+16475647656",
  email: "sales@premierfence.ca",
  websiteUrl: "https://premierfence.ca",
  /** No street address shown on site by request */
  showAddress: false,
  primaryCity: "Toronto",
  serviceRegion: "Toronto & surrounding areas",
  googleBusinessUrl:
    "REPLACE_WITH_CONFIRMED_GOOGLE_BUSINESS_PROFILE_URL" as string,
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Toronto,+ON",
  googleRating: null as number | null,
  googleReviewCount: null as number | null,
  yearsExperience: null as number | null,
  projectsCompleted: null as number | null,
  warrantyYears: null as number | null,
  bbbAccredited: false,
  familyOwned: true,
  social: {
    instagram: null as string | null,
  },
  hours: null as { label: string; value: string }[] | null,
} as const;

export type SiteConfig = typeof siteConfig;

export function hasGoogleBusinessUrl() {
  return (
    Boolean(siteConfig.googleBusinessUrl) &&
    !siteConfig.googleBusinessUrl.includes("REPLACE_WITH")
  );
}
