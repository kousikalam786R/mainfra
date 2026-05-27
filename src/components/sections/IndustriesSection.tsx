"use client";

import React from "react";
import { Box, Container, Typography, Card, Grid } from "@mui/material";

import { motion } from "framer-motion";
import { industries } from "@/data/products";
import SectionHeader from "@/components/common/SectionHeader";

export default function IndustriesSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: "white" }}>
      <Container maxWidth="xl">
        <SectionHeader
          badge="Industries We Serve"
          title="Modular Solutions For"
          highlight="Every Sector"
          subtitle="From infrastructure projects to healthcare camps — our portable structures adapt to any industry requirement."
        />

        <Grid container spacing={3}>
          {industries.map((industry, index) => (
            <Grid size={{ xs: 6, sm: 4, md: 2 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card
                  sx={{
                    p: 3,
                    textAlign: "center",
                    border: "2px solid",
                    borderColor: "rgba(0,0,0,0.05)",
                    bgcolor: "white",
                    boxShadow: "none",
                    borderRadius: 3,
                    cursor: "default",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "#1565C0",
                      bgcolor: "#EFF6FF",
                      transform: "translateY(-6px)",
                      boxShadow: "0 12px 30px rgba(21,101,192,0.12)",
                    },
                  }}
                >
                  <Typography
                    sx={{ fontSize: "2.5rem", lineHeight: 1, mb: 1.5 }}
                  >
                    {industry.icon}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    fontWeight={700}
                    color="text.primary"
                    mb={0.75}
                  >
                    {industry.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" lineHeight={1.5} display="block">
                    {industry.description}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
