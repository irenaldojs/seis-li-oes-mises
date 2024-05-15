import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#085475",
    },
    secondary: {
      main: "#EEF1F1",
    },
    background: {
      default: "#FFFFFF",
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: "primary",
      },
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#EEF1F1",
          color: "black",
          fontFamily: "Barlow Condensed Medium",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Playfair Display",
        },
      },
    },
  },
});
