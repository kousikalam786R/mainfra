import HeroSection from "@/components/sections/HeroSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import StatsSection from "@/components/sections/StatsSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Portable Office Cabins & Modular Site Infrastructure",
  description:
    "Welcome to mainfrapc.com — official website of MA INFRA Portable Cabin. Shop MS portable office cabins, security cabins, toilets, bunk houses, and labour cabins with pan-India delivery from Ranchi, Jharkhand.",
  path: "/",
  keywords: ["mainfrapc official website", "buy portable cabin online"],
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <StatsSection />
      <WhyChooseUs />
      <IndustriesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
