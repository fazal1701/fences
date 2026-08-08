export type ServiceCategory =
  | "residential"
  | "commercial"
  | "outdoor-living";

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  href: string;
  category: ServiceCategory;
  description: string;
  benefit: string;
  image: string;
  imageTone: string;
  menuGroup: "Residential Fencing" | "Commercial" | "Outdoor Living";
};

export const services: Service[] = [
  {
    slug: "wood",
    name: "Wood Fencing",
    shortName: "Wood",
    href: "/fencing/wood",
    category: "residential",
    description:
      "Natural privacy fencing with flexible designs for Ontario homes.",
    benefit: "Warm character with strong privacy options.",
    image: "/images/services/wood-fence.webp",
    imageTone: "from-[#5c4030] to-[#2a1f18]",
    menuGroup: "Residential Fencing",
  },
  {
    slug: "vinyl",
    name: "Vinyl Fencing",
    shortName: "Vinyl",
    href: "/fencing/vinyl",
    category: "residential",
    description:
      "Clean, low-maintenance privacy fencing that holds its look with less upkeep.",
    benefit: "Privacy without constant maintenance.",
    image: "/images/services/vinyl-fence.webp",
    imageTone: "from-[#c9c4b8] to-[#7a756c]",
    menuGroup: "Residential Fencing",
  },
  {
    slug: "ornamental",
    name: "Ornamental Fencing",
    shortName: "Ornamental",
    href: "/fencing/ornamental",
    category: "residential",
    description:
      "Architectural lines for curb appeal, security, and refined front yards.",
    benefit: "Security with a cleaner line.",
    image: "/images/services/ornamental-fence.webp",
    imageTone: "from-[#1a1a1a] to-[#3d3d3d]",
    menuGroup: "Residential Fencing",
  },
  {
    slug: "chain-link",
    name: "Chain Link Fencing",
    shortName: "Chain Link",
    href: "/fencing/chain-link",
    category: "residential",
    description:
      "Practical perimeter fencing for yards, pets, sports, and commercial sites.",
    benefit: "Practical security, professionally installed.",
    image: "/images/services/chain-link.webp",
    imageTone: "from-[#2c3230] to-[#4a5550]",
    menuGroup: "Residential Fencing",
  },
  {
    slug: "pool",
    name: "Pool Fencing",
    shortName: "Pool",
    href: "/fencing/pool",
    category: "residential",
    description:
      "Safety-focused pool fencing designed around visibility, access, and layout.",
    benefit: "Designed with safety first.",
    image: "/images/services/pool-fence.webp",
    imageTone: "from-[#1e3a4c] to-[#2f5a6b]",
    menuGroup: "Residential Fencing",
  },
  {
    slug: "pet",
    name: "Pet Fencing",
    shortName: "Pet",
    href: "/fencing/pet",
    category: "residential",
    description:
      "Secure boundaries that keep pets safe without sacrificing the look of your yard.",
    benefit: "Boundaries built for pets and peace of mind.",
    image: "/images/services/pet-fence.webp",
    imageTone: "from-[#3d4a38] to-[#5c6b52]",
    menuGroup: "Residential Fencing",
  },
  {
    slug: "commercial",
    name: "Commercial Fencing",
    shortName: "Commercial",
    href: "/commercial-fencing",
    category: "commercial",
    description:
      "Perimeter solutions for businesses, institutions, and larger properties.",
    benefit: "Protects the property behind it.",
    image: "/images/services/commercial-fence.webp",
    imageTone: "from-[#2a2e32] to-[#4a5058]",
    menuGroup: "Commercial",
  },
  {
    slug: "security",
    name: "Security Fencing",
    shortName: "Security",
    href: "/commercial-fencing",
    category: "commercial",
    description:
      "Higher-security options for yards, facilities, and controlled-access sites.",
    benefit: "Durability where site security matters.",
    image: "/images/services/security-fence.webp",
    imageTone: "from-[#222526] to-[#3a4042]",
    menuGroup: "Commercial",
  },
  {
    slug: "sports",
    name: "Sports Fencing",
    shortName: "Sports",
    href: "/commercial-fencing",
    category: "commercial",
    description: "Sports-ready perimeter fencing for fields, courts, and facilities.",
    benefit: "Built for high-use recreational spaces.",
    image: "/images/services/sports-fence.webp",
    imageTone: "from-[#243028] to-[#3d5244]",
    menuGroup: "Commercial",
  },
  {
    slug: "automated-gates",
    name: "Automated Gates",
    shortName: "Automation",
    href: "/gates-automation",
    category: "commercial",
    description:
      "Gate automation for estates, commercial access, and controlled entry.",
    benefit: "Controlled access without compromising design.",
    image: "/images/services/automated-gates.webp",
    imageTone: "from-[#1c1c1c] to-[#444]",
    menuGroup: "Commercial",
  },
  {
    slug: "estate-gates",
    name: "Estate Gates",
    shortName: "Estate Gates",
    href: "/gates-automation",
    category: "commercial",
    description:
      "Custom estate gates that combine presence, security, and craftsmanship.",
    benefit: "A stronger first impression for your property.",
    image: "/images/services/estate-gates.webp",
    imageTone: "from-[#2b2118] to-[#4a3828]",
    menuGroup: "Commercial",
  },
  {
    slug: "decks",
    name: "Custom Decks",
    shortName: "Decks",
    href: "/decks",
    category: "outdoor-living",
    description:
      "Wood, composite, and vinyl decks designed for outdoor living in Ontario.",
    benefit: "Build the part of your home you use outside.",
    image: "/images/services/deck.webp",
    imageTone: "from-[#6b4a32] to-[#3d2a1c]",
    menuGroup: "Outdoor Living",
  },
  {
    slug: "composite-decks",
    name: "Composite Decks",
    shortName: "Composite",
    href: "/decks",
    category: "outdoor-living",
    description: "Low-maintenance composite decking for lasting outdoor living spaces.",
    benefit: "Durable outdoor living with less upkeep.",
    image: "/images/services/composite-deck.webp",
    imageTone: "from-[#4a3a32] to-[#2a221c]",
    menuGroup: "Outdoor Living",
  },
  {
    slug: "vinyl-decks",
    name: "Vinyl Decks",
    shortName: "Vinyl Decks",
    href: "/decks",
    category: "outdoor-living",
    description: "Clean vinyl deck surfaces designed for comfort and easy care.",
    benefit: "Comfortable outdoor flooring with practical upkeep.",
    image: "/images/services/vinyl-deck.webp",
    imageTone: "from-[#6a655c] to-[#3e3b36]",
    menuGroup: "Outdoor Living",
  },
  {
    slug: "pergolas",
    name: "Pergolas",
    shortName: "Pergolas",
    href: "/pergolas",
    category: "outdoor-living",
    description:
      "Pergolas and outdoor structures that shape shade, dining, and entertaining areas.",
    benefit: "Structure and atmosphere for your backyard.",
    image: "/images/services/pergola.webp",
    imageTone: "from-[#5a4a3a] to-[#2e261c]",
    menuGroup: "Outdoor Living",
  },
  {
    slug: "railings",
    name: "Railings",
    shortName: "Railings",
    href: "/decks",
    category: "outdoor-living",
    description: "Safety and style for decks, stairs, and elevated outdoor living areas.",
    benefit: "Clean lines that finish the space.",
    image: "/images/services/railings.webp",
    imageTone: "from-[#333] to-[#555]",
    menuGroup: "Outdoor Living",
  },
  {
    slug: "outdoor-living",
    name: "Outdoor Living",
    shortName: "Outdoor Living",
    href: "/pergolas",
    category: "outdoor-living",
    description:
      "Coordinated outdoor living solutions beyond the fence line.",
    benefit: "Backyard transformation, not just a perimeter.",
    image: "/images/services/outdoor-living.webp",
    imageTone: "from-[#354a3b] to-[#1e2a22]",
    menuGroup: "Outdoor Living",
  },
];

export const homepageServiceCards = [
  "wood",
  "vinyl",
  "ornamental",
  "chain-link",
  "commercial",
  "decks",
  "automated-gates",
  "pergolas",
].map((slug) => services.find((s) => s.slug === slug)!);

export const fenceSelectorMap: Record<string, string[]> = {
  Privacy: ["wood", "vinyl"],
  "Low Maintenance": ["vinyl", "ornamental", "chain-link"],
  Security: ["ornamental", "commercial", "automated-gates"],
  Budget: ["chain-link", "wood"],
  "Pool Safety": ["pool", "ornamental"],
  "Curb Appeal": ["ornamental", "wood", "vinyl"],
  Pets: ["pet", "chain-link", "wood"],
  "Commercial Property": ["commercial", "automated-gates", "security"],
};

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
