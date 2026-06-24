import { company } from "@/data/company";
import { products } from "@/data/products";
import { absoluteUrl, siteUrl } from "@/lib/seo";

export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#organization`,
    name: company.name,
    alternateName: [...company.alternateNames],
    url: siteUrl,
    logo: absoluteUrl("/logo/ma-logo.jpeg"),
    image: absoluteUrl("/hero/hero1.jpeg"),
    description:
      "mainfrapc — MA INFRA Portable Cabin manufactures MS portable office cabins, security cabins, portable toilets, bunk houses, and modular site infrastructure in India.",
    email: company.emails.map((item) => item.address),
    contactPoint: company.emails.map((item) => ({
      "@type": "ContactPoint",
      contactType: item.label,
      email: item.address,
      telephone: company.phoneTel,
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    })),
    telephone: company.phoneTel,
    taxID: company.gst.registrationNumber,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${company.address.line1}, ${company.address.line2}`,
      addressLocality: company.address.city,
      postalCode: company.address.pincode,
      addressRegion: company.address.state,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.3441,
      longitude: 85.3096,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    sameAs: [],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "mainfrapc.com",
    alternateName: company.alternateNames,
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/products?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const productList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "MA INFRA Portable Cabin Products",
    url: absoluteUrl("/products"),
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/products/${product.slug}`),
      name: product.name,
    })),
  };

  const schemas = [organization, website, productList];

  return (
    <>
      {schemas.map((schema) => (
        <script
          key={schema["@type"] as string}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
