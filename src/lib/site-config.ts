export const siteConfig = {
  businessName: "Premier Fencing & Backyard Solutions Ltd.",
  shortName: "Premier Fencing",
  tagline: "Fencing, decks, gates and outdoor living across Southern Ontario.",
  phoneDisplay: "(519) 500-5545",
  phoneHref: "tel:+15195005545",
  email: "sales@premierfence.ca",
  websiteUrl: "https://premierfence.ca",
  waterlooAddress: {
    street: "620 Colby Drive",
    city: "Waterloo",
    region: "ON",
    postal: "N2V 1A2",
    full: "620 Colby Drive, Waterloo, ON N2V 1A2",
  },
  londonAddress: {
    street: "341 Talbot St",
    city: "London",
    region: "ON",
    postal: null as string | null,
    full: "341 Talbot St, London, ON",
    verified: false,
  },
  serviceRegion: "Kitchener-Waterloo, London & Southern Ontario",
  googleBusinessUrl:
    "REPLACE_WITH_CONFIRMED_GOOGLE_BUSINESS_PROFILE_URL" as string,
  googleMapsWaterlooUrl:
    "https://www.google.com/maps/search/?api=1&query=620+Colby+Drive,+Waterloo,+ON+N2V+1A2",
  googleMapsLondonUrl:
    "https://www.google.com/maps/search/?api=1&query=341+Talbot+St,+London,+ON",
  /** Hide UI when null — never invent credibility metrics */
  googleRating: null as number | null,
  googleReviewCount: null as number | null,
  yearsExperience: null as number | null,
  projectsCompleted: null as number | null,
  warrantyYears: 2 as number | null,
  bbbAccredited: true,
  familyOwned: true,
  social: {
    instagram: "https://www.instagram.com/" as string | null,
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
