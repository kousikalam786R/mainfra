import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About MA INFRA | mainfrapc",
  description:
    "Learn about mainfrapc (MA INFRA Portable Cabin) — GST-registered portable cabin manufacturer in Ranchi, Jharkhand. Meet our partners and explore our manufacturing process.",
  path: "/about",
  keywords: ["about mainfrapc", "MA INFRA about us"],
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
