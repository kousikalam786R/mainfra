"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Box, Container, Button, Tabs, Tab, Grid, Paper, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { products } from "@/data/products";
import ProductCard from "@/components/cards/ProductCard";
import SectionHeader from "@/components/common/SectionHeader";

const tabs = [
  "All",
  "Portable Office",
  "Security Cabin",
  "Container House",
  "Modular Office",
];

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState(0);

  const filtered = products
    .filter((p) => {
      if (activeTab === 0) return true;
      return p.category === tabs[activeTab];
    })
    .slice(0, 4);

  return (
    <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: "#F8FAFC" }}>
      <Container maxWidth="xl">
        <SectionHeader
          badge="Featured"
          title="Our Best-Selling"
          highlight="Products"
          subtitle="Hand-picked portable cabins and modular offices trusted by contractors, builders, and businesses — built for strength, fast setup, and reliable pan-India delivery."
        />

        <Box sx={{ mb: 4, overflowX: "auto", pb: 0.5 }}>
          <Tabs
            value={activeTab}
            onChange={(_, v) => setActiveTab(v)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              "& .MuiTabs-indicator": {
                bgcolor: "primary.main",
                height: 3,
                borderRadius: 2,
              },
              "& .MuiTab-root": {
                textTransform: "none",
                fontWeight: 600,
                fontSize: "0.875rem",
                color: "text.secondary",
                px: 2.5,
                py: 1.5,
                minHeight: "auto",
                borderRadius: 2,
                mr: 0.5,
                "&.Mui-selected": { color: "primary.main" },
                "&:hover": { bgcolor: "#EFF6FF", color: "primary.main" },
              },
              "& .MuiTabs-flexContainer": { gap: 0.5 },
            }}
          >
            {tabs.map((tab, i) => (
              <Tab key={i} label={tab} disableRipple />
            ))}
          </Tabs>
        </Box>

        <Grid container spacing={3}>
          {filtered.map((product) => (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={product.id}>
              <ProductCard product={product} />
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
            bgcolor: "white",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
            <Typography sx={{ fontWeight: 700, mb: 0.5 }}>
              Need more options?
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
              See the complete catalog with filters by category, price, and specifications.
            </Typography>
          </Box>
          <Button
            component={Link}
            href="/products"
            variant="outlined"
            color="primary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              borderRadius: 2.5,
              px: 3.5,
              py: 1.35,
              fontWeight: 600,
              borderWidth: 2,
              flexShrink: 0,
              whiteSpace: "nowrap",
              "&:hover": { borderWidth: 2 },
            }}
          >
            View All Products
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}
