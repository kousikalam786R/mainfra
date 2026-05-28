"use client";

import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
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
    <Box ref={ref} sx={{ py: { xs: 6, md: 8 }, bgcolor: "#F1F5F9" }}>
      <Container maxWidth="xl">
        <Grid container spacing={2.5}>
          {stats.map((stat, i) => (
            <Grid size={{ xs: 6, sm: 4, md: 2 }} key={stat.label}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 2, md: 2.5 },
                    textAlign: "center",
                    borderRadius: 3,
                    border: "1px solid rgba(0,0,0,0.06)",
                    bgcolor: "white",
                    height: "100%",
                    transition: "box-shadow 0.25s ease",
                    "&:hover": {
                      boxShadow: "0 8px 24px rgba(21,101,192,0.1)",
                    },
                  }}
                >
                  <Typography sx={{ fontSize: { xs: "1.5rem", md: "1.75rem" }, mb: 0.75 }}>
                    {stat.icon}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 800,
                      color: "primary.main",
                      fontSize: { xs: "1.35rem", md: "1.65rem" },
                      lineHeight: 1.1,
                      mb: 0.5,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "text.secondary",
                      fontWeight: 500,
                      lineHeight: 1.4,
                      display: "block",
                    }}
                  >
                    {stat.label}
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
