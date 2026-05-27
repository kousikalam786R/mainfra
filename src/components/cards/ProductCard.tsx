"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  Chip,
  Button,
  Rating,
  IconButton,
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
          border: "1px solid",
          borderColor: "rgba(0,0,0,0.06)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
            borderColor: "rgba(21,101,192,0.15)",
            "& .product-image": {
              transform: "scale(1.05)",
            },
            "& .view-btn": {
              bgcolor: "secondary.main",
              color: "white",
            },
          },
        }}
      >
        {/* Image */}
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            height: variant === "compact" ? 180 : 220,
            bgcolor: "#F1F5F9",
          }}
        >
          <Box
            className="product-image"
            sx={{
              width: "100%",
              height: "100%",
              backgroundImage: `url(${product.images[0]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "transform 0.5s ease",
            }}
          />
          {/* Overlay badges */}
          <Box
            sx={{
              position: "absolute",
              top: 12,
              left: 12,
              display: "flex",
              gap: 0.75,
              flexWrap: "wrap",
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
                  height: 22,
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
                  height: 22,
                }}
              />
            )}
          </Box>
        </Box>

        <CardContent
          sx={{
            p: 2.5,
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          {/* Category */}
          <Typography variant="caption" color="primary" fontWeight={600} sx={{ textTransform: "uppercase", letterSpacing: "0.05em" }}>
            {product.category}
          </Typography>

          {/* Name */}
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{
              lineHeight: 1.3,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              color: "text.primary",
              fontSize: variant === "compact" ? "0.9rem" : "1rem",
            }}
          >
            {product.name}
          </Typography>

          {/* Rating */}
          <Box display="flex" alignItems="center" gap={1}>
            <Rating value={product.rating} precision={0.1} size="small" readOnly />
            <Typography variant="caption" color="text.secondary">
              ({product.reviews})
            </Typography>
          </Box>

          {/* Short description */}
          {variant !== "compact" && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                lineHeight: 1.6,
              }}
            >
              {product.shortDescription}
            </Typography>
          )}

          {/* Delivery */}
          <Box display="flex" alignItems="center" gap={0.75} mt="auto" pt={1}>
            <LocalShippingIcon sx={{ fontSize: 14, color: "text.secondary" }} />
            <Typography variant="caption" color="text.secondary">
              Delivery in {product.deliveryTime}
            </Typography>
          </Box>

          {/* Price + CTA */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            pt={1}
            borderTop="1px solid"
            borderColor="rgba(0,0,0,0.06)"
          >
            <Box>
              <Typography
                variant="caption"
                color="text.secondary"
                display="block"
              >
                Starting from
              </Typography>
              <Typography
                variant="h6"
                fontWeight={800}
                color="primary.main"
                fontSize="1.1rem"
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
              endIcon={<ArrowForwardIcon fontSize="small" />}
              sx={{
                borderRadius: 2,
                fontSize: "0.8rem",
                transition: "all 0.2s ease",
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
