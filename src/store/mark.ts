import { NavigateFunction } from "react-router-dom";
import { create } from "zustand";

const namePage = "page__seis_leis_mises";
const nameVerse = "verse__seis_leis_mises";

type MarkState = {
  page?: string;
  verse?: number;
  loadMark: (navigate: NavigateFunction) => [page: string, verse?: number];
  setMark: (page: string, verse: number) => void;
};

export const useMark = create<MarkState>((set) => ({
  page: "",
  verse: 0,
  setMark: (page, verse) => {
    set({ page, verse });
    localStorage.setItem(namePage, page);
    localStorage.setItem(nameVerse, verse.toString());
  },
  loadMark: (navigate: NavigateFunction): [page: string, verse?: number] => {
    const page = localStorage.getItem(namePage);
    const verse = localStorage.getItem(nameVerse);
    if (page && verse) {
      set({ page, verse: parseInt(verse) });
      navigate(page);

      setTimeout(() => {
        const element = document.getElementById(verse?.toString() ?? "");

        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);

      console.log(page, verse);

      return [page, parseInt(verse)];
    }
    return [""];
  },
}));
