import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: any;
  imageUrl: string;
  productName: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const itemToAdd = action.payload;
      const existingItem = state.items.find((item) => item.id === itemToAdd.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...itemToAdd, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<{ id: any }>) => {
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (itemToRemove) {
        if (itemToRemove.quantity === 1) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        } else {
          itemToRemove.quantity -= 1;
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    updateCartItemQuantity: (
      state,
      action: PayloadAction<{ id: any; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateCartItemQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
