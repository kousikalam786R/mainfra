"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Avatar,
  Rating,
  IconButton,
  Grid,
} from "@mui/material";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/products";
import SectionHeader from "@/components/common/SectionHeader";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: "#F8FAFC",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          maxWidth: 600,
          height: "80%",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(21,101,192,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative" }}>
        <SectionHeader
          badge="Client Stories"
          title="What Our Clients"
          highlight="Say About Us"
          subtitle="Join 800+ satisfied clients across India who trust MA INFRA Portable Cabin for their portable structure needs."
        />

        {/* Desktop grid */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Grid container spacing={3}>
            {testimonials.map((t, index) => (
              <Grid size={{ xs: 12, md: 6, lg: 3 }} key={t.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{ height: "100%" }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      height: "100%",
                      border: "1px solid rgba(0,0,0,0.06)",
                      borderRadius: 3,
                      position: "relative",
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
                        transform: "translateY(-4px)",
                        borderColor: "rgba(21,101,192,0.2)",
                      },
                    }}
                  >
                    <FormatQuoteIcon
                      sx={{
                        position: "absolute",
                        top: 12,
                        right: 16,
                        fontSize: 48,
                        color: "rgba(21,101,192,0.06)",
                      }}
                    />
                    <Rating value={t.rating} size="small" readOnly sx={{ mb: 2 }} />
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      lineHeight={1.75}
                      mb={3}
                      sx={{
                        display: "-webkit-box",
                        WebkitLineClamp: 5,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      "{t.review}"
                    </Typography>
                    <Box display="flex" alignItems="center" gap={1.5} mt="auto">
                      <Avatar
                        src={t.avatar}
                        alt={t.name}
                        sx={{ width: 44, height: 44 }}
                      />
                      <Box>
                        <Typography variant="subtitle2" fontWeight={700}>
                          {t.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {t.designation}
                        </Typography>
                        <Typography
                          variant="caption"
                          display="block"
                          color="primary"
                          fontWeight={600}
                        >
                          {t.company}
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Mobile carousel */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: 3,
                }}
              >
                <Rating value={testimonials[active].rating} size="small" readOnly sx={{ mb: 1.5 }} />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  lineHeight={1.75}
                  mb={2.5}
                >
                  "{testimonials[active].review}"
                </Typography>
                <Box display="flex" alignItems="center" gap={1.5}>
                  <Avatar src={testimonials[active].avatar} sx={{ width: 44, height: 44 }} />
                  <Box>
                    <Typography variant="subtitle2" fontWeight={700}>
                      {testimonials[active].name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {testimonials[active].designation} · {testimonials[active].company}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          </AnimatePresence>

          <Box display="flex" justifyContent="center" gap={1} mt={2.5} alignItems="center">
            <IconButton size="small" onClick={prev}>
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>
            {testimonials.map((_, i) => (
              <Box
                key={i}
                onClick={() => setActive(i)}
                sx={{
                  width: i === active ? 20 : 8,
                  height: 8,
                  borderRadius: 4,
                  bgcolor: i === active ? "primary.main" : "rgba(0,0,0,0.15)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
            <IconButton size="small" onClick={next}>
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
