import { create } from "zustand";

export const useTabStore = create((set) => ({
  activeTab: "All",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
