"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { company } from "@/data/company";

export const LOGO_SRC = "/logo/ma-logo.jpeg";

type LogoVariant = "navbar" | "footer" | "drawer";

interface LogoProps {
  variant?: LogoVariant;
  href?: string;
  showTagline?: boolean;
}

const brandBlue = "#1565C0";
const brandBlueDark = "#0D47A1";
const brandRed = "#D32F2F";

const sizeMap: Record<
  LogoVariant,
  {
    height: { xs: number; md: number };
    width: { xs: number; md: number };
    dark: boolean;
  }
> = {
  navbar: {
    height: { xs: 52, md: 60 },
    width: { xs: 72, md: 82 },
    dark: false,
  },
  footer: {
    height: { xs: 54, md: 62 },
    width: { xs: 74, md: 84 },
    dark: true,
  },
  drawer: {
    height: { xs: 46, md: 46 },
    width: { xs: 64, md: 64 },
    dark: false,
  },
};

function Tagline({ dark }: { dark: boolean }) {
  const infraColor = dark ? "#FFFFFF" : brandBlueDark;
  const portableColor = dark ? "rgba(255,255,255,0.88)" : brandBlue;
  const cabinColor = dark ? "#FF9800" : brandRed;

  return (
    <Box sx={{ minWidth: 0, lineHeight: 1, pt: "2px" }}>
      <Typography
        component="span"
        sx={{
          display: "block",
          color: infraColor,
          fontWeight: 900,
          fontSize: { xs: "1.05rem", md: "1.2rem" },
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          lineHeight: 1,
        }}
      >
        Infra
      </Typography>
      <Typography
        component="span"
        sx={{
          display: "block",
          fontWeight: 800,
          fontSize: { xs: "0.75rem", md: "0.8125rem" },
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          lineHeight: 1.1,
          mt: -0.1,
        }}
      >
        <Box component="span" sx={{ color: portableColor }}>
          Portable{" "}
        </Box>
        <Box component="span" sx={{ color: cabinColor }}>
          Cabin
        </Box>
      </Typography>
    </Box>
  );
}

export default function Logo({
  variant = "navbar",
  href = "/",
  showTagline = variant !== "drawer",
}: LogoProps) {
  const { height, width, dark } = sizeMap[variant];

  const content = (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 0.35,
        flexShrink: 0,
      }}
    >
      <Box
        sx={{
          position: "relative",
          height,
          width,
          flexShrink: 0,
          lineHeight: 0,
        }}
      >
        <Image
          src={LOGO_SRC}
          alt={`${company.shortName} Infra Portable Cabin logo`}
          fill
          sizes="(max-width: 900px) 72px, 82px"
          style={{
            objectFit: "contain",
            objectPosition: "left center",
          }}
          priority={variant === "navbar"}
        />
      </Box>
      {showTagline && <Tagline dark={dark} />}
    </Box>
  );

  if (href) {
    return (
      <Box
        component={Link}
        href={href}
        sx={{
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        {content}
      </Box>
    );
  }

  return content;
}
