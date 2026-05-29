import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1565C0",
      light: "#1976D2",
      dark: "#0D47A1",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#F57C00",
      light: "#FF9800",
      dark: "#E65100",
      contrastText: "#ffffff",
    },
    background: {
      default: "#F8FAFC",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1A202C",
      secondary: "#4A5568",
    },
    grey: {
      50: "#F8FAFC",
      100: "#F1F5F9",
      200: "#E2E8F0",
      300: "#CBD5E1",
      400: "#94A3B8",
      500: "#64748B",
      600: "#475569",
      700: "#334155",
      800: "#1E293B",
      900: "#0F172A",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: "clamp(2.5rem, 5vw, 4rem)",
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 700,
      fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
      lineHeight: 1.2,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontWeight: 700,
      fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 600,
      fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.125rem",
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.75,
      color: "#4A5568",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
      color: "#64748B",
    },
    button: {
      fontWeight: 600,
      letterSpacing: "0.025em",
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    "none",
    "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
    "0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.05)",
    "0 10px 15px rgba(0,0,0,0.07), 0 4px 6px rgba(0,0,0,0.05)",
    "0 20px 25px rgba(0,0,0,0.07), 0 10px 10px rgba(0,0,0,0.04)",
    "0 25px 50px rgba(0,0,0,0.1)",
    "0 25px 50px rgba(0,0,0,0.12)",
    "0 25px 50px rgba(0,0,0,0.14)",
    "0 25px 50px rgba(0,0,0,0.16)",
    "0 25px 50px rgba(0,0,0,0.18)",
    "0 25px 50px rgba(0,0,0,0.20)",
    "0 25px 50px rgba(0,0,0,0.22)",
    "0 25px 50px rgba(0,0,0,0.24)",
    "0 25px 50px rgba(0,0,0,0.26)",
    "0 25px 50px rgba(0,0,0,0.28)",
    "0 25px 50px rgba(0,0,0,0.30)",
    "0 25px 50px rgba(0,0,0,0.32)",
    "0 25px 50px rgba(0,0,0,0.34)",
    "0 25px 50px rgba(0,0,0,0.36)",
    "0 25px 50px rgba(0,0,0,0.38)",
    "0 25px 50px rgba(0,0,0,0.40)",
    "0 25px 50px rgba(0,0,0,0.42)",
    "0 25px 50px rgba(0,0,0,0.44)",
    "0 25px 50px rgba(0,0,0,0.46)",
    "0 25px 50px rgba(0,0,0,0.48)",
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "10px 24px",
          fontSize: "0.9375rem",
          fontWeight: 600,
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          },
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            background: "linear-gradient(135deg, #1565C0 0%, #1976D2 100%)",
            "&:hover": {
              background: "linear-gradient(135deg, #0D47A1 0%, #1565C0 100%)",
            },
          },
        },
        {
          props: { variant: "contained", color: "secondary" },
          style: {
            background: "linear-gradient(135deg, #F57C00 0%, #FF9800 100%)",
            "&:hover": {
              background: "linear-gradient(135deg, #E65100 0%, #F57C00 100%)",
            },
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
          border: "1px solid rgba(0,0,0,0.04)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 500,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 10,
          },
        },
      },
    },
  },
});

export default theme;
