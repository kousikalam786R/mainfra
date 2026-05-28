"use client";

import React, { useState } from "react";
import { Box, Fab, Typography, Paper, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";
import { whatsappUrl as getWhatsAppUrl } from "@/data/company";

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  const message =
    "Hello! I'm interested in MA INFRA portable cabin / modular office solutions. Please share details.";
  const chatUrl = getWhatsAppUrl(message);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: { xs: 20, md: 32 },
        right: { xs: 20, md: 32 },
        zIndex: 1400,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 1.5,
      }}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <Paper
              elevation={8}
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                width: 280,
                boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#25D366",
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    bgcolor: "rgba(255,255,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <WhatsAppIcon sx={{ color: "white" }} />
                </Box>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: "white",
                      fontSize: "0.875rem",
                      lineHeight: 1.3,
                    }}
                  >
                    MA INFRA Support
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                    }}
                  >
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        bgcolor: "#4AE54A",
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{ color: "rgba(255,255,255,0.8)" }}
                    >
                      Online now
                    </Typography>
                  </Box>
                </Box>
                <IconButton
                  size="small"
                  onClick={() => setOpen(false)}
                  aria-label="Close chat"
                  sx={{
                    color: "rgba(255,255,255,0.8)",
                    "&:hover": { color: "white" },
                  }}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Box>

              <Box sx={{ bgcolor: "#E5DDD5", p: 2 }}>
                <Box
                  sx={{
                    bgcolor: "white",
                    borderRadius: "0 12px 12px 12px",
                    p: 1.5,
                    maxWidth: "85%",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ color: "text.primary", lineHeight: 1.5 }}
                  >
                    👋 Hi! Looking for portable cabins or modular offices? Chat
                    with us for a free quote!
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "text.secondary",
                      display: "block",
                      textAlign: "right",
                      mt: 0.5,
                    }}
                  >
                    Just now
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  p: 2,
                  bgcolor: "#E5DDD5",
                  borderTop: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                <Box
                  component="a"
                  href={chatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                    bgcolor: "#25D366",
                    color: "white",
                    p: 1.5,
                    borderRadius: 2,
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    textDecoration: "none",
                    transition: "background 0.2s",
                    "&:hover": { bgcolor: "#1DAB52" },
                  }}
                >
                  <WhatsAppIcon fontSize="small" />
                  Start Chat on WhatsApp
                </Box>
              </Box>
            </Paper>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Fab
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}
          sx={{
            bgcolor: "#25D366",
            color: "white",
            width: 60,
            height: 60,
            boxShadow: "0 8px 25px rgba(37, 211, 102, 0.45)",
            "&:hover": {
              bgcolor: "#1DAB52",
              boxShadow: "0 12px 30px rgba(37, 211, 102, 0.55)",
            },
          }}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{ display: "flex" }}
              >
                <CloseIcon />
              </motion.div>
            ) : (
              <motion.div
                key="whatsapp"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{ display: "flex" }}
              >
                <WhatsAppIcon />
              </motion.div>
            )}
          </AnimatePresence>
        </Fab>
      </motion.div>

      {!open && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{
            position: "absolute",
            right: 72,
            top: "50%",
            transform: "translateY(-50%)",
            whiteSpace: "nowrap",
          }}
        >
          <Paper
            sx={{
              px: 2,
              py: 0.75,
              borderRadius: 2,
              bgcolor: "white",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            }}
          >
            <Typography
              variant="caption"
              sx={{ fontWeight: 600, color: "text.primary" }}
            >
              Chat with us
            </Typography>
          </Paper>
        </motion.div>
      )}
    </Box>
  );
}
