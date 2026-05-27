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
  Paper,
  Collapse,
  ListItemIcon,
  Grid,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import SecurityIcon from "@mui/icons-material/Security";
import ApartmentIcon from "@mui/icons-material/Apartment";
import InventoryIcon from "@mui/icons-material/Inventory";
import BathroomIcon from "@mui/icons-material/Bathroom";
import { motion, AnimatePresence } from "framer-motion";
import { categories } from "@/data/products";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products", hasMega: true },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const categoryIcons: Record<string, React.ReactNode> = {
  "portable-office-cabin": <BusinessIcon fontSize="small" />,
  "security-cabin": <SecurityIcon fontSize="small" />,
  "portable-toilet": <BathroomIcon fontSize="small" />,
  "container-house": <HomeIcon fontSize="small" />,
  "modular-office": <ApartmentIcon fontSize="small" />,
  "portable-storage-cabin": <InventoryIcon fontSize="small" />,
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaMenuOpen(false);
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
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="caption" sx={{ opacity: 0.9 }}>
              🏭 India's #1 Portable Cabin & Modular Infrastructure Brand
            </Typography>
            <Box display="flex" gap={3} alignItems="center">
              <Box display="flex" alignItems="center" gap={0.5}>
                <PhoneIcon sx={{ fontSize: 14 }} />
                <Typography variant="caption" fontWeight={600}>
                  +91 98765 43210
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
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              {navLinks.map((link) => (
                <Box key={link.href} position="relative">
                  {link.hasMega ? (
                    <Button
                      endIcon={
                        megaMenuOpen ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )
                      }
                      onMouseEnter={() => setMegaMenuOpen(true)}
                      sx={{
                        color:
                          pathname.startsWith("/products")
                            ? "#1565C0"
                            : "#334155",
                        fontWeight: pathname.startsWith("/products") ? 700 : 500,
                        px: 1.5,
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
                          transform: pathname.startsWith("/products")
                            ? "scaleX(1)"
                            : "scaleX(0)",
                          transition: "transform 0.2s ease",
                        },
                      }}
                    >
                      {link.label}
                    </Button>
                  ) : (
                    <Button
                      component={Link}
                      href={link.href}
                      sx={{
                        color:
                          pathname === link.href ? "#1565C0" : "#334155",
                        fontWeight: pathname === link.href ? 700 : 500,
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
                          transform:
                            pathname === link.href ? "scaleX(1)" : "scaleX(0)",
                          transition: "transform 0.2s ease",
                        },
                      }}
                    >
                      {link.label}
                    </Button>
                  )}
                </Box>
              ))}

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
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>

        {/* Mega Menu */}
        <AnimatePresence>
          {megaMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                zIndex: 1300,
              }}
            >
              <Paper
                elevation={8}
                sx={{
                  borderRadius: 0,
                  borderTop: "2px solid #1565C0",
                  p: 4,
                  boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                }}
              >
                <Container maxWidth="xl">
                  <Box mb={3}>
                    <Typography variant="overline" color="primary" fontWeight={700} letterSpacing={2}>
                      Product Categories
                    </Typography>
                  </Box>
                  <Grid container spacing={2}>
                    {categories.map((cat) => (
                      <Grid size={{ xs: 12, sm: 6, md: 4 }} key={cat.id}>
                        <Box
                          component={Link}
                          href={`/products?category=${cat.slug}`}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            p: 2,
                            borderRadius: 2,
                            border: "1px solid transparent",
                            textDecoration: "none",
                            color: "inherit",
                            transition: "all 0.2s ease",
                            "&:hover": {
                              bgcolor: "#EFF6FF",
                              borderColor: "#BFDBFE",
                              "& .cat-icon": { bgcolor: "#1565C0", color: "white" },
                            },
                          }}
                        >
                          <Box
                            className="cat-icon"
                            sx={{
                              width: 42,
                              height: 42,
                              borderRadius: 2,
                              bgcolor: "#EFF6FF",
                              color: "#1565C0",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                              transition: "all 0.2s ease",
                            }}
                          >
                            {categoryIcons[cat.slug]}
                          </Box>
                          <Box>
                            <Typography variant="body2" fontWeight={600} color="text.primary">
                              {cat.name}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              {cat.count} products
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                  <Divider sx={{ my: 2 }} />
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="body2" color="text.secondary">
                      Browse all our portable & modular solutions
                    </Typography>
                    <Button
                      component={Link}
                      href="/products"
                      variant="outlined"
                      size="small"
                      onClick={() => setMegaMenuOpen(false)}
                    >
                      View All Products →
                    </Button>
                  </Box>
                </Container>
              </Paper>
            </motion.div>
          )}
        </AnimatePresence>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{ sx: { width: "min(320px, 90vw)" } }}
      >
        <Box p={2} display="flex" justifyContent="space-between" alignItems="center">
          <Typography fontWeight={700} color="primary">
            MA INFRA
          </Typography>
          <IconButton onClick={() => setMobileOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List sx={{ pt: 1 }}>
          {navLinks.map((link) => (
            <React.Fragment key={link.href}>
              {link.hasMega ? (
                <>
                  <ListItem
                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    sx={{
                      borderRadius: 2,
                      mx: 1,
                      cursor: "pointer",
                      "&:hover": { bgcolor: "#EFF6FF" },
                    }}
                  >
                    <ListItemText
                      primary={link.label}
                      primaryTypographyProps={{ fontWeight: 600 }}
                    />
                    {mobileProductsOpen ? (
                      <KeyboardArrowUpIcon fontSize="small" color="action" />
                    ) : (
                      <KeyboardArrowDownIcon fontSize="small" color="action" />
                    )}
                  </ListItem>
                  <Collapse in={mobileProductsOpen}>
                    <List disablePadding>
                      {categories.map((cat) => (
                        <ListItem
                          key={cat.id}
                          component={Link}
                          href={`/products?category=${cat.slug}`}
                          sx={{
                            pl: 4,
                            py: 0.75,
                            cursor: "pointer",
                            "&:hover": { bgcolor: "#EFF6FF" },
                          }}
                        >
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            {categoryIcons[cat.slug]}
                          </ListItemIcon>
                          <ListItemText
                            primary={cat.name}
                            primaryTypographyProps={{
                              variant: "body2",
                              fontWeight: 500,
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </>
              ) : (
                <ListItem
                  component={Link}
                  href={link.href}
                  sx={{
                    borderRadius: 2,
                    mx: 1,
                    cursor: "pointer",
                    bgcolor: pathname === link.href ? "#EFF6FF" : "transparent",
                    "&:hover": { bgcolor: "#EFF6FF" },
                  }}
                >
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{
                      fontWeight: pathname === link.href ? 700 : 500,
                      color: pathname === link.href ? "primary.main" : "text.primary",
                    }}
                  />
                </ListItem>
              )}
            </React.Fragment>
          ))}
        </List>
        <Box p={2} mt="auto">
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
          <Box display="flex" alignItems="center" justifyContent="center" gap={1} mt={2}>
            <PhoneIcon color="primary" fontSize="small" />
            <Typography variant="body2" fontWeight={600} color="primary">
              +91 98765 43210
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
