import type { Product } from "@/data/products";
import { company } from "@/data/company";
import { absoluteUrl } from "@/lib/seo";

export default function ProductJsonLd({
  product,
  url,
}: {
  product: Product;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    image: product.images.map((image) => absoluteUrl(image)),
    url,
    brand: {
      "@type": "Brand",
      name: company.name,
      alternateName: [...company.alternateNames],
    },
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "INR",
      price: product.price.replace(/[^\d]/g, ""),
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: company.name,
        url: absoluteUrl(),
      },
    },
    category: product.category,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
