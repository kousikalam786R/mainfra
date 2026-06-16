 "use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  Paper,
  Avatar,
  Chip,
  Button,
  Breadcrumbs,
  Link as MuiLink,
  Grid,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FactoryIcon from "@mui/icons-material/Factory";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { teamMembers, stats } from "@/data/products";
import { company } from "@/data/company";
import SectionHeader from "@/components/common/SectionHeader";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const processSteps = [
  {
    step: "01",
    title: "Design & Engineering",
    description:
      "Our CAD team creates detailed 3D models per your specifications. Every design is reviewed by our structural engineers for load-bearing capacity, wind resistance, and seismic performance.",
    icon: <PrecisionManufacturingIcon />,
    color: "#1565C0",
  },
  {
    step: "02",
    title: "Material Procurement",
    description:
      "We source only high-grade CRCA steel, ISO-certified PUF/EPS sandwich panels, and premium hardware from approved vendors — every batch quality-checked on arrival.",
    icon: <FactoryIcon />,
    color: "#F57C00",
  },
  {
    step: "03",
    title: "CNC Fabrication",
    description:
      "State-of-the-art CNC plasma cutters and press brakes ensure micron-level precision in every component. Our 120,000 sq ft facility produces 50+ cabins per month.",
    icon: <PrecisionManufacturingIcon />,
    color: "#16A34A",
  },
  {
    step: "04",
    title: "Quality Control",
    description:
      "Dedicated QC team runs 48-point inspection on every unit before dispatch — including load tests, waterproofing, electrical safety checks, and dimensional accuracy verification.",
    icon: <VerifiedIcon />,
    color: "#7C3AED",
  },
  {
    step: "05",
    title: "Delivery & Installation",
    description:
      "Our logistics fleet ensures safe, on-time delivery. Our trained installation team sets up your cabin in hours, with site verification and client handover documentation.",
    icon: <LocalShippingIcon />,
    color: "#DC2626",
  },
];

const values = [
  {
    title: "Quality Without Compromise",
    desc: "Every structure undergoes 48 quality checks before leaving our factory.",
  },
  {
    title: "Customer-First Culture",
    desc: "We treat every client like a partner, not just a transaction.",
  },
  {
    title: "Innovation in Design",
    desc: "Our R&D team constantly evolves designs based on real-world feedback.",
  },
  {
    title: "Sustainability Commitment",
    desc: "All structures use recyclable materials with minimal construction waste.",
  },
];

