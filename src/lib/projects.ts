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
    id: "privacy-toronto",
    title: "Privacy Fence",
    type: "Privacy Fence",
    material: "Pressure-treated wood",
    city: "Toronto",
    description: "Full-height wood privacy fencing for a landscaped backyard.",
    category: "wood",
    image: "/images/projects/privacy-toronto.jpg",
    imageTone: "from-[#5c4030] via-[#3d2a20] to-[#1a1410]",
    orientation: "landscape",
    quotePrefill: { projectType: "Fence", fenceTypes: ["Wood"] },
  },
  {
    id: "vinyl-toronto",
    title: "Low-Maintenance Vinyl",
    type: "Vinyl Fence",
    material: "Vinyl",
    city: "Toronto",
    description: "Clean vinyl privacy panels with less upkeep.",
    category: "vinyl",
    image: "/images/projects/vinyl-toronto.jpg",
    imageTone: "from-[#b8b3a6] via-[#8a8578] to-[#4a4640]",
    orientation: "portrait",
    quotePrefill: { projectType: "Fence", fenceTypes: ["Vinyl"] },
  },
  {
    id: "ornamental-toronto",
    title: "Front Yard Ornamental",
    type: "Ornamental Fence",
    material: "Black ornamental",
    city: "Toronto",
    description: "Architectural ornamental fencing for curb appeal.",
    category: "ornamental",
    image: "/images/projects/ornamental-toronto.jpg",
    imageTone: "from-[#111] via-[#2a2a2a] to-[#444]",
    orientation: "landscape",
    quotePrefill: { projectType: "Fence", fenceTypes: ["Ornamental"] },
  },
  {
    id: "deck-toronto",
    title: "Backyard Deck",
    type: "Custom Deck",
    material: "Composite",
    city: "Toronto",
    description: "Finished outdoor living deck for everyday use.",
    category: "decks",
    image: "/images/projects/deck-toronto.jpg",
    imageTone: "from-[#6b4a32] via-[#4a3224] to-[#241810]",
    orientation: "portrait",
    quotePrefill: { projectType: "Deck" },
  },
  {
    id: "commercial-toronto",
    title: "Commercial Perimeter",
    type: "Commercial Fencing",
    material: "Chain link",
    city: "Toronto",
    description: "Professional perimeter fencing for a commercial site.",
    category: "commercial",
    image: "/images/projects/commercial-toronto.jpg",
    imageTone: "from-[#2a2e32] via-[#3a4048] to-[#1a1c1e]",
    orientation: "landscape",
    quotePrefill: { projectType: "Commercial Project" },
  },
  {
    id: "gate-toronto",
    title: "Automated Driveway Gate",
    type: "Gate & Automation",
    material: "Custom steel",
    city: "Toronto",
    description: "Driveway gate built for presence and access control.",
    category: "gates",
    image: "/images/projects/gate-toronto.jpg",
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
  "Toronto",
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
