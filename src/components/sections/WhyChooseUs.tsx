"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
} from "@mui/material";

import VerifiedIcon from "@mui/icons-material/Verified";
import SpeedIcon from "@mui/icons-material/Speed";
import EngineeringIcon from "@mui/icons-material/Engineering";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import RecyclingIcon from "@mui/icons-material/Recycling";
import { motion } from "framer-motion";
import SectionHeader from "@/components/common/SectionHeader";

const features = [
  {
    icon: <VerifiedIcon fontSize="large" />,
    title: "ISO Certified Quality",
    description:
      "Every structure manufactured under ISO 9001:2015 standards with rigorous quality control at each stage of production.",
    color: "#1565C0",
    bg: "#EFF6FF",
  },
  {
    icon: <SpeedIcon fontSize="large" />,
    title: "Fast Delivery",
    description:
      "From order confirmation to installation, our streamlined process ensures you get your cabin within 3–15 working days.",
    color: "#F57C00",
    bg: "#FFF7ED",
  },
  {
    icon: <EngineeringIcon fontSize="large" />,
    title: "In-House Manufacturing",
    description:
      "120,000 sq ft state-of-the-art factory with CNC-controlled machinery and skilled workforce of 500+ workers.",
    color: "#16A34A",
    bg: "#F0FDF4",
  },
  {
    icon: <SupportAgentIcon fontSize="large" />,
    title: "24/7 After-Sales Support",
    description:
      "Dedicated support team available around the clock. Our engineers can be on-site anywhere in India within 48 hours.",
    color: "#7C3AED",
    bg: "#F5F3FF",
  },
  {
    icon: <LocalShippingIcon fontSize="large" />,
    title: "Pan-India Delivery",
    description:
      "Our fleet of 50+ trucks and network of logistics partners ensures safe, timely delivery to any corner of India.",
    color: "#DC2626",
    bg: "#FEF2F2",
  },
  {
    icon: <RecyclingIcon fontSize="large" />,
    title: "Eco-Friendly Solutions",
    description:
      "All our structures use recyclable materials and our manufacturing process minimizes waste with zero-landfill policy.",
    color: "#0891B2",
    bg: "#F0F9FF",
  },
];

export default function WhyChooseUs() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 11 },
        background: "linear-gradient(135deg, #0A1628 0%, #0D2244 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circles */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 500,
          height: 500,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.04)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -150,
          left: -150,
          width: 600,
          height: 600,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.03)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative" }}>
        <SectionHeader
          badge="Why Us"
          title="Why Industry Leaders"
          highlight="Choose MA INFRA"
          subtitle="Over 2,500 projects completed. Over 800 satisfied clients. Here's what sets us apart."
          light
        />

        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3.5,
                    height: "100%",
                    bgcolor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 3,
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.07)",
                      borderColor: "rgba(255,255,255,0.15)",
                      transform: "translateY(-4px)",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                      "& .feature-icon-box": {
                        transform: "scale(1.1)",
                        boxShadow: `0 8px 20px ${feature.color}40`,
                      },
                    },
                  }}
                >
                  <Box
                    className="feature-icon-box"
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: 2.5,
                      bgcolor: feature.bg,
                      color: feature.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2.5,
                      transition: "all 0.3s ease",
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    color="white"
                    mb={1.25}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}
                  >
                    {feature.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
