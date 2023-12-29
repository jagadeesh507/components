"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTheme = create(
  persist(
    (set) => ({
      theme:
        typeof window !== "undefined" ? localStorage.getItem("theme") : "light",
      settheme: (newtheme: any) =>
        set((state: any) => ({
          theme: newtheme,
        })),
    }),
    {
      name: "theme", // name of the item in the storage (must be unique)
    }
  )
);
