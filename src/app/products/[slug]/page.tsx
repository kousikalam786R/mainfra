import { products } from "@/data/products";
import ProductDetailClient from "./ProductDetailClient";

// Only pre-built slugs exist; avoids Node.js fallback functions on Cloudflare Pages.
export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetailPage() {
  return <ProductDetailClient />;
}
