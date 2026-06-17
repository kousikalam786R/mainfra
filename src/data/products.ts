export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  price: string;
  priceRange: string;
  description: string;
  shortDescription: string;
  images: string[];
  features: string[];
  specifications: Record<string, string>;
  tags: string[];
  isNew?: boolean;
  isBestseller?: boolean;
  rating: number;
  reviews: number;
  deliveryTime: string;
}

export const categories = [
  {
    id: "portable-office",
    slug: "portable-office-cabin",
    name: "Portable Office Cabin",
    description: "Premium office spaces that go anywhere",
    icon: "🏢",
    count: 3,
    image: "/product/officeCabin.jpeg",
  },
  {
    id: "security-cabin",
    slug: "security-cabin",
    name: "Security Cabin",
    description: "Robust guard posts for every facility",
    icon: "🛡️",
    count: 1,
    image: "/product/securetyCabin.jpeg",
  },
  {
    id: "portable-toilet",
    slug: "portable-toilet",
    name: "Portable Toilet",
    description: "Hygienic sanitation solutions",
    icon: "🚿",
    count: 1,
    image: "/product/portabletoilet.jpeg",
  },
  {
    id: "farm-house",
    slug: "farm-house",
    name: "Farm House",
    description: "Modern living in modular containers",
    icon: "🏠",
    count: 2,
    image: "/product/farmhouse.jpeg",
  },
  {
    id: "Portable-office",
    slug: "Portable-office",
    name: "Portable Office",
    description: "Scalable workspace solutions",
    icon: "🏗️",
    count: 3,
    image: "/product/portableOffice.jpeg",
  },
  {
    id: "storage-cabin",
    slug: "portable-storage-cabin",
    name: "Portable Storage Cabin",
    description: "Secure on-site storage units",
    icon: "📦",
    count: 0,
    image: "/product/securetyCabin.jpeg",
  },
];

