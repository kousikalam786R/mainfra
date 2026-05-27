"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Box, Container, Button, Tabs, Tab, Grid } from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { products } from "@/data/products";
import ProductCard from "@/components/cards/ProductCard";
import SectionHeader from "@/components/common/SectionHeader";

const tabs = ["All", "Portable Office", "Security Cabin", "Container House", "Modular Office"];

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState(0);

  const filtered = products.filter((p) => {
    if (activeTab === 0) return true;
    return p.category === tabs[activeTab];
  }).slice(0, 4);

  return (
    <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: "#F8FAFC" }}>
      <Container maxWidth="xl">
        <SectionHeader
          badge="Featured"
          title="Our Best-Selling"
          highlight="Products"
          subtitle="Hand-picked premium portable structures trusted by contractors, architects, and corporates across India."
        />

        {/* Filter Tabs */}
        <Box sx={{ mb: 5, overflowX: "auto" }}>
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
                "&.Mui-selected": {
                  color: "primary.main",
                },
                "&:hover": {
                  bgcolor: "#EFF6FF",
                  color: "primary.main",
                },
              },
              "& .MuiTabs-flexContainer": {
                gap: 0.5,
              },
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

        <Box textAlign="center" mt={6}>
          <Button
            component={Link}
            href="/products"
            variant="outlined"
            color="primary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              borderRadius: 2.5,
              px: 4,
              py: 1.5,
              fontWeight: 600,
              borderWidth: 2,
              "&:hover": { borderWidth: 2 },
            }}
          >
            View All Products
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
