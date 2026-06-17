import type { Metadata } from "next";
import { products } from "@/data/products";
import { absoluteUrl, buildPageMetadata } from "@/lib/seo";
import ProductDetailClient from "./ProductDetailClient";
import ProductJsonLd from "./ProductJsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return buildPageMetadata({
    title: `${product.name} — ${product.price}`,
    description: `${product.shortDescription} Available at mainfrapc.com (MA INFRA Portable Cabin). ${product.category}.`,
    path: `/products/${product.slug}`,
    keywords: [...product.tags, product.category.toLowerCase(), "mainfrapc price"],
    image: product.images[0],
  });
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  return (
    <>
      {product ? <ProductJsonLd product={product} url={absoluteUrl(`/products/${product.slug}`)} /> : null}
      <ProductDetailClient />
    </>
  );
}
