import type { Metadata } from "next";
import PolicyDocument from "@/components/pages/PolicyDocument";
import { policies } from "@/data/policies";
import { buildPageMetadata } from "@/lib/seo";

const policy = policies["warranty-policy"];

export const metadata: Metadata = buildPageMetadata({
  title: policy.title,
  description: policy.description,
  path: "/warranty-policy",
});

export default function WarrantyPolicyPage() {
  return <PolicyDocument policy={policy} />;
}
