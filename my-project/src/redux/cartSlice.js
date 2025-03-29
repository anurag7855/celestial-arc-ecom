import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array to hold cart items
  isOpen: false, // Cart overlay visibility state
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add to cart (handles increment if item with same id AND size exists)
    addToCart: (state, action) => {
      const { id, size, quantity = 1 } = action.payload;
      const existingItem = state.items.find(
        item => item.id === id && item.size === size
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ ...action.payload, quantity });
      }
    },

    // Remove specific item from cart (by id and size)
    removeItem: (state, action) => {
      const { id, size } = action.payload;
      state.items = state.items.filter(item => {
        // If size is provided, match both id and size
        if (size !== undefined) {
          return !(item.id === id && item.size === size);
        }
        // Otherwise just match id
        return item.id !== id;
      });
    },

    // Update specific item quantity
    updateQuantity: (state, action) => {
      const { id, size, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => {
        if (size !== undefined) {
          return item.id === id && item.size === size;
        }
        return item.id === id;
      });
      
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },

    // Toggle cart overlay visibility
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },

    // Clear entire cart
    clearCart: (state) => {
      state.items = [];
    },

    // Set cart overlay open state explicitly
    setCartOpen: (state, action) => {
      state.isOpen = action.payload;
    }
  },
});

export const { 
  addToCart,
  removeItem,
  updateQuantity,
  toggleCart,
  clearCart,
  setCartOpen
} = cartSlice.actions;

export default cartSlice.reducer;