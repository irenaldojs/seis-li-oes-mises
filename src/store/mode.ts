import { PaletteMode } from "@mui/material";
import { create } from "zustand";

type ModeState = {
  fontSize: number;
  theme: PaletteMode;
  swapTheme: () => void;
  addFontSize: () => void;
  subFontSize: () => void;
};

export const useMode = create<ModeState>((set) => ({
  fontSize: 1,
  theme: "light",
  swapTheme: () =>
    set((state) =>
      state.theme === "light" ? { theme: "dark" } : { theme: "light" },
    ),
  addFontSize: () =>
    set((state) =>
      state.fontSize < 2 ? { fontSize: state.fontSize + 0.1 } : state,
    ),
  subFontSize: () =>
    set((state) =>
      state.fontSize > 1.1 ? { fontSize: state.fontSize - 0.1 } : state,
    ),
}));
