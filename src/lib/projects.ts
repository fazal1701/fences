export type Project = {
  id: string;
  title: string;
  type: string;
  material: string;
  city: string;
  description: string;
  category:
    | "wood"
    | "vinyl"
    | "ornamental"
    | "chain-link"
    | "commercial"
    | "decks"
    | "gates"
    | "pergolas";
  image: string;
  imageTone: string;
  orientation: "landscape" | "portrait";
  quotePrefill?: {
    projectType: "Fence" | "Deck" | "Gate" | "Commercial Project" | "Pergola / Outdoor Living";
    fenceTypes?: string[];
  };
};

export const projects: Project[] = [
  {
    id: "privacy-kitchener",
    title: "Privacy Fence",
    type: "Privacy Fence",
    material: "Pressure-treated wood",
    city: "Kitchener",
    description:
      "Full-height wood privacy fencing with clean lines for a landscaped backyard.",
    category: "wood",
    image: "/images/projects/privacy-kitchener.webp",
    imageTone: "from-[#5c4030] via-[#3d2a20] to-[#1a1410]",
    orientation: "landscape",
    quotePrefill: { projectType: "Fence", fenceTypes: ["Wood"] },
  },
  {
    id: "vinyl-waterloo",
    title: "Low-Maintenance Vinyl",
    type: "Vinyl Fence",
    material: "Vinyl",
    city: "Waterloo",
    description:
      "Neutral vinyl privacy panels designed for long-term curb appeal with less upkeep.",
    category: "vinyl",
    image: "/images/projects/vinyl-waterloo.webp",
    imageTone: "from-[#b8b3a6] via-[#8a8578] to-[#4a4640]",
    orientation: "portrait",
    quotePrefill: { projectType: "Fence", fenceTypes: ["Vinyl"] },
  },
  {
    id: "ornamental-cambridge",
    title: "Front Yard Ornamental",
    type: "Ornamental Fence",
    material: "Black ornamental",
    city: "Cambridge",
    description:
      "Architectural ornamental fencing that frames the front yard without closing it in.",
    category: "ornamental",
    image: "/images/projects/ornamental-cambridge.webp",
    imageTone: "from-[#111] via-[#2a2a2a] to-[#444]",
    orientation: "landscape",
    quotePrefill: { projectType: "Fence", fenceTypes: ["Ornamental"] },
  },
  {
    id: "deck-guelph",
    title: "Backyard Deck",
    type: "Custom Deck",
    material: "Composite",
    city: "Guelph",
    description:
      "A finished outdoor living platform built for dining, lounging, and everyday use.",
    category: "decks",
    image: "/images/projects/deck-guelph.webp",
    imageTone: "from-[#6b4a32] via-[#4a3224] to-[#241810]",
    orientation: "portrait",
    quotePrefill: { projectType: "Deck" },
  },
  {
    id: "commercial-london",
    title: "Commercial Perimeter",
    type: "Commercial Fencing",
    material: "Chain link",
    city: "London",
    description:
      "Professional perimeter fencing for a commercial yard requiring clear boundaries.",
    category: "commercial",
    image: "/images/projects/commercial-london.webp",
    imageTone: "from-[#2a2e32] via-[#3a4048] to-[#1a1c1e]",
    orientation: "landscape",
    quotePrefill: { projectType: "Commercial Project" },
  },
  {
    id: "gate-waterloo",
    title: "Automated Driveway Gate",
    type: "Gate & Automation",
    material: "Custom steel",
    city: "Waterloo",
    description:
      "A driveway gate designed for presence, access control, and finished detailing.",
    category: "gates",
    image: "/images/projects/gate-waterloo.webp",
    imageTone: "from-[#1c1c1c] via-[#333] to-[#555]",
    orientation: "portrait",
    quotePrefill: { projectType: "Gate" },
  },
];

export const galleryFilters = [
  "All",
  "Wood",
  "Vinyl",
  "Ornamental",
  "Chain Link",
  "Commercial",
  "Decks",
  "Gates",
  "Pergolas",
] as const;

export const cityFilters = [
  "All",
  "Waterloo",
  "Kitchener",
  "Cambridge",
  "Guelph",
  "London",
] as const;

export function filterProjects(
  category: string,
  city: string,
  list: Project[] = projects,
) {
  return list.filter((p) => {
    const categoryOk =
      category === "All" ||
      p.category === category.toLowerCase().replace(" ", "-") ||
      (category === "Chain Link" && p.category === "chain-link");
    const cityOk = city === "All" || p.city === city;
    return categoryOk && cityOk;
  });
}
