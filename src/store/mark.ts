import { create } from "zustand";

type MarkState = {
  page?: string;
  verse?: number;
  loadMark: () => [page: string, verse?: number];
  setMark: (page: string, verse: number) => void;
};

export const useMark = create<MarkState>((set) => ({
  page: "",
  verse: 0,
  setMark: (page, verse) => {
    set({ page, verse });
    localStorage.setItem("page", page);
    localStorage.setItem("verse", verse.toString());
  },
  loadMark: (): [page: string, verse?: number] => {
    const page = localStorage.getItem("page");
    const verse = localStorage.getItem("verse");
    if (page && verse) {
      set({ page, verse: parseInt(verse) });
      return [page, parseInt(verse)];
    }
    return [""];
  },
}));
