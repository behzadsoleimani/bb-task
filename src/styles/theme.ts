import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1f00ff",
      light: "#eefff4",
      dark: "#004ba0",
      contrastText: "#038e18",
    },
    secondary: {
      main: "#f7ebf2",
      light: "#ff79b0",
      dark: "#c60055",
      contrastText: "#fff",
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ff9800",
    },
    success: {
      main: "#4caf50",
    },
    info: {
      main: "#2196f3",
    },
    background: {
      default: "#b2e7b9"
    }
  },
});
