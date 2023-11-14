// Create your cartSlice function with `addItem` and `removeItem`actions
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    { id: 1, name: "Product 1", price: 19.99 },
    { id: 2, name: "Product 2", price: 29.99 },
    { id: 3, name: "Product 3", price: 14.99 },
    { id: 4, name: "Product 4", price: 24.99 },
    { id: 5, name: "Product 5", price: 39.99 },
    { id: 6, name: "Product 6", price: 9.99 },
    { id: 7, name: "Product 7", price: 49.99 },
    { id: 8, name: "Product 8", price: 34.99 },
    { id: 9, name: "Product 9", price: 59.99 },
    { id: 10, name: "Product 10", price: 19.99 },
    { id: 11, name: "Product 11", price: 29.99 },
    { id: 12, name: "Product 12", price: 14.99 },
  ],

  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
