import { create } from "zustand";
import { games } from "./Game";
// Add this import if missing
export const useStore = create((set) => ({
  //make search bar visible
  current: "True",
  change: (status) => set(() => ({ current: status })),

  //cart tag
  now: "Add To Cart",
  onChange: (game) =>
    set(() => {
      const exists = state.cart.some((g) => g.id !== game.id);
      const now = exists ? "Added To Cart" : "Add To Cart";
      return { now };
    }),
  // cart visible
  cart: [],
  addtoCart: (items) =>
    set((state) => ({
      cart: items,
    })),
  deleteCart: (item) =>
    set((state) => ({
      cart: state.cart.filter((g) => g.id !== item.id),
    })),

  // change the content view based on selection
  search: games,
  searchGames: (filteredGames) => set(() => ({ search: filteredGames })),

  genreSetter: (value) => {
    set((state) => {
      if (value === "All") {
        return { search: games };
      }
      if (value === "Wishlist") {
        return { search: state.wishlist };
      }
      const filteredGames = games.filter((game) => game.genre === value);
      return { search: filteredGames };
    });
  },

  // add to wishlist
  wishlist: [],
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

  // changing grid column size
  columns: "grid-cols-3",
  changeColumns: (value) => set(() => ({ columns: value })),

  //Selected image for carousal
  carousal: [],
  setCarousal: (value) => set(() => ({ carousal: value })),
}));
