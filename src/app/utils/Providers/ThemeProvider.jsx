"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import EmotionCacheProvider from "./EmotionCacheProvider";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
    },
    text: {
      secondary: "#666",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 998,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: "var(--font-inter)",
    allVariants: {
      fontFamily: "var(--font-inter)",
    },
    h1: {
      fontFamily: "var(--font-inter)",
    },
    h2: {
      fontFamily: "var(--font-inter)",
    },
    h3: {
      fontFamily: "var(--font-inter)",
    },
    h4: {
      fontFamily: "var(--font-inter)",
    },
    h5: {
      fontFamily: "var(--font-inter)",
    },
    h6: {
      fontFamily: "var(--font-inter)",
    },
    body1: {
      fontFamily: "var(--font-inter)",
    },
    body2: {
      fontFamily: "var(--font-inter)",
    },
    button: {
      fontFamily: "var(--font-inter)",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        * {
          font-family: var(--font-inter);
        }
      `,
    },
  },
});

export default function MuiThemeProvider({ children }) {
  return (
    <EmotionCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </EmotionCacheProvider>
  );
}
