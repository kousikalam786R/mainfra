"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  Button,
  Chip,
  Divider,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import { company } from "@/data/company";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top bar */}
      <Box
        sx={{
          bgcolor: "#0D47A1",
          color: "white",
          py: 0.75,
          display: { xs: "none", md: "block" },
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="caption" sx={{ opacity: 0.9 }}>
              🏭 India&apos;s #1 Portable Cabin & Modular Infrastructure Brand
            </Typography>
            <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <PhoneIcon sx={{ fontSize: 14 }} />
                <Typography variant="caption" sx={{ fontWeight: 600 }}>
                  {company.phone}
                </Typography>
              </Box>
              <Chip
                label="Get Free Quote"
                size="small"
                sx={{
                  bgcolor: "#F57C00",
                  color: "white",
                  fontWeight: 600,
                  fontSize: "0.7rem",
                  cursor: "pointer",
                  "&:hover": { bgcolor: "#E65100" },
                }}
                component={Link}
                href="/contact"
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Navbar */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: scrolled ? "rgba(255,255,255,0.97)" : "white",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: "1px solid",
          borderColor: scrolled ? "rgba(0,0,0,0.08)" : "rgba(0,0,0,0.06)",
          transition: "all 0.3s ease",
          boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              px: { xs: 0 },
              minHeight: { xs: 64, md: 72 },
              gap: 2,
            }}
          >
            {/* Logo */}
            <Box
              component={Link}
              href="/"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                textDecoration: "none",
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  background: "linear-gradient(135deg, #1565C0, #F57C00)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 900,
                  fontSize: "1.1rem",
                  flexShrink: 0,
                }}
              >
                M
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    color: "#0D47A1",
                    lineHeight: 1,
                    fontSize: "1.2rem",
                  }}
                >
                  MA INFRA
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "#64748B", lineHeight: 1, display: "block" }}
                >
                  Portable Cabin
                </Typography>
              </Box>
            </Box>

            {/* Desktop Nav */}
            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                alignItems: "center",
                gap: 0.5,
                ml: "auto",
              }}
            >
              {navLinks.map((link) => {
                const active = isNavActive(pathname, link.href);
                return (
                  <Button
                    key={link.href}
                    component={Link}
                    href={link.href}
                    sx={{
                      color: active ? "#1565C0" : "#334155",
                      fontWeight: active ? 700 : 500,
                      px: 1.5,
                      position: "relative",
                      "&:hover": { color: "#1565C0", bgcolor: "transparent" },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 2,
                        bgcolor: "#1565C0",
                        borderRadius: 1,
                        transform: active ? "scaleX(1)" : "scaleX(0)",
                        transition: "transform 0.2s ease",
                      },
                    }}
                  >
                    {link.label}
                  </Button>
                );
              })}

              <Button
                variant="contained"
                color="secondary"
                component={Link}
                href="/contact"
                sx={{ ml: 2, borderRadius: 2 }}
              >
                Get Quote
              </Button>
            </Box>

            {/* Mobile menu button */}
            <IconButton
              sx={{ ml: "auto", display: { xs: "flex", lg: "none" } }}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        slotProps={{ paper: { sx: { width: "min(320px, 90vw)" } } }}
      >
        <Box
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontWeight: 700, color: "primary.main" }}>
            MA INFRA
          </Typography>
          <IconButton onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List sx={{ pt: 1 }}>
          {navLinks.map((link) => {
            const active = isNavActive(pathname, link.href);
            return (
              <ListItem
                key={link.href}
                component={Link}
                href={link.href}
                sx={{
                  borderRadius: 2,
                  mx: 1,
                  cursor: "pointer",
                  bgcolor: active ? "#EFF6FF" : "transparent",
                  "&:hover": { bgcolor: "#EFF6FF" },
                }}
              >
                <ListItemText
                  primary={link.label}
                  slotProps={{
                    primary: {
                      sx: {
                        fontWeight: active ? 700 : 500,
                        color: active ? "primary.main" : "text.primary",
                      },
                    },
                  }}
                />
              </ListItem>
            );
          })}
        </List>
        <Box sx={{ p: 2, mt: "auto" }}>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            component={Link}
            href="/contact"
            sx={{ borderRadius: 2, py: 1.5 }}
          >
            Get Free Quote
          </Button>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              mt: 2,
            }}
          >
            <PhoneIcon color="primary" fontSize="small" />
            <Typography variant="body2" sx={{ fontWeight: 600, color: "primary.main" }}>
              {company.phone}
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
