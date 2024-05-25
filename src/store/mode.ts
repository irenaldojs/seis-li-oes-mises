import { PaletteMode } from "@mui/material";
import { create } from "zustand";

const themeName = "theme_seis_leis_mises";
const fontSizeName = "fontSize_seis_leis_mises";

type ModeState = {
  fontSize: number;
  theme: PaletteMode;
  swapTheme: () => void;
  addFontSize: () => void;
  subFontSize: () => void;
  setTheme: () => void;
  loadTheme: () => void;
};

export const useMode = create<ModeState>((set) => ({
  fontSize: 1,
  theme: "light",
  swapTheme: () => {
    set((state) =>
      state.theme === "light" ? { theme: "dark" } : { theme: "light" },
    );
    useMode.getState().setTheme();
  },
  addFontSize: () => {
    set((state) =>
      state.fontSize < 2 ? { fontSize: state.fontSize + 0.1 } : state,
    );
    useMode.getState().setTheme();
  },

  subFontSize: () => {
    set((state) =>
      state.fontSize > 1.1 ? { fontSize: state.fontSize - 0.1 } : state,
    );
    useMode.getState().setTheme();
  },
  setTheme: () =>
    set((state) => {
      localStorage.setItem(themeName, state.theme);
      localStorage.setItem(fontSizeName, state.fontSize.toString());
      return state;
    }),
  loadTheme: () => {
    const theme = localStorage.getItem(themeName) as PaletteMode;
    if (theme != null) set({ theme });

    const fontSize = localStorage.getItem(fontSizeName);
    if (fontSize != null) set({ fontSize: parseFloat(fontSize) });
  },
}));
