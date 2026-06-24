"use client";

import React from "react";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Paper,
  Breadcrumbs,
  Link as MuiLink,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import type { PolicyDocument as PolicyDoc } from "@/data/policies";
import { company } from "@/data/company";

export default function PolicyDocument({ policy }: { policy: PolicyDoc }) {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#F8FAFC" }}>
      <Box
        sx={{
          background: "linear-gradient(135deg, #0A1628, #1565C0)",
          py: { xs: 1.5, md: 2 },
          color: "#FFFFFF",
        }}
      >
        <Container maxWidth="lg">
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
                textDecoration: "none",
              }}
            >
              <HomeIcon sx={{ fontSize: 14 }} /> Home
            </MuiLink>
            <Typography sx={{ color: "rgba(255,255,255,0.9)", fontSize: "0.75rem" }}>
              {policy.title}
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
            }}
          >
            {policy.title}
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.8)",
              fontSize: { xs: "0.75rem", md: "0.8125rem" },
              m: 0,
            }}
          >
            {company.name} · Last updated {policy.lastUpdated}
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 5 } }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2.5, md: 4 },
            borderRadius: 3,
            border: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          {policy.sections.map((section) => (
            <Box key={section.title} sx={{ mb: 3.5, "&:last-child": { mb: 0 } }}>
              <Typography
                component="h2"
                sx={{ fontSize: "1.05rem", fontWeight: 700, mb: 1.25 }}
              >
                {section.title}
              </Typography>
              {section.paragraphs.map((paragraph) => (
                <Typography
                  key={paragraph.slice(0, 40)}
                  sx={{ color: "text.secondary", lineHeight: 1.75, mb: 1.25 }}
                >
                  {paragraph}
                </Typography>
              ))}
              {section.bullets ? (
                <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
                  {section.bullets.map((item) => (
                    <Typography
                      component="li"
                      key={item.slice(0, 40)}
                      sx={{ lineHeight: 1.75, mb: 0.75 }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>
              ) : null}
            </Box>
          ))}
        </Paper>
      </Container>
    </Box>
  );
}
