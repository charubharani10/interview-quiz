import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#323A4A",
    },
    secondary: {
      main: "#2980B9",
    },
    background: {
      default: "#F2F3F6",
      paper: "#FFFFFF",
      qBullet: "#BAEAFF",
      qCurrent: "#EDCFF9",
    },
    text: {
      primary: "#323A4A",
    },
    link: {
      main: "#27AE60",
    },
    border: {
      main: "#DBE0EF",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: {
      fontWeight: 800,
      fontSize: "2rem",
      fontFamily: "Rubik, sans-serif",
    },
    h2: {
      fontWeight: 700,
      fontSize: "1.75rem",
      fontFamily: "Rubik, sans-serif",
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.5rem",
      fontFamily: "Rubik, sans-serif",
    },
    h4: {
      fontWeight: 500,
      fontSize: "1rem",
      fontFamily: "Rubik, sans-serif",
    },
    h5: {
      fontWeight: 400,
      fontSize: "1rem",
      fontFamily: "Rubik, sans-serif",
    },
    h6: {
      fontWeight: 400,
      fontSize: "1rem",
      fontFamily: "Rubik, sans-serif",
    },
    body1: {},
    body2: {
      fontSize: "0.875rem",
    },
    smallText: {
      fontSize: "0.75rem",
      display: "inline-block",
    },
    button: {
      textTransform: "none", // Avoid uppercase transformation for buttons
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "#F2F3F6", // Global gradient background
          minHeight: "100vh", // Ensures the gradient covers the whole page
          color: "#323A4A", // Global white text color for better visibility
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "linear-gradient(135deg, #fff 50%, #2980B9 100%)",
          borderRadius: "0.5rem", // Rounded corners
          boxShadow: "0 4px 8px #DBE0EF", // Subtle shadow
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          "& a": {
            color: "#27AE60", // Electric Green for links
            textDecoration: "none", // Remove underline
            fontWeight: "bold", // Optional: Make links bold
          },
          "& a:hover": {
            textDecoration: "underline", // Add underline on hover
          },
        },
      },
    },
  },
});

export default theme;
