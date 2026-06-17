"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Chip,
  Breadcrumbs,
  Link as MuiLink,
  MenuItem,
  Divider,
  Grid,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion } from "framer-motion";
import { company, whatsappUrl } from "@/data/company";

const productCategories = [
  "Portable Office Cabin",
  "Security Cabin",
  "Portable Toilet",
  "Farm House / Bunk House",
  "Labour Cabin",
  "Custom/Other",
];

const offices = [
  {
    city: `${company.address.city} — Head Office & Factory`,
    address: company.addressFull,
    phone: company.phone,
    email: company.email,
    contactPerson: `${company.salesManager} · ${company.salesManagerTitle}`,
    hours: company.hours,
    isPrimary: true,
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    city: "",
    category: "",
    quantity: "",
    message: "",
  });

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              Contact
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
            Get in Touch
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.8)",
              fontSize: { xs: "0.75rem", md: "0.8125rem" },
              maxWidth: 520,
              lineHeight: 1.4,
              m: 0,
            }}
          >
            Our team responds within 2 hours. Tell us your requirements and we&apos;ll get back with a custom quote.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Grid container spacing={5}>
          {/* Contact Form */}
          <Grid size={{ xs: 12, lg: 7 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 5 },
                  borderRadius: 3,
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.75, color: "text.primary" }}>
                  Send Us a Message
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", mb: 4 }}>
                  Fill in the form below and our sales team will respond with a detailed quote.
                </Typography>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Box sx={{ textAlign: "center", py: 5 }}>
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: "50%",
                          bgcolor: "#F0FDF4",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mx: "auto",
                          mb: 3,
                        }}
                      >
                        <CheckCircleIcon sx={{ fontSize: 48, color: "#16A34A" }} />
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, color: "text.primary" }}>
                        Inquiry Submitted!
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: "text.secondary", mb: 3, maxWidth: 400, mx: "auto" }}
                      >
                        Thank you, {formData.name || "there"}! Our team will review your inquiry and
                        get back to you within 2 hours on business days.
                      </Typography>
                      <Button
                        variant="contained"
                        onClick={() => setSubmitted(false)}
                        sx={{ borderRadius: 2 }}
                      >
                        Submit Another Inquiry
                      </Button>
                    </Box>
                  </motion.div>
                ) : (
                  <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={2.5}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          label="Full Name *"
                          placeholder="Rajesh Kumar"
                          fullWidth
                          required
                          value={formData.name}
                          onChange={handleChange("name")}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          label="Phone Number *"
                          placeholder={company.phone}
                          fullWidth
                          required
                          value={formData.phone}
                          onChange={handleChange("phone")}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          label="Email Address"
                          placeholder="rajesh@company.com"
                          type="email"
                          fullWidth
                          value={formData.email}
                          onChange={handleChange("email")}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          label="Company / Organization"
                          placeholder="Patel Constructions"
                          fullWidth
                          value={formData.company}
                          onChange={handleChange("company")}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          label="City / Location *"
                          placeholder="Mumbai, Maharashtra"
                          fullWidth
                          required
                          value={formData.city}
                          onChange={handleChange("city")}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          label="Product Category"
                          select
                          fullWidth
                          value={formData.category}
                          onChange={handleChange("category")}
                        >
                          {productCategories.map((cat) => (
                            <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          label="Quantity Required"
                          placeholder="e.g. 5 units"
                          fullWidth
                          value={formData.quantity}
                          onChange={handleChange("quantity")}
                        />
                      </Grid>
                      <Grid size={12}>
                        <TextField
                          label="Detailed Requirements"
                          placeholder="Describe the size, specifications, timeline, delivery location, and any special requirements..."
                          multiline
                          rows={4}
                          fullWidth
                          value={formData.message}
                          onChange={handleChange("message")}
                        />
                      </Grid>
                      <Grid size={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          size="large"
                          endIcon={<SendIcon />}
                          sx={{
                            borderRadius: 2.5,
                            py: 1.75,
                            px: 5,
                            fontWeight: 700,
                            fontSize: "1rem",
                          }}
                        >
                          Send Inquiry
                        </Button>
                        <Typography
                          variant="caption"
                          sx={{ color: "text.secondary", display: "block", mt: 1.5 }}
                        >
                          * Required fields · We respond within 2 hours on business days
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                )}
              </Paper>
            </motion.div>
          </Grid>

          {/* Sidebar */}
          <Grid size={{ xs: 12, lg: 5 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {/* Quick contact */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3.5,
                    borderRadius: 3,
                    background: "linear-gradient(145deg, #0A1628 0%, #0D47A1 100%)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#FFFFFF",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, mb: 2.5, color: "#FFFFFF" }}
                  >
                    Prefer to Talk Directly?
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 3 }}>
                    {[
                      {
                        href: `tel:${company.phoneTel}`,
                        icon: <PhoneIcon sx={{ color: "#FF9800", fontSize: 26 }} />,
                        label: `${company.salesManager} · ${company.salesManagerTitle}`,
                        value: company.phone,
                        bg: "rgba(255,255,255,0.1)",
                        border: "rgba(255,255,255,0.15)",
                        hoverBg: "rgba(255,255,255,0.16)",
                      },
                      {
                        href: whatsappUrl("Hello, I would like to inquire about portable cabins."),
                        icon: <WhatsAppIcon sx={{ color: "#25D366", fontSize: 26 }} />,
                        label: "WhatsApp",
                        value: "Chat with us instantly",
                        bg: "rgba(37,211,102,0.18)",
                        border: "rgba(37,211,102,0.35)",
                        hoverBg: "rgba(37,211,102,0.28)",
                        external: true,
                      },
                      {
                        href: `mailto:${company.email}`,
                        icon: <EmailIcon sx={{ color: "#FF9800", fontSize: 26 }} />,
                        label: "Email",
                        value: company.email,
                        bg: "rgba(255,255,255,0.1)",
                        border: "rgba(255,255,255,0.15)",
                        hoverBg: "rgba(255,255,255,0.16)",
                      },
                    ].map((item) => (
                      <Box
                        key={item.label}
                        component="a"
                        href={item.href}
                        {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          p: 2,
                          bgcolor: item.bg,
                          borderRadius: 2,
                          border: "1px solid",
                          borderColor: item.border,
                          textDecoration: "none",
                          transition: "all 0.2s ease",
                          "&:hover": { bgcolor: item.hoverBg },
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            width: 40,
                            height: 40,
                          }}
                        >
                          {item.icon}
                        </Box>
                        <Box sx={{ minWidth: 0, flex: 1 }}>
                          <Typography
                            variant="caption"
                            sx={{
                              color: "rgba(255,255,255,0.75)",
                              display: "block",
                              mb: 0.25,
                              lineHeight: 1.3,
                            }}
                          >
                            {item.label}
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: 700,
                              fontSize: "0.9375rem",
                              color: "#FFFFFF",
                              lineHeight: 1.35,
                              wordBreak: "break-word",
                            }}
                          >
                            {item.value}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      pt: 2,
                      borderTop: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    <AccessTimeIcon
                      sx={{ fontSize: 18, color: "#FF9800", flexShrink: 0 }}
                    />
                    <Typography
                      variant="caption"
                      sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}
                    >
                      {company.hours}
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>

              {/* Offices */}
              {offices.map((office, i) => (
                <motion.div
                  key={office.city}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      border: "1px solid",
                      borderColor: office.isPrimary ? "primary.main" : "rgba(0,0,0,0.06)",
                      position: "relative",
                    }}
                  >
                    {office.isPrimary && (
                      <Chip
                        label="Headquarters"
                        size="small"
                        color="primary"
                        sx={{ position: "absolute", top: 12, right: 12, fontWeight: 700, fontSize: "0.65rem" }}
                      />
                    )}
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1.5, color: "text.primary" }}>
                      {office.city}
                    </Typography>
                    {office.contactPerson && (
                      <Chip
                        label={office.contactPerson}
                        size="small"
                        color="primary"
                        variant="outlined"
                        sx={{ mb: 1.5, fontWeight: 600, width: "fit-content" }}
                      />
                    )}
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.25 }}>
                      <Box sx={{ display: "flex", gap: 1.25, alignItems: "flex-start" }}>
                        <LocationOnIcon sx={{ fontSize: 18, color: "primary.main", mt: 0.2, flexShrink: 0 }} />
                        <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                          {office.address}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", gap: 1.25, alignItems: "center" }}>
                        <PhoneIcon sx={{ fontSize: 18, color: "primary.main", flexShrink: 0 }} />
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                          {office.phone}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", gap: 1.25, alignItems: "center" }}>
                        <AccessTimeIcon sx={{ fontSize: 18, color: "primary.main", flexShrink: 0 }} />
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                          {office.hours}
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </motion.div>
              ))}

              {/* Map placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    borderRadius: 3,
                    overflow: "hidden",
                    border: "1px solid rgba(0,0,0,0.06)",
                    height: 250,
                    position: "relative",
                    bgcolor: "#E8F0FE",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      backgroundImage: "url(https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&q=80)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      opacity: 0.4,
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1.5,
                    }}
                  >
                    <LocationOnIcon sx={{ fontSize: 36, color: "#1565C0" }} />
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "primary.main" }}>
                      View on Google Maps
                    </Typography>
                    <Button
                      variant="contained"
                      size="small"
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.addressFull)}`}
                      component="a"
                      target="_blank"
                      sx={{ borderRadius: 2, mt: 0.5 }}
                    >
                      Open Maps
                    </Button>
                  </Box>
                </Paper>
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
