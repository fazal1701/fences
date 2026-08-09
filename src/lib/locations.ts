export type ServiceArea = {
  slug: string;
  name: string;
  region: string;
  intro: string;
  localNotes: string[];
  faqs: { question: string; answer: string }[];
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: "toronto",
    name: "Toronto",
    region: "Greater Toronto Area",
    intro:
      "Premier installs residential and commercial fencing, decks, and gates for homeowners and businesses across Toronto.",
    localNotes: [
      "Privacy fencing and low-maintenance vinyl are common requests.",
      "Commercial sites often need durable perimeter fencing and controlled access.",
    ],
    faqs: [
      {
        question: "Do you install fences in Toronto?",
        answer:
          "Yes. Premier works with homeowners and commercial customers across Toronto and surrounding areas.",
      },
    ],
  },
  {
    slug: "north-york",
    name: "North York",
    region: "Toronto",
    intro: "Fencing, decks and gates for North York residential and commercial properties.",
    localNotes: [],
    faqs: [],
  },
  {
    slug: "scarborough",
    name: "Scarborough",
    region: "Toronto",
    intro: "Privacy, security and outdoor living installs for Scarborough properties.",
    localNotes: [],
    faqs: [],
  },
  {
    slug: "etobicoke",
    name: "Etobicoke",
    region: "Toronto",
    intro: "Residential and commercial fencing solutions across Etobicoke.",
    localNotes: [],
    faqs: [],
  },
  {
    slug: "mississauga",
    name: "Mississauga",
    region: "GTA",
    intro: "Fence, deck and gate projects for Mississauga homes and businesses.",
    localNotes: [],
    faqs: [],
  },
  {
    slug: "brampton",
    name: "Brampton",
    region: "GTA",
    intro: "Custom fencing and outdoor living installs for Brampton properties.",
    localNotes: [],
    faqs: [],
  },
  {
    slug: "markham",
    name: "Markham",
    region: "GTA",
    intro: "Premium fencing and backyard projects serving Markham.",
    localNotes: [],
    faqs: [],
  },
  {
    slug: "vaughan",
    name: "Vaughan",
    region: "GTA",
    intro: "Residential and commercial fencing for Vaughan customers.",
    localNotes: [],
    faqs: [],
  },
];

export function getServiceArea(slug: string) {
  return serviceAreas.find((a) => a.slug === slug);
}
