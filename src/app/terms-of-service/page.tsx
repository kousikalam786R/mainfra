import type { Metadata } from "next";
import PolicyDocument from "@/components/pages/PolicyDocument";
import { policies } from "@/data/policies";
import { buildPageMetadata } from "@/lib/seo";

const policy = policies["terms-of-service"];

export const metadata: Metadata = buildPageMetadata({
  title: policy.title,
  description: policy.description,
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return <PolicyDocument policy={policy} />;
}
