"use client";

import React from "react";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Paper,
  Avatar,
  Chip,
  Button,
  Divider,
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
import { useInView } from "react-intersection-observer";
import { teamMembers, stats } from "@/data/products";
import SectionHeader from "@/components/common/SectionHeader";

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

function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  return (
    <Box ref={ref} textAlign="center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <Typography variant="h2" fontWeight={800} color="primary.main">
          {value}
        </Typography>
      </motion.div>
      <Typography variant="body2" color="text.secondary" fontWeight={500} mt={0.5}>
        {label}
      </Typography>
    </Box>
  );
}

export default function AboutPage() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* Hero */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #0A1628 0%, #1565C0 100%)",
          py: { xs: 7, md: 10 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.12,
          }}
        />
        <Container maxWidth="xl" sx={{ position: "relative" }}>
          <Breadcrumbs sx={{ mb: 3 }}>
            <MuiLink
              component={Link}
              href="/"
              sx={{ display: "flex", alignItems: "center", gap: 0.5, color: "rgba(255,255,255,0.6)" }}
            >
              <HomeIcon fontSize="small" /> Home
            </MuiLink>
            <Typography color="rgba(255,255,255,0.85)" fontSize="0.875rem">About Us</Typography>
          </Breadcrumbs>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Chip label="Est. 2009" sx={{ bgcolor: "rgba(245,124,0,0.2)", color: "#FF9800", fontWeight: 700, mb: 2 }} />
                <Typography variant="h1" color="white" mb={2}>
                  Building India's Modular
                  <Box component="span" sx={{ color: "#FF9800" }}> Future</Box>
                </Typography>
                <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.8, maxWidth: 560 }}>
                  Since 2009, MA INFRA Portable Cabin has been at the forefront of India's portable structure industry.
                  From a small workshop in Ranchi to a growing manufacturing facility in Jharkhand, our story is
                  one of relentless quality and customer commitment.
                </Typography>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3.5,
                    bgcolor: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 3,
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <Grid container spacing={3}>
                    {stats.map((s, i) => (
                      <Grid size={6} key={i}>
                        <Box textAlign="center">
                          <Typography sx={{ fontSize: "1.75rem" }}>{s.icon}</Typography>
                          <Typography variant="h4" fontWeight={800} color="#FF9800" lineHeight={1.1}>
                            {s.value}
                          </Typography>
                          <Typography variant="caption" color="rgba(255,255,255,0.6)">
                            {s.label}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Story section */}
      <Box sx={{ py: { xs: 8, md: 11 }, bgcolor: "white" }}>
        <Container maxWidth="xl">
          <Grid container spacing={7} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Box
                  sx={{
                    borderRadius: 4,
                    overflow: "hidden",
                    position: "relative",
                    aspectRatio: "4/3",
                    backgroundImage: "url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 24,
                      left: 24,
                      right: 24,
                    }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 2.5,
                        bgcolor: "rgba(255,255,255,0.95)",
                        backdropFilter: "blur(10px)",
                        borderRadius: 2.5,
                        display: "flex",
                        gap: 2,
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          bgcolor: "#EFF6FF",
                          borderRadius: 2,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <FactoryIcon color="primary" />
                      </Box>
                      <Box>
                        <Typography fontWeight={700} fontSize="0.9rem">
                          120,000 sq ft Factory
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Ranchi, Jharkhand · ISO 9001:2015 Certified
                        </Typography>
                      </Box>
                    </Paper>
                  </Box>
                </Box>
              </motion.div>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Chip label="Our Story" sx={{ bgcolor: "#EFF6FF", color: "#1565C0", fontWeight: 700, mb: 2 }} />
                <Typography variant="h2" mb={2.5}>
                  From a Workshop to India's{" "}
                  <Box component="span" sx={{ color: "secondary.main" }}>Top Brand</Box>
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={2.5} lineHeight={1.8}>
                  MA INFRA Portable Cabin started in 2009 with a simple vision: make quality portable structures accessible
                  to every Indian contractor and businessman. Our founder, Vikram Mehta, saw that the market was
                  flooded with low-quality cabins that rusted within months.
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={3.5} lineHeight={1.8}>
                  We invested heavily in premium materials, CNC machinery, and skilled engineers. Within 5 years,
                  we had delivered 500+ cabins across India. Today, with 2,500+ completed projects and partnerships
                  with L&T, NHAI, Reliance, and Tata, we are India's most trusted modular structure company.
                </Typography>
                <Box display="flex" flexDirection="column" gap={1.5} mb={4}>
                  {values.map((v, i) => (
                    <Box key={i} display="flex" gap={1.5} alignItems="flex-start">
                      <CheckCircleIcon color="primary" sx={{ fontSize: 20, mt: 0.25, flexShrink: 0 }} />
                      <Box>
                        <Typography variant="body2" fontWeight={700}>{v.title}</Typography>
                        <Typography variant="caption" color="text.secondary">{v.desc}</Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
                <Button
                  component={Link}
                  href="/contact"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ borderRadius: 2.5, py: 1.5 }}
                >
                  Talk to Our Team
                </Button>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Mission & Vision */}
      <Box sx={{ py: { xs: 7, md: 9 }, bgcolor: "#F8FAFC" }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3.5, md: 5 },
                    borderRadius: 3,
                    border: "1px solid rgba(0,0,0,0.06)",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: 4,
                      background: "linear-gradient(90deg, #1565C0, #1976D2)",
                    }}
                  />
                  <Typography variant="overline" color="primary" fontWeight={700} letterSpacing={2}>
                    Our Mission
                  </Typography>
                  <Typography variant="h3" mt={1} mb={2.5}>
                    Build Better. Build Faster.
                  </Typography>
                  <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
                    To provide every Indian contractor, entrepreneur, and institution with access to world-class
                    modular structures at competitive prices — built to last, delivered on time, backed by
                    unparalleled after-sales service.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3.5, md: 5 },
                    borderRadius: 3,
                    border: "1px solid rgba(0,0,0,0.06)",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: 4,
                      background: "linear-gradient(90deg, #F57C00, #FF9800)",
                    }}
                  />
                  <Typography variant="overline" color="secondary" fontWeight={700} letterSpacing={2}>
                    Our Vision
                  </Typography>
                  <Typography variant="h3" mt={1} mb={2.5}>
                    India's Most Trusted Modular Brand
                  </Typography>
                  <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
                    To become South Asia's leading modular infrastructure company by 2030 — expanding into
                    Southeast Asia while maintaining the quality, reliability, and customer trust that has
                    defined us for 15 years.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Manufacturing Process */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: "white" }}>
        <Container maxWidth="xl">
          <SectionHeader
            badge="How We Build"
            title="Our Manufacturing"
            highlight="Process"
            subtitle="Every MA INFRA structure follows a rigorous 5-stage process to ensure top quality."
          />
          <Box sx={{ position: "relative" }}>
            {/* Connector line */}
            <Box
              sx={{
                position: "absolute",
                top: { md: 40 },
                left: { md: "5%" },
                right: { md: "5%" },
                height: 2,
                bgcolor: "rgba(0,0,0,0.06)",
                display: { xs: "none", md: "block" },
              }}
            />
            <Grid container spacing={3}>
              {processSteps.map((step, i) => (
                <Grid size={{ xs: 12, sm: 6 }} key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Box textAlign="center" px={1}>
                      <Box
                        sx={{
                          width: 72,
                          height: 72,
                          borderRadius: "50%",
                          bgcolor: `${step.color}15`,
                          color: step.color,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mx: "auto",
                          mb: 2,
                          border: `2px solid ${step.color}30`,
                          position: "relative",
                          zIndex: 1,
                        }}
                      >
                        {step.icon}
                        <Box
                          sx={{
                            position: "absolute",
                            top: -8,
                            right: -8,
                            width: 22,
                            height: 22,
                            borderRadius: "50%",
                            bgcolor: step.color,
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "0.65rem",
                            fontWeight: 800,
                          }}
                        >
                          {step.step}
                        </Box>
                      </Box>
                      <Typography variant="subtitle1" fontWeight={700} mb={1}>
                        {step.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" lineHeight={1.7}>
                        {step.description}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Team */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: "#F8FAFC" }}>
        <Container maxWidth="xl">
          <SectionHeader
            badge="Meet the Team"
            title="The People Behind"
            highlight="MA INFRA"
            subtitle="A team of passionate engineers, designers, and business minds driving India's modular future."
          />
          <Grid container spacing={3} justifyContent="center">
            {teamMembers.map((member, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={member.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3.5,
                      textAlign: "center",
                      border: "1px solid rgba(0,0,0,0.06)",
                      borderRadius: 3,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
                        transform: "translateY(-4px)",
                        "& .team-avatar": {
                          transform: "scale(1.05)",
                          boxShadow: "0 8px 25px rgba(21,101,192,0.25)",
                        },
                      },
                    }}
                  >
                    <Avatar
                      className="team-avatar"
                      src={member.avatar}
                      alt={member.name}
                      sx={{
                        width: 80,
                        height: 80,
                        mx: "auto",
                        mb: 2,
                        transition: "all 0.3s ease",
                        border: "3px solid white",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                      }}
                    />
                    <Typography variant="subtitle1" fontWeight={700} mb={0.5}>
                      {member.name}
                    </Typography>
                    <Typography variant="caption" color="primary" fontWeight={600} display="block" mb={1.5}>
                      {member.role}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" lineHeight={1.7}>
                      {member.bio}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
