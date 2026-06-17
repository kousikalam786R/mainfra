import type { MetadataRoute } from "next";
import { company } from "@/data/company";
import { defaultDescription } from "@/lib/seo";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${company.name} | mainfrapc.com`,
    short_name: "mainfrapc",
    description: defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#0A1628",
    theme_color: "#1565C0",
    lang: "en-IN",
    icons: [
      {
        src: "/logo/ma-logo.jpeg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
