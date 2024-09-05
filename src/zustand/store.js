import { create } from "zustand";

export const useStore = create((set, get) => ({
  cart: [],
  favorites: [],

  // Add to Cart
  addToCart: (product) => {
    const itemInCart = get().cart.find((item) => item.id === product.id);
    if (itemInCart) {
      set({
        cart: get().cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      });
    } else {
      set({ cart: [...get().cart, { ...product, quantity: 1 }] });
    }
  },

  // Decrease Quantity from Cart
  decreaseFromCart: (id) => {
    const itemInCart = get().cart.find((item) => item.id === id);
    if (itemInCart && itemInCart.quantity > 1) {
      set({
        cart: get().cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        ),
      });
    } else {
      // If the quantity is 1, remove the item from the cart
      set({
        cart: get().cart.filter((item) => item.id !== id),
      });
    }
  },

  // Remove from Cart
  removeFromCart: (id) =>
    set({
      cart: get().cart.filter((item) => item.id !== id),
    }),

  // Get total number of distinct items in the cart
  getTotalItems: () => get().cart.length,

  // Get total quantity of all items in the cart
  getTotalQuantity: () =>
    get().cart.reduce((total, item) => total + item.quantity, 0),

  // Toggle Favorite
  toggleFavorite: (product) =>
    set((state) => {
      const isFavorited = state.favorites.some((fav) => fav.id === product.id);
      if (isFavorited) {
        return {
          favorites: state.favorites.filter((fav) => fav.id !== product.id),
        };
      } else {
        return { favorites: [...state.favorites, product] };
      }
    }),
}));
