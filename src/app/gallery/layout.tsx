import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Project Gallery",
  description:
    "View real portable cabin projects by mainfrapc (MA INFRA) — office cabins, security posts, toilets, bunk houses, and modular site installations across India.",
  path: "/gallery",
  keywords: ["mainfrapc gallery", "portable cabin projects"],
  image: "/product/officeCabin.jpeg",
});

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
