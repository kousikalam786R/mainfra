"use client";

import React from "react";
import { Box, Typography, Chip } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const titleParts = highlight ? title.split(highlight) : [title];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Box textAlign={centered ? "center" : "left"} mb={6}>
        {badge && (
          <Chip
            label={badge}
            size="small"
            sx={{
              bgcolor: light ? "rgba(255,255,255,0.15)" : "#EFF6FF",
              color: light ? "white" : "#1565C0",
              fontWeight: 700,
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              mb: 2,
              border: light ? "1px solid rgba(255,255,255,0.3)" : "none",
            }}
          />
        )}
        <Typography
          variant="h2"
          sx={{
            color: light ? "white" : "text.primary",
            mb: subtitle ? 2 : 0,
          }}
        >
          {highlight ? (
            <>
              {titleParts[0]}
              <Box
                component="span"
                sx={{
                  color: "secondary.main",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -4,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: "linear-gradient(90deg, #F57C00, #FF9800)",
                    borderRadius: 2,
                    opacity: 0.4,
                  },
                }}
              >
                {highlight}
              </Box>
              {titleParts[1]}
            </>
          ) : (
            title
          )}
        </Typography>
        {subtitle && (
          <Typography
            variant="body1"
            sx={{
              color: light ? "rgba(255,255,255,0.75)" : "text.secondary",
              maxWidth: centered ? 640 : "100%",
              mx: centered ? "auto" : 0,
              fontSize: "1.05rem",
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Box>
    </motion.div>
  );
}
