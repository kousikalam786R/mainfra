"use client";

import React from "react";
import Link from "next/link";
import { Box, Container, Typography, Card, Chip, Grid, Button, Paper } from "@mui/material";
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
          subtitle="From quick-deploy security cabins to fully furnished container homes — we design and deliver modular structures for construction sites, industries, and commercial projects across India."
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
                      "& .cat-overlay": { opacity: 1 },
                      "& .cat-image": { transform: "scale(1.07)" },
                      "& .cat-arrow": {
                        transform: "translateX(4px)",
                        opacity: 1,
                      },
                      boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
                    },
                  }}
                >
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
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 60%, transparent 100%)",
                    }}
                  />
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
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 1,
                      }}
                    >
                      <Box sx={{ minWidth: 0 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            lineHeight: 1.25,
                            fontSize: "1rem",
                            color: "white",
                          }}
                        >
                          {cat.name}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: "rgba(255,255,255,0.75)",
                            lineHeight: 1.4,
                            display: "block",
                            mt: 0.25,
                          }}
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

        <Paper
          elevation={0}
          sx={{
            mt: { xs: 4, md: 5 },
            p: { xs: 2.5, md: 3 },
            borderRadius: 3,
            border: "1px solid rgba(0,0,0,0.06)",
            bgcolor: "#F8FAFC",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
            <Typography sx={{ fontWeight: 700, mb: 0.5 }}>
              Explore our full product range
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
              Browse all portable cabins, offices, storage units, and container solutions in one place.
            </Typography>
          </Box>
          <Button
            component={Link}
            href="/products"
            variant="contained"
            color="primary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              borderRadius: 2.5,
              px: 3.5,
              py: 1.35,
              fontWeight: 600,
              flexShrink: 0,
              whiteSpace: "nowrap",
            }}
          >
            View All Products
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}