export const products: Product[] = [
  {
    id: "1",
    slug: "ms-portable-office-cabin-20x10",
    name: "MS Portable Office Cabin",
    category: "Portable Office Cabin",
    categorySlug: "portable-office-cabin",
    price: "₹1,80,000",
    priceRange: "₹1,80,000",
    description:
      "Our MS Portable Office Cabin is built with mild steel framing and insulated panels for a complete on-site office. Ideal for project sites, factories, and commercial yards, it includes electrical provisions, windows, and a durable weather-resistant finish.",
    shortDescription:
      "20 ft × 10 ft MS portable office cabin with insulated panels and electrical fittings.",
    images: [
      "/product/officeCabin.jpeg",
      "/product/portableOffice.jpeg",
      "/product/WhatsApp%20Image%202026-05-29%20at%2010.32.48%20PM.jpeg",
      "/product/WhatsApp%20Image%202026-05-29%20at%2010.35.48%20PM.jpeg",
    ],
    features: [
      "MS pre-engineered steel frame structure",
      "EPS/PUF insulated sandwich panels",
      "Electrical wiring & switchboard",
      "Windows with mosquito mesh",
      "Anti-rust primer coated",
      "PVC flooring with anti-slip finish",
      "False ceiling with LED lighting",
      "Ventilators and exhaust fans",
    ],
    specifications: {
      "Standard Size": "20 ft × 10 ft × 8.5 ft",
      "Wall Thickness": "50mm EPS sandwich panel",
      "Floor Thickness": "75mm",
      "Roof Type": "Sloped / Flat",
      "Door": "Single/Double CRCA steel door",
      "Windows": "2–4 sliding aluminum windows",
      "Material": "Mild steel (MS) structure",
      "Setup Time": "4–6 hours",
    },
    tags: ["office", "portable", "ms", "cabin"],
    isNew: false,
    isBestseller: true,
    rating: 4.8,
    reviews: 124,
    deliveryTime: "7–10 working days",
  },
  {
    id: "2",
    slug: "ms-portable-site-office-cabin-15x10",
    name: "MS Portable Site Office Cabin",
    category: "Portable Office Cabin",
    categorySlug: "portable-office-cabin",
    price: "₹1,45,000",
    priceRange: "₹1,45,000",
    description:
      "A compact MS site office cabin for contractors and project managers who need a functional, weatherproof workspace on-site. Built with galvanized steel structure, insulated roofing, and standard electrical provisions at an economical size.",
    shortDescription:
      "15 ft × 10 ft MS site office cabin — compact, weatherproof, and ready for on-site use.",
    images: [
      "/product/officeCabin.jpeg",
      "/product/portableOffice.jpeg",
      "/product/WhatsApp%20Image%202026-05-29%20at%2010.27.31%20PM%20(1).jpeg",
      "/product/WhatsApp%20Image%202026-05-29%20at%2010.43.15%20PM.jpeg",
    ],
    features: [
      "Galvanized MS primary structure",
      "EPS insulated roof and walls",
      "2 aluminum sliding windows",
      "Single steel door with lock",
      "Basic electrical wiring included",
      "Anti-rust paint finish",
      "Relocatable design",
      "Quick 4-hour assembly",
    ],
    specifications: {
      "Standard Size": "15 ft × 10 ft × 8.5 ft",
      "Wall Panel": "40mm EPS sandwich",
      "Roof": "Corrugated GI sheet with EPS",
      "Flooring": "MS checkered plate",
      "Door": "Single steel door",
      "Windows": "2 aluminum sliding",
      "Material": "Mild steel (MS) structure",
      "Setup Time": "4–6 hours",
    },
    tags: ["office", "site", "portable", "ms", "cabin"],
    isNew: false,
    isBestseller: false,
    rating: 4.6,
    reviews: 98,
    deliveryTime: "5–7 working days",
  },
  {
    id: "3",
    slug: "ms-portable-labour-cabin-25x12",
    name: "MS Portable Labour Cabin",
    category: "Portable Office Cabin",
    categorySlug: "portable-office-cabin",
    price: "₹2,65,000",
    priceRange: "₹2,65,000",
    description:
      "Spacious MS labour accommodation cabin for construction sites and industrial projects. This 25 ft × 12 ft unit provides ample room for worker housing with durable steel construction, ventilation, and weather-resistant finishing.",
    shortDescription:
      "25 ft × 12 ft MS labour cabin for on-site worker accommodation at large project sites.",
    images: [
      "/product/portableOffice.jpeg",
      "/product/officeCabin.jpeg",
      "/product/WhatsApp%20Image%202026-05-29%20at%2010.49.42%20PM.jpeg",
      "/product/WhatsApp%20Image%202026-05-29%20at%2010.50.03%20PM.jpeg",
    ],
    features: [
      "Heavy-gauge MS steel frame",
      "Insulated sandwich panel walls",
      "Multiple windows for ventilation",
      "Steel door with secure locking",
      "Electrical wiring provision",
      "Anti-rust powder coat finish",
      "Forklift-compatible base",
      "Customizable interior layout",
    ],
    specifications: {
      "Standard Size": "25 ft × 12 ft × 8.5 ft",
      "Wall Panel": "50mm EPS/PUF sandwich",
      "Roof": "Insulated corrugated GI sheet",
      "Flooring": "MS checkered plate / vinyl",
      "Door": "Single/Double steel door",
      "Windows": "4+ sliding aluminum windows",
      "Material": "Mild steel (MS) structure",
      "Setup Time": "6–8 hours",
    },
    tags: ["labour", "accommodation", "portable", "ms", "cabin"],
    isNew: false,
    isBestseller: true,
    rating: 4.7,
    reviews: 76,
    deliveryTime: "10–14 working days",
  },
  {
    id: "4",
    slug: "portable-security-cabin-4x4",
    name: "Portable Security Cabin",
    category: "Security Cabin",
    categorySlug: "security-cabin",
    price: "₹40,000",
    priceRange: "₹40,000",
    description:
      "Compact portable security cabin for round-the-clock guard duty at construction sites, factories, gated communities, and commercial complexes. Weatherproof steel construction with sliding windows for clear visibility.",
    shortDescription:
      "4 ft × 4 ft portable security cabin — compact, weatherproof, and built for guard posts.",
    images: [
      "/product/securetyCabin.jpeg",
      "/product/toilet.jpeg",
      "/product/portableOffice.jpeg",
      "/product/WhatsApp%20Image%202026-05-29%20at%2010.50.03%20PM.jpeg",
    ],
    features: [
      "All-round visibility with windows",
      "Heavy-gauge CRCA steel body",
      "Anti-rust powder coat finish",
      "Lockable steel door",
      "Electrical connection point",
      "Ventilation louvers",
      "Compact footprint",
      "Quick 1–2 hour setup",
    ],
    specifications: {
      "Standard Size": "4 ft × 4 ft × 8.5 ft",
      "Material": "2mm CRCA steel",
      "Finish": "Epoxy powder coating",
      "Roof": "Sloped with waterproofing",
      "Windows": "Sliding windows with bars",
      "Door": "Single panel steel door",
      "Weight": "Approx. 200 kg",
      "Setup Time": "1–2 hours",
    },
    tags: ["security", "guard", "cabin", "portable"],
    isNew: false,
    isBestseller: true,
    rating: 4.7,
    reviews: 87,
    deliveryTime: "3–5 working days",
  },
  {
    id: "5",
    slug: "portable-toilet-4x4",
    name: "Portable Toilet",
    category: "Portable Toilet",
    categorySlug: "portable-toilet",
    price: "₹45,000",
    priceRange: "₹45,000",
    description:
      "Hygienic portable toilet unit for construction sites, events, and remote locations. Self-contained design with ventilation, lockable door, and durable construction for easy transport and quick deployment.",
    shortDescription:
      "4 ft × 4 ft portable toilet unit for construction sites and outdoor events.",
    images: [
      "/product/portabletoilet.jpeg",
      "/product/toilet.jpeg",
    ],
    features: [
      "Durable steel/HDPE body",
      "Self-contained waste provision",
      "Natural ventilation system",
      "Non-slip floor surface",
      "Roof vent for odor control",
      "Lockable door",
      "Lightweight and portable",
      "Quick on-site installation",
    ],
    specifications: {
      "Standard Size": "4 ft × 4 ft × 8.5 ft",
      "Material": "Steel / HDPE composite",
      "Door": "Inward opening with lock",
      "Ventilation": "Roof vent + louvered panels",
      "Finish": "Weather-resistant coating",
      "Weight": "Approx. 80 kg",
      "Setup Time": "Under 1 hour",
    },
    tags: ["toilet", "portable", "sanitation", "hygiene"],
    isNew: false,
    isBestseller: false,
    rating: 4.5,
    reviews: 198,
    deliveryTime: "2–3 working days",
  },
  {
    id: "6",
    slug: "bunk-house-cabin-20x10",
    name: "Bunk House Cabin",
    category: "Farm House",
    categorySlug: "farm-house",
    price: "₹2,40,000",
    priceRange: "₹2,40,000",
    description:
      "MS bunk house cabin for worker accommodation at construction and industrial sites. The 20 ft × 10 ft layout provides comfortable shared living space with insulated walls, ventilation, and durable steel construction.",
    shortDescription:
      "20 ft × 10 ft bunk house cabin for on-site worker accommodation.",
    images: [
      "/product/farmhouse.jpeg",
      "/product/WhatsApp%20Image%202026-05-29%20at%2010.46.05%20PM.jpeg",
      "/product/WhatsApp%20Image%202026-05-29%20at%2010.35.48%20PM.jpeg",
      "/product/WhatsApp%20Image%202026-05-29%20at%2010.48.13%20PM.jpeg",
    ],
    features: [
      "MS steel frame structure",
      "Insulated sandwich panel walls",
      "Bunk bed provision layout",
      "Windows with security bars",
      "Electrical wiring included",
      "Anti-rust coated finish",
      "Weather-resistant roofing",
      "Relocatable design",
    ],
    specifications: {
      "Standard Size": "20 ft × 10 ft × 8.5 ft",
      "Wall System": "50mm PUF/EPS panel",
      "Flooring": "MS checkered plate / vinyl",
      "Roof": "Insulated corrugated GI sheet",
      "Door": "Single/Double steel door",
      "Windows": "2–4 sliding windows",
      "Material": "Mild steel (MS) structure",
      "Setup Time": "6–8 hours",
    },
    tags: ["bunk", "house", "labour", "accommodation", "cabin"],
    isNew: false,
    isBestseller: true,
    rating: 4.8,
    reviews: 64,
    deliveryTime: "10–14 working days",
  },
  {
    id: "7",
    slug: "ms-portable-home-cabin-20x10",
    name: "MS Portable Home Cabin",
    category: "Farm House",
    categorySlug: "farm-house",
    price: "₹2,35,000",
    priceRange: "₹2,35,000",
    description:
      "MS portable home cabin for semi-permanent or temporary living at farms, resorts, and project sites. The 20 ft × 10 ft unit features insulated interiors, electrical provisions, and a finish suited for comfortable accommodation.",
    shortDescription:
      "20 ft × 10 ft MS portable home cabin for farm, resort, and site living.",
    images: [
      "/product/farmhouse.jpeg",
      "/product/WhatsApp%20Image%202026-05-29%20at%2010.46.05%20PM.jpeg",
      "/product/WhatsApp%20Image%202026-05-29%20at%2010.48.13%20PM.jpeg",
      "/product/WhatsApp%20Image%202026-05-29%20at%2010.35.48%20PM.jpeg",
    ],
    features: [
      "MS steel container-style frame",
      "Thermal insulated wall panels",
      "Electrical & lighting provisions",
      "Sliding windows with mesh",
      "Secure steel door",
      "Interior-ready flooring",
      "Anti-rust exterior finish",
      "Custom interior options available",
    ],
    specifications: {
      "Standard Size": "20 ft × 10 ft × 8.5 ft",
      "Wall System": "50mm PUF sandwich panel",
      "Flooring": "Vinyl / hardwood options",
      "Roof": "Insulated sloped roof",
      "Door": "Single steel door",
      "Windows": "2–3 sliding aluminum windows",
      "Material": "Mild steel (MS) structure",
      "Setup Time": "6–8 hours",
    },
    tags: ["home", "portable", "farm", "living", "cabin"],
    isNew: true,
    isBestseller: false,
    rating: 4.9,
    reviews: 42,
    deliveryTime: "10–14 working days",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    designation: "Project Director",
    company: "Larsen & Toubro Ltd.",
    review:
      "MA INFRA delivered 12 site office cabins to our infrastructure project site within 10 days. The quality of the sandwich panels and the finish of the cabins were far superior to what we had sourced previously. Our engineers were particularly impressed with the thermal insulation. Highly recommended for large-scale project deployments.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    location: "Mumbai, Maharashtra",
  },
  {
    id: 2,
    name: "Priya Nair",
    designation: "Facility Manager",
    company: "Embassy Tech Village",
    review:
      "We needed a quick expansion solution for our campus, and MA INFRA's modular office units were the answer. The cabins were delivered, assembled, and handed over in just 8 days. The quality is excellent, the interiors are professional, and the after-sales support has been outstanding.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&q=80",
    location: "Bengaluru, Karnataka",
  },
  {
    id: 3,
    name: "Amit Sharma",
    designation: "Operations Head",
    company: "NHAI (National Highways)",
    review:
      "For our highway project camps, we ordered 30 portable toilets and 8 security cabins from MA INFRA. The delivery was on-schedule and the quality exceeded our expectations. The security cabins are especially robust and our guards are comfortable even in extreme weather conditions.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    location: "Delhi NCR",
  },
  {
    id: 4,
    name: "Sunita Patel",
    designation: "Director",
    company: "Patel Constructions Pvt. Ltd.",
    review:
      "We've been ordering from MA INFRA for 3 years now and they've never disappointed. The pricing is competitive, the build quality is consistent, and their team is always responsive. The container houses we ordered for our workers' quarters were especially well-built.",
    rating: 4,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
    location: "Ahmedabad, Gujarat",
  },
];

