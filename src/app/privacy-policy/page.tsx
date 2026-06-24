import type { Metadata } from "next";
import PolicyDocument from "@/components/pages/PolicyDocument";
import { policies } from "@/data/policies";
import { buildPageMetadata } from "@/lib/seo";

const policy = policies["privacy-policy"];

export const metadata: Metadata = buildPageMetadata({
  title: policy.title,
  description: policy.description,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return <PolicyDocument policy={policy} />;
}
