export interface PolicySection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface PolicyDocument {
  slug: string;
  title: string;
  description: string;
  lastUpdated: string;
  sections: PolicySection[];
}

export const policies: Record<string, PolicyDocument> = {
  "warranty-policy": {
    slug: "warranty-policy",
    title: "Warranty Policy",
    description:
      "Warranty terms for MA INFRA Portable Cabin products purchased through mainfrapc.com.",
    lastUpdated: "June 2026",
    sections: [
      {
        title: "Scope of Warranty",
        paragraphs: [
          "MA INFRA Portable Cabin (“we”, “us”, “our”) provides a limited warranty on portable cabins, security cabins, toilets, bunk houses, and related modular structures manufactured and supplied by us, subject to the terms below.",
          "This warranty covers defects in materials and workmanship under normal use and installation. Cosmetic wear, misuse, unauthorized modifications, and damage after delivery caused by third parties are not covered.",
        ],
      },
      {
        title: "Warranty Period",
        paragraphs: [
          "Unless otherwise stated in your written quotation or invoice, the following standard warranty periods apply from the date of delivery:",
        ],
        bullets: [
          "Structural steel frame: 1 year",
          "Roof, wall panels, doors, and windows: 1 year",
          "Electrical fittings supplied by us: 6 months",
          "Paint and surface finish: 6 months against peeling or premature corrosion under normal conditions",
        ],
      },
      {
        title: "What Is Covered",
        paragraphs: [
          "During the warranty period, we will repair or replace defective parts attributable to manufacturing faults at our discretion. Transport and on-site labour for warranty service may be chargeable if the site is outside our standard service area.",
        ],
      },
      {
        title: "What Is Not Covered",
        paragraphs: ["The warranty does not apply to:"],
        bullets: [
          "Damage from accidents, fire, floods, storms, vandalism, or improper handling during relocation",
          "Rust or corrosion caused by prolonged exposure to chemicals, salt air, or lack of maintenance",
          "Alterations or repairs done by parties not authorized by MA INFRA",
          "Normal fading, minor scratches, or settlement cracks in non-structural components",
          "Consumables, sanitary ware, or items supplied by the customer",
        ],
      },
      {
        title: "How to Claim",
        paragraphs: [
          "To make a warranty claim, contact us at sales@mainfrapc.com or inframapc@gmail.com with your invoice number, product details, photographs of the issue, and site address. Our team will review the claim and respond within 5–7 business days.",
        ],
      },
    ],
  },
  "return-policy": {
    slug: "return-policy",
    title: "Return Policy",
    description:
      "Return and cancellation policy for custom portable cabin orders at mainfrapc.com.",
    lastUpdated: "June 2026",
    sections: [
      {
        title: "Custom-Made Products",
        paragraphs: [
          "Most MA INFRA portable cabins are manufactured to customer specifications, including size, layout, colour, and fittings. Because these are custom-built products, standard retail return rights may not apply once production has started.",
        ],
      },
      {
        title: "Order Cancellation",
        paragraphs: [
          "You may cancel an order before manufacturing begins for a full refund of any advance paid, minus bank or payment gateway charges if applicable.",
          "If production has already started, cancellation may result in forfeiture of the advance or recovery of costs for materials already procured and labour completed, as stated in your quotation or order confirmation.",
        ],
      },
      {
        title: "Defective or Incorrect Delivery",
        paragraphs: [
          "If you receive a product that is materially different from the approved order or has a manufacturing defect, notify us within 7 days of delivery at sales@mainfrapc.com or inframapc@gmail.com with photos and delivery documentation.",
          "After inspection, we will arrange repair, replacement of defective components, or another remedy as appropriate. Refunds are considered only when repair or replacement is not feasible.",
        ],
      },
      {
        title: "Non-Returnable Situations",
        paragraphs: ["Returns or refunds are generally not accepted when:"],
        bullets: [
          "The cabin has been installed, modified, or used on site",
          "Damage occurred during transport arranged by the customer",
          "The issue arises from site conditions, foundation problems, or improper installation not performed by us",
          "The customer provided incorrect dimensions or specifications",
        ],
      },
      {
        title: "Contact",
        paragraphs: [
          "For return or cancellation requests, email sales@mainfrapc.com or inframapc@gmail.com or call +91 74619 75741 during business hours (Mon–Sat, 9:00 AM – 6:00 PM IST).",
        ],
      },
    ],
  },
  "terms-of-service": {
    slug: "terms-of-service",
    title: "Terms of Service",
    description:
      "Terms governing use of mainfrapc.com and purchases from MA INFRA Portable Cabin.",
    lastUpdated: "June 2026",
    sections: [
      {
        title: "Agreement",
        paragraphs: [
          "By accessing mainfrapc.com or placing an order with MA INFRA Portable Cabin, you agree to these Terms of Service. If you do not agree, please do not use our website or services.",
        ],
      },
      {
        title: "Company Information",
        paragraphs: [
          "MA INFRA Portable Cabin is a GST-registered business operating from Ranchi, Jharkhand, India. GST Registration Number: 20ACHFM4014F1ZV. Official website: mainfrapc.com.",
        ],
      },
      {
        title: "Quotations & Orders",
        paragraphs: [
          "Prices listed on the website are indicative and may vary based on specifications, transport distance, taxes, and site requirements. A binding price is confirmed only through a written quotation or proforma invoice.",
          "An order is confirmed upon receipt of the agreed advance payment and written order acceptance. Production timelines begin after specification approval and payment clearance.",
        ],
      },
      {
        title: "Delivery & Installation",
        paragraphs: [
          "Delivery timelines are estimates and may vary due to weather, transport availability, or force majeure events. Risk of loss passes to the buyer upon delivery at the agreed location unless otherwise stated in writing.",
          "Installation, if included, is performed as per our standard scope. Site preparation, civil work, permits, and utility connections are the customer’s responsibility unless explicitly included in the quotation.",
        ],
      },
      {
        title: "Payment Terms",
        paragraphs: [
          "Standard payment terms are agreed per order. We accept bank transfer and other methods communicated at the time of purchase. Goods remain our property until full payment is received where applicable under agreed credit terms.",
        ],
      },
      {
        title: "Limitation of Liability",
        paragraphs: [
          "To the fullest extent permitted by law, MA INFRA Portable Cabin is not liable for indirect, incidental, or consequential losses including project delays or loss of profit. Our total liability for any claim relating to a product or service is limited to the amount paid for that order.",
        ],
      },
      {
        title: "Governing Law",
        paragraphs: [
          "These terms are governed by the laws of India. Disputes shall be subject to the jurisdiction of courts in Ranchi, Jharkhand.",
        ],
      },
      {
        title: "Contact",
        paragraphs: [
          "Questions about these terms: sales@mainfrapc.com, inframapc@gmail.com, or +91 74619 75741.",
        ],
      },
    ],
  },
  "privacy-policy": {
    slug: "privacy-policy",
    title: "Privacy Policy",
    description:
      "How MA INFRA Portable Cabin (mainfrapc.com) collects, uses, and protects your information.",
    lastUpdated: "June 2026",
    sections: [
      {
        title: "Introduction",
        paragraphs: [
          "MA INFRA Portable Cabin (“we”, “us”) respects your privacy. This policy explains what information we collect when you visit mainfrapc.com, contact us, or request a quotation, and how we use it.",
        ],
      },
      {
        title: "Information We Collect",
        paragraphs: ["We may collect:"],
        bullets: [
          "Name, phone number, email address, and company name when you submit a contact or quote form",
          "Project location, product interest, and messages you send us",
          "Technical data such as browser type, device, and pages visited (via standard analytics tools)",
          "Communication records including WhatsApp, email, and phone enquiries",
        ],
      },
      {
        title: "How We Use Your Information",
        paragraphs: ["We use your information to:"],
        bullets: [
          "Respond to enquiries and provide quotations",
          "Process orders, delivery, and after-sales support",
          "Improve our website, products, and customer service",
          "Send updates about your order or our services where relevant",
          "Comply with legal and tax obligations",
        ],
      },
      {
        title: "Sharing of Information",
        paragraphs: [
          "We do not sell your personal data. We may share information with logistics partners, payment processors, or service providers only as needed to fulfil your order, and with authorities when required by law.",
        ],
      },
      {
        title: "Data Security",
        paragraphs: [
          "We take reasonable steps to protect your information from unauthorized access. However, no method of transmission over the internet is completely secure.",
        ],
      },
      {
        title: "Cookies",
        paragraphs: [
          "Our website may use cookies and similar technologies to improve browsing experience and measure traffic. You can control cookies through your browser settings.",
        ],
      },
      {
        title: "Your Rights",
        paragraphs: [
          "You may request access, correction, or deletion of your personal information by emailing sales@mainfrapc.com or inframapc@gmail.com. We will respond within a reasonable timeframe.",
        ],
      },
      {
        title: "Contact",
        paragraphs: [
          "MA INFRA Portable Cabin, At-Khata No-14, Plot No-347, Ranchi Patna Road, Ormanjhi, Ranchi – 835219, Jharkhand, India. Email: sales@mainfrapc.com | inframapc@gmail.com | Phone: +91 74619 75741.",
        ],
      },
    ],
  },
};

export const policySlugs = Object.keys(policies) as Array<keyof typeof policies>;
