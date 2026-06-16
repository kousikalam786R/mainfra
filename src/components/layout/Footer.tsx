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
import { company } from "@/data/company";
import Logo from "@/components/common/Logo";

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

const sectionTitleSx = {
  color: "#64748B",
  display: "block",
  mb: 2,
  fontWeight: 700,
  letterSpacing: "0.12em",
  fontSize: "0.7rem",
  lineHeight: 1.2,
};

function ContactRow({
  icon,
  children,
  alignTop = false,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  alignTop?: boolean;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1.25,
        alignItems: alignTop ? "flex-start" : "center",
      }}
    >
      <Box
        sx={{
          width: 22,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#F57C00",
          pt: alignTop ? 0.15 : 0,
        }}
      >
        {icon}
      </Box>
      <Box sx={{ minWidth: 0, flex: 1 }}>{children}</Box>
    </Box>
  );
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0A1628",
        color: "white",
        pt: { xs: 6, md: 8 },
        pb: 3,
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={{ xs: 4, md: 5 }}
          sx={{ mb: { xs: 4, md: 6 }, alignItems: "flex-start" }}
        >
          {/* Brand column */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <Box sx={{ mb: 2 }}>
              <Logo variant="footer" />
            </Box>

            <Typography
              variant="body2"
              sx={{ color: "#94A3B8", mb: 2.5, lineHeight: 1.7, maxWidth: 320 }}
            >
              India&apos;s leading manufacturer of portable cabins, modular offices,
              and container-based infrastructure. {company.tagline}
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.25, mb: 2.5 }}>
              <ContactRow
                alignTop
                icon={<LocationOnIcon sx={{ fontSize: 18 }} />}
              >
                <Typography variant="body2" sx={{ color: "#94A3B8", lineHeight: 1.6 }}>
                  {company.address.line1}
                  <br />
                  {company.address.line2}
                  <br />
                  {company.address.city}, {company.address.pincode}
                  <br />
                  {company.address.state}, {company.address.country}
                </Typography>
              </ContactRow>
              <ContactRow icon={<PhoneIcon sx={{ fontSize: 18 }} />}>
                <Typography variant="body2" sx={{ color: "#94A3B8", lineHeight: 1.5 }}>
                  {company.phone}
                  <Box component="span" sx={{ color: "#64748B" }}>
                    {" "}
                    · {company.salesManager}
                  </Box>
                </Typography>
              </ContactRow>
              <ContactRow icon={<EmailIcon sx={{ fontSize: 18 }} />}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#94A3B8",
                    lineHeight: 1.5,
                    wordBreak: "break-word",
                  }}
                >
                  {company.email}
                </Typography>
              </ContactRow>
            </Box>

            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
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

          {/* Products, Company, Support & Newsletter — one row beside brand */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <Grid
              container
              spacing={{ xs: 4, md: 5 }}
              sx={{ alignItems: "flex-start" }}
            >
              {Object.entries(footerLinks).map(([title, links]) => (
                <Grid size={{ xs: 6, sm: 4, md: 2, lg: 2 }} key={title}>
                  <Typography variant="overline" sx={sectionTitleSx}>
                    {title}
                  </Typography>
                  <Box
                    component="nav"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                    }}
                  >
                    {links.map((link) => (
                      <Typography
                        key={link.label}
                        component={Link}
                        href={link.href}
                        variant="body2"
                        sx={{
                          color: "#94A3B8",
                          textDecoration: "none",
                          lineHeight: 1.5,
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

              <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                <Typography variant="overline" sx={sectionTitleSx}>
                  Newsletter
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#94A3B8", mb: 2, lineHeight: 1.65 }}
                >
                  Get the latest product updates, industry news, and exclusive offers.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "stretch",
                  }}
                >
                  <TextField
                    placeholder="Your email"
                    size="small"
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        bgcolor: "#1E293B",
                        color: "white",
                        borderRadius: 2,
                        height: "100%",
                        "& fieldset": { borderColor: "#334155" },
                        "&:hover fieldset": { borderColor: "#475569" },
                        "&.Mui-focused fieldset": { borderColor: "#1565C0" },
                        "& input::placeholder": { color: "#64748B", opacity: 1 },
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    aria-label="Subscribe"
                    sx={{
                      minWidth: 48,
                      px: 1.5,
                      borderRadius: 2,
                      flexShrink: 0,
                    }}
                  >
                    <SendIcon fontSize="small" />
                  </Button>
                </Box>

                <Box
                  sx={{
                    mt: 2.5,
                    p: 2,
                    bgcolor: "#0F172A",
                    borderRadius: 2,
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                  }}
                >
                  {company.certifications.map((label) => (
                    <Chip
                      key={label}
                      label={label}
                      size="small"
                      sx={{
                        bgcolor: "#1E293B",
                        color: "#94A3B8",
                        fontSize: "0.7rem",
                        height: 26,
                      }}
                    />
                  ))}
                  <Chip
                    label={`GSTIN: ${company.gst.registrationNumber}`}
                    size="small"
                    sx={{
                      bgcolor: "#1E293B",
                      color: "#94A3B8",
                      fontSize: "0.7rem",
                      height: 26,
                      fontFamily: "monospace",
                      letterSpacing: "0.03em",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "#1E293B" }} />

        <Box
          sx={{
            pt: 2.5,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", sm: "center" },
            gap: 1.5,
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Typography variant="caption" sx={{ color: "#475569", lineHeight: 1.5 }}>
            © {new Date().getFullYear()} MA INFRA Portable Cabin. All rights reserved.
          </Typography>
          <Typography variant="caption" sx={{ color: "#475569", lineHeight: 1.5 }}>
            Made with ♥ in India · GST: {company.gst.registrationNumber}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
