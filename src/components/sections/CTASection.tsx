"use client";

import React from "react";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  TextField,
  Grid,
} from "@mui/material";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function CTASection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: "white",
      }}
    >
      <div ref={ref} />
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <Paper
            elevation={0}
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              position: "relative",
              background: "linear-gradient(135deg, #0A1628 0%, #0D2244 60%, #1565C0 100%)",
            }}
          >
            {/* Decorative blobs */}
            <Box
              sx={{
                position: "absolute",
                top: -60,
                right: -60,
                width: 300,
                height: 300,
                borderRadius: "50%",
                bgcolor: "rgba(245,124,0,0.12)",
                filter: "blur(60px)",
                pointerEvents: "none",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: -80,
                left: -80,
                width: 400,
                height: 400,
                borderRadius: "50%",
                bgcolor: "rgba(21,101,192,0.2)",
                filter: "blur(80px)",
                pointerEvents: "none",
              }}
            />

            <Grid container alignItems="center">
              {/* Content side */}
              <Grid size={{ xs: 12, md: 6 }} sx={{ p: { xs: 4, md: 6, lg: 8 }, position: "relative" }}>
                <Typography
                  variant="overline"
                  sx={{ color: "#FF9800", fontWeight: 700, letterSpacing: 2 }}
                >
                  Ready to Get Started?
                </Typography>
                <Typography
                  variant="h2"
                  color="white"
                  sx={{ mt: 1.5, mb: 2 }}
                >
                  Get Your Free Quote Today
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "rgba(255,255,255,0.7)", mb: 4, maxWidth: 440 }}
                >
                  Tell us your requirements and our expert team will respond with a
                  detailed quotation within 2 hours. No obligation, completely free.
                </Typography>

                <Box display="flex" gap={2} flexWrap="wrap" mb={4}>
                  <Button
                    component={Link}
                    href="/contact"
                    variant="contained"
                    color="secondary"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      borderRadius: 2.5,
                      py: 1.5,
                      px: 3.5,
                      boxShadow: "0 8px 25px rgba(245,124,0,0.4)",
                    }}
                  >
                    Get Free Quote
                  </Button>
                  <Button
                    href="tel:+919876543210"
                    component="a"
                    variant="outlined"
                    size="large"
                    startIcon={<PhoneIcon />}
                    sx={{
                      borderRadius: 2.5,
                      py: 1.5,
                      px: 3,
                      borderColor: "rgba(255,255,255,0.35)",
                      color: "white",
                      "&:hover": {
                        borderColor: "white",
                        bgcolor: "rgba(255,255,255,0.08)",
                      },
                    }}
                  >
                    Call Now
                  </Button>
                </Box>

                <Box display="flex" gap={3} flexWrap="wrap">
                  <Box display="flex" gap={1} alignItems="center">
                    <PhoneIcon sx={{ color: "#FF9800", fontSize: 18 }} />
                    <Typography variant="body2" color="rgba(255,255,255,0.7)">
                      +91 98765 43210
                    </Typography>
                  </Box>
                  <Box display="flex" gap={1} alignItems="center">
                    <EmailIcon sx={{ color: "#FF9800", fontSize: 18 }} />
                    <Typography variant="body2" color="rgba(255,255,255,0.7)">
                      info@mainfraportablecabin.com
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              {/* Quick form side */}
              <Grid
                size={{ xs: 12, md: 6 }}
                sx={{
                  bgcolor: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(10px)",
                  borderLeft: { md: "1px solid rgba(255,255,255,0.08)" },
                  borderTop: { xs: "1px solid rgba(255,255,255,0.08)", md: "none" },
                  p: { xs: 4, md: 6, lg: 8 },
                  position: "relative",
                }}
              >
                <Typography variant="h5" color="white" fontWeight={700} mb={3}>
                  Quick Inquiry Form
                </Typography>

                <Box display="flex" flexDirection="column" gap={2.5}>
                  {[
                    { label: "Your Name", placeholder: "Rajesh Kumar" },
                    { label: "Phone Number", placeholder: "+91 98765 43210" },
                    { label: "Company / Organization", placeholder: "Construction Pvt. Ltd." },
                  ].map((field) => (
                    <TextField
                      key={field.label}
                      label={field.label}
                      placeholder={field.placeholder}
                      size="small"
                      fullWidth
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          bgcolor: "rgba(255,255,255,0.06)",
                          color: "white",
                          borderRadius: 2,
                          "& fieldset": { borderColor: "rgba(255,255,255,0.15)" },
                          "&:hover fieldset": { borderColor: "rgba(255,255,255,0.3)" },
                          "&.Mui-focused fieldset": { borderColor: "#F57C00" },
                        },
                        "& .MuiInputLabel-root": {
                          color: "rgba(255,255,255,0.5)",
                          "&.Mui-focused": { color: "#FF9800" },
                        },
                        "& input::placeholder": { color: "rgba(255,255,255,0.3)" },
                      }}
                    />
                  ))}
                  <TextField
                    label="Product Interest"
                    placeholder="e.g. 5 portable office cabins for construction site"
                    multiline
                    rows={2}
                    size="small"
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        bgcolor: "rgba(255,255,255,0.06)",
                        color: "white",
                        borderRadius: 2,
                        "& fieldset": { borderColor: "rgba(255,255,255,0.15)" },
                        "&:hover fieldset": { borderColor: "rgba(255,255,255,0.3)" },
                        "&.Mui-focused fieldset": { borderColor: "#F57C00" },
                      },
                      "& .MuiInputLabel-root": {
                        color: "rgba(255,255,255,0.5)",
                        "&.Mui-focused": { color: "#FF9800" },
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    size="large"
                    sx={{ borderRadius: 2, py: 1.5, fontWeight: 700 }}
                  >
                    Send My Inquiry →
                  </Button>
                  <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.4)", textAlign: "center" }}>
                    We respond within 2 hours · No spam guaranteed
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}
