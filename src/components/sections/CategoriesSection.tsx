"use client";

import React from "react";
import Link from "next/link";
import { Box, Container, Typography, Card, Chip, Grid } from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { categories } from "@/data/products";
import SectionHeader from "@/components/common/SectionHeader";

export default function CategoriesSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: "white" }}>
      <Container maxWidth="xl">
        <SectionHeader
          badge="What We Offer"
          title="Our Product"
          highlight="Categories"
          subtitle="From quick-deploy security cabins to fully furnished container homes — we build modular structures for every need."
        />

        <Grid container spacing={3}>
          {categories.map((cat, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={cat.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                style={{ height: "100%" }}
              >
                <Card
                  component={Link}
                  href={`/products?category=${cat.slug}`}
                  sx={{
                    height: 220,
                    display: "block",
                    textDecoration: "none",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 3,
                    cursor: "pointer",
                    "&:hover": {
                      "& .cat-overlay": {
                        opacity: 1,
                      },
                      "& .cat-image": {
                        transform: "scale(1.07)",
                      },
                      "& .cat-arrow": {
                        transform: "translateX(4px)",
                        opacity: 1,
                      },
                      boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
                    },
                  }}
                >
                  {/* Background image */}
                  <Box
                    className="cat-image"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: `url(${cat.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      transition: "transform 0.5s ease",
                    }}
                  />

                  {/* Dark overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 60%, transparent 100%)",
                    }}
                  />

                  {/* Hover overlay */}
                  <Box
                    className="cat-overlay"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      bgcolor: "rgba(21,101,192,0.35)",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                  />

                  {/* Content */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 2.5,
                      color: "white",
                    }}
                  >
                    <Chip
                      label={`${cat.count} products`}
                      size="small"
                      sx={{
                        bgcolor: "rgba(255,255,255,0.15)",
                        color: "white",
                        fontSize: "0.65rem",
                        fontWeight: 600,
                        mb: 1,
                        backdropFilter: "blur(8px)",
                      }}
                    />
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Box>
                        <Typography
                          variant="h6"
                          fontWeight={700}
                          lineHeight={1.2}
                          sx={{ fontSize: "1rem" }}
                        >
                          {cat.name}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: "rgba(255,255,255,0.7)" }}
                        >
                          {cat.description}
                        </Typography>
                      </Box>
                      <Box
                        className="cat-arrow"
                        sx={{
                          width: 32,
                          height: 32,
                          bgcolor: "rgba(255,255,255,0.15)",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 0.3s ease",
                          opacity: 0.6,
                          flexShrink: 0,
                          ml: 1,
                        }}
                      >
                        <ArrowForwardIcon sx={{ fontSize: 16, color: "white" }} />
                      </Box>
                    </Box>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
