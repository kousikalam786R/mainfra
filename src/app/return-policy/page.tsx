import type { Metadata } from "next";
import PolicyDocument from "@/components/pages/PolicyDocument";
import { policies } from "@/data/policies";
import { buildPageMetadata } from "@/lib/seo";

const policy = policies["return-policy"];

export const metadata: Metadata = buildPageMetadata({
  title: policy.title,
  description: policy.description,
  path: "/return-policy",
});

export default function ReturnPolicyPage() {
  return <PolicyDocument policy={policy} />;
}
