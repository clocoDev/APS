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
