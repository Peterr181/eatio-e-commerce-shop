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
        // If item already exists, increment its quantity
        existingItem.quantity += 1;
      } else {
        // If item doesn't exist, add it to the cart with quantity 1
        state.items.push({ ...itemToAdd, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<{ id: any }>) => {
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (itemToRemove) {
        // If item exists
        if (itemToRemove.quantity === 1) {
          // If quantity is 1, remove the item from the cart
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        } else {
          // If quantity is more than 1, decrement the quantity by 1
          itemToRemove.quantity -= 1;
        }
      }
    },
    updateCartItemQuantity: (
      state,
      action: PayloadAction<{ id: any; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        // If item exists, update its quantity
        existingItem.quantity = quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateCartItemQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
