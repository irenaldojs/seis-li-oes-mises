import { PaletteMode, ThemeOptions } from "@mui/material";

export function appTheme(
  theme: PaletteMode = "light",
  fontSize: number = 1,
): ThemeOptions {
  return {
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
            backgroundColor: theme === "light" ? "#EEF1F1" : "black",
            color: theme === "light" ? "black" : "white",
          },
        },
      },
      MuiBottomNavigationAction: {
        styleOverrides: {
          root: {
            color: theme === "light" ? "grey.500" : "white",
            backgroundColor: theme === "light" ? "#EEF1F1" : "black",
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: "Playfair Display",
            color: theme === "light" ? "black" : "white",
            backgroundColor: theme === "light" ? "transparent" : "black",
            variants: [
              {
                props: {
                  variant: "h3",
                },
                style: {
                  fontSize: { sm: 22 * fontSize },
                },
              },
              {
                props: {
                  variant: "h5",
                },
                style: {
                  fontSize: { sm: 14 * fontSize },
                },
              },
              {
                props: {
                  variant: "body1",
                },
                style: {
                  fontSize: { sm: 10 * fontSize },
                },
              },
              {
                props: {
                  variant: "body2",
                },
                style: {
                  fontSize: { sm: 8 * fontSize },
                },
              },
            ],
          },
        },
      },
    },
  };
}
