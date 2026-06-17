/**
 * MA INFRA Portable Cabin — contact details from visiting card
 */
export const company = {
  name: "MA INFRA Portable Cabin",
  shortName: "MA INFRA",
  brandSlug: "mainfrapc",
  siteUrl: "https://mainfrapc.com",
  domain: "mainfrapc.com",
  alternateNames: [
    "mainfrapc",
    "mainfrapc.com",
    "MA INFRA",
    "MA INFRA Portable Cabin",
    "Mainfra PC",
  ] as const,
  tagline: "Strong Structures, Reliable Solutions",
  salesManager: "Alam",
  salesManagerTitle: "Sales Manager",

  phone: "+91 74619 75741",
  phoneTel: "+917461975741",
  whatsapp: "917461975741",

  email: "info@mainfrapc.com",

  address: {
    line1: "At-Khata No-14, Plot No-347",
    line2: "Ranchi Patna Road, Ormanjhi",
    city: "Ranchi",
    pincode: "835219",
    state: "Jharkhand",
    country: "India",
  },

  addressFull:
    "At-Khata No-14, Plot No-347, Ranchi Patna Road, Ormanjhi, Ranchi – 835219, Jharkhand, India",

  hours: "Mon–Sat: 9:00 AM – 6:00 PM IST",

  gst: {
    form: "Government of India Form GST REG-06 [See Rule 10(1)]",
    certificate: "Registration Certificate",
    registrationNumber: "20ACHFM4014F1ZV",
  },

  certifications: ["GST Registered"] as const,

  features: [
    "Strong Structure",
    "Premium Quality",
    "Durable & Reliable",
  ],
} as const;

export const whatsappUrl = (message?: string) => {
  const base = `https://wa.me/${company.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
};
