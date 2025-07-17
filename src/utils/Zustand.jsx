import { create } from "zustand";
import { games } from "./Game"; // Add this import if missing

export const useStore = create((set) => ({
  current: "True",
  search: games,
  wishlist: [],

  change: (status) => set(() => ({ current: status })),

  searchGames: (filteredGames) => set(() => ({ search: filteredGames })),

  addToWishList: (item) =>
    set((state) => {
      const alreadyAdded = state.wishlist.find((g) => g.id === item.id);
      if (alreadyAdded) return state; // prevent duplicates
      return { wishlist: [...state.wishlist, item] };
    }),

  removeFromWishList: (id) =>
    set((state) => ({
      wishlist: state.wishlist.filter((item) => item.id !== id),
    })),
}));
