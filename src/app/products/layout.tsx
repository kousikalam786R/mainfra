import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Portable Cabins & Products",
  description:
    "Browse all portable cabin products at mainfrapc.com — MS office cabins, site offices, labour cabins, security cabins, toilets, bunk houses, and home cabins with prices and specifications.",
  path: "/products",
  keywords: ["mainfrapc products", "portable cabin price list"],
  image: "/product/portableOffice.jpeg",
});

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
