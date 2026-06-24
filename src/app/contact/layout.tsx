import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact mainfrapc | Get a Quote",
  description:
    "Contact MA INFRA Portable Cabin at mainfrapc.com. Call +91 74619 75741, email sales@mainfrapc.com or inframapc@gmail.com, or visit our Ranchi factory for portable cabin quotes.",
  path: "/contact",
  keywords: ["contact mainfrapc", "portable cabin quote Ranchi"],
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
