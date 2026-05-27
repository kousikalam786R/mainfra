"use client";

import React, { useState, useMemo, Suspense } from "react";
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
  Badge,
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
        result.sort((a, b) =>
          parseInt(a.price.replace(/[^0-9]/g, "")) -
          parseInt(b.price.replace(/[^0-9]/g, ""))
        );
        break;
      case "price-desc":
        result.sort((a, b) =>
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
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug);
    setPage(1);
    setDrawerOpen(false);
  };

  const activeFilters =
    (selectedCategory !== "all" ? 1 : 0) + (search ? 1 : 0);

  const FilterSidebar = () => (
    <Box>
      <Typography variant="overline" fontWeight={700} color="text.secondary" letterSpacing={1.5}>
        Categories
      </Typography>
      <Box display="flex" flexDirection="column" gap={0.5} mt={1.5}>
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
          <Typography variant="caption" color="text.secondary">
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
              bgcolor: selectedCategory === cat.slug ? "#EFF6FF" : "transparent",
              color: selectedCategory === cat.slug ? "primary.main" : "text.primary",
              fontWeight: selectedCategory === cat.slug ? 700 : 400,
              fontSize: "0.875rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              "&:hover": { bgcolor: "#EFF6FF" },
            }}
          >
            <span>{cat.name}</span>
            <Typography variant="caption" color="text.secondary">
              {cat.count}
            </Typography>
          </Box>
        ))}
      </Box>

      <Divider sx={{ my: 3 }} />

      <Typography variant="overline" fontWeight={700} color="text.secondary" letterSpacing={1.5}>
        Tags
      </Typography>
      <Box display="flex" flexWrap="wrap" gap={0.75} mt={1.5}>
        {["portable", "cabin", "modular", "industrial", "premium", "economy", "security", "storage"].map((tag) => (
          <Chip
            key={tag}
            label={tag}
            size="small"
            variant="outlined"
            sx={{
              borderRadius: 1.5,
              cursor: "pointer",
              "&:hover": { bgcolor: "#EFF6FF", borderColor: "primary.main", color: "primary.main" },
            }}
          />
        ))}
      </Box>
    </Box>
  );

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#F8FAFC" }}>
      {/* Page header */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #0A1628, #1565C0)",
          py: { xs: 5, md: 7 },
          color: "white",
        }}
      >
        <Container maxWidth="xl">
          <Breadcrumbs sx={{ mb: 2 }} aria-label="breadcrumb">
            <MuiLink
              component={Link}
              href="/"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                color: "rgba(255,255,255,0.6)",
                "&:hover": { color: "white" },
              }}
            >
              <HomeIcon fontSize="small" /> Home
            </MuiLink>
            <Typography color="rgba(255,255,255,0.8)" fontSize="0.875rem">
              Products
            </Typography>
          </Breadcrumbs>
          <Typography variant="h2" color="white" mb={1}>
            Our Products
          </Typography>
          <Typography color="rgba(255,255,255,0.7)" fontSize="1.05rem">
            Premium portable structures, delivered pan-India
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 5 }}>
        {/* Top bar */}
        <Box
          display="flex"
          alignItems={{ xs: "flex-start", sm: "center" }}
          justifyContent="space-between"
          flexDirection={{ xs: "column", sm: "row" }}
          gap={2}
          mb={4}
        >
          {/* Search */}
          <Box display="flex" gap={1.5} alignItems="center" flex={1} maxWidth={{ sm: 480 }}>
            <TextField
              placeholder="Search products..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              size="small"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" fontSize="small" />
                  </InputAdornment>
                ),
                sx: { borderRadius: 2, bgcolor: "white" },
              }}
            />
            <Badge badgeContent={activeFilters} color="primary" invisible={activeFilters === 0}>
              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{
                  display: { xs: "flex", md: "none" },
                  bgcolor: "white",
                  border: "1px solid rgba(0,0,0,0.1)",
                  borderRadius: 2,
                }}
              >
                <TuneIcon />
              </IconButton>
            </Badge>
          </Box>

          <Box display="flex" alignItems="center" gap={2}>
            <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: "nowrap" }}>
              {filtered.length} products found
            </Typography>
            <FormControl size="small" sx={{ minWidth: 180 }}>
              <Select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                sx={{ bgcolor: "white", borderRadius: 2 }}
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

        {/* Active filter chips */}
        {(selectedCategory !== "all" || search) && (
          <Box display="flex" gap={1} mb={3} flexWrap="wrap" alignItems="center">
            <Typography variant="caption" color="text.secondary" fontWeight={600}>
              Active filters:
            </Typography>
            {selectedCategory !== "all" && (
              <Chip
                label={categories.find((c) => c.slug === selectedCategory)?.name}
                onDelete={() => handleCategoryChange("all")}
                size="small"
                color="primary"
                variant="outlined"
              />
            )}
            {search && (
              <Chip
                label={`"${search}"`}
                onDelete={() => setSearch("")}
                size="small"
                color="primary"
                variant="outlined"
              />
            )}
          </Box>
        )}

        <Grid container spacing={3}>
          {/* Desktop sidebar */}
          <Grid size={{ xs: 12, md: 3, lg: 2.5 }} sx={{ display: { xs: "none", md: "block" } }}>
            <Paper elevation={0} sx={{ p: 2.5, borderRadius: 3, border: "1px solid rgba(0,0,0,0.06)", position: "sticky", top: 90 }}>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="subtitle1" fontWeight={700}>
                  Filters
                </Typography>
                {activeFilters > 0 && (
                  <Button
                    size="small"
                    onClick={() => { setSelectedCategory("all"); setSearch(""); }}
                    sx={{ fontSize: "0.75rem", py: 0.5 }}
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
              <Box textAlign="center" py={8}>
                <Typography variant="h5" color="text.secondary" mb={1}>
                  No products found
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Try adjusting your search or filters
                </Typography>
                <Button onClick={() => { setSearch(""); setSelectedCategory("all"); }} sx={{ mt: 2 }}>
                  Clear Filters
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
              <Box display="flex" justifyContent="center" mt={5}>
                <Pagination
                  count={totalPages}
                  page={page}
                  onChange={(_, v) => { setPage(v); window.scrollTo({ top: 0, behavior: "smooth" }); }}
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
        PaperProps={{ sx: { width: "min(300px, 85vw)", p: 3 } }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h6" fontWeight={700}>
            Filters
          </Typography>
          <IconButton onClick={() => setDrawerOpen(false)} size="small">
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
    <Suspense fallback={<Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}><Typography>Loading...</Typography></Box>}>
      <ProductsContent />
    </Suspense>
  );
}
