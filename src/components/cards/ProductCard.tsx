"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  Box,
  Typography,
  Chip,
  Button,
  Rating,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { motion } from "framer-motion";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  variant?: "default" | "compact";
}

export default function ProductCard({
  product,
  variant = "default",
}: ProductCardProps) {
  const imageHeight = variant === "compact" ? 180 : 220;

  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
      style={{ height: "100%" }}
    >
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          borderRadius: 3,
          border: "1px solid",
          borderColor: "rgba(0,0,0,0.06)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          transition: "all 0.3s ease",
          bgcolor: "white",
          "&:hover": {
            boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
            borderColor: "rgba(21,101,192,0.15)",
            "& .product-image": {
              transform: "scale(1.05)",
            },
            "& .view-btn": {
              bgcolor: "secondary.main",
              color: "white",
              borderColor: "secondary.main",
            },
          },
        }}
      >
        {/* Image */}
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            height: imageHeight,
            flexShrink: 0,
            bgcolor: "#F1F5F9",
          }}
        >
          <Box
            className="product-image"
            sx={{
              position: "absolute",
              inset: 0,
              transition: "transform 0.5s ease",
            }}
          >
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </Box>

          {(product.isBestseller || product.isNew) && (
            <Box
              sx={{
                position: "absolute",
                top: 12,
                left: 12,
                display: "flex",
                flexWrap: "wrap",
                gap: 0.75,
                zIndex: 1,
              }}
            >
              {product.isBestseller && (
                <Chip
                  label="Bestseller"
                  size="small"
                  sx={{
                    bgcolor: "#F57C00",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "0.65rem",
                    height: 24,
                    "& .MuiChip-label": { px: 1 },
                  }}
                />
              )}
              {product.isNew && (
                <Chip
                  label="New"
                  size="small"
                  sx={{
                    bgcolor: "#16A34A",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "0.65rem",
                    height: 24,
                    "& .MuiChip-label": { px: 1 },
                  }}
                />
              )}
            </Box>
          )}
        </Box>

        <CardContent
          sx={{
            p: 2.5,
            pt: 2,
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 1.25,
            "&:last-child": { pb: 2.5 },
          }}
        >
          {/* Category */}
          <Typography
            variant="caption"
            sx={{
              color: "primary.main",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              lineHeight: 1.2,
              display: "block",
            }}
          >
            {product.category}
          </Typography>

          {/* Name */}
          <Typography
            component={Link}
            href={`/products/${product.slug}`}
            variant="h6"
            sx={{
              fontWeight: 700,
              lineHeight: 1.35,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              color: "text.primary",
              fontSize: variant === "compact" ? "0.95rem" : "1.05rem",
              textDecoration: "none",
              m: 0,
              "&:hover": { color: "primary.main" },
            }}
          >
            {product.name}
          </Typography>

          {/* Rating */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.75,
              minHeight: 22,
            }}
          >
            <Rating
              value={product.rating}
              precision={0.1}
              size="small"
              readOnly
              sx={{
                flexShrink: 0,
                "& .MuiRating-icon": { fontSize: 16 },
              }}
            />
            <Typography
              variant="caption"
              sx={{
                color: "text.secondary",
                lineHeight: 1,
                pt: "2px",
              }}
            >
              {product.rating.toFixed(1)} ({product.reviews})
            </Typography>
          </Box>

          {/* Description */}
          {variant !== "compact" && (
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                lineHeight: 1.55,
                fontSize: "0.8125rem",
                m: 0,
              }}
            >
              {product.shortDescription}
            </Typography>
          )}

          {/* Delivery */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.75,
              mt: variant === "compact" ? "auto" : 0.25,
            }}
          >
            <LocalShippingIcon
              sx={{
                fontSize: 16,
                color: "text.secondary",
                flexShrink: 0,
              }}
            />
            <Typography
              variant="caption"
              sx={{
                color: "text.secondary",
                lineHeight: 1.4,
                m: 0,
              }}
            >
              Delivery in {product.deliveryTime}
            </Typography>
          </Box>

          {/* Price + CTA */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 1.5,
              pt: 2,
              mt: "auto",
              borderTop: "1px solid",
              borderColor: "rgba(0,0,0,0.06)",
            }}
          >
            <Box sx={{ minWidth: 0, flex: 1 }}>
              <Typography
                variant="caption"
                sx={{
                  color: "text.secondary",
                  display: "block",
                  lineHeight: 1.3,
                  mb: 0.25,
                }}
              >
                Starting from
              </Typography>
              <Typography
                sx={{
                  fontWeight: 800,
                  color: "primary.main",
                  fontSize: "1.125rem",
                  lineHeight: 1.2,
                  m: 0,
                }}
              >
                {product.price}
              </Typography>
            </Box>
            <Button
              className="view-btn"
              component={Link}
              href={`/products/${product.slug}`}
              size="small"
              variant="outlined"
              endIcon={
                <ArrowForwardIcon sx={{ fontSize: 16 }} />
              }
              sx={{
                borderRadius: 2,
                fontSize: "0.8125rem",
                fontWeight: 600,
                minHeight: 40,
                px: 2,
                flexShrink: 0,
                whiteSpace: "nowrap",
                transition: "all 0.2s ease",
                "& .MuiButton-endIcon": {
                  ml: 0.5,
                  mr: 0,
                  display: "inherit",
                  alignItems: "center",
                },
              }}
            >
              View
            </Button>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}
