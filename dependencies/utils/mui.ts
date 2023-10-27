import { createTheme } from "@mui/material";

export default createTheme({
  typography: {
    allVariants: {
      fontFamily: "var(--font)",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlinedPrimary: {
          border: "1px solid var(--border)",
          height: "31px",
          color: "inherit",
          fontSize: "14px",
          padding: "0 5px",
          background: "white",
          "&:hover": {
            border: "1px solid var(--border)",
            background: "white",
          },
        },
      },
    },
  },
});
