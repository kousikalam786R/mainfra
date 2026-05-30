import type { Metadata } from "next";
import "./globals.css";
import ThemeRegistry from "@/components/common/ThemeRegistry";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "MA INFRA Portable Cabin - Premium Portable Cabins & Modular Solutions",
    template: "%s | MA INFRA Portable Cabin",
  },
  description:
    "India's leading manufacturer of portable office cabins, security cabins, container houses, and modular infrastructure solutions. Quality, durability, and fast delivery.",
  keywords: [
    "portable cabin",
    "modular office",
    "security cabin",
    "container house",
    "portable toilet",
    "modular infrastructure",
    "MA INFRA",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mainfraportablecabin.com",
    siteName: "MA INFRA Portable Cabin",
  },
  icons: {
    icon: "/logo/ma-logo.png",
    apple: "/logo/ma-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeRegistry>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeRegistry>
      </body>
    </html>
  );
}
