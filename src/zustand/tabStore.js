import { create } from "zustand";

export const useTabStore = create((set) => ({
  activeTab: "all",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
