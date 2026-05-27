"use client";

import React, { useState, useMemo, Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  Box,
  Container,
  Typography,
  TextField,
  InputAdornment,
  Chip,
  Pagination,
  Breadcrumbs,
  Link as MuiLink,
  Select,
  MenuItem,
  FormControl,
  Divider,
  Paper,
  IconButton,
  Drawer,
  Button,
  Grid,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import HomeIcon from "@mui/icons-material/Home";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/cards/ProductCard";

const ITEMS_PER_PAGE = 6;

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "newest", label: "Newest First" },
];

function ProductsContent() {
  const searchParams = useSearchParams();
  const defaultCategory = searchParams.get("category") || "all";

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
  const [sort, setSort] = useState("featured");
  const [page, setPage] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    setSelectedCategory(defaultCategory);
    setPage(1);
  }, [defaultCategory]);

  const filtered = useMemo(() => {
    let result = [...products];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q)
      );
    }

    if (selectedCategory !== "all") {
      result = result.filter((p) => p.categorySlug === selectedCategory);
    }

    switch (sort) {
      case "price-asc":
        result.sort(
          (a, b) =>
            parseInt(a.price.replace(/[^0-9]/g, "")) -
            parseInt(b.price.replace(/[^0-9]/g, ""))
        );
        break;
      case "price-desc":
        result.sort(
          (a, b) =>
            parseInt(b.price.replace(/[^0-9]/g, "")) -
            parseInt(a.price.replace(/[^0-9]/g, ""))
        );
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }

    return result;
  }, [search, selectedCategory, sort]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug);
    setPage(1);
    setDrawerOpen(false);
  };

  const activeFilters = (selectedCategory !== "all" ? 1 : 0) + (search ? 1 : 0);

  const clearAllFilters = () => {
    setSelectedCategory("all");
    setSearch("");
    setPage(1);
  };

  const FilterSidebar = () => (
    <Box>
      <Typography
        variant="overline"
        sx={{
          fontWeight: 700,
          color: "text.secondary",
          letterSpacing: 1.5,
        }}
      >
        Categories
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
          mt: 1.5,
        }}
      >
        <Box
          onClick={() => handleCategoryChange("all")}
          sx={{
            px: 2,
            py: 1,
            borderRadius: 2,
            cursor: "pointer",
            bgcolor: selectedCategory === "all" ? "#EFF6FF" : "transparent",
            color: selectedCategory === "all" ? "primary.main" : "text.primary",
            fontWeight: selectedCategory === "all" ? 700 : 400,
            fontSize: "0.875rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            "&:hover": { bgcolor: "#EFF6FF" },
          }}
        >
          <span>All Products</span>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            {products.length}
          </Typography>
        </Box>
        {categories.map((cat) => (
          <Box
            key={cat.id}
            onClick={() => handleCategoryChange(cat.slug)}
            sx={{
              px: 2,
              py: 1,
              borderRadius: 2,
              cursor: "pointer",
              bgcolor:
                selectedCategory === cat.slug ? "#EFF6FF" : "transparent",
              color:
                selectedCategory === cat.slug ? "primary.main" : "text.primary",
              fontWeight: selectedCategory === cat.slug ? 700 : 400,
              fontSize: "0.875rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              "&:hover": { bgcolor: "#EFF6FF" },
            }}
          >
            <span>{cat.name}</span>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              {cat.count}
            </Typography>
          </Box>
        ))}
      </Box>

      <Divider sx={{ my: 3 }} />

      <Typography
        variant="overline"
        sx={{
          fontWeight: 700,
          color: "text.secondary",
          letterSpacing: 1.5,
        }}
      >
        Tags
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 0.75,
          mt: 1.5,
        }}
      >
        {[
          "portable",
          "cabin",
          "modular",
          "industrial",
          "premium",
          "economy",
          "security",
          "storage",
        ].map((tag) => (
          <Chip
            key={tag}
            label={tag}
            size="small"
            variant="outlined"
            sx={{
              borderRadius: 1.5,
              cursor: "pointer",
              "&:hover": {
                bgcolor: "#EFF6FF",
                borderColor: "primary.main",
                color: "primary.main",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#F8FAFC" }}>
      {/* Header — matches Gallery */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #0A1628, #1565C0)",
          py: { xs: 1.5, md: 2 },
          color: "#FFFFFF",
        }}
      >
        <Container maxWidth="xl">
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{ mb: 0.5, "& .MuiBreadcrumbs-separator": { mx: 0.5 } }}
          >
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
                "&:hover": { color: "rgba(255,255,255,0.9)" },
              }}
            >
              <HomeIcon sx={{ fontSize: 14 }} /> Home
            </MuiLink>
            <Typography sx={{ color: "rgba(255,255,255,0.9)", fontSize: "0.75rem" }}>
              Products
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
            Our Products
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
            Premium portable structures, modular offices, and container solutions —
            delivered pan-India.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Search + sort toolbar */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, sm: 2.5 },
            mb: 3,
            borderRadius: 3,
            border: "1px solid rgba(0,0,0,0.06)",
            bgcolor: "white",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "stretch", md: "center" },
              gap: 2,
            }}
          >
            <TextField
              placeholder="Search by name, category, or keyword..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              size="small"
              fullWidth
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ fontSize: 20, color: "text.secondary" }} />
                    </InputAdornment>
                  ),
                },
              }}
              sx={{
                flex: 1,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: "#F8FAFC",
                },
              }}
            />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                flexShrink: 0,
              }}
            >
              <IconButton
                onClick={() => setDrawerOpen(true)}
                aria-label="Open filters"
                sx={{
                  display: { xs: "flex", md: "none" },
                  border: "1px solid rgba(0,0,0,0.1)",
                  borderRadius: 2,
                  bgcolor: "#F8FAFC",
                }}
              >
                <TuneIcon fontSize="small" />
              </IconButton>

              <FormControl size="small" sx={{ minWidth: { xs: "100%", sm: 200 } }}>
                <Select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  displayEmpty
                  sx={{
                    borderRadius: 2,
                    bgcolor: "#F8FAFC",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                >
                  {sortOptions.map((opt) => (
                    <MenuItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 1,
              mt: 2,
              pt: 2,
              borderTop: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <Box component="span" sx={{ fontWeight: 700, color: "text.primary" }}>
                {filtered.length}
              </Box>{" "}
              {filtered.length === 1 ? "product" : "products"} found
            </Typography>

            {activeFilters > 0 && (
              <Button
                size="small"
                onClick={clearAllFilters}
                sx={{ fontSize: "0.75rem", textTransform: "none" }}
              >
                Clear filters
              </Button>
            )}
          </Box>

          {(selectedCategory !== "all" || search) && (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                mt: 1.5,
                alignItems: "center",
              }}
            >
              {selectedCategory !== "all" && (
                <Chip
                  label={
                    categories.find((c) => c.slug === selectedCategory)?.name
                  }
                  onDelete={() => handleCategoryChange("all")}
                  size="small"
                  color="primary"
                  variant="outlined"
                />
              )}
              {search && (
                <Chip
                  label={`Search: "${search}"`}
                  onDelete={() => {
                    setSearch("");
                    setPage(1);
                  }}
                  size="small"
                  color="primary"
                  variant="outlined"
                />
              )}
            </Box>
          )}
        </Paper>

        <Grid container spacing={3}>
          {/* Desktop sidebar */}
          <Grid
            size={{ xs: 12, md: 3, lg: 2.5 }}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 2.5,
                borderRadius: 3,
                border: "1px solid rgba(0,0,0,0.06)",
                position: "sticky",
                top: 90,
                bgcolor: "white",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  Filters
                </Typography>
                {activeFilters > 0 && (
                  <Button
                    size="small"
                    onClick={clearAllFilters}
                    sx={{ fontSize: "0.75rem", py: 0.5, textTransform: "none" }}
                  >
                    Clear all
                  </Button>
                )}
              </Box>
              <FilterSidebar />
            </Paper>
          </Grid>

          {/* Products grid */}
          <Grid size={{ xs: 12, md: 9, lg: 9.5 }}>
            {paginated.length === 0 ? (
              <Box sx={{ textAlign: "center", py: 8 }}>
                <Typography
                  variant="h5"
                  sx={{ color: "text.secondary", mb: 1 }}
                >
                  No products found
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Try adjusting your search or category filter
                </Typography>
                <Button onClick={clearAllFilters} sx={{ mt: 2 }}>
                  Clear filters
                </Button>
              </Box>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedCategory}-${search}-${sort}-${page}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Grid container spacing={3}>
                    {paginated.map((product) => (
                      <Grid size={{ xs: 12, sm: 6, xl: 4 }} key={product.id}>
                        <ProductCard product={product} />
                      </Grid>
                    ))}
                  </Grid>
                </motion.div>
              </AnimatePresence>
            )}

            {totalPages > 1 && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 5,
                }}
              >
                <Pagination
                  count={totalPages}
                  page={page}
                  onChange={(_, v) => {
                    setPage(v);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  color="primary"
                  shape="rounded"
                  sx={{
                    "& .MuiPaginationItem-root": {
                      borderRadius: 2,
                      fontWeight: 600,
                    },
                  }}
                />
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>

      {/* Mobile filter drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{ paper: { sx: { width: "min(300px, 85vw)", p: 3 } } }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Filters
          </Typography>
          <IconButton
            onClick={() => setDrawerOpen(false)}
            size="small"
            aria-label="Close filters"
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <FilterSidebar />
      </Drawer>
    </Box>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography>Loading...</Typography>
        </Box>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
