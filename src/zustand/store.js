import { create } from "zustand";

// Function to save state to localStorage
const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// Function to load state from localStorage
const loadFromLocalStorage = (key, initialValue) => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : initialValue;
};

export const useStore = create((set, get) => ({
  cart: loadFromLocalStorage("cart", []),
  favorites: loadFromLocalStorage("favorites", []),

  // Add to Cart
  addToCart: (product) => {
    const itemInCart = get().cart.find((item) => item.id === product.id);
    if (itemInCart) {
      const updatedCart = get().cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      set({ cart: updatedCart });
      saveToLocalStorage("cart", updatedCart);
    } else {
      const updatedCart = [...get().cart, { ...product, quantity: 1 }];
      set({ cart: updatedCart });
      saveToLocalStorage("cart", updatedCart);
    }
  },

  // Decrease Quantity from Cart
  decreaseFromCart: (id) => {
    const itemInCart = get().cart.find((item) => item.id === id);
    if (itemInCart && itemInCart.quantity > 1) {
      const updatedCart = get().cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
      set({ cart: updatedCart });
      saveToLocalStorage("cart", updatedCart);
    } else {
      // If the quantity is 1, remove the item from the cart
      const updatedCart = get().cart.filter((item) => item.id !== id);
      set({ cart: updatedCart });
      saveToLocalStorage("cart", updatedCart);
    }
  },

  // Remove from Cart
  removeFromCart: (id) => {
    const updatedCart = get().cart.filter((item) => item.id !== id);
    set({ cart: updatedCart });
    saveToLocalStorage("cart", updatedCart);
  },

  // Get total number of distinct items in the cart
  getTotalItems: () => get().cart.length,

  // Get total quantity of all items in the cart
  getTotalQuantity: () =>
    get().cart.reduce((total, item) => total + item.quantity, 0),

  // Toggle Favorite
  toggleFavorite: (product) => {
    set((state) => {
      const isFavorited = state.favorites.some((fav) => fav.id === product.id);
      const updatedFavorites = isFavorited
        ? state.favorites.filter((fav) => fav.id !== product.id)
        : [...state.favorites, product];

      saveToLocalStorage("favorites", updatedFavorites);
      return { favorites: updatedFavorites };
    });
  },
}));