export const stats = [
  { label: "Projects Completed", value: "2,500+", icon: "🏗️" },
  { label: "Happy Clients", value: "800+", icon: "😊" },
  { label: "Years of Experience", value: "15+", icon: "📅" },
  { label: "Cities Served", value: "120+", icon: "📍" },
];

export const industries = [
  {
    name: "Construction",
    icon: "🏗️",
    description: "Site offices, labor housing, and storage units",
    image: "/product/officeCabin.jpeg",
  },
  {
    name: "Healthcare",
    icon: "🏥",
    description: "Temporary clinics, isolation wards, and medical camps",
    image: "/product/portableOffice.jpeg",
  },
  {
    name: "Education",
    icon: "🎓",
    description: "Modular classrooms and exam centers",
    image: "/product/WhatsApp%20Image%202026-05-29%20at%2010.43.15%20PM.jpeg",
  },
  {
    name: "Infrastructure",
    icon: "🛣️",
    description: "Highway tolls, checkposts, and control rooms",
    image: "/product/securetyCabin.jpeg",
  },
  {
    name: "IT & Tech",
    icon: "💻",
    description: "Quick-deploy data centers and server rooms",
    image: "/product/WhatsApp%20Image%202026-05-29%20at%2010.49.42%20PM.jpeg",
  },
  {
    name: "Defense",
    icon: "🛡️",
    description: "Military field offices and secure facilities",
    image: "/product/toilet.jpeg",
  },
];

