"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Paper,
  Grid,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutlined";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    badge: "India's #1 Choice",
    title: "Portable Office",
    titleHighlight: "Cabins",
    subtitle: "Built for Every Site",
    description:
      "MA INFRA (mainfrapc.com) — premium pre-engineered portable cabins for construction sites, corporate campuses, and industrial facilities. Delivered pan-India within days.",
    image: "/hero/hero1.jpeg",
    cta: "Explore Cabins",
    ctaHref: "/products?category=portable-office-cabin",
  },
  {
    id: 2,
    badge: "New Collection",
    title: "Modern Container",
    titleHighlight: "Homes",
    subtitle: "Live Differently",
    description:
      "Earthquake-resistant, energy-efficient container homes with premium interiors. From compact studios to full 3BHK configurations.",
    image: "/hero/hero2.jpeg",
    cta: "View Home Cabins",
    ctaHref: "/products?category=farm-house",
  },
  {
    id: 3,
    badge: "Most Trusted",
    title: "Industrial Security",
    titleHighlight: "Cabins",
    subtitle: "Guard in Comfort",
    description:
      "360° visibility, heavy-gauge steel construction, all-weather protection for 24/7 guard duty at factories, campuses, and residential complexes.",
    image: "/hero/hero4.jpeg",
    cta: "Shop Security Cabins",
    ctaHref: "/products?category=security-cabin",
  },
];

const trustBadges = [
  { icon: <VerifiedIcon fontSize="small" />, label: "ISO 9001:2015 Certified" },
  { icon: <LocalShippingIcon fontSize="small" />, label: "Pan-India Delivery" },
  { icon: <SupportAgentIcon fontSize="small" />, label: "24/7 Support" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: "auto", md: "auto" },
        py: { xs: 5, md: 7 },
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background images */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(105deg, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.78) 50%, rgba(10,22,40,0.55) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2, py: { xs: 4, md: 5 } }}>
        <Grid container spacing={4} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 7, lg: 6 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                <Chip
                  label={slide.badge}
                  sx={{
                    bgcolor: "rgba(245,124,0,0.15)",
                    color: "#FF9800",
                    border: "1px solid rgba(245,124,0,0.35)",
                    fontWeight: 700,
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    mb: 2.5,
                  }}
                />

                <Typography
                  variant="h1"
                  sx={{ color: "white", mb: 0.5 }}
                >
                  {slide.title}{" "}
                  <Box
                    component="span"
                    sx={{
                      color: "#FF9800",
                      position: "relative",
                    }}
                  >
                    {slide.titleHighlight}
                  </Box>
                </Typography>

                <Typography
                  variant="h4"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    fontWeight: 400,
                    mb: 2.5,
                    fontSize: { xs: "1.1rem", md: "1.35rem" },
                  }}
                >
                  {slide.subtitle}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(255,255,255,0.75)",
                    mb: 4,
                    maxWidth: 480,
                    fontSize: "1.05rem",
                    lineHeight: 1.7,
                  }}
                >
                  {slide.description}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    flexWrap: "wrap",
                    mb: { xs: 1, md: 0 },
                  }}
                >
                  <Button
                    component={Link}
                    href={slide.ctaHref}
                    variant="contained"
                    color="secondary"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      py: 1.5,
                      px: 3.5,
                      borderRadius: 2.5,
                      fontSize: "1rem",
                      boxShadow: "0 8px 30px rgba(245,124,0,0.4)",
                    }}
                  >
                    {slide.cta}
                  </Button>
                  <Button
                    component={Link}
                    href="/contact"
                    variant="outlined"
                    size="large"
                    startIcon={<PlayCircleOutlineIcon />}
                    sx={{
                      py: 1.5,
                      px: 3,
                      borderRadius: 2.5,
                      borderColor: "rgba(255,255,255,0.4)",
                      color: "white",
                      fontSize: "1rem",
                      "&:hover": {
                        borderColor: "white",
                        bgcolor: "rgba(255,255,255,0.08)",
                      },
                    }}
                  >
                    Get Free Quote
                  </Button>
                </Box>

                {/* Trust badges */}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    mt: { xs: 5, md: 6 },
                    gap: { xs: 2, sm: 3 },
                    rowGap: { xs: 3, sm: 3.5 },
                  }}
                >
                  {trustBadges.map((badge, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.25,
                        bgcolor: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: 2,
                        px: { xs: 2, sm: 2.5 },
                        py: { xs: 1.25, sm: 1.5 },
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <Box sx={{ color: "#FF9800", display: "flex" }}>
                        {badge.icon}
                      </Box>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "rgba(255,255,255,0.85)",
                          fontWeight: 500,
                        }}
                      >
                        {badge.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </AnimatePresence>
          </Grid>

          {/* Stats Panel */}
          <Grid size={{ xs: 12, md: 5, lg: 4 }} sx={{ display: { xs: "none", md: "block" }, ml: "auto" }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Paper
                sx={{
                  bgcolor: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 4,
                  p: 3.5,
                  color: "white",
                }}
              >
                <Typography variant="overline" sx={{ color: "rgba(255,255,255,0.5)", letterSpacing: 2 }}>
                  Our Numbers Speak
                </Typography>
                <Grid container spacing={2.5} sx={{ mt: 0.5 }}>
                  {[
                    { num: "2,500+", label: "Projects Done" },
                    { num: "800+", label: "Happy Clients" },
                    { num: "15+", label: "Years Experience" },
                    { num: "120+", label: "Cities Served" },
                  ].map((stat, i) => (
                    <Grid size={6} key={i}>
                      <Box
                        sx={{
                          p: 2,
                          bgcolor: "rgba(255,255,255,0.06)",
                          borderRadius: 2.5,
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 800,
                            color: "#FF9800",
                            lineHeight: 1.1,
                          }}
                        >
                          {stat.num}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: "rgba(255,255,255,0.6)" }}
                        >
                          {stat.label}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        {/* Slide indicators */}
        <Box
          sx={{
            display: "flex",
            gap: 1,
            mt: { xs: 4, md: 6 },
          }}
        >
          {slides.map((_, i) => (
            <Box
              key={i}
              onClick={() => setCurrent(i)}
              sx={{
                height: 4,
                width: i === current ? 32 : 14,
                borderRadius: 2,
                bgcolor: i === current ? "#FF9800" : "rgba(255,255,255,0.3)",
                cursor: "pointer",
                transition: "all 0.4s ease",
              }}
            />
          ))}
        </Box>
      </Container>

      {/* Scroll indicator */}
      <Box
        sx={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: { xs: "none", md: "block" },
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Box
            sx={{
              width: 24,
              height: 40,
              border: "2px solid rgba(255,255,255,0.3)",
              borderRadius: 12,
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              pt: 0.75,
            }}
          >
            <Box
              sx={{
                width: 4,
                height: 8,
                bgcolor: "rgba(255,255,255,0.6)",
                borderRadius: 2,
              }}
            />
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}
