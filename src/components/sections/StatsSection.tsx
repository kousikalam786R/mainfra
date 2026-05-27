"use client";

import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: "2,500+", label: "Projects Completed", icon: "🏗️" },
  { value: "800+", label: "Happy Clients", icon: "😊" },
  { value: "15+", label: "Years of Experience", icon: "📅" },
  { value: "120+", label: "Cities Served", icon: "📍" },
  { value: "500+", label: "Workers Employed", icon: "👷" },
  { value: "50+", label: "Active Dealers", icon: "🤝" },
];

export default function StatsSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div ref={ref}>
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        background: "linear-gradient(135deg, #1565C0 0%, #1976D2 50%, #0D47A1 100%)",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {stats.map((stat, i) => (
            <Grid size={{ xs: 6, sm: 4, md: 2 }} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Box textAlign="center" p={{ xs: 1, md: 2 }}>
                  <Typography sx={{ fontSize: { xs: "1.8rem", md: "2rem" }, mb: 0.5 }}>
                    {stat.icon}
                  </Typography>
                  <Typography
                    variant="h3"
                    fontWeight={800}
                    color="white"
                    sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" }, lineHeight: 1.1, mb: 0.5 }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255,255,255,0.7)", fontWeight: 500 }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
    </div>
  );
}
