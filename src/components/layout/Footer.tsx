"use client";

import React from "react";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Divider,
  IconButton,
  TextField,
  Button,
  Chip,
  Grid,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";

const footerLinks = {
  Products: [
    { label: "Portable Office Cabin", href: "/products?category=portable-office-cabin" },
    { label: "Security Cabin", href: "/products?category=security-cabin" },
    { label: "Portable Toilet", href: "/products?category=portable-toilet" },
    { label: "Container House", href: "/products?category=container-house" },
    { label: "Modular Office", href: "/products?category=modular-office" },
    { label: "Storage Cabin", href: "/products?category=portable-storage-cabin" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
    { label: "Get a Quote", href: "/contact" },
    { label: "Our Clients", href: "/about#clients" },
    { label: "Careers", href: "/contact" },
  ],
  Support: [
    { label: "FAQ", href: "/contact" },
    { label: "Installation Guide", href: "/contact" },
    { label: "Warranty Policy", href: "/contact" },
    { label: "Return Policy", href: "/contact" },
    { label: "Terms of Service", href: "/contact" },
    { label: "Privacy Policy", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0A1628",
        color: "white",
        pt: { xs: 8, md: 10 },
        pb: 4,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={5} mb={6}>
          {/* Brand column */}
          <Grid size={{ xs: 12, md: 4, lg: 3.5 }}>
            <Box display="flex" alignItems="center" gap={1.5} mb={2.5}>
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: 2,
                  background: "linear-gradient(135deg, #1565C0, #F57C00)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: "1.2rem",
                  flexShrink: 0,
                }}
              >
                M
              </Box>
              <Box>
                <Typography fontWeight={800} fontSize="1.2rem" lineHeight={1}>
                  MA INFRA
                </Typography>
                <Typography variant="caption" sx={{ color: "#94A3B8" }}>
                  Portable Cabin
                </Typography>
              </Box>
            </Box>

            <Typography
              variant="body2"
              sx={{ color: "#94A3B8", mb: 3, lineHeight: 1.8, maxWidth: 320 }}
            >
              India's leading manufacturer of portable cabins, modular offices,
              and container-based infrastructure. Building tomorrow's workspace
              today.
            </Typography>

            <Box display="flex" flexDirection="column" gap={1.5} mb={3}>
              <Box display="flex" gap={1.5} alignItems="flex-start">
                <LocationOnIcon sx={{ color: "#F57C00", fontSize: 18, mt: 0.2 }} />
                <Typography variant="body2" sx={{ color: "#94A3B8", lineHeight: 1.6 }}>
                  Plot No. 42, Industrial Area Phase-II,
                  <br />
                  Noida, Uttar Pradesh – 201301
                </Typography>
              </Box>
              <Box display="flex" gap={1.5} alignItems="center">
                <PhoneIcon sx={{ color: "#F57C00", fontSize: 18 }} />
                <Typography variant="body2" sx={{ color: "#94A3B8" }}>
                  +91 98765 43210
                </Typography>
              </Box>
              <Box display="flex" gap={1.5} alignItems="center">
                <EmailIcon sx={{ color: "#F57C00", fontSize: 18 }} />
                <Typography variant="body2" sx={{ color: "#94A3B8" }}>
                  info@mainfraportablecabin.com
                </Typography>
              </Box>
            </Box>

            <Box display="flex" gap={1}>
              {[
                { icon: <FacebookIcon fontSize="small" />, href: "#" },
                { icon: <InstagramIcon fontSize="small" />, href: "#" },
                { icon: <LinkedInIcon fontSize="small" />, href: "#" },
                { icon: <YouTubeIcon fontSize="small" />, href: "#" },
                { icon: <TwitterIcon fontSize="small" />, href: "#" },
              ].map((social, i) => (
                <IconButton
                  key={i}
                  href={social.href}
                  size="small"
                  sx={{
                    color: "#64748B",
                    border: "1px solid #1E293B",
                    "&:hover": {
                      color: "white",
                      bgcolor: "#1565C0",
                      borderColor: "#1565C0",
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <Grid size={{ xs: 6, sm: 4, md: 2, lg: 2 }} key={title}>
              <Typography
                variant="overline"
                fontWeight={700}
                letterSpacing={1.5}
                sx={{ color: "#64748B", display: "block", mb: 2 }}
              >
                {title}
              </Typography>
              <Box display="flex" flexDirection="column" gap={1.25}>
                {links.map((link) => (
                  <Typography
                    key={link.label}
                    component={Link}
                    href={link.href}
                    variant="body2"
                    sx={{
                      color: "#94A3B8",
                      textDecoration: "none",
                      transition: "color 0.2s",
                      "&:hover": { color: "#F57C00" },
                    }}
                  >
                    {link.label}
                  </Typography>
                ))}
              </Box>
            </Grid>
          ))}

          {/* Newsletter */}
          <Grid size={{ xs: 12, sm: 8, md: 4, lg: 2.5 }}>
            <Typography
              variant="overline"
              fontWeight={700}
              letterSpacing={1.5}
              sx={{ color: "#64748B", display: "block", mb: 2 }}
            >
              Newsletter
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#94A3B8", mb: 2, lineHeight: 1.7 }}
            >
              Get the latest product updates, industry news, and exclusive
              offers.
            </Typography>
            <Box display="flex" gap={1} flexDirection={{ xs: "row", md: "row" }}>
              <TextField
                placeholder="Your email"
                size="small"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "#1E293B",
                    color: "white",
                    borderRadius: 2,
                    "& fieldset": { borderColor: "#334155" },
                    "&:hover fieldset": { borderColor: "#475569" },
                    "&.Mui-focused fieldset": { borderColor: "#1565C0" },
                    "& input::placeholder": { color: "#64748B" },
                  },
                }}
              />
              <Button
                variant="contained"
                color="secondary"
                sx={{ minWidth: "auto", px: 2, borderRadius: 2 }}
              >
                <SendIcon fontSize="small" />
              </Button>
            </Box>

            <Box mt={3} p={2} bgcolor="#0F172A" borderRadius={2}>
              <Chip
                label="ISO 9001:2015"
                size="small"
                sx={{ bgcolor: "#1E293B", color: "#94A3B8", mb: 1, mr: 1 }}
              />
              <Chip
                label="CE Certified"
                size="small"
                sx={{ bgcolor: "#1E293B", color: "#94A3B8", mb: 1, mr: 1 }}
              />
              <Chip
                label="MSME Registered"
                size="small"
                sx={{ bgcolor: "#1E293B", color: "#94A3B8" }}
              />
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "#1E293B" }} />

        <Box
          pt={3}
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "center", sm: "center" }}
          gap={2}
          textAlign={{ xs: "center", sm: "left" }}
        >
          <Typography variant="caption" sx={{ color: "#475569" }}>
            © {new Date().getFullYear()} MA INFRA Portable Cabin. All rights reserved.
          </Typography>
          <Typography variant="caption" sx={{ color: "#475569" }}>
            Made with ♥ in India &nbsp;·&nbsp; GST: 09ABCDE1234F1Z5
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
