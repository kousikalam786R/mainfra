"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
  Grid,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedIcon from "@mui/icons-material/Verified";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/data/products";
import ProductCard from "@/components/cards/ProductCard";
import SectionHeader from "@/components/common/SectionHeader";
import { company, whatsappUrl } from "@/data/company";

const trustItems = [
  { icon: VerifiedIcon, label: "ISO Certified" },
  { icon: LocalShippingIcon, label: "Pan-India Delivery" },
  { icon: CheckCircleIcon, label: "2-Year Warranty" },
];

export default function ProductDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : params.slug?.[0];
  const product = products.find((p) => p.slug === slug);

  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  if (!product) {
    return (
      <Box
        sx={{
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#F8FAFC",
          px: 2,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
          Product not found
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>
          This product may have been removed or the link is incorrect.
        </Typography>
        <Button component={Link} href="/products" variant="contained">
          Browse all products
        </Button>
      </Box>
    );
  }

  const related = products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4);

  const imageCount = product.images.length;
  const prevImage = () =>
    setActiveImage((i) => (i - 1 + imageCount) % imageCount);
  const nextImage = () => setActiveImage((i) => (i + 1) % imageCount);

  const contactHref = `/contact?product=${encodeURIComponent(product.name)}`;

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#F8FAFC" }}>
      {/* Header — matches Gallery / Products */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #0A1628, #1565C0)",
          py: { xs: 1.5, md: 2 },
          color: "#FFFFFF",
        }}
      >
        <Container maxWidth="xl">
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{
              mb: 0.5,
              "& .MuiBreadcrumbs-separator": { mx: 0.5, color: "rgba(255,255,255,0.4)" },
              "& .MuiBreadcrumbs-li": { maxWidth: { xs: 120, sm: "none" } },
            }}
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
                "&:hover": { color: "rgba(255,255,255,0.9)" },
              }}
            >
              <HomeIcon sx={{ fontSize: 14 }} /> Home
            </MuiLink>
            <MuiLink
              component={Link}
              href="/products"
              sx={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "0.75rem",
                textDecoration: "none",
                "&:hover": { color: "rgba(255,255,255,0.9)" },
              }}
            >
              Products
            </MuiLink>
            <MuiLink
              component={Link}
              href={`/products?category=${product.categorySlug}`}
              sx={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "0.75rem",
                textDecoration: "none",
                "&:hover": { color: "rgba(255,255,255,0.9)" },
              }}
            >
              {product.category}
            </MuiLink>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "0.75rem",
                display: "-webkit-box",
                WebkitLineClamp: 1,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {product.name}
            </Typography>
          </Breadcrumbs>
          <Typography
            variant="h5"
            component="h1"
            sx={{
              color: "#FFFFFF",
              fontWeight: 700,
              fontSize: { xs: "1.25rem", md: "1.5rem" },
              lineHeight: 1.2,
              m: 0,
            }}
          >
            {product.name}
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: { xs: 3, md: 4 } }}>
        <Grid container spacing={{ xs: 3, md: 5 }}>
          {/* Image gallery */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: { md: "sticky" }, top: { md: 90 } }}>
              <Paper
                elevation={0}
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  border: "1px solid rgba(0,0,0,0.06)",
                  position: "relative",
                  bgcolor: "#F1F5F9",
                  aspectRatio: "4 / 3",
                  mb: 2,
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ position: "absolute", inset: 0 }}
                  >
                    <Image
                      src={product.images[activeImage]}
                      alt={`${product.name} — image ${activeImage + 1}`}
                      fill
                      sizes="(max-width: 900px) 100vw, 50vw"
                      style={{ objectFit: "cover" }}
                      priority={activeImage === 0}
                    />
                  </motion.div>
                </AnimatePresence>

                {(product.isBestseller || product.isNew) && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 0.75,
                      zIndex: 2,
                    }}
                  >
                    {product.isBestseller && (
                      <Chip
                        label="Bestseller"
                        size="small"
                        sx={{
                          bgcolor: "#F57C00",
                          color: "white",
                          fontWeight: 700,
                          height: 24,
                        }}
                      />
                    )}
                    {product.isNew && (
                      <Chip
                        label="New"
                        size="small"
                        sx={{
                          bgcolor: "#16A34A",
                          color: "white",
                          fontWeight: 700,
                          height: 24,
                        }}
                      />
                    )}
                  </Box>
                )}

                {imageCount > 1 && (
                  <>
                    <IconButton
                      onClick={prevImage}
                      aria-label="Previous image"
                      size="small"
                      sx={{
                        position: "absolute",
                        left: 8,
                        top: "50%",
                        transform: "translateY(-50%)",
                        bgcolor: "rgba(255,255,255,0.95)",
                        zIndex: 2,
                        "&:hover": { bgcolor: "white" },
                      }}
                    >
                      <ArrowBackIosNewIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      onClick={nextImage}
                      aria-label="Next image"
                      size="small"
                      sx={{
                        position: "absolute",
                        right: 8,
                        top: "50%",
                        transform: "translateY(-50%)",
                        bgcolor: "rgba(255,255,255,0.95)",
                        zIndex: 2,
                        "&:hover": { bgcolor: "white" },
                      }}
                    >
                      <ArrowForwardIosIcon fontSize="small" />
                    </IconButton>
                  </>
                )}
              </Paper>

              {imageCount > 1 && (
                <Box
                  sx={{
                    display: "flex",
                    gap: 1.25,
                    flexWrap: "wrap",
                  }}
                >
                  {product.images.map((img, i) => (
                    <Box
                      key={i}
                      onClick={() => setActiveImage(i)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setActiveImage(i);
                        }
                      }}
                      sx={{
                        position: "relative",
                        width: 72,
                        height: 56,
                        borderRadius: 2,
                        overflow: "hidden",
                        cursor: "pointer",
                        border: "2px solid",
                        borderColor:
                          i === activeImage ? "primary.main" : "transparent",
                        opacity: i === activeImage ? 1 : 0.7,
                        transition: "all 0.2s ease",
                        flexShrink: 0,
                        "&:hover": { opacity: 1 },
                      }}
                    >
                      <Image
                        src={img}
                        alt=""
                        fill
                        sizes="72px"
                        style={{ objectFit: "cover" }}
                      />
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          </Grid>

          {/* Product info */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Chip
                label={product.category}
                size="small"
                color="primary"
                variant="outlined"
                sx={{ mb: 2, fontWeight: 600, borderRadius: 1.5 }}
              />

              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: 800,
                  color: "text.primary",
                  mb: 1.5,
                  lineHeight: 1.25,
                  fontSize: { xs: "1.35rem", md: "1.75rem" },
                }}
              >
                {product.name}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 1.25,
                  mb: 2.5,
                }}
              >
                <Rating
                  value={product.rating}
                  precision={0.1}
                  size="small"
                  readOnly
                  sx={{ "& .MuiRating-icon": { fontSize: 18 } }}
                />
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 700, color: "primary.main" }}
                >
                  {product.rating.toFixed(1)}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  ({product.reviews} reviews)
                </Typography>
              </Box>

              <Paper
                elevation={0}
                sx={{
                  p: 2.5,
                  mb: 2.5,
                  borderRadius: 2,
                  bgcolor: "white",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "text.secondary", display: "block", mb: 0.5 }}
                >
                  Starting from
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 800,
                    color: "primary.main",
                    fontSize: { xs: "1.75rem", md: "2rem" },
                    lineHeight: 1.1,
                    mb: 0.75,
                  }}
                >
                  {product.price}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Range: {product.priceRange} · Custom sizes available
                </Typography>
              </Paper>

              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.75,
                  mb: 3,
                  fontSize: "0.9375rem",
                }}
              >
                {product.description}
              </Typography>

              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 700, mb: 1.5 }}
              >
                Key features
              </Typography>
              <Grid container spacing={1.25} sx={{ mb: 3 }}>
                {product.features.slice(0, 6).map((feat, i) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={i}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 1,
                      }}
                    >
                      <CheckCircleIcon
                        color="primary"
                        sx={{ fontSize: 18, mt: 0.15, flexShrink: 0 }}
                      />
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", lineHeight: 1.5 }}
                      >
                        {feat}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  bgcolor: "#F0FDF4",
                  border: "1px solid #BBF7D0",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 1.5,
                  mb: 3,
                }}
              >
                <LocalShippingIcon
                  sx={{ color: "#16A34A", fontSize: 22, flexShrink: 0, mt: 0.25 }}
                />
                <Box>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 700, color: "#16A34A", mb: 0.25 }}
                  >
                    Delivery in {product.deliveryTime}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "text.secondary" }}>
                    Pan-India delivery from Ranchi · Installation support available
                  </Typography>
                </Box>
              </Paper>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 1.5,
                  mb: 1.5,
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  component={Link}
                  href={contactHref}
                  sx={{
                    borderRadius: 2.5,
                    py: 1.5,
                    fontWeight: 700,
                    flex: 1,
                  }}
                >
                  Request a quote
                </Button>
                <Button
                  variant="contained"
                  href={whatsappUrl(`I'm interested in ${product.name}`)}
                  component="a"
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<WhatsAppIcon />}
                  size="large"
                  sx={{
                    borderRadius: 2.5,
                    py: 1.5,
                    flex: 1,
                    bgcolor: "#25D366",
                    "&:hover": { bgcolor: "#1DAB52" },
                  }}
                >
                  WhatsApp
                </Button>
              </Box>

              <Button
                href={`tel:${company.phoneTel}`}
                component="a"
                fullWidth
                variant="outlined"
                startIcon={<PhoneIcon />}
                size="large"
                sx={{
                  borderRadius: 2.5,
                  py: 1.35,
                  mb: 3,
                }}
              >
                Call {company.phone}
              </Button>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                }}
              >
                {trustItems.map(({ icon: Icon, label }) => (
                  <Box
                    key={label}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.75,
                    }}
                  >
                    <Icon sx={{ fontSize: 18, color: "primary.main" }} />
                    <Typography
                      variant="caption"
                      sx={{ color: "text.secondary", fontWeight: 500 }}
                    >
                      {label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Tabs */}
        <Box sx={{ mt: { xs: 5, md: 7 } }}>
          <Paper
            elevation={0}
            sx={{
              borderRadius: 3,
              border: "1px solid rgba(0,0,0,0.06)",
              overflow: "hidden",
              bgcolor: "white",
            }}
          >
            <Tabs
              value={activeTab}
              onChange={(_, v) => setActiveTab(v)}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                borderBottom: "1px solid rgba(0,0,0,0.08)",
                px: { xs: 1, sm: 2 },
                minHeight: 48,
                "& .MuiTab-root": {
                  fontWeight: 600,
                  textTransform: "none",
                  fontSize: "0.875rem",
                  minHeight: 48,
                },
              }}
            >
              <Tab label="Specifications" />
              <Tab label="All features" />
              <Tab label="Send inquiry" />
            </Tabs>

            <Box sx={{ p: { xs: 2.5, md: 4 } }}>
              {activeTab === 0 && (
                <Box sx={{ overflowX: "auto" }}>
                  <Table size="small">
                    <TableBody>
                      {Object.entries(product.specifications).map(
                        ([key, val]) => (
                          <TableRow
                            key={key}
                            sx={{
                              "&:nth-of-type(even)": { bgcolor: "#F8FAFC" },
                            }}
                          >
                            <TableCell
                              sx={{
                                fontWeight: 600,
                                color: "text.primary",
                                border: "none",
                                py: 1.5,
                                pl: 0,
                                width: "38%",
                                verticalAlign: "top",
                              }}
                            >
                              {key}
                            </TableCell>
                            <TableCell
                              sx={{
                                color: "text.secondary",
                                border: "none",
                                py: 1.5,
                                verticalAlign: "top",
                              }}
                            >
                              {val}
                            </TableCell>
                          </TableRow>
                        )
                      )}
                    </TableBody>
                  </Table>
                </Box>
              )}

              {activeTab === 1 && (
                <Grid container spacing={2}>
                  {product.features.map((feat, i) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 1.25,
                        }}
                      >
                        <CheckCircleIcon
                          color="primary"
                          sx={{ fontSize: 18, flexShrink: 0, mt: 0.15 }}
                        />
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary", lineHeight: 1.55 }}
                        >
                          {feat}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              )}

              {activeTab === 2 && (
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, md: 7 }}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, mb: 2.5 }}
                    >
                      Inquire about {product.name}
                    </Typography>
                    <Grid container spacing={2}>
                      {[
                        { label: "Full name *", placeholder: "Your name" },
                        {
                          label: "Phone number *",
                          placeholder: company.phone,
                        },
                        {
                          label: "Email address",
                          placeholder: company.email,
                        },
                        { label: "City / location *", placeholder: "Ranchi, Jharkhand" },
                        {
                          label: "Quantity required",
                          placeholder: "e.g. 2 units",
                        },
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
                          label="Additional requirements"
                          placeholder="Custom size, delivery timeline, site details..."
                          multiline
                          rows={3}
                          fullWidth
                          size="small"
                        />
                      </Grid>
                      <Grid size={12}>
                        <Button
                          component={Link}
                          href={contactHref}
                          variant="contained"
                          color="secondary"
                          size="large"
                          sx={{
                            borderRadius: 2,
                            py: 1.5,
                            px: 4,
                            fontWeight: 700,
                          }}
                        >
                          Go to contact form
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid size={{ xs: 12, md: 5 }}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        bgcolor: "#EFF6FF",
                        borderRadius: 3,
                        border: "1px solid #BFDBFE",
                        height: "100%",
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 700, color: "primary.main", mb: 2 }}
                      >
                        Talk to {company.salesManager}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", mb: 2.5 }}
                      >
                        {company.salesManagerTitle} · {company.shortName}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 1.5,
                        }}
                      >
                        <Button
                          href={`tel:${company.phoneTel}`}
                          component="a"
                          variant="contained"
                          startIcon={<PhoneIcon />}
                          fullWidth
                          sx={{ borderRadius: 2 }}
                        >
                          Call {company.phone}
                        </Button>
                        <Button
                          href={whatsappUrl(
                            `I want to inquire about ${product.name}`
                          )}
                          component="a"
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="contained"
                          startIcon={<WhatsAppIcon />}
                          fullWidth
                          sx={{
                            borderRadius: 2,
                            bgcolor: "#25D366",
                            "&:hover": { bgcolor: "#1DAB52" },
                          }}
                        >
                          WhatsApp us
                        </Button>
                      </Box>
                      <Divider sx={{ my: 2.5 }} />
                      <Typography
                        variant="caption"
                        sx={{
                          color: "text.secondary",
                          lineHeight: 1.6,
                          display: "block",
                        }}
                      >
                        We typically respond within 2 hours on business days.
                        For urgent site requirements, call or WhatsApp directly.
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              )}
            </Box>
          </Paper>
        </Box>

        {related.length > 0 && (
          <Paper
            elevation={0}
            sx={{
              mt: { xs: 6, md: 8 },
              p: { xs: 2, sm: 2.5, md: 3 },
              borderRadius: 3,
              border: "1px solid rgba(0,0,0,0.06)",
              bgcolor: "white",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: { xs: "flex-start", sm: "center" },
                justifyContent: "space-between",
                gap: 1.5,
                flexDirection: { xs: "column", sm: "row" },
                mb: 2,
              }}
            >
              <SectionHeader
                badge="More to explore"
                title="Related"
                highlight="products"
                subtitle="Other solutions from the same category"
              />
              <Button
                component={Link}
                href={`/products?category=${product.categorySlug}`}
                variant="outlined"
                size="small"
                sx={{
                  borderRadius: 2,
                  textTransform: "none",
                  fontWeight: 600,
                  alignSelf: { xs: "flex-start", sm: "center" },
                  flexShrink: 0,
                }}
              >
                View all in {product.category}
              </Button>
            </Box>

            <Grid container spacing={{ xs: 2, md: 2.5 }}>
              {related.map((p) => (
                <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={p.id}>
                  <ProductCard product={p} />
                </Grid>
              ))}
            </Grid>
          </Paper>
        )}
      </Container>
    </Box>
  );
}