export const galleryImages = [
  {
    id: 1,
    src: "/product/officeCabin.jpeg",
    category: "office",
    title: "Executive Office Cabin",
    size: "large",
  },
  {
    id: 2,
    src: "/product/securetyCabin.jpeg",
    category: "security",
    title: "Security Guard Post",
    size: "small",
  },
  {
    id: 3,
    src: "/product/farmhouse.jpeg",
    category: "housing",
    title: "Container Home",
    size: "small",
  },
  {
    id: 4,
    src: "/product/WhatsApp%20Image%202026-05-29%20at%2010.49.42%20PM.jpeg",
    category: "office",
    title: "Modular Office Interior",
    size: "medium",
  },
  {
    id: 5,
    src: "/product/portabletoilet.jpeg",
    category: "sanitation",
    title: "Construction Site Setup",
    size: "small",
  },
  {
    id: 6,
    src: "/product/WhatsApp%20Image%202026-05-29%20at%2010.46.05%20PM.jpeg",
    category: "housing",
    title: "Modern Container Studio",
    size: "large",
  },
  {
    id: 7,
    src: "/product/WhatsApp%20Image%202026-05-29%20at%2010.50.03%20PM.jpeg",
    category: "storage",
    title: "Industrial Storage Unit",
    size: "medium",
  },
  {
    id: 8,
    src: "/product/portableOffice.jpeg",
    category: "office",
    title: "Site Office Installation",
    size: "small",
  },
  {
    id: 9,
    src: "/product/WhatsApp%20Image%202026-05-29%20at%2010.48.13%20PM.jpeg",
    category: "office",
    title: "Modern Interior Finish",
    size: "medium",
  },
  {
    id: 10,
    src: "/product/WhatsApp%20Image%202026-05-29%20at%2010.35.48%20PM.jpeg",
    category: "housing",
    title: "Container Villa Project",
    size: "large",
  },
  {
    id: 11,
    src: "/product/toilet.jpeg",
    category: "storage",
    title: "Warehouse Storage Setup",
    size: "small",
  },
  {
    id: 12,
    src: "/product/WhatsApp%20Image%202026-05-29%20at%2010.43.15%20PM.jpeg",
    category: "housing",
    title: "Container Kitchen Unit",
    size: "medium",
  },
];

export const teamMembers = [
  {
    id: 1,
    name: "Ali Hussain",
    role: "Partner",
    state: "Bihar",
    bio: "Managing and authorized partner of MA INFRA Portable Cabin.",
  },
  {
    id: 2,
    name: "Md Mansoor Alam",
    role: "Partner",
    state: "Bihar",
    bio: "Managing and authorized partner of MA INFRA Portable Cabin.",
  },
];
