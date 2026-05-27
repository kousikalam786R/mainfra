"use client";

import React, { useState } from "react";
import Link from "next/link";
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

  const filtered = activeFilter === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeFilter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const prevImage = () => setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);
  const nextImage = () => setLightboxIndex((i) => (i + 1) % filtered.length);

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#F8FAFC" }}>
      {/* Header */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #0A1628, #1565C0)",
          py: { xs: 6, md: 8 },
          color: "white",
        }}
      >
        <Container maxWidth="xl">
          <Breadcrumbs sx={{ mb: 2.5 }}>
            <MuiLink
              component={Link}
              href="/"
              sx={{ display: "flex", alignItems: "center", gap: 0.5, color: "rgba(255,255,255,0.6)" }}
            >
              <HomeIcon fontSize="small" /> Home
            </MuiLink>
            <Typography color="rgba(255,255,255,0.85)" fontSize="0.875rem">Gallery</Typography>
          </Breadcrumbs>
          <Typography variant="h2" color="white" mb={1.5}>
            Project Gallery
          </Typography>
          <Typography color="rgba(255,255,255,0.7)" fontSize="1.05rem" maxWidth={500}>
            A visual showcase of our completed projects across India — from site offices to container homes.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 5 }}>
        {/* Filter tabs */}
        <Box
          display="flex"
          gap={1.5}
          mb={5}
          sx={{ overflowX: "auto", pb: 1, "&::-webkit-scrollbar": { height: 0 } }}
        >
          {filterTabs.map((tab) => (
            <Chip
              key={tab.id}
              label={tab.label}
              onClick={() => setActiveFilter(tab.id)}
              sx={{
                borderRadius: 2,
                fontWeight: 600,
                px: 1,
                py: 2.5,
                cursor: "pointer",
                bgcolor: activeFilter === tab.id ? "primary.main" : "white",
                color: activeFilter === tab.id ? "white" : "text.primary",
                border: "1px solid",
                borderColor: activeFilter === tab.id ? "primary.main" : "rgba(0,0,0,0.1)",
                fontSize: "0.875rem",
                transition: "all 0.2s ease",
                flexShrink: 0,
                "&:hover": {
                  bgcolor: activeFilter === tab.id ? "primary.dark" : "#EFF6FF",
                  borderColor: "primary.main",
                },
              }}
            />
          ))}
        </Box>

        {/* Masonry-style grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Grid container spacing={2.5}>
              {filtered.map((image, index) => (
                <Grid
                  key={image.id}
                  size={{
                    xs: 12,
                    sm: image.size === "large" ? 8 : image.size === "medium" ? 6 : 4,
                    md: image.size === "large" ? 6 : image.size === "medium" ? 4 : 3,
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Box
                      onClick={() => openLightbox(index)}
                      sx={{
                        position: "relative",
                        borderRadius: 3,
                        overflow: "hidden",
                        cursor: "pointer",
                        aspectRatio:
                          image.size === "large"
                            ? "16/9"
                            : image.size === "medium"
                            ? "4/3"
                            : "1/1",
                        bgcolor: "#E2E8F0",
                        backgroundImage: `url(${image.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        "&:hover": {
                          "& .gallery-overlay": { opacity: 1 },
                          "& .gallery-zoom": { transform: "scale(1)", opacity: 1 },
                          transform: "scale(0.99)",
                        },
                        transition: "transform 0.3s ease",
                      }}
                    >
                      {/* Overlay */}
                      <Box
                        className="gallery-overlay"
                        sx={{
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
                          opacity: 0,
                          transition: "opacity 0.3s ease",
                        }}
                      />

                      {/* Zoom icon */}
                      <Box
                        className="gallery-zoom"
                        sx={{
                          position: "absolute",
                          top: 12,
                          right: 12,
                          width: 36,
                          height: 36,
                          bgcolor: "rgba(255,255,255,0.9)",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transform: "scale(0.7)",
                          opacity: 0,
                          transition: "all 0.3s ease",
                        }}
                      >
                        <ZoomInIcon sx={{ fontSize: 18, color: "#1565C0" }} />
                      </Box>

                      {/* Title */}
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          p: 2,
                          opacity: 0,
                          transition: "opacity 0.3s ease",
                          ".MuiBox-root:hover &": { opacity: 1 },
                        }}
                        className="gallery-overlay"
                      >
                        <Typography variant="body2" color="white" fontWeight={600}>
                          {image.title}
                        </Typography>
                        <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)" }}>
                          {filterTabs.find((f) => f.id === image.category)?.label}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <Box textAlign="center" py={8}>
            <Typography variant="h5" color="text.secondary">
              No images in this category
            </Typography>
          </Box>
        )}
      </Container>

      {/* Lightbox */}
      <Dialog
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        maxWidth={false}
        PaperProps={{
          sx: {
            bgcolor: "rgba(0,0,0,0.95)",
            borderRadius: 3,
            overflow: "hidden",
            maxWidth: "90vw",
            maxHeight: "90vh",
          },
        }}
      >
        <Box sx={{ position: "relative", minWidth: { xs: "80vw", md: "60vw" } }}>
          {/* Close */}
          <IconButton
            onClick={() => setLightboxOpen(false)}
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

          {/* Prev */}
          <IconButton
            onClick={prevImage}
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

          {/* Next */}
          <IconButton
            onClick={nextImage}
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

          <AnimatePresence mode="wait">
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Box
                component="img"
                src={filtered[lightboxIndex]?.src}
                alt={filtered[lightboxIndex]?.title}
                sx={{
                  display: "block",
                  maxHeight: "80vh",
                  maxWidth: "100%",
                  objectFit: "contain",
                  mx: "auto",
                }}
              />
            </motion.div>
          </AnimatePresence>

          <Box sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="subtitle1" color="white" fontWeight={600}>
              {filtered[lightboxIndex]?.title}
            </Typography>
            <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.5)" }}>
              {lightboxIndex + 1} / {filtered.length}
            </Typography>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
}
