"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Theme } from "@/types";
import { STORAGE_KEYS } from "@/lib/constants";

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  cycleTheme: () => void;
}

const themeOrder: Theme[] = ["dark", "light", "terminal-hc"];

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: "dark",
      setTheme: (theme) => set({ theme }),
      cycleTheme: () => {
        const current = get().theme;
        const nextIndex = (themeOrder.indexOf(current) + 1) % themeOrder.length;
        set({ theme: themeOrder[nextIndex] });
      },
    }),
    { name: STORAGE_KEYS.theme }
  )
);
