import { PaletteMode, ThemeOptions } from "@mui/material";

export function appTheme(
  theme: PaletteMode = "light",
  fontSize: number = 1,
): ThemeOptions {
  return {
    palette: {
      primary: {
        main: "#085475",
        dark: "#A9E2F3",
      },
      secondary: {
        main: "#EEF1F1",
      },
      background: {
        default: theme === "light" ? "#FFFFFF" : "black",
      },
    },
    typography: {
      fontFamily: "Playfair Display",
      subtitle1: {
        fontSize: 1.2 * fontSize + "rem",
      },
      subtitle2: {
        fontSize: 1 * fontSize + "rem",
      },
      body1: {
        fontSize: 1 * fontSize + "rem",
      },
      body2: {
        fontSize: 0.8 * fontSize + "rem",
      },
    },
    components: {
      MuiAppBar: {
        defaultProps: {
          color: "primary",
        },
        styleOverrides: {
          colorPrimary: {
            backgroundColor: theme === "light" ? "#EEF1F1" : "black",
            color: theme === "light" ? "black" : "white",
            fontFamily: "Barlow Condensed Medium",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            fontFamily: "Barlow Condensed",
            textTransform: "none",
            color: theme === "light" ? "black" : "white",
            backgroundColor: theme === "light" ? "#EEF1F1" : "black",
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: theme === "light" ? "grey" : "white",
            backgroundColor: theme === "light" ? "#EEF1F1" : "black",
          },
        },
      },
      MuiBottomNavigation: {
        styleOverrides: {
          root: {
            backgroundColor: theme === "light" ? "#EEF1F1" : "#363636",
            color: theme === "light" ? "black" : "white",
          },
        },
      },
      MuiBottomNavigationAction: {
        styleOverrides: {
          root: {
            color: theme === "light" ? "grey.500" : "white",
            backgroundColor: theme === "light" ? "#EEF1F1" : "#363636",
            "&.Mui-selected": {
              color: theme === "light" ? "primary" : "#F5DA81",
            },
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: theme === "light" ? "black" : "white",
            variants: [
              {
                props: { variant: "body1" },
                style: {
                  textIndent: "2.5em",
                },
              },
            ],
          },
        },
      },
      MuiMenu: {
        defaultProps: {
          PaperProps: {
            sx: {
              color: theme === "light" ? "grey.700" : "white",
              backgroundColor: theme === "light" ? "#EEF1F1" : "#363636",
            },
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            backgroundColor: theme === "light" ? "white" : "#161616",
          },
        },
      },
    },
  };
}
