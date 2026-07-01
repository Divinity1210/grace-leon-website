/* ─── Grace Leon Product Catalogue ─── */

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  brand: "LEON RINGS" | "GRACE LEON JEWELRIES" | "GRACE LEON STERLING";
  category: string;
  price: { ngn: string; gbp: string; usd: string };
  images: string[];
  details: {
    material: string;
    stone?: string;
    finish: string;
  };
  description: string;
};

export const products: Product[] = [
  // ═══════════════════════════════════
  // LEON RINGS. Engagement & Wedding
  // ═══════════════════════════════════
  {
    slug: "the-sovereign-solitaire",
    name: "The Sovereign Solitaire",
    tagline: "Four arches. One ring. A mark that means something.",
    brand: "LEON RINGS",
    category: "Engagement",
    price: { ngn: "₦1,200,000", gbp: "£2,400", usd: "$3,100" },
    images: [
      "/products/WhatsApp Image 2026-06-24 at 13.59.24 (1).jpeg",
      "/products/WhatsApp Image 2026-06-24 at 13.59.29 (3).jpeg",
    ],
    details: { material: "18k Solid Yellow Gold", stone: "Round Brilliant Diamond", finish: "Polished" },
    description: "The Sovereign Solitaire is the signature Leon Rings engagement piece, featuring a cushion-set brilliant diamond on a twisted pavé band. Designed to be inherited.",
  },
  {
    slug: "the-legacy-band",
    name: "The Legacy Band",
    tagline: "The ring that seals it.",
    brand: "LEON RINGS",
    category: "Wedding",
    price: { ngn: "₦450,000", gbp: "£900", usd: "$1,150" },
    images: [
      "/products/WhatsApp Image 2026-06-24 at 13.59.31.jpeg",
      "/products/WhatsApp Image 2026-06-24 at 13.59.31 (1).jpeg",
    ],
    details: { material: "18k Solid Yellow Gold", finish: "High Polish" },
    description: "A timeless classic band in solid 18k gold. No embellishment, no excess, just the weight and warmth of gold that will be there for every anniversary.",
  },
  {
    slug: "the-eternity-solitaire",
    name: "The Eternity Solitaire",
    tagline: "A promise that goes all the way around.",
    brand: "LEON RINGS",
    category: "Engagement",
    price: { ngn: "₦1,850,000", gbp: "£3,700", usd: "$4,800" },
    images: [
      "/products/WhatsApp Image 2026-06-24 at 13.59.31 (2).jpeg",
      "/products/WhatsApp Image 2026-06-24 at 13.59.31 (3).jpeg",
    ],
    details: { material: "18k White Gold", stone: "Cushion Cut Diamond", finish: "Polished" },
    description: "The Eternity Solitaire elevates the classic engagement ring with a halo setting and micro-pavé split shank. For the woman who carries herself like the room already knows her.",
  },
  {
    slug: "the-promise-ring",
    name: "The Promise Ring",
    tagline: "Before the vow, the intention.",
    brand: "LEON RINGS",
    category: "Engagement",
    price: { ngn: "₦980,000", gbp: "£1,960", usd: "$2,500" },
    images: [
      "/products/WhatsApp Image 2026-06-24 at 13.59.31 (4).jpeg",
      "/products/WhatsApp Image 2026-06-24 at 13.59.31 (5).jpeg",
    ],
    details: { material: "18k White Gold", stone: "Princess Cut Diamond", finish: "Polished" },
    description: "A single princess-cut stone, set squarely and without ceremony. The Promise Ring says everything without raising its voice.",
  },
  {
    slug: "the-duo-band",
    name: "The Duo Band",
    tagline: "Two rings. One story.",
    brand: "LEON RINGS",
    category: "Wedding",
    price: { ngn: "₦780,000", gbp: "£1,560", usd: "$2,000" },
    images: [
      "/products/WhatsApp Image 2026-06-24 at 13.59.31 (6).jpeg",
    ],
    details: { material: "18k Yellow & White Gold", finish: "Mixed Polish" },
    description: "A matched pair of wedding bands, his in brushed yellow gold, hers in polished white gold. Designed to be different, but unmistakably together.",
  },

  // ═══════════════════════════════════
  // GRACE LEON JEWELRIES. Sets
  // ═══════════════════════════════════
  {
    slug: "emerald-halo-set",
    name: "Emerald Halo Set",
    tagline: "The complete statement.",
    brand: "GRACE LEON JEWELRIES",
    category: "Sets",
    price: { ngn: "₦2,800,000", gbp: "£5,600", usd: "$7,200" },
    images: [
      "/products/WhatsApp Image 2026-06-24 at 13.59.25.jpeg",
      "/products/WhatsApp Image 2026-06-24 at 13.59.25 (1).jpeg",
    ],
    details: { material: "Sterling Silver with Rhodium Plating", stone: "Emerald & Cubic Zirconia", finish: "Polished" },
    description: "A matching emerald necklace and earring set on a marquise-link chain. The halo setting frames each stone with a constellation of brilliant-cut CZ.",
  },
  {
    slug: "amethyst-emerald-collar",
    name: "Amethyst & Emerald Collar",
    tagline: "Every stone has a story.",
    brand: "GRACE LEON JEWELRIES",
    category: "Sets",
    price: { ngn: "₦3,200,000", gbp: "£6,400", usd: "$8,200" },
    images: [
      "/products/WhatsApp Image 2026-06-24 at 13.59.29.jpeg",
      "/products/WhatsApp Image 2026-06-24 at 13.59.29 (1).jpeg",
    ],
    details: { material: "Sterling Silver with Rhodium Plating", stone: "Amethyst & Emerald Cabochon", finish: "Polished" },
    description: "An alternating cabochon collar necklace with matching cluster earrings. Green and purple stones set in silver filigree, drama and elegance in equal measure.",
  },
  {
    slug: "sapphire-teardrop-set",
    name: "Sapphire Teardrop Set",
    tagline: "Depth, in every direction.",
    brand: "GRACE LEON JEWELRIES",
    category: "Sets",
    price: { ngn: "₦2,400,000", gbp: "£4,800", usd: "$6,200" },
    images: [
      "/products/WhatsApp Image 2026-06-24 at 13.59.25 (4).jpeg",
      "/products/WhatsApp Image 2026-06-24 at 13.59.25 (5).jpeg",
    ],
    details: { material: "Sterling Silver with Rhodium Plating", stone: "Blue Sapphire & CZ", finish: "Polished" },
    description: "A matching necklace and earring set featuring teardrop sapphires framed by brilliant-cut stones. The blue is deep enough to hold a secret.",
  },
  {
    slug: "rose-quartz-cascade",
    name: "Rose Quartz Cascade",
    tagline: "Softness that commands.",
    brand: "GRACE LEON JEWELRIES",
    category: "Sets",
    price: { ngn: "₦1,950,000", gbp: "£3,900", usd: "$5,000" },
    images: [
      "/products/WhatsApp Image 2026-06-24 at 13.59.25 (8).jpeg",
      "/products/WhatsApp Image 2026-06-24 at 13.59.25 (9).jpeg",
    ],
    details: { material: "Rose Gold Plated Sterling Silver", stone: "Rose Quartz & CZ", finish: "Rose Gold" },
    description: "A cascading necklace with graduated rose quartz stones, paired with matching drop earrings. Warm, feminine, and unmistakably intentional.",
  },
  {
    slug: "crystal-garland-set",
    name: "Crystal Garland Set",
    tagline: "A constellation worn close.",
    brand: "GRACE LEON JEWELRIES",
    category: "Sets",
    price: { ngn: "₦2,100,000", gbp: "£4,200", usd: "$5,400" },
    images: [
      "/products/WhatsApp Image 2026-06-24 at 13.59.29 (2).jpeg",
      "/products/WhatsApp Image 2026-06-24 at 13.59.29 (4).jpeg",
    ],
    details: { material: "Sterling Silver", stone: "Multi-Cut CZ", finish: "Rhodium Plated" },
    description: "A statement necklace of mixed-cut crystals arranged in a garland formation with matching drop earrings. Every surface catches a different angle of light.",
  },
  {
    slug: "ruby-marquise-set",
    name: "Ruby Marquise Set",
    tagline: "Red that answers to nothing.",
    brand: "GRACE LEON JEWELRIES",
    category: "Sets",
    price: { ngn: "₦2,600,000", gbp: "£5,200", usd: "$6,700" },
    images: [
      "/products/WhatsApp Image 2026-06-24 at 13.59.29 (5).jpeg",
      "/products/WhatsApp Image 2026-06-24 at 13.59.29 (6).jpeg",
    ],
    details: { material: "Sterling Silver", stone: "Synthetic Ruby & CZ", finish: "Rhodium Plated" },
    description: "Marquise-cut ruby stones set in a graduated collar with matching cluster earrings. The kind of red that enters a room before you do.",
  },

  // ═══════════════════════════════════
  // GRACE LEON JEWELRIES. Earrings
  // ═══════════════════════════════════
  {
    slug: "pave-embrace-hoops",
    name: "Pavé Embrace Hoops",
    tagline: "The circle that never ends.",
    brand: "GRACE LEON JEWELRIES",
    category: "Earrings",
    price: { ngn: "₦320,000", gbp: "£640", usd: "$820" },
    images: [
      "/products/WhatsApp Image 2026-06-24 at 13.59.25 (2).jpeg",
      "/products/WhatsApp Image 2026-06-24 at 13.59.25 (3).jpeg",
    ],
    details: { material: "Sterling Silver", stone: "Cubic Zirconia", finish: "Polished" },
    description: "Generously sized hoops encrusted with pavé-set stones. They catch the light the way confidence catches attention, effortlessly.",
  },
  {
    slug: "emerald-solitaire-studs",
    name: "Emerald Solitaire Studs",
    tagline: "Green that does not need permission.",
    brand: "GRACE LEON JEWELRIES",
    category: "Earrings",
    price: { ngn: "₦420,000", gbp: "£840", usd: "$1,080" },
    images: [
      "/products/WhatsApp Image 2026-06-24 at 13.59.25 (10).jpeg",
      "/products/WhatsApp Image 2026-06-24 at 13.59.26.jpeg",
    ],
    details: { material: "Sterling Silver", stone: "Emerald CZ", finish: "Rhodium Plated" },
    description: "Oval emerald-cut stones in a halo setting. Designed to be noticed without trying, the hallmark of true elegance.",
  },

  // ═══════════════════════════════════
  // GRACE LEON JEWELRIES. Necklaces
  // ═══════════════════════════════════
  {
    slug: "lumiere-pendant",
    name: "Lumière Pendant",
    tagline: "Light, contained.",
    brand: "GRACE LEON JEWELRIES",
    category: "Necklaces",
    price: { ngn: "₦380,000", gbp: "£760", usd: "$980" },
    images: [
      "/products/WhatsApp Image 2026-06-24 at 13.59.30.jpeg",
      "/products/WhatsApp Image 2026-06-24 at 13.59.30 (1).jpeg",
    ],
    details: { material: "Sterling Silver", stone: "Cushion Cut CZ", finish: "Polished" },
    description: "A single cushion-cut stone suspended from a delicate chain. The Lumière pendant rests at the clavicle, a quiet punctuation to any neckline.",
  },
  {
    slug: "diamond-collar-necklace",
    name: "Diamond Collar Necklace",
    tagline: "Every facet earns its place.",
    brand: "GRACE LEON JEWELRIES",
    category: "Necklaces",
    price: { ngn: "₦2,200,000", gbp: "£4,400", usd: "$5,700" },
    images: [
      "/products/WhatsApp Image 2026-06-24 at 13.59.29 (7).jpeg",
      "/products/WhatsApp Image 2026-06-24 at 13.59.29 (8).jpeg",
    ],
    details: { material: "Sterling Silver", stone: "Mixed Cut CZ", finish: "Rhodium Plated" },
    description: "A full collar of mixed-cut stones tapering from the centre. Not a necklace, but an architecture of light that follows the neckline.",
  },

  // ═══════════════════════════════════
  // GRACE LEON JEWELRIES. Bracelets
  // ═══════════════════════════════════
  {
    slug: "diamond-tennis-bracelet",
    name: "Diamond Tennis Bracelet",
    tagline: "A line of light around the wrist.",
    brand: "GRACE LEON JEWELRIES",
    category: "Bracelets",
    price: { ngn: "₦1,600,000", gbp: "£3,200", usd: "$4,100" },
    images: [
      "/products/WhatsApp Image 2026-06-24 at 13.59.25 (6).jpeg",
      "/products/WhatsApp Image 2026-06-24 at 13.59.25 (7).jpeg",
    ],
    details: { material: "Sterling Silver", stone: "Round Brilliant CZ", finish: "Rhodium Plated" },
    description: "An unbroken line of individually set stones, each catching a different angle of light. The kind of piece that makes a wrist memorable.",
  },

  // ═══════════════════════════════════
  // GRACE LEON JEWELRIES. Bags
  // ═══════════════════════════════════
  {
    slug: "croc-sovereign-clutch",
    name: "Croc Sovereign Clutch",
    tagline: "The bag that enters a room first.",
    brand: "GRACE LEON JEWELRIES",
    category: "Bags",
    price: { ngn: "₦850,000", gbp: "£1,700", usd: "$2,200" },
    images: [
      "/products/WhatsApp Image 2026-06-24 at 13.59.24.jpeg",
    ],
    details: { material: "Croc-Embossed Italian Leather", finish: "Gold Hardware" },
    description: "A structured top-handle clutch in croc-embossed leather with a sculptural gold handle. It is not just an accessory; it is an entrance.",
  },
  {
    slug: "rose-crystal-minaudiere",
    name: "Rose Crystal Minaudière",
    tagline: "Pink is not a colour. It is a decision.",
    brand: "GRACE LEON JEWELRIES",
    category: "Bags",
    price: { ngn: "₦1,200,000", gbp: "£2,400", usd: "$3,100" },
    images: [
      "/products/WhatsApp Image 2026-06-24 at 13.59.26 (3).jpeg",
    ],
    details: { material: "Gold Alloy & Crystal", finish: "Rose Crystal Encrusted" },
    description: "A sculpted minaudière encrusted with faceted pink and rose crystals. Carried like a jewel, opened like a secret. Every surface refracts.",
  },
  {
    slug: "mosaic-globe-clutch",
    name: "Mosaic Globe Clutch",
    tagline: "The world in your hand.",
    brand: "GRACE LEON JEWELRIES",
    category: "Bags",
    price: { ngn: "₦1,350,000", gbp: "£2,700", usd: "$3,500" },
    images: [
      "/products/WhatsApp Image 2026-06-24 at 13.59.26 (4).jpeg",
    ],
    details: { material: "Gold Alloy & Crystal", finish: "Multi-Colour Crystal" },
    description: "A spherical clutch covered in a mosaic of multi-coloured gemstones set in gold. Each angle reveals a different colour palette, like stained glass you carry.",
  },
  {
    slug: "emerald-lotus-clutch",
    name: "Emerald Lotus Clutch",
    tagline: "Green that remembers its roots.",
    brand: "GRACE LEON JEWELRIES",
    category: "Bags",
    price: { ngn: "₦1,150,000", gbp: "£2,300", usd: "$2,950" },
    images: [
      "/products/WhatsApp Image 2026-06-24 at 13.59.26 (5).jpeg",
    ],
    details: { material: "Gold Alloy & Crystal", finish: "Emerald Crystal" },
    description: "An oval clutch with marquise-cut emerald stones arranged in a lotus pattern, set in gold filigree. A piece that holds everything you need, and everything you are.",
  },
  {
    slug: "noir-emerald-box-clutch",
    name: "Noir Emerald Box Clutch",
    tagline: "Darkness that shines.",
    brand: "GRACE LEON JEWELRIES",
    category: "Bags",
    price: { ngn: "₦1,100,000", gbp: "£2,200", usd: "$2,800" },
    images: [
      "/products/WhatsApp Image 2026-06-24 at 13.59.27.jpeg",
    ],
    details: { material: "Gunmetal Alloy & Crystal", finish: "Emerald Crystal on Black" },
    description: "A box clutch in dark gunmetal, studded with deep emerald teardrops woven through pavé ribbons. Night and jewel, meeting on equal terms.",
  },
  {
    slug: "imperial-jewel-box",
    name: "Imperial Jewel Box",
    tagline: "Every colour has earned its place.",
    brand: "GRACE LEON JEWELRIES",
    category: "Bags",
    price: { ngn: "₦1,250,000", gbp: "£2,500", usd: "$3,200" },
    images: [
      "/products/WhatsApp Image 2026-06-24 at 13.59.27 (1).jpeg",
    ],
    details: { material: "Gunmetal Alloy & Crystal", finish: "Multi-Colour on Black" },
    description: "A structured box clutch in jet black, set with ruby, amber, topaz, and amethyst stones in a symmetrical crown formation. The kind of bag that starts conversations.",
  },
  {
    slug: "cloud-clutch",
    name: "Cloud Clutch",
    tagline: "Softness, structured.",
    brand: "GRACE LEON JEWELRIES",
    category: "Bags",
    price: { ngn: "₦680,000", gbp: "£1,360", usd: "$1,750" },
    images: [
      "/products/WhatsApp Image 2026-06-24 at 13.59.27 (2).jpeg",
      "/products/WhatsApp Image 2026-06-24 at 13.59.27 (3).jpeg",
    ],
    details: { material: "Italian Nappa Leather", finish: "Gold Clip Closure" },
    description: "A sculpted cloud-form clutch in cream nappa leather with a single gold clasp. Impossibly soft, quietly structural, the hand finds it before the eye does.",
  },

  // ═══════════════════════════════════
  // GRACE LEON STERLING. Necklaces
  // ═══════════════════════════════════
  {
    slug: "arch-link-pendant",
    name: "Arch Link Pendant",
    tagline: "Crafted to last.",
    brand: "GRACE LEON STERLING",
    category: "Necklaces",
    price: { ngn: "₦180,000", gbp: "£360", usd: "$460" },
    images: [
      "/products/WhatsApp Image 2026-06-24 at 13.59.28.jpeg",
      "/products/WhatsApp Image 2026-06-24 at 13.59.28 (1).jpeg",
    ],
    details: { material: "925 Sterling Silver", stone: "CZ Accent", finish: "Polished" },
    description: "A minimalist arch-shaped pendant on a fine sterling chain with a single crystal accent. The Grace Leon arch motif in its purest form.",
  },
  {
    slug: "sterling-chain-necklace",
    name: "Sterling Chain Necklace",
    tagline: "The foundation of every look.",
    brand: "GRACE LEON STERLING",
    category: "Necklaces",
    price: { ngn: "₦120,000", gbp: "£240", usd: "$310" },
    images: [
      "/products/WhatsApp Image 2026-06-24 at 13.59.28 (2).jpeg",
      "/products/WhatsApp Image 2026-06-24 at 13.59.28 (3).jpeg",
    ],
    details: { material: "925 Sterling Silver", finish: "Polished" },
    description: "A fine-gauge sterling silver chain with a lobster clasp. Worn alone as a whisper, or layered for statement. The essential.",
  },
  {
    slug: "drop-crystal-pendant",
    name: "Drop Crystal Pendant",
    tagline: "One stone. All the light you need.",
    brand: "GRACE LEON STERLING",
    category: "Necklaces",
    price: { ngn: "₦145,000", gbp: "£290", usd: "$370" },
    images: [
      "/products/WhatsApp Image 2026-06-24 at 13.59.28 (4).jpeg",
      "/products/WhatsApp Image 2026-06-24 at 13.59.28 (5).jpeg",
    ],
    details: { material: "925 Sterling Silver", stone: "CZ Solitaire", finish: "Polished" },
    description: "A single pear-drop crystal on a delicate sterling chain. It catches the light from every angle, a small fire at the throat.",
  },

  // ═══════════════════════════════════
  // GRACE LEON STERLING. Earrings
  // ═══════════════════════════════════
  {
    slug: "crystal-drop-earrings",
    name: "Crystal Drop Earrings",
    tagline: "Movement, captured.",
    brand: "GRACE LEON STERLING",
    category: "Earrings",
    price: { ngn: "₦160,000", gbp: "£320", usd: "$410" },
    images: [
      "/products/WhatsApp Image 2026-06-24 at 13.59.26 (1).jpeg",
      "/products/WhatsApp Image 2026-06-24 at 13.59.26 (2).jpeg",
    ],
    details: { material: "925 Sterling Silver", stone: "CZ", finish: "Polished" },
    description: "Delicate crystal drops that move with you. Designed to catch candlelight, city light, and every kind of attention that matters.",
  },
  {
    slug: "sterling-huggie-earrings",
    name: "Sterling Huggie Earrings",
    tagline: "Close. As it should be.",
    brand: "GRACE LEON STERLING",
    category: "Earrings",
    price: { ngn: "₦95,000", gbp: "£190", usd: "$245" },
    images: [
      "/products/WhatsApp Image 2026-06-24 at 13.59.28 (6).jpeg",
      "/products/WhatsApp Image 2026-06-24 at 13.59.28 (7).jpeg",
    ],
    details: { material: "925 Sterling Silver", finish: "Polished" },
    description: "Slim huggie hoops that sit flush against the lobe. No dangle, no drama, just a clean line of silver that says enough.",
  },

  // ═══════════════════════════════════
  // Additional sets and lifestyle pieces
  // ═══════════════════════════════════
  {
    slug: "moonstone-riviere",
    name: "Moonstone Rivière",
    tagline: "Light that follows the collarbone.",
    brand: "GRACE LEON JEWELRIES",
    category: "Sets",
    price: { ngn: "₦2,900,000", gbp: "£5,800", usd: "$7,500" },
    images: [
      "/products/WhatsApp Image 2026-06-24 at 13.59.29 (9).jpeg",
      "/products/WhatsApp Image 2026-06-24 at 13.59.29 (10).jpeg",
    ],
    details: { material: "Sterling Silver", stone: "Moonstone & CZ", finish: "Rhodium Plated" },
    description: "A graduated rivière necklace with cabochon moonstone centres and matching earrings. The stones shift colour with movement, and no two glances are the same.",
  },
  {
    slug: "pear-drop-collar",
    name: "Pear Drop Collar",
    tagline: "Architecture for the neck.",
    brand: "GRACE LEON JEWELRIES",
    category: "Sets",
    price: { ngn: "₦2,350,000", gbp: "£4,700", usd: "$6,050" },
    images: [
      "/products/WhatsApp Image 2026-06-24 at 13.59.29 (11).jpeg",
      "/products/WhatsApp Image 2026-06-24 at 13.59.30 (2).jpeg",
    ],
    details: { material: "Sterling Silver", stone: "Pear Cut CZ", finish: "Rhodium Plated" },
    description: "A structured collar of pear-cut stones descending in a V-formation, with matched teardrops for the ears. Every angle was calculated.",
  },
  {
    slug: "sovereign-pendant",
    name: "Sovereign Pendant",
    tagline: "The chain that carries weight.",
    brand: "GRACE LEON STERLING",
    category: "Necklaces",
    price: { ngn: "₦165,000", gbp: "£330", usd: "$425" },
    images: [
      "/products/WhatsApp Image 2026-06-24 at 13.59.30 (3).jpeg",
      "/products/WhatsApp Image 2026-06-24 at 13.59.30 (4).jpeg",
    ],
    details: { material: "925 Sterling Silver", stone: "CZ", finish: "Polished" },
    description: "A slim sovereign pendant on a curb chain. Understated by design, intentional by nature. Sterling, and nothing else.",
  },
];

/* ─── Helpers ─── */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByBrand(brand: string): Product[] {
  if (brand === "ALL") return products;
  return products.filter((p) => p.brand === brand);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "ALL") return products;
  return products.filter((p) => p.category.toLowerCase() === category.toLowerCase());
}

export const brands = ["ALL", "LEON RINGS", "GRACE LEON JEWELRIES", "GRACE LEON STERLING"] as const;
export const categories = ["ALL", "Engagement", "Wedding", "Sets", "Necklaces", "Earrings", "Bracelets", "Bags"] as const;