export default function AboutPage() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#F8FAFC" }}>
      <Box
        sx={{
          background: "linear-gradient(135deg, #0A1628, #1565C0)",
          py: { xs: 1.5, md: 2 },
          color: "#FFFFFF",
        }}
      >
        <Container maxWidth="xl">
          <Breadcrumbs
            sx={{ mb: 0.5, "& .MuiBreadcrumbs-separator": { mx: 0.5 } }}
          >
            <MuiLink
              component={Link}
              href="/"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.35,
                color: "rgba(255,255,255,0.65)",
                fontSize: "0.75rem",
                textDecoration: "none",
              }}
            >
              <HomeIcon sx={{ fontSize: 14 }} /> Home
            </MuiLink>
            <Typography sx={{ color: "rgba(255,255,255,0.9)", fontSize: "0.75rem" }}>
              About
            </Typography>
          </Breadcrumbs>
          <Typography
            variant="h5"
            component="h1"
            sx={{
              color: "#FFFFFF",
              mb: 0.5,
              fontWeight: 700,
              fontSize: { xs: "1.25rem", md: "1.5rem" },
              lineHeight: 1.15,
            }}
          >
            About MA INFRA
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.8)",
              fontSize: { xs: "0.75rem", md: "0.8125rem" },
              maxWidth: 560,
              lineHeight: 1.4,
              m: 0,
            }}
          >
            Building reliable portable cabins and modular infrastructure across India since 2009.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 5 } }}>
        <Grid container spacing={{ xs: 3.5, md: 5 }} sx={{ alignItems: "stretch" }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                position: "relative",
                borderRadius: 3,
                overflow: "hidden",
                aspectRatio: { xs: "4 / 3", md: "auto" },
                height: { xs: "auto", md: "100%" },
                minHeight: { md: 420 },
                mr: { md: 1 },
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80"
                alt="Manufacturing facility"
                fill
                style={{ objectFit: "cover" }}
              />
              <Paper
                elevation={0}
                sx={{
                  position: "absolute",
                  left: 12,
                  right: 12,
                  bottom: 12,
                  p: 1.5,
                  borderRadius: 2,
                  bgcolor: "rgba(255,255,255,0.94)",
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                }}
              >
                <FactoryIcon color="primary" />
                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                  120,000 sq ft manufacturing footprint in Ranchi, Jharkhand
                </Typography>
              </Paper>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 2.5, md: 3 },
                borderRadius: 3,
                border: "1px solid rgba(0,0,0,0.06)",
                height: "100%",
                ml: { md: 1 },
              }}
            >
              <Chip
                label="Our Story"
                sx={{ bgcolor: "#EFF6FF", color: "#1565C0", fontWeight: 700, mb: 1.5 }}
              />
              <Typography sx={{ fontSize: { xs: "1.35rem", md: "1.9rem" }, fontWeight: 800, mb: 1.5 }}>
                From Ranchi workshop to trusted national brand
              </Typography>
              <Typography sx={{ color: "text.secondary", lineHeight: 1.75, mb: 2 }}>
                MA INFRA Portable Cabin started with a clear mission: deliver dependable modular
                structures with better quality, faster delivery, and long-term value.
              </Typography>
              <Typography sx={{ color: "text.secondary", lineHeight: 1.75, mb: 2.5 }}>
                Today, our solutions support construction, infrastructure, education, and industry
                clients across India with custom-built cabins and portable spaces.
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.25 }}>
                {values.map((v) => (
                  <Box key={v.title} sx={{ display: "flex", gap: 1, alignItems: "flex-start" }}>
                    <CheckCircleIcon sx={{ fontSize: 18, mt: 0.2, color: "primary.main", flexShrink: 0 }} />
                    <Box>
                      <Typography sx={{ fontSize: "0.9rem", fontWeight: 700 }}>{v.title}</Typography>
                      <Typography variant="caption" sx={{ color: "text.secondary" }}>
                        {v.desc}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>

          <Grid size={12}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 2.5, md: 3 },
                borderRadius: 3,
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <Grid container spacing={2}>
                {stats.map((s) => (
                  <Grid key={s.label} size={{ xs: 6, md: 3 }}>
                    <Box sx={{ textAlign: "center" }}>
                      <Typography sx={{ fontSize: "1.3rem" }}>{s.icon}</Typography>
                      <Typography sx={{ fontSize: "1.2rem", fontWeight: 800, color: "primary.main" }}>
                        {s.value}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "text.secondary" }}>
                        {s.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: "white" }}>
        <Container maxWidth="xl">
          <SectionHeader
            badge="How We Build"
            title="Our Manufacturing"
            highlight="Process"
            subtitle="A disciplined process from engineering to delivery."
          />
          <Grid container spacing={2.5}>
            {processSteps.map((step) => (
              <Grid key={step.step} size={{ xs: 12, sm: 6, md: 4 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2.5,
                    borderRadius: 3,
                    border: "1px solid rgba(0,0,0,0.06)",
                    height: "100%",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.25 }}>
                    <Box
                      sx={{
                        width: 34,
                        height: 34,
                        borderRadius: 1.5,
                        bgcolor: `${step.color}20`,
                        color: step.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {step.icon}
                    </Box>
                    <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: step.color }}>
                      STEP {step.step}
                    </Typography>
                  </Box>
                  <Typography sx={{ fontWeight: 700, mb: 0.75 }}>{step.title}</Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.65 }}>
                    {step.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: "white" }}>
        <Container maxWidth="xl">
          <SectionHeader
            badge="Registered Business"
            title="Government"
            highlight="Registration"
            subtitle="MA INFRA is a GST-registered business under the Government of India."
          />
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2.5, md: 3.5 },
              borderRadius: 3,
              border: "1px solid rgba(0,0,0,0.06)",
              maxWidth: 720,
              mx: "auto",
            }}
          >
            <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 2,
                  bgcolor: "#EFF6FF",
                  color: "primary.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <VerifiedIcon />
              </Box>
              <Box>
                <Typography variant="caption" sx={{ color: "text.secondary", display: "block", mb: 0.5 }}>
                  {company.gst.form}
                </Typography>
                <Typography sx={{ fontWeight: 700, mb: 1.5 }}>{company.gst.certificate}</Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
                  Registration Number
                </Typography>
                <Chip
                  label={company.gst.registrationNumber}
                  sx={{
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    letterSpacing: "0.04em",
                    bgcolor: "#EFF6FF",
                    color: "primary.main",
                  }}
                />
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: "#F8FAFC" }}>
        <Container maxWidth="xl">
          <SectionHeader
            badge="Meet the Team"
            title="Managing & Authorized"
            highlight="Partners"
            subtitle="The partners leading MA INFRA Portable Cabin."
          />
          <Grid container spacing={3} sx={{ justifyContent: "center" }}>
            {teamMembers.map((member) => (
              <Grid key={member.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2.5,
                    textAlign: "center",
                    border: "1px solid rgba(0,0,0,0.06)",
                    borderRadius: 3,
                    transition: "all 0.25s ease",
                    height: "100%",
                    "&:hover": {
                      boxShadow: "0 10px 28px rgba(0,0,0,0.08)",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  <Avatar
                    alt={member.name}
                    sx={{
                      width: 78,
                      height: 78,
                      mx: "auto",
                      mb: 1.5,
                      bgcolor: "primary.main",
                      fontWeight: 700,
                      fontSize: "1.25rem",
                    }}
                  >
                    {getInitials(member.name)}
                  </Avatar>
                  <Typography sx={{ fontWeight: 700, mb: 0.25 }}>{member.name}</Typography>
                  <Typography variant="caption" sx={{ color: "primary.main", fontWeight: 600, display: "block", mb: 0.5 }}>
                    {member.role}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "text.secondary", display: "block", mb: 1 }}>
                    Resident of {member.state}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                    {member.bio}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ borderRadius: 2.5, py: 1.4, px: 3 }}
            >
              Talk to Our Team
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
