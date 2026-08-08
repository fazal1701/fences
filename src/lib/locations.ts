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
    slug: "kitchener",
    name: "Kitchener",
    region: "Waterloo Region",
    intro:
      "Premier installs residential and commercial fencing, decks, and gates for homeowners and businesses across Kitchener.",
    localNotes: [
      "Privacy fencing is a common request for established neighbourhoods and newer subdivisions.",
      "Site access, grade, and existing fence removal often shape the final project plan.",
      "Municipal permit requirements vary by property and project type — confirm local rules before construction.",
    ],
    faqs: [
      {
        question: "Do you install fences throughout Kitchener?",
        answer:
          "Yes. Premier works with homeowners and commercial customers across Kitchener and surrounding Waterloo Region communities.",
      },
      {
        question: "Can you remove an old fence in Kitchener?",
        answer:
          "In many projects, yes. Existing fence removal can be included as part of planning so the new installation starts with a clean line.",
      },
    ],
  },
  {
    slug: "waterloo",
    name: "Waterloo",
    region: "Waterloo Region",
    intro:
      "From our Waterloo location, Premier serves residential and commercial outdoor projects across the city and nearby communities.",
    localNotes: [
      "Many Waterloo homeowners look for stronger privacy, finished decking, and low-maintenance options.",
      "Commercial properties often need durable perimeter fencing and controlled access.",
      "Our Waterloo warehouse at 620 Colby Drive supports local project coordination.",
    ],
    faqs: [
      {
        question: "Where is Premier located in Waterloo?",
        answer:
          "Premier Fencing & Backyard Solutions is at 620 Colby Drive, Waterloo, ON N2V 1A2.",
      },
    ],
  },
  {
    slug: "cambridge",
    name: "Cambridge",
    region: "Waterloo Region",
    intro:
      "Premier builds fencing, decks, and outdoor structures for Cambridge properties looking for privacy, security, or a finished backyard.",
    localNotes: [
      "Cambridge lots vary widely in grade and backyard layout — those details matter for post placement and fence lines.",
      "Pool fencing and ornamental options are often discussed for safety and curb appeal.",
    ],
    faqs: [
      {
        question: "What fence types do you install in Cambridge?",
        answer:
          "Wood, vinyl, ornamental, chain link, pool fencing, commercial fencing, decks, and gates are all part of the conversation depending on the property.",
      },
    ],
  },
  {
    slug: "guelph",
    name: "Guelph",
    region: "Wellington County",
    intro:
      "Premier works with Guelph homeowners and commercial customers seeking durable outdoor structures built for Ontario conditions.",
    localNotes: [
      "Privacy fencing and deck refreshes are popular starting points for Guelph properties.",
      "Material choice often comes down to maintenance preference, budget, and the look of the home.",
    ],
    faqs: [],
  },
  {
    slug: "london",
    name: "London",
    region: "Southwestern Ontario",
    intro:
      "Premier also serves London, Ontario with residential and commercial fencing, gates, and outdoor living solutions.",
    localNotes: [
      "London customers often balance curb appeal with practical privacy and long-term durability.",
      "Commercial yards and automated access projects are available for businesses needing stronger perimeter control.",
    ],
    faqs: [
      {
        question: "Do you serve London, Ontario?",
        answer:
          "Yes. London is a key secondary market for Premier Fencing & Backyard Solutions.",
      },
    ],
  },
  {
    slug: "brantford",
    name: "Brantford",
    region: "Southern Ontario",
    intro:
      "Premier provides fencing and outdoor living installations for Brantford and nearby communities.",
    localNotes: [
      "Projects often start with a clear discussion of privacy goals, materials, and site conditions.",
    ],
    faqs: [],
  },
  {
    slug: "hamilton",
    name: "Hamilton",
    region: "Southern Ontario",
    intro:
      "Premier supports selected Hamilton-area fencing, deck, and gate projects for residential and commercial customers.",
    localNotes: [
      "Property grade, existing structures, and access can significantly affect layout and installation planning.",
    ],
    faqs: [],
  },
  {
    slug: "milton",
    name: "Milton",
    region: "Halton",
    intro:
      "Premier installs fencing and outdoor structures for Milton homeowners focused on privacy, style, and low maintenance.",
    localNotes: [],
    faqs: [],
  },
  {
    slug: "stratford",
    name: "Stratford",
    region: "Perth County",
    intro:
      "Premier works with Stratford-area customers looking for quality fencing and backyard improvements.",
    localNotes: [],
    faqs: [],
  },
  {
    slug: "woodstock",
    name: "Woodstock",
    region: "Oxford County",
    intro:
      "Premier provides fencing and outdoor project support for Woodstock and surrounding communities.",
    localNotes: [],
    faqs: [],
  },
  {
    slug: "elmira",
    name: "Elmira",
    region: "Woolwich",
    intro:
      "Premier serves Elmira homeowners needing privacy fencing, decks, or gate work tailored to the property.",
    localNotes: [],
    faqs: [],
  },
  {
    slug: "fergus",
    name: "Fergus",
    region: "Centre Wellington",
    intro:
      "Premier builds fencing and outdoor living projects for Fergus-area properties.",
    localNotes: [],
    faqs: [],
  },
  {
    slug: "georgetown",
    name: "Georgetown",
    region: "Halton Hills",
    intro:
      "Premier helps Georgetown homeowners plan fencing and outdoor spaces around privacy, materials, and layout.",
    localNotes: [],
    faqs: [],
  },
];

export function getServiceArea(slug: string) {
  return serviceAreas.find((a) => a.slug === slug);
}
