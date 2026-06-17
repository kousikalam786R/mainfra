import type { Metadata } from "next";
import { company } from "@/data/company";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? company.siteUrl;

export const defaultTitle =
  "MA INFRA Portable Cabin | mainfrapc.com — Portable Office & Security Cabins";

export const defaultDescription =
  "mainfrapc (MA INFRA Portable Cabin) — India's trusted manufacturer of MS portable office cabins, security cabins, portable toilets, bunk houses, and modular site infrastructure. GST registered. Ranchi, Jharkhand. Pan-India delivery.";

export const defaultKeywords = [
  "mainfrapc",
  "mainfrapc.com",
  "mainfra",
  "MA INFRA",
  "MA INFRA Portable Cabin",
  "portable office cabin",
  "MS portable cabin",
  "security cabin",
  "portable toilet",
  "bunk house cabin",
  "labour cabin",
  "modular cabin Ranchi",
  "portable cabin Jharkhand",
  "site office cabin India",
];

export function absoluteUrl(path = ""): string {
  if (!path || path === "/") return siteUrl;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  image = "/hero/hero1.jpeg",
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
}): Metadata {
  const canonical = absoluteUrl(path);
  const ogImage = absoluteUrl(image);

  return {
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: canonical,
      siteName: `${company.name} | mainfrapc.com`,
      title: `${title} | mainfrapc.com`,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${title} — ${company.shortName} (mainfrapc.com)`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | mainfrapc.com`,
      description,
      images: [ogImage],
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | mainfrapc.com`,
  },
  description: defaultDescription,
  keywords: defaultKeywords,
  applicationName: "mainfrapc",
  authors: [{ name: company.name, url: siteUrl }],
  creator: company.name,
  publisher: company.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: `${company.name} | mainfrapc.com`,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: absoluteUrl("/hero/hero1.jpeg"),
        width: 1200,
        height: 630,
        alt: "MA INFRA Portable Cabin — mainfrapc.com",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [absoluteUrl("/hero/hero1.jpeg")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo/ma-logo.jpeg",
    apple: "/logo/ma-logo.jpeg",
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};
