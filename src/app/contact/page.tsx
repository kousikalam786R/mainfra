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

const productCategories = [
  "Portable Office Cabin",
  "Security Cabin",
  "Portable Toilet",
  "Container House",
  "Modular Office",
  "Portable Storage Cabin",
  "Custom/Other",
];

const offices = [
  {
    city: "Noida (HQ & Factory)",
    address: "Plot No. 42, Industrial Area Phase-II, Noida, UP – 201301",
    phone: "+91 98765 43210",
    email: "hq@mainfraportablecabin.com",
    hours: "Mon–Sat: 9:00 AM – 6:00 PM",
    isPrimary: true,
  },
  {
    city: "Mumbai",
    address: "Unit 8, Bharat Industrial Estate, Kurla, Mumbai – 400070",
    phone: "+91 98765 43211",
    email: "mumbai@mainfraportablecabin.com",
    hours: "Mon–Sat: 9:00 AM – 6:00 PM",
    isPrimary: false,
  },
  {
    city: "Bengaluru",
    address: "No. 15, Electronic City Phase I, Bengaluru – 560100",
    phone: "+91 98765 43212",
    email: "blr@mainfraportablecabin.com",
    hours: "Mon–Sat: 9:30 AM – 6:00 PM",
    isPrimary: false,
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
            <Typography color="rgba(255,255,255,0.85)" fontSize="0.875rem">Contact</Typography>
          </Breadcrumbs>
          <Typography variant="h2" color="white" mb={1.5}>
            Get in Touch
          </Typography>
          <Typography color="rgba(255,255,255,0.7)" fontSize="1.05rem" maxWidth={520}>
            Our team responds within 2 hours. Tell us your requirements and we'll get back with a custom quote.
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
                <Typography variant="h5" fontWeight={700} mb={0.75}>
                  Send Us a Message
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={4}>
                  Fill in the form below and our sales team will respond with a detailed quote.
                </Typography>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Box textAlign="center" py={5}>
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
                      <Typography variant="h5" fontWeight={700} mb={1.5}>
                        Inquiry Submitted!
                      </Typography>
                      <Typography variant="body1" color="text.secondary" mb={3} maxWidth={400} mx="auto">
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
                          placeholder="+91 98765 43210"
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
                        <Typography variant="caption" color="text.secondary" display="block" mt={1.5}>
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
            <Box display="flex" flexDirection="column" gap={3}>
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
                    background: "linear-gradient(135deg, #0A1628, #1565C0)",
                    color: "white",
                    border: "none",
                  }}
                >
                  <Typography variant="h6" fontWeight={700} mb={2.5}>
                    Prefer to Talk Directly?
                  </Typography>
                  <Box display="flex" flexDirection="column" gap={1.5} mb={3}>
                    <Box
                      component="a"
                      href="tel:+919876543210"
                      display="flex"
                      alignItems="center"
                      gap={1.5}
                      sx={{
                        p: 2,
                        bgcolor: "rgba(255,255,255,0.08)",
                        borderRadius: 2,
                        border: "1px solid rgba(255,255,255,0.1)",
                        textDecoration: "none",
                        color: "white",
                        transition: "all 0.2s ease",
                        "&:hover": { bgcolor: "rgba(255,255,255,0.15)" },
                      }}
                    >
                      <PhoneIcon sx={{ color: "#FF9800" }} />
                      <Box>
                        <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.6)" }}>
                          Call Us
                        </Typography>
                        <Typography fontWeight={700} fontSize="0.95rem">
                          +91 98765 43210
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      component="a"
                      href="https://wa.me/919876543210"
                      target="_blank"
                      display="flex"
                      alignItems="center"
                      gap={1.5}
                      sx={{
                        p: 2,
                        bgcolor: "rgba(37,211,102,0.15)",
                        borderRadius: 2,
                        border: "1px solid rgba(37,211,102,0.25)",
                        textDecoration: "none",
                        color: "white",
                        transition: "all 0.2s ease",
                        "&:hover": { bgcolor: "rgba(37,211,102,0.25)" },
                      }}
                    >
                      <WhatsAppIcon sx={{ color: "#25D366" }} />
                      <Box>
                        <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.6)" }}>
                          WhatsApp
                        </Typography>
                        <Typography fontWeight={700} fontSize="0.95rem">
                          Chat with us instantly
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      component="a"
                      href="mailto:info@mainfraportablecabin.com"
                      display="flex"
                      alignItems="center"
                      gap={1.5}
                      sx={{
                        p: 2,
                        bgcolor: "rgba(255,255,255,0.08)",
                        borderRadius: 2,
                        border: "1px solid rgba(255,255,255,0.1)",
                        textDecoration: "none",
                        color: "white",
                        transition: "all 0.2s ease",
                        "&:hover": { bgcolor: "rgba(255,255,255,0.15)" },
                      }}
                    >
                      <EmailIcon sx={{ color: "#FF9800" }} />
                      <Box>
                        <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.6)" }}>
                          Email
                        </Typography>
                        <Typography fontWeight={700} fontSize="0.95rem">
                          info@mainfraportablecabin.com
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Box display="flex" alignItems="center" gap={1}>
                    <AccessTimeIcon sx={{ fontSize: 16, color: "rgba(255,255,255,0.5)" }} />
                    <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.6)" }}>
                      Mon–Sat: 9:00 AM – 6:00 PM IST
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
                    <Typography variant="subtitle1" fontWeight={700} mb={1.5}>
                      {office.city}
                    </Typography>
                    <Box display="flex" flexDirection="column" gap={1}>
                      <Box display="flex" gap={1} alignItems="flex-start">
                        <LocationOnIcon sx={{ fontSize: 16, color: "text.secondary", mt: 0.2, flexShrink: 0 }} />
                        <Typography variant="body2" color="text.secondary" lineHeight={1.5}>
                          {office.address}
                        </Typography>
                      </Box>
                      <Box display="flex" gap={1} alignItems="center">
                        <PhoneIcon sx={{ fontSize: 16, color: "text.secondary" }} />
                        <Typography variant="body2" color="text.secondary">
                          {office.phone}
                        </Typography>
                      </Box>
                      <Box display="flex" gap={1} alignItems="center">
                        <AccessTimeIcon sx={{ fontSize: 16, color: "text.secondary" }} />
                        <Typography variant="body2" color="text.secondary">
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
                    <Typography variant="subtitle2" fontWeight={700} color="primary">
                      View on Google Maps
                    </Typography>
                    <Button
                      variant="contained"
                      size="small"
                      href="https://maps.google.com"
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
