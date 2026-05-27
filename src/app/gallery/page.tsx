"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  Chip,
  Breadcrumbs,
  Link as MuiLink,
  Dialog,
  IconButton,
  Grid,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CloseIcon from "@mui/icons-material/Close";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { motion, AnimatePresence } from "framer-motion";
import { galleryImages } from "@/data/products";

const filterTabs = [
  { id: "all", label: "All Projects" },
  { id: "office", label: "Office Cabins" },
  { id: "security", label: "Security Cabins" },
  { id: "housing", label: "Container Homes" },
  { id: "storage", label: "Storage Units" },
  { id: "sanitation", label: "Sanitation" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  useEffect(() => {
    setLightboxIndex((i) => (filtered.length === 0 ? 0 : Math.min(i, filtered.length - 1)));
  }, [activeFilter, filtered.length]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const prevImage = () =>
    setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);
  const nextImage = () =>
    setLightboxIndex((i) => (i + 1) % filtered.length);

  const currentImage = filtered[lightboxIndex];

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#F8FAFC" }}>
      {/* Header */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #0A1628, #1565C0)",
          py: { xs: 1.5, md: 2 },
          color: "#FFFFFF",
        }}
      >
        <Container maxWidth="xl">
          <Breadcrumbs sx={{ mb: 0.5, "& .MuiBreadcrumbs-separator": { mx: 0.5 } }}>
            <MuiLink
              component={Link}
              href="/"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.35,
                color: "rgba(255,255,255,0.65)",
                fontSize: "0.75rem",
              }}
            >
              <HomeIcon sx={{ fontSize: 14 }} /> Home
            </MuiLink>
            <Typography sx={{ color: "rgba(255,255,255,0.9)", fontSize: "0.75rem" }}>
              Gallery
            </Typography>
          </Breadcrumbs>
          <Typography
            variant="h5"
            component="h1"
            sx={{
              color: "#FFFFFF",
              mb: 0.5,
              fontWeight: 700,
              fontSize: { xs: "1.25rem", md: "1.5rem" },
              lineHeight: 1.15,
            }}
          >
            Project Gallery
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.8)",
              fontSize: { xs: "0.75rem", md: "0.8125rem" },
              maxWidth: 500,
              lineHeight: 1.4,
              m: 0,
            }}
          >
            A visual showcase of our completed projects across India — from site offices to
            container homes.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Filter tabs */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1.25,
            rowGap: 1.25,
            mb: 4,
            pb: 0.5,
          }}
        >
          {filterTabs.map((tab) => (
            <Chip
              key={tab.id}
              label={tab.label}
              onClick={() => setActiveFilter(tab.id)}
              sx={{
                borderRadius: 2,
                fontWeight: 600,
                height: 40,
                px: 0.5,
                cursor: "pointer",
                bgcolor: activeFilter === tab.id ? "primary.main" : "white",
                color: activeFilter === tab.id ? "white" : "text.primary",
                border: "1px solid",
                borderColor:
                  activeFilter === tab.id ? "primary.main" : "rgba(0,0,0,0.1)",
                fontSize: "0.875rem",
                transition: "all 0.2s ease",
                "&:hover": {
                  bgcolor: activeFilter === tab.id ? "primary.dark" : "#EFF6FF",
                  borderColor: "primary.main",
                },
              }}
            />
          ))}
        </Box>

        {/* Gallery grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.length === 0 ? (
              <Box sx={{ textAlign: "center", py: 8 }}>
                <Typography variant="h5" sx={{ color: "text.secondary" }}>
                  No images in this category
                </Typography>
              </Box>
            ) : (
              <Grid container spacing={2.5}>
                {filtered.map((image, index) => (
                  <Grid key={image.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.4) }}
                      style={{ height: "100%" }}
                    >
                      <Box
                        onClick={() => openLightbox(index)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            openLightbox(index);
                          }
                        }}
                        sx={{
                          position: "relative",
                          borderRadius: 3,
                          overflow: "hidden",
                          cursor: "pointer",
                          aspectRatio: "4 / 3",
                          bgcolor: "#E2E8F0",
                          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                          transition: "transform 0.25s ease, box-shadow 0.25s ease",
                          "&:hover": {
                            transform: "translateY(-2px)",
                            boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                            "& .gallery-overlay": { opacity: 1 },
                            "& .gallery-zoom": {
                              transform: "scale(1)",
                              opacity: 1,
                            },
                            "& .gallery-caption": { opacity: 1 },
                          },
                        }}
                      >
                        <Image
                          src={image.src}
                          alt={image.title}
                          fill
                          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
                          style={{ objectFit: "cover" }}
                        />

                        <Box
                          className="gallery-overlay"
                          sx={{
                            position: "absolute",
                            inset: 0,
                            background:
                              "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)",
                            opacity: 0,
                            transition: "opacity 0.3s ease",
                            pointerEvents: "none",
                            zIndex: 1,
                          }}
                        />

                        <Box
                          className="gallery-zoom"
                          sx={{
                            position: "absolute",
                            top: 12,
                            right: 12,
                            width: 36,
                            height: 36,
                            bgcolor: "rgba(255,255,255,0.95)",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transform: "scale(0.7)",
                            opacity: 0,
                            transition: "all 0.3s ease",
                            zIndex: 2,
                            pointerEvents: "none",
                          }}
                        >
                          <ZoomInIcon sx={{ fontSize: 18, color: "#1565C0" }} />
                        </Box>

                        <Box
                          className="gallery-caption"
                          sx={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            p: 2,
                            opacity: 0,
                            transition: "opacity 0.3s ease",
                            zIndex: 2,
                            pointerEvents: "none",
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{ color: "white", fontWeight: 600, lineHeight: 1.3 }}
                          >
                            {image.title}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{ color: "rgba(255,255,255,0.75)", display: "block", mt: 0.25 }}
                          >
                            {filterTabs.find((f) => f.id === image.category)?.label}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            )}
          </motion.div>
        </AnimatePresence>
      </Container>

      {/* Lightbox */}
      <Dialog
        open={lightboxOpen && filtered.length > 0}
        onClose={() => setLightboxOpen(false)}
        maxWidth={false}
        slotProps={{
          paper: {
            sx: {
              bgcolor: "rgba(0,0,0,0.95)",
              borderRadius: 3,
              overflow: "hidden",
              maxWidth: "min(90vw, 1100px)",
              width: "100%",
              m: 2,
            },
          },
        }}
      >
        {currentImage && (
          <Box sx={{ position: "relative" }}>
            <IconButton
              onClick={() => setLightboxOpen(false)}
              aria-label="Close gallery"
              sx={{
                position: "absolute",
                top: 12,
                right: 12,
                color: "white",
                bgcolor: "rgba(0,0,0,0.5)",
                zIndex: 10,
                "&:hover": { bgcolor: "rgba(0,0,0,0.8)" },
              }}
            >
              <CloseIcon />
            </IconButton>

            {filtered.length > 1 && (
              <>
                <IconButton
                  onClick={prevImage}
                  aria-label="Previous image"
                  sx={{
                    position: "absolute",
                    left: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "white",
                    bgcolor: "rgba(0,0,0,0.5)",
                    zIndex: 10,
                    "&:hover": { bgcolor: "rgba(0,0,0,0.8)" },
                  }}
                >
                  <ArrowBackIosNewIcon />
                </IconButton>
                <IconButton
                  onClick={nextImage}
                  aria-label="Next image"
                  sx={{
                    position: "absolute",
                    right: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "white",
                    bgcolor: "rgba(0,0,0,0.5)",
                    zIndex: 10,
                    "&:hover": { bgcolor: "rgba(0,0,0,0.8)" },
                  }}
                >
                  <ArrowForwardIosIcon />
                </IconButton>
              </>
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeFilter}-${lightboxIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    minHeight: { xs: 220, md: 400 },
                    maxHeight: "80vh",
                    aspectRatio: "16 / 10",
                    bgcolor: "#0A1628",
                  }}
                >
                  <Image
                    src={currentImage.src}
                    alt={currentImage.title}
                    fill
                    sizes="90vw"
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </Box>
              </motion.div>
            </AnimatePresence>

            <Box sx={{ p: 2, textAlign: "center" }}>
              <Typography
                variant="subtitle1"
                sx={{ color: "white", fontWeight: 600 }}
              >
                {currentImage.title}
              </Typography>
              <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.5)" }}>
                {lightboxIndex + 1} / {filtered.length}
              </Typography>
            </Box>
          </Box>
        )}
      </Dialog>
    </Box>
  );
}
