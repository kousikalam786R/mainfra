"use client";

import React, { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Rating,
  Divider,
  Paper,
  Breadcrumbs,
  Link as MuiLink,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Tabs,
  Tab,
  IconButton,
} from "@mui/material";
import { Grid } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedIcon from "@mui/icons-material/Verified";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import ProductCard from "@/components/cards/ProductCard";
import SectionHeader from "@/components/common/SectionHeader";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  if (!product) {
    return (
      <Box sx={{ textAlign: "center", py: 10 }}>
        <Typography variant="h4">Product not found</Typography>
        <Button component={Link} href="/products" sx={{ mt: 2 }}>
          Browse Products
        </Button>
      </Box>
    );
  }

  const related = products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4);

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#F8FAFC" }}>
      {/* Breadcrumb bar */}
      <Box sx={{ bgcolor: "white", borderBottom: "1px solid rgba(0,0,0,0.06)", py: 2 }}>
        <Container maxWidth="xl">
          <Breadcrumbs>
            <MuiLink
              component={Link}
              href="/"
              sx={{ display: "flex", alignItems: "center", gap: 0.5, color: "text.secondary" }}
            >
              <HomeIcon fontSize="small" /> Home
            </MuiLink>
            <MuiLink
              component={Link}
              href="/products"
              sx={{ color: "text.secondary" }}
            >
              Products
            </MuiLink>
            <MuiLink
              component={Link}
              href={`/products?category=${product.categorySlug}`}
              sx={{ color: "text.secondary" }}
            >
              {product.category}
            </MuiLink>
            <Typography color="text.primary" fontSize="0.875rem" sx={{
              display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical", overflow: "hidden", maxWidth: 200
            }}>
              {product.name}
            </Typography>
          </Breadcrumbs>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 5 }}>
        <Grid container spacing={5}>
          {/* Image Gallery */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: "sticky", top: 90 }}>
              {/* Main image */}
              <Paper
                elevation={0}
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  border: "1px solid rgba(0,0,0,0.06)",
                  position: "relative",
                  bgcolor: "#F1F5F9",
                  aspectRatio: "4/3",
                  mb: 2,
                }}
              >
                <motion.div
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${product.images[activeImage]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <Box display="flex" gap={0.5} sx={{ position: "absolute", top: 12, left: 12 }}>
                  {product.isBestseller && (
                    <Chip label="Bestseller" size="small" sx={{ bgcolor: "#F57C00", color: "white", fontWeight: 700 }} />
                  )}
                  {product.isNew && (
                    <Chip label="New" size="small" sx={{ bgcolor: "#16A34A", color: "white", fontWeight: 700 }} />
                  )}
                </Box>

                {/* Nav arrows */}
                <IconButton
                  onClick={() => setActiveImage((i) => (i - 1 + product.images.length) % product.images.length)}
                  sx={{ position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)", bgcolor: "rgba(255,255,255,0.9)", "&:hover": { bgcolor: "white" } }}
                  size="small"
                >
                  <ArrowBackIosNewIcon fontSize="small" />
                </IconButton>
                <IconButton
                  onClick={() => setActiveImage((i) => (i + 1) % product.images.length)}
                  sx={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", bgcolor: "rgba(255,255,255,0.9)", "&:hover": { bgcolor: "white" } }}
                  size="small"
                >
                  <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
              </Paper>

              {/* Thumbnails */}
              <Box display="flex" gap={1.5} flexWrap="wrap">
                {product.images.map((img, i) => (
                  <Box
                    key={i}
                    onClick={() => setActiveImage(i)}
                    sx={{
                      width: 72,
                      height: 60,
                      borderRadius: 2,
                      overflow: "hidden",
                      cursor: "pointer",
                      border: "2px solid",
                      borderColor: i === activeImage ? "primary.main" : "transparent",
                      opacity: i === activeImage ? 1 : 0.65,
                      transition: "all 0.2s ease",
                      backgroundImage: `url(${img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      bgcolor: "#F1F5F9",
                      "&:hover": { opacity: 1 },
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Product Info */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Category */}
              <Chip
                label={product.category}
                size="small"
                color="primary"
                variant="outlined"
                sx={{ mb: 2, fontWeight: 600, borderRadius: 1.5 }}
              />

              {/* Title */}
              <Typography variant="h3" fontWeight={800} color="text.primary" mb={1.5} lineHeight={1.2}>
                {product.name}
              </Typography>

              {/* Rating */}
              <Box display="flex" alignItems="center" gap={1.5} mb={2}>
                <Rating value={product.rating} precision={0.1} size="small" readOnly />
                <Typography variant="body2" fontWeight={600} color="primary">
                  {product.rating}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ({product.reviews} reviews)
                </Typography>
              </Box>

              {/* Price */}
              <Box mb={2.5}>
                <Typography variant="caption" color="text.secondary">
                  Starting from
                </Typography>
                <Typography variant="h3" fontWeight={800} color="primary.main" lineHeight={1.1}>
                  {product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary" mt={0.25}>
                  Price range: {product.priceRange} · Customization available
                </Typography>
              </Box>

              <Divider sx={{ my: 2.5 }} />

              {/* Description */}
              <Typography variant="body1" color="text.secondary" lineHeight={1.8} mb={3}>
                {product.description}
              </Typography>

              {/* Key highlights */}
              <Box mb={3}>
                <Typography variant="subtitle2" fontWeight={700} mb={1.5}>
                  Key Features
                </Typography>
                <Grid container spacing={1}>
                  {product.features.slice(0, 6).map((feat, i) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={i}>
                      <Box display="flex" gap={1} alignItems="flex-start">
                        <CheckCircleIcon color="primary" sx={{ fontSize: 16, mt: 0.25, flexShrink: 0 }} />
                        <Typography variant="body2" color="text.secondary">{feat}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              {/* Delivery info */}
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  bgcolor: "#F0FDF4",
                  border: "1px solid #BBF7D0",
                  borderRadius: 2,
                  display: "flex",
                  gap: 1.5,
                  alignItems: "center",
                  mb: 3,
                }}
              >
                <LocalShippingIcon sx={{ color: "#16A34A" }} />
                <Box>
                  <Typography variant="body2" fontWeight={700} color="#16A34A">
                    Delivery in {product.deliveryTime}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Free delivery across India on orders above ₹1,00,000
                  </Typography>
                </Box>
              </Paper>

              {/* CTA Buttons */}
              <Box display="flex" gap={2} mb={2} flexWrap="wrap">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  sx={{ borderRadius: 2.5, py: 1.75, fontWeight: 700, flex: 1, minWidth: 140 }}
                >
                  Request a Quote
                </Button>
                <Button
                  variant="contained"
                  href={`https://wa.me/919876543210?text=I'm interested in ${encodeURIComponent(product.name)}`}
                  component="a"
                  target="_blank"
                  startIcon={<WhatsAppIcon />}
                  size="large"
                  sx={{
                    borderRadius: 2.5,
                    py: 1.75,
                    flex: 1,
                    minWidth: 140,
                    bgcolor: "#25D366",
                    "&:hover": { bgcolor: "#1DAB52" },
                  }}
                >
                  WhatsApp
                </Button>
              </Box>
              <Button
                href="tel:+919876543210"
                component="a"
                fullWidth
                variant="outlined"
                startIcon={<PhoneIcon />}
                size="large"
                sx={{ borderRadius: 2.5, py: 1.5 }}
              >
                Call +91 98765 43210
              </Button>

              {/* Trust */}
              <Box display="flex" gap={2} mt={3} flexWrap="wrap">
                {[
                  { icon: <VerifiedIcon sx={{ fontSize: 16 }} />, label: "ISO Certified" },
                  { icon: <LocalShippingIcon sx={{ fontSize: 16 }} />, label: "Pan-India Delivery" },
                  { icon: <CheckCircleIcon sx={{ fontSize: 16 }} />, label: "2-Year Warranty" },
                ].map((t, i) => (
                  <Box key={i} display="flex" gap={0.75} alignItems="center">
                    <Box sx={{ color: "primary.main" }}>{t.icon}</Box>
                    <Typography variant="caption" color="text.secondary" fontWeight={500}>
                      {t.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Tabs: Specifications + Inquiry */}
        <Box mt={7}>
          <Paper elevation={0} sx={{ borderRadius: 3, border: "1px solid rgba(0,0,0,0.06)", overflow: "hidden" }}>
            <Tabs
              value={activeTab}
              onChange={(_, v) => setActiveTab(v)}
              sx={{
                borderBottom: "1px solid rgba(0,0,0,0.08)",
                px: 3,
                "& .MuiTab-root": {
                  fontWeight: 600,
                  textTransform: "none",
                  fontSize: "0.9rem",
                },
              }}
            >
              <Tab label="Specifications" />
              <Tab label="All Features" />
              <Tab label="Send Inquiry" />
            </Tabs>

            <Box p={4}>
              {activeTab === 0 && (
                <Box sx={{ overflowX: "auto" }}>
                  <Table>
                    <TableBody>
                      {Object.entries(product.specifications).map(([key, val]) => (
                        <TableRow
                          key={key}
                          sx={{ "&:nth-of-type(even)": { bgcolor: "#F8FAFC" } }}
                        >
                          <TableCell
                            sx={{ fontWeight: 600, color: "text.primary", border: "none", py: 1.5, pl: 0, width: "35%" }}
                          >
                            {key}
                          </TableCell>
                          <TableCell sx={{ color: "text.secondary", border: "none", py: 1.5 }}>
                            {val}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              )}

              {activeTab === 1 && (
                <Grid container spacing={1.5}>
                  {product.features.map((feat, i) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                      <Box display="flex" gap={1.5} alignItems="flex-start">
                        <CheckCircleIcon color="primary" sx={{ fontSize: 18, mt: 0.2, flexShrink: 0 }} />
                        <Typography variant="body2" color="text.secondary" lineHeight={1.6}>{feat}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              )}

              {activeTab === 2 && (
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, md: 7 }}>
                    <Typography variant="h6" fontWeight={700} mb={3}>
                      Inquire About {product.name}
                    </Typography>
                    <Grid container spacing={2.5}>
                      {[
                        { label: "Full Name *", placeholder: "Rajesh Kumar" },
                        { label: "Phone Number *", placeholder: "+91 98765 43210" },
                        { label: "Email Address", placeholder: "rajesh@company.com" },
                        { label: "Company Name", placeholder: "Patel Constructions Pvt. Ltd." },
                        { label: "City / Location *", placeholder: "Mumbai, Maharashtra" },
                        { label: "Quantity Required", placeholder: "e.g. 5 units" },
                      ].map((f, i) => (
                        <Grid size={{ xs: 12, sm: 6 }} key={i}>
                          <TextField
                            label={f.label}
                            placeholder={f.placeholder}
                            size="small"
                            fullWidth
                          />
                        </Grid>
                      ))}
                      <Grid size={12}>
                        <TextField
                          label="Additional Requirements"
                          placeholder="Describe any customizations, delivery timeline, or special requirements..."
                          multiline
                          rows={3}
                          fullWidth
                          size="small"
                        />
                      </Grid>
                      <Grid size={12}>
                        <Button
                          variant="contained"
                          color="secondary"
                          size="large"
                          sx={{ borderRadius: 2, py: 1.5, px: 4, fontWeight: 700 }}
                        >
                          Submit Inquiry →
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid size={{ xs: 12, md: 5 }}>
                    <Paper
                      elevation={0}
                      sx={{ p: 3, bgcolor: "#EFF6FF", borderRadius: 3, border: "1px solid #BFDBFE" }}
                    >
                      <Typography variant="subtitle1" fontWeight={700} color="primary" mb={2}>
                        Need it urgently?
                      </Typography>
                      <Box display="flex" flexDirection="column" gap={2}>
                        <Button
                          href="tel:+919876543210"
                          component="a"
                          variant="contained"
                          startIcon={<PhoneIcon />}
                          fullWidth
                          sx={{ borderRadius: 2 }}
                        >
                          Call +91 98765 43210
                        </Button>
                        <Button
                          href={`https://wa.me/919876543210?text=I want to inquire about ${encodeURIComponent(product.name)}`}
                          component="a"
                          target="_blank"
                          variant="contained"
                          startIcon={<WhatsAppIcon />}
                          fullWidth
                          sx={{ borderRadius: 2, bgcolor: "#25D366", "&:hover": { bgcolor: "#1DAB52" } }}
                        >
                          WhatsApp Us
                        </Button>
                      </Box>
                      <Divider sx={{ my: 2.5 }} />
                      <Typography variant="caption" color="text.secondary" lineHeight={1.6} display="block">
                        Our team typically responds within 2 hours on business days.
                        For urgent requirements, calling is the fastest option.
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              )}
            </Box>
          </Paper>
        </Box>

        {/* Related Products */}
        {related.length > 0 && (
          <Box mt={8}>
            <SectionHeader
              badge="More to Explore"
              title="Related"
              highlight="Products"
              subtitle=""
            />
            <Grid container spacing={3}>
              {related.map((p) => (
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={p.id}>
                  <ProductCard product={p} />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Container>
    </Box>
  );
}
